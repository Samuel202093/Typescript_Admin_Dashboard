import { MdOutlineClose } from "react-icons/md";
import { useAppContext } from '../context/Product';

const Reports = () => {
  const {toggleCloseReport} = useAppContext()
  return (
    <section className='flex justify-center self-center fixed top-0 left-0 w-[100%] h-[100vh] bg-[rgba(0,0,0,0.3)]'>
    <div className='flex self-center min-h-[10vh] md:w-[50%] bg-[#e9eae7] rounded-lg'>
        <MdOutlineClose className='absolute md:right-[25%] right-[20%] text-2xl cursor-pointer' onClick={toggleCloseReport}/>

            <div className='flex w-[100%] mt-5y flex-col gap-1 p-5'>

                <h2 className='text-center italic font-bold'>Report Coming Soon!!!!!!</h2>
            </div>

    </div>
</section>
  )
}

export default Reports
