import { TbDots } from "react-icons/tb";
import { TbSquareRounded, TbBrandPaypalFilled } from "react-icons/tb";
import { MdViewAgenda } from "react-icons/md";


const TopSells = () => {
  return (
    <section className='flex flex-col gap-5 border-[1px] border-[rgba(0,0,0,0.3)] min-h-[15vh] rounded-lg lg:p-5 md:p-3 p-3'>
      <div className='flex justify-between border-b-[1px] border-b-[rgba(0,0,0,0.3)] pb-8'>
        <span className='text-xl font-bold'>Top Selling Products</span>
        <TbDots className='hidden md:flex text-2xl font-bold'/>
      </div>

      {/* <hr /> */}

        {/* Top sells product in tabular form */}
      <div className='flex flex-col gap-4'>
            {/* table headers */}
            <div className='flex md:justify-between gap-8 md:gap-0 text-xs text-[rgba(0,0,0,0.5)] lg:p-4 md:p-1 p-1'>
                <div>
                    <TbSquareRounded className='mt-2 md:mt-0 lg:mt-0'/>
                </div>
                <div>
                    {/* <span>PRODUCT NAME</span> */}
                    <span>PRODUCT NAME</span>
                </div>
                <div className="hidden md:flex">
                    <span>DATE</span>
                </div>
                <div>
                    <span>TRANSCATION ID</span>
                </div>
                <div>
                    <span>AMOUNT</span>
                </div>
                <div className="hidden md:flex">
                    <span>STATUS</span>
                </div>
            </div>

            {/* table data  1*/}

            <div className='flex md:justify-between md:gap-0 gap-6 text-xs text-[rgba(0,0,0,0.5)] lg:p-4 p-1'>
                {/* <div>
                    <TbSquareRounded className='mt-2 md:mt-2 lg:mt-0'/>
                </div> */}
                <div className='flex gap-4'>
                    <span className='lg:bg-[#f8fa87] bg-transparent px-[0.55rem] py-[0.35rem] rounded-xl lg:py-[0.35rem] md:py-[0.5rem]y'>
                    <TbBrandPaypalFilled className='text-2xl text-black'/>
                    </span>
                    <div className='flex flex-col gap-1'>
                        <span className='font-bold text-black'>Paypal Payment</span>
                        <span>Withdraw</span>
                    </div>
                </div>
                <div className='hidden md:flex flex-col gap-1'>
                    <span className='font-bold text-black'>Jan 18, 2023</span>
                    <span>09:30 PM</span>
                </div>
                <div>
                    <span className='font-bold text-black'>Pay-3083 - 23</span>
                </div>
                <div>
                    <span className='font-bold text-black'>12,340 USD</span>
                </div>
                <div className="hidden md:flex">
                    <span className='border-[0px] border-transparent lg:border-[1px] lg:border-black rounded-2xl px-3 py-1 font-bold text-black'>Delivered</span>
                </div>
            </div>

            {/* table data 2 */}

            <div className='flex md:justify-between md:gap-0 gap-6 text-xs text-[rgba(0,0,0,0.5)] lg:p-4 p-1'>
                {/* <div>
                    <TbSquareRounded className='mt-2 md:mt-2 lg:mt-0'/>
                </div> */}
                <div className='flex gap-4'>
                    <span className='lg:bg-[#e9eae7] bg-transparent px-[0.55rem] lg:py-[0.35rem] py-[0.35rem] md:py-[1rem]y rounded-xl'>
                    <MdViewAgenda className='text-2xl text-black'/>
                    </span>
                    <div className='flex flex-col gap-1'>
                        <span className='font-bold text-black'>Mercury Inc.</span>
                        <span>Transferred</span>
                    </div>
                </div>
                <div className='md:flex flex-col gap-1 hidden'>
                    <span className='font-bold text-black'>Dec 12, 2022</span>
                    <span>08:50 PM</span>
                </div>
                <div>
                    <span className='font-bold text-black'>Mer-1249 - 23</span>
                </div>
                <div>
                    <span className='font-bold text-black'>8,625 USD</span>
                </div>
                <div className="hidden md:flex">
                    <span className='border-[0px] border-transparent lg:border-[1px] lg:border-black rounded-2xl px-3 py-1 font-bold text-black'>Delivered</span>
                </div>
            </div>
      </div>
    </section>
  )
}

export default TopSells
