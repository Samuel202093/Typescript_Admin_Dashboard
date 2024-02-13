import { IoIosArrowRoundUp } from "react-icons/io";
import { IoPartlySunny } from "react-icons/io5";
import { PiFlameFill } from "react-icons/pi";
import { useAppContext } from '../context/Product';


const BalanceWrapper = () => {
    const { pendingBalance, balance} = useAppContext()
  
  return (
    <section className='md:flex md:flex-row sm:flex-col sm:gap-4y md:gap-0 md:justify-between border-2y border-green-700y'>

        <div className='lg:flex justify-around border-[1px] md:w-[49%] w-[100%] border-[rgba(0,0,0,0.3)] h-[32vh] md:h-[15vh] rounded-lg lg:p-4 md:p-1 p-2 mb-4 md:mb-0'>
            <div className='flex justify-center self-center lg:w-[20%] md:w-[35%] w-[16%] lg:h-[10vh] md:h-[8vh] h-[12vh] lg:rounded-3xl md:rounded-[100%] rounded-[100%] bg-[#f8fa87] mb-2 md:mb-0 mx-auto md:mx-0'>
                <IoPartlySunny className='flex self-center text-3xl md:text-3xly'/>
            </div>
            <div className='flex flex-col gap-1 lg:w-[75%] md:w-[100%] h-[10vh] border-2y border-red-500y'>
                <span className='md:text-sm text-xl font-medium text-center md:text-start'>Available Balance</span>
                <div className='flex lg:gap-4 md:gap-6 gap-10 mx-auto md:mx-0'>
                    <span className='md:text-xl text-2xl font-bold'>${balance}</span>
                    <span className='flex text-sm bg-[#e9eae7] px-3 py-1 rounded-full'><IoIosArrowRoundUp className='text-xl'/> 8.0%</span>
                </div>
            </div>
        </div>

        <div className='lg:flex justify-around border-[1px] md:w-[49%] border-[rgba(0,0,0,0.3)] h-[32vh] md:h-[15vh] rounded-lg lg:p-4 md:p-1 p-2'>
        <div className='flex justify-center self-center lg:w-[20%] lg:h-[10vh] md:w-[35%] md:h-[8vh] h-[12vh] w-[16%] rounded-[100%] lg:rounded-3xl md:rounded-[100%] bg-[#e9eae7] mb-2 md:mb-0 mx-auto md:mx-0'>
            <PiFlameFill className='flex self-center text-3xl'/>
        </div>
            <div className='flex flex-col gap-1 lg:w-[75%] md:w-[100%] h-[10vh]'>
                <span className='text-xl md:text-sm md:text-start text-center font-medium'>Pending Balance</span>
                <div className='flex lg:gap-4 md:gap-6 gap-10 mx-auto md:mx-0'>
                    <span className='md:text-xl text-2xl font-bold'>${pendingBalance}</span>
                    <span className='flex text-sm bg-[#e9eae7] px-3 py-1 rounded-full'><IoIosArrowRoundUp className='text-xl'/> 2.0%</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BalanceWrapper
