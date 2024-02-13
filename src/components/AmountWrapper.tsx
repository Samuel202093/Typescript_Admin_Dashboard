import { ChangeEvent } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiLogoMastercard } from "react-icons/bi";
import { useAppContext } from '../context/Product';

const AmountWrapper = () => {
  const { setIsWithdrawValue, handleWithdrawal} = useAppContext()


  const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setIsWithdrawValue(+(e.target.value))
    // console.log(withdrawValue)
  }

  return (
    <section className='flex flex-col gap-4 border-[1px] border-[rgba(0,0,0,0.2)] rounded-lg lg:p-5 md:p-2'>
      <div className='flex flex-col gap-1'>
        <span className='text-sm font-semibold'>Enter Amount</span>
        <div className='flex flex-row justify-between'>
            {/* <span className='text-xl font-bold'>$234,950.00</span> */}
            <input type="text" placeholder='$234,950.00' className='pl-2y text-xl cursor-pointer border-none focus:outline-none placeholder:font-bold placeholder:text-black' name="withdrawValue" onChange={handleChange}/>
            <span className='md:hidden lg:flex text-xs mt-2 gap-2'>USD <MdKeyboardArrowDown className='text-xl font-semibold mt-[-0.15rem]'/></span>
        </div>
      </div>

      {/* pay with section */}
      <div className='flex flex-col gap-2 bg-[#e9eae7] py-3 px-4 rounded-lg'>
        <span className='text-sm font-medium'>Pay With</span>
        <div className='flex justify-between'>
            <div className='flex gap-1'>
                {/* <BiLogoMastercard className='text-xl mt-1'/> Card 9897 **** **** **** */}
                <BiLogoMastercard className='text-xl mt-1'/> <input type="text" name="" placeholder='Card 9897 **** **** ****' className='border-none text-sm pl-2 py-1 bg-transparent focus:outline-none placeholder:text-black'/>
            </div>
            <MdKeyboardArrowDown className='text-xl mt-1'/>
        </div>
      </div>

      {/* withdraw money */}
      <div className='flex justify-center self-center bg-[#f8fa87] px-[4.5rem] py-2 rounded-lg'>
        <span className='flex self-center text-sm font-semibold cursor-pointer' onClick={handleWithdrawal}>Withdraw Money</span>
      </div>
    </section>
  )
}

export default AmountWrapper
