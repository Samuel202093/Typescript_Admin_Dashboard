import { TbDots } from "react-icons/tb";
import { TbSquareRounded, TbBrandPaypalFilled } from "react-icons/tb";
import { MdViewAgenda } from "react-icons/md";


const TopSells = () => {
  return (
    <section className='flex flex-col gap-5 border-[1px] border-[rgba(0,0,0,0.3)] min-h-[15vh] rounded-lg lg:p-5 xmd:p-3 md:p-3 p-3'>
      <div className='flex justify-between border-b-[1px] border-b-[rgba(0,0,0,0.3)] pb-8'>
        <span className='text-xl font-bold'>Top Selling Products</span>
        <TbDots className='hidden xmd:flex md:flex text-2xl font-bold'/>
      </div>

      {/* <hr /> */}

        {/* Top sells product in tabular form */}
      <div className='flex flex-col gap-4'>
            {/* table headers */}
            <div className='flex xmd:justify-between md:justify-between gap-6 xmd:gap-3 md:gap-0 text-xs text-[rgba(0,0,0,0.5)] lg:p-4 xmd:p-1 md:p-1 p-1'>
                <div>
                    <TbSquareRounded className='mt-1 xmd:mt-0 md:mt-0 lg:mt-0'/>
                </div>
                <div>
                    {/* <span>PRODUCT NAME</span> */}
                    <span>PRODUCT NAME</span>
                </div>
                <div className="hidden xmd:flex md:flex">
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

            <div className='flex xmd:justify-between md:justify-between xmd:gap-4 md:gap-0 gap-3 text-xs text-[rgba(0,0,0,0.5)] lg:p-4 p-1 border-red-600y border-2y ml-[-0.9rem] xmd:ml-auto md:ml-auto lg:ml-0'>
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
                <div className='hidden md:flex xmd:flex flex-col gap-1'>
                    <span className='font-bold text-black'>Jan 18, 2023</span>
                    <span>09:30 PM</span>
                </div>
                <div>
                    <span className='font-bold text-black'>Pay-3083 - 23</span>
                </div>
                <div>
                    <span className='font-bold text-black pl-3 xmd:pl-0 md:pl-0'>12,340 USD</span>
                </div>
                <div className="hidden md:flex">
                    <span className='border-[0px] border-transparent lg:border-[1px] lg:border-black rounded-2xl px-3 py-1 md:py-1 xmd:py-1 lg:py-2 font-bold text-black'>Delivered</span>
                </div>
            </div>

            {/* table data 2 */}

            <div className='flex xmd:justify-between md:justify-between xmd:gap-0 md:gap-0 gap-6 text-xs text-[rgba(0,0,0,0.5)] lg:p-4 p-1 border-red-600y border-2y ml-[-0.9rem] md:ml-auto xmd:ml-auto lg:ml-0'>
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
                <div className='md:flex xmd:flex flex-col gap-1 hidden'>
                    <span className='font-bold text-black'>Dec 12, 2022</span>
                    <span>08:50 PM</span>
                </div>
                <div>
                    <span className='font-bold text-black'>Mer-1249 - 23</span>
                </div>
                <div>
                    <span className='font-bold text-black pl-3 xmd:pl-0 md:pl-0'>18,625 USD</span>
                </div>
                <div className="hidden md:flex">
                    <span className='border-[0px] border-transparent lg:border-[1px] lg:border-black rounded-2xl px-3 md:px-3 xmd:px-3 lg:px-3 py-1 md:py-1 lg:py-2 font-bold text-black'>Delivered</span>
                </div>
            </div>
      </div>
    </section>
  )
}

export default TopSells
