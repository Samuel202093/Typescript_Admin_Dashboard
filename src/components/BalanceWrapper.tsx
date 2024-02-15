import { IoIosArrowRoundUp } from "react-icons/io";
import { IoPartlySunny } from "react-icons/io5";
import { PiFlameFill } from "react-icons/pi";
import { useAppContext } from '../context/Product';


const BalanceWrapper = () => {
    const { pendingBalance, balance} = useAppContext()
  
  return (
    <section className='md:flex xmd:flex md:flex-row xmd:flex-row sm:flex-col sm:gap-4y md:gap-0 md:justify-between xmd:justify-between border-2y border-green-700y'>

        <div className='lg:flex justify-around border-[1px] md:w-[49%] xmd:w-[49%] w-[100%] border-[rgba(0,0,0,0.3)] h-[17vh] md:h-[15vh] xmd:h-[15vh] rounded-lg lg:p-4 md:p-1 xmd:p-1 p-1 mb-4 md:mb-0'>
            <div className='flex justify-center self-center lg:w-[20%] md:w-[30%] xmd:w-[30%] w-[15%] lg:h-[10vh] md:h-[7vh] xmd:h-[7vh] h-[6vh] lg:rounded-3xl md:rounded-[100%] xmd:rounded-[100%] rounded-[100%] bg-[#f8fa87] mb-2 md:mb-0 xmd:mb-0 mx-auto lg:mx-0'>
                <IoPartlySunny className='flex self-center xmd:text-3xl md:text-3xl text-2xl md:text-3xly'/>
            </div>
            <div className='flex flex-col gap-1 md:gap-2 xmd:gap-2 lg:gap-1 lg:w-[75%] xmd:w-[100%] md:w-[100%] h-[10vh] border-2y border-red-500y mt-0 md:mt-3 xmd:mt-3 lg:mt-0'>
                <span className='md:text-sm xmd:text-sm text-base font-medium text-center lg:text-start'>Available Balance</span>
                <div className='flex lg:gap-4 md:gap-6 xmd:gap-6 gap-10 mx-auto lg:mx-0'>
                    <span className='md:text-xl xmd:text-xl text-base font-bold'>${balance}</span>
                    <span className='flex text-sm bg-[#e9eae7] px-3 py-1 rounded-full'><IoIosArrowRoundUp className='text-xl'/> 8.0%</span>
                </div>
            </div>
        </div>

        <div className='lg:flex justify-around border-[1px] md:w-[49%] xmd:w-[49%] border-[rgba(0,0,0,0.3)] h-[17vh] md:h-[15vh] xmd:h-[15vh] rounded-lg lg:p-4 md:p-1 xmd:p-1 p-2'>
        <div className='flex justify-center self-center lg:w-[20%] lg:h-[10vh] xmd:w-[30%] md:w-[30%] md:h-[7vh] xmd:h-[7vh] h-[6vh] w-[15%] rounded-[100%] lg:rounded-3xl md:rounded-[100%] xmd:rounded-[100%] bg-[#e9eae7] mb-2 md:mb-0 xmd:mb-0 mx-auto lg:mx-0'>
            <PiFlameFill className='flex self-center text-2xl md:text-3xl xmd:text-3xl'/>
        </div>
            <div className='flex flex-col gap-1 lg:w-[75%] md:w-[100%] xmd:w-[100%] h-[10vh] mt-0 md:mt-3 xmd:mt-3 lg:mt-0'>
                <span className='text-base md:text-sm xmd:text-sm lg:text-start text-center font-medium'>Pending Balance</span>
                <div className='flex lg:gap-4 xmd:gap-6 md:gap-6 gap-10 mx-auto lg:mx-0'>
                    <span className='xmd:text-xl md:text-xl text-base font-bold'>${pendingBalance}</span>
                    <span className='flex text-sm bg-[#e9eae7] px-3 py-1 rounded-full'><IoIosArrowRoundUp className='text-xl'/> 2.0%</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BalanceWrapper
