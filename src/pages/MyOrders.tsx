import { RxDotFilled } from "react-icons/rx";
import { myOrders } from '../datas/data';

const MyOrders = () => {
  return (
    <div className='flex self-center mt-5 min-h-[40vh] w-[100%] bg-[#e9eae7]y border-2y border-blacky rounded-lgy lg:overflow-x-hidden overflow-x-scroll'>
            {/* <MdOutlineClose className='absolute right-[20%] text-2xl cursor-pointer'/> */}

                <div className='flex w-[100%] mt-5 flex-col gap-6 border-2y border-red-700y md:p-5 p-1'>

                <div className='orderGrid flexy justify-betweeny w-[100%] overflow-x-scrolly md:overflow-x-hiddeny text-[rgba(0,0,0,0.3)]'>
                        <span className='font-semibold text-[0.95rem]'><RxDotFilled className='text-2xl'/></span>
                        <span className='text-sm font-bold'>product-name</span>
                        <span className='text-sm'>email</span>
                        <span className='text-sm font-semibold'>amount</span>
                        <span className='md:px-3 px-5 py-1y rounded-3xl font-bold text-sm'>transcationId</span>
                        <span className='text-sm'>date</span>
                        <span className='text-sm'>time</span>
                        <span className='px-3 py-1y font-bold text-sm'>status</span>
                </div>

                    {myOrders.map((x)=>{
                        const {id, name, email, transcationId, amount, date, time, status } = x
                        return(<div key={id} className='orderGrid flex gap-4y md:justify-between w-[100%] text-[rgba(0,0,0,1)]'>
                                <span className='font-semibold text-[0.95rem]'><RxDotFilled className='text-2xl'/></span>
                                <span className='text-sm font-bold'>{name}</span>
                        <span className='text-sm'>{email}</span>
                        <span className='text-sm font-semibold'>${amount}</span>
                        <span className='md:px-3 px-5 py-1y rounded-3xl font-bold text-sm'>{transcationId}</span>
                        <span className='text-sm'>{date}</span>
                        <span className='text-sm'>{time}</span>
                        <span className='md:px-3 py-1y font-bold text-sm'>{status}</span>
                        </div>)
                    })}

                </div>

        </div>
  )
}

export default MyOrders
