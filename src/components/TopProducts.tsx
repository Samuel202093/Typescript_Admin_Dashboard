import { Products } from '../datas/data'


const TopProducts = () => {
  return (
    <section className='lg:p-5 md:p-1 flex flex-col gap-2 border-[1px] border-[rgba(0,0,0,0.3)] rounded-lg'>
      <div>
        <span className='text-sm font-semibold'>Top Selling Products</span>
      </div>

        {/* Top selling product */}
      <div className='flex flex-col gap-2'>

        {Products.slice(0,3).map((x)=>{
            const {id, name, description, img, price} = x
            return(<div key={id} className='flex lg:justify-between md:gap-2 border-b-[1px]y border-[rgba(0,0,0,0.3)]y pb-5'>
            <div className='flex justify-center self-center border-2y border-red-600y'>
                <img src={img} alt="" className='flex self-center rounded-lg' width={50} height={50}/>
            </div>
            <div className='flex flex-col gap-2 border-2y border-green-800y'>
                <span className='text-sm font-bold'>{name}</span>
                <span className='text-[0.7rem]'>{description}</span>
                <div className='flex lg:gap-2 md:gap-1'>
                    <span className='text-sm lg:border-[1px] lg:border-[rgba(0,0,0,0.4)] px-2 font-semibold rounded-2xl'>Active</span>
                    <span className='text-sm font-semibold'>In Stock</span>
                </div>
            </div>
            <div className=''>
                <span className='font-bold'>${price}</span>
            </div>
            </div>)
        })}

      </div>
    </section>
  )
}

export default TopProducts
