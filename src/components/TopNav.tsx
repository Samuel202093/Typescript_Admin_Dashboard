import { IoMdNotifications } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import MobileNav from './MobileNav';
import { HiViewList } from "react-icons/hi";
import { useAppContext } from '../context/Product';
import { adminLogin } from '../datas/data';

const TopNav = () => {
  const {isOpenMobile, toggleMobileOpen} = useAppContext()
  
  return (
    <header className='flex justify-between p-5 border-b-[1px]'>
        {/* input wrapper */}
      <div className='flex border-2y border-green-800y w-[30%]'>
        <HiViewList className='lg:hidden flex text-2xl md:mt-1 mt-2 ml-[-1rem] md:ml-0 text-[rgba(0,0,0,0.8)]' onClick={toggleMobileOpen}/>
        {isOpenMobile && <MobileNav/>}
      </div>


      <div className='flex gap-3 border-2y border-green-950y'>
        <div className='flex gap-3 border-r-2y px-4 py-3'>
            <IoMdNotifications className='text-xl'/>
            <div className='flex gap-2 border-r-2 px-4 '>
                <span className='text-sm'>EN</span>
                <TiArrowSortedDown className='text-xl'/>
            </div>
        </div>
        <div className='flex gap-4'>
            <div className='flex flex-col gap-[0.15rem]'>
                <span className='text-sm font-medium'>{adminLogin.map((x)=>{return (`${x.firstname} ${x.lastname}`)})}</span>
                <span className='text-[0.8rem] text-[rgba(0,0,0,0.5)]'>Super Admin</span>
            </div>
            <div className='hidden md:flex justify-center self-centery w-[40px] h-[40px] border-2y border-red-700y rounded-[50%] bg-[rgba(0,0,0,0.8)]'>
                <span className='flex self-center text-sm font-bold text-white'>JD</span>
            </div>
            <TiArrowSortedDown className='hidden md:flex text-xl my-3'/>
            <div>
            </div>
        </div>
      </div>
    </header>
  )
}

export default TopNav
