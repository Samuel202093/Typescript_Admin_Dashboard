import { RxDotFilled } from "react-icons/rx";
import { Products } from '../datas/data';

const MyProducts = () => {
  return (
    <div className='flex self-center min-h-[100vh] mt-5 w-[100%] md:p-5 p-2 border-2y border-blacky md:overflow-x-hidden overflow-x-scroll'>
        {/* <MdOutlineClose className='absolute right-[26%] text-2xl cursor-pointer'/> */}

            <div className='flex flex-col gap-6 w-[100%] md:p-5 p-1 mt-5'>

            <div className='parent flexy justify-betweeny w-[100%] text-[rgba(0,0,0,0.3)] mb-6'>
                        <span className='font-semibold text-[0.95rem]'><RxDotFilled className='text-2xl'/></span>
                        <span className='text-sm font-bold'>image</span>
                        <span className='text-sm'>product-name</span>
                        <span className='text-sm font-semibold'>quantity</span>
                        <span className='text-sm'>price</span>
                        <span className='text-sm'>description</span>
            </div>

                {Products.map((x)=>{
                    const {id, name, price, img, description, quantity} = x
                    return (<div className='parent w-[100%]' key={id}>
                                <span className='font-semibold text-[0.95rem]'><RxDotFilled className='text-2xl mt-0'/></span>
                                <div className='productImage  rounded-lg w-[50px] h-[50px]  overflow-hidden'>
                                <img src={img} alt={`${name} image`} className='w-full h-full  object-cover'/>

                                </div>
                                <span className='font-semibold text-[0.9rem]'>{name}</span>
                                <span className='text-[rgba(0,0,0,0.5)]'>{quantity}</span>
                                <span className='text-[rgba(0,0,0,1)] font-semibold'>${price}</span>
                                <span className='px-10 md:px-0 text-[rgba(0,0,0,0.5)] text-[0.85rem]'>{description}</span>
                    </div>)
                })} 

            </div>
        </div>
  )
}

export default MyProducts
