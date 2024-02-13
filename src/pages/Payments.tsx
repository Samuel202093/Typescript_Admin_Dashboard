import { RxDotFilled } from "react-icons/rx";
import { payment } from '../datas/data';

const Payments = () => {
  return (
    <div className='flex self-center min-h-[20vh] w-[100%] mt-5 bg-[#e9eae7]y rounded-lg border-2y border-red-700y overflow-x-scroll md:overflow-x-hidden'>
        {/* <MdOutlineClose className='absolute right-[25%] text-2xl cursor-pointer'/> */}

            <div className='flex w-[100%] mt-5 flex-col gap-5 border-2y border-red-700y md:p-8 p-1'>

            <div className='flex gap-12 md:justify-between w-[100%] text-[rgba(0,0,0,0.3)]'>
                        <span className='font-semibold text-[0.95rem]'><RxDotFilled className='text-2xl'/></span>
                        <span className='text-sm font-bold'>product-name</span>
                        <span className='text-sm'>email</span>
                        <span className='text-sm font-semibold'>amount</span>
                        <span className='px-3 py-1y rounded-3xl font-bold text-sm'>transcationId</span>
              </div>

                {payment.map((x)=>{
                    const {id, email, product_name, transcationId, amount} = x
                    return(<div key={id} className='flex gap-8 md:justify-between w-[100%]'>
                                   <span className='font-semibold text-[0.95rem]'><RxDotFilled className='text-2xl'/></span>
                                    <span className='text-sm font-bold'>{product_name}</span>
                                    <span className='text-sm'>{email}</span>
                                    <span className='text-sm'>${amount}</span>
                                    <span className='md:px-3 px-6 py-1 text-sm font-bold'>{transcationId}</span>
                        </div>)
                })}
    </div>

    </div>
  )
}

export default Payments
