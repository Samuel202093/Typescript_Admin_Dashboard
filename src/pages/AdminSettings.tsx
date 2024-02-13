import { ZodType, z } from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AdminSettingsType } from '../Types/interface'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify'

const AdminSettings = () => {

    const schema: ZodType<AdminSettingsType> = z.object({
        firstname: z.string().min(5).max(30),
        lastname: z.string().min(5).max(30),
        email: z.string().email(),
        password: z.string().min(5).max(20)
    })

    const { register, handleSubmit, formState: {errors} } = useForm<AdminSettingsType>({resolver:zodResolver(schema)})

    const submitData = (data: AdminSettingsType)=>{
        // console.log("Admin data", data)
        toast.success(`Admin changed`,{
            transition: Slide,
            position: "top-right"
        })
    }

  return (
    <div className='flex self-center min-h-[20vh] w-[100%] bg-[#e9eae7]y rounded-lgy mt-5 md:p-5 p-3'>
    {/* <MdOutlineClose className='absolute right-[35%] text-2xl cursor-pointer'/> */}
    <div className='w-[100%] p-5 flex flex-col gap-3 border-[1px] border-[rgba(0,0,0,0.3)] rounded-lg'>
        <p className='text-center font-semibold text-base'>Admin Settings</p>
        
        <form className='flex flex-col gap-6 w-[100%] border-2y mt-5 border-blacky' onSubmit={handleSubmit(submitData)}>
            <div className='flex flex-col gap-1'>
                <input type="text" placeholder='firstname' className='border-[1px] border-[rgba(0,0,0,0.3)] h-[7vh] pl-3 text-sm rounded-lg focus:outline-none' {...register("firstname")}/>
                {errors.firstname && <span className='text-sm text-red-700'>{errors.firstname.message}</span>}
            </div>

            <div className='flex flex-col gap-1'>
                <input type="text" placeholder='lastname' className='border-[1px] border-[rgba(0,0,0,0.3)] h-[7vh] pl-3 text-sm rounded-lg focus:outline-none' {...register("lastname")}/>
                {errors.lastname && <span className='text-sm text-red-700'>{errors.lastname.message}</span>}
            </div>

            <div className='flex flex-col gap-1'>
                <input type="email" placeholder='email' className='border-[1px] border-[rgba(0,0,0,0.3)] h-[7vh] pl-3 text-sm rounded-lg focus:outline-none' {...register("email")}/>
                {errors.email && <span className='text-sm text-red-700'>{errors.email.message}</span>}
            </div>

            <div className='flex flex-col gap-1'>
                <input type='password' placeholder='password' className='border-[1px] border-[rgba(0,0,0,0.3)] h-[7vh] pl-3 text-sm rounded-lg focus:outline-none' {...register("password")}/>
                {errors.password && <span className='text-sm text-red-700'>{errors.password.message}</span>}
            </div>
            <button className='bg-transparent border-[1px] border-[rgba(0,0,0,0.3)] font-bold rounded-lg flex self-center text-sm px-4 py-2 transition-all delay-[0.3s] hover:bg-black hover:text-[#e9eae7] cursor-pointer '>Save</button>

        </form>
    </div>
</div>
  )
}

export default AdminSettings
