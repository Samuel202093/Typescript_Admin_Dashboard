import { MdAdminPanelSettings } from "react-icons/md";
import { ZodType, z } from 'zod';
import { LoginType } from '../Types/interface';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { adminLogin } from '../datas/data';
import { useAppContext } from '../context/Product';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify'

const Login = () => {
    const {setIsAuth} = useAppContext()
    const navigate = useNavigate()

    const schema: ZodType<LoginType> = z.object({
        email: z.string().email(),
        password: z.string().min(5).max(20)
    })

    const { register, handleSubmit, formState: { errors } } = useForm<LoginType>({ resolver: zodResolver(schema)})


    const submitData = (data:LoginType):any=>{
        adminLogin.find((x)=>{
            if (x.email === data.email && x.password === data.password) {
                setIsAuth(true)
                toast.success(`Welcome ${x.firstname} ${x.lastname}`,{
                    transition: Slide,
                    position: "top-right"
                })
                navigate('/overview')

            }else{
                setIsAuth(false)
                toast.error("please enter the required fields", {
                    transition: Slide,
                    position: "top-right",
                  });
                
            }
        })
    }

     
  return (
    <section className='login-wrapper flex justify-center self-center fixed top-0 left-0 w-[100%] h-[100vh] bg-[rgba(0,0,0,1)]y bg-[#e9eae7]y px-1 md:px-0'>

        <div className='flex self-center min-h-[35vh] md:w-[65%] lg:w-[35%] w-[100%] bg-[rgba(0,0,0,0.85)]y bg-[#e9eae7] rounded-lg border-[1px] border-[rgba(0,0,0,0.3)]'>
            <div className='w-[100%] p-5 flex flex-col gap-3 mx-2y md:mx-0y'>
                <div className='flex justify-center self-center gap-2'>
                    <span className='font-bold text-2xl'>Login</span>
                    <MdAdminPanelSettings className='text-2xl font-bold mt-2'/>
                </div>
                
                <form className='flex flex-col gap-4 w-[100%] mt-4' onSubmit={handleSubmit(submitData)}>
                    <div className='flex flex-col gap-1'>
                        <input type="email" placeholder='email' className='border-[1px] border-[rgba(0,0,0,0.3)] h-[7vh] pl-3 text-sm rounded-lg focus:outline-none' {...register("email")}/>
                        {errors.email && <span className='text-sm text-red-700'>{errors.email.message}</span>}
                        
                    </div>

                    <div className='flex flex-col gap-1'>
                        <input type='password' placeholder='password' className='border-[1px] border-[rgba(0,0,0,0.3)] h-[7vh] pl-3 text-sm rounded-lg focus:outline-none' {...register("password")}/>
                        {errors.password && <span className='text-sm text-red-700'>{errors.password.message}</span>}
                    </div>

                    <button className='bg-transparent border-[1px] border-[rgba(0,0,0,0.3)] font-bold rounded-lg flex self-center text-sm px-4 py-2 transition-all delay-[0.3s] hover:bg-[rgba(0,0,0,0.85)] hover:text-[#e9eae7] cursor-pointer '>Submit</button>

                </form>
            </div>
        </div>
      
    </section>
  )
}

export default Login
