import { useState, ChangeEvent, FormEvent } from "react"
import { AddProductType } from "../Types/interface"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify'


const AddProduct = () => {
    const [formData, setFormData] = useState<AddProductType>({
        productName: "",
        price: "",
        quantity: "",
        description: ""
    })
    const [image, setImage] = useState<File | null>(null)

    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{

        setFormData({ ...formData, [e.target.name]: e.target.value })
       
    }

    const handleImage = (e:ChangeEvent<HTMLInputElement>)=>{
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
          }
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if (!image) {
          return  toast.error(`please upload product image`,{
                transition: Slide,
                position: "top-right"
            })
        }
        
        const formdata = new FormData()
        formdata.append("productName", formData.productName )
        formdata.append("quantity", formData.quantity)
        formdata.append("price", formData.price)
        formdata.append("description", formData.description)
        formdata.append("image", image)
        toast.success(`product added successfully`,{
            transition: Slide,
            position: "top-right"
        })
    }


  return (
    <div className='flex self-center min-h-[60vh] w-[100%] md:p-5 p-3'>
            {/* <MdOutlineClose className='absolute right-[30%] text-2xl cursor-pointer'/> */}
            <div className='w-[100%] md:p-10 p-4 flex flex-col gap-5 border-[1px] border-[rgba(0,0,0,0.3)] rounded-lg'>
                <p className='text-center font-semibold text-base'>Add Product</p>
                
                <form className='flex flex-col gap-5 w-[100%] mt-5 border-2y border-blacky' onSubmit={handleSubmit}>
                    <input type="text" name="name" id="" placeholder='Product Name' className='border-[1px] border-[rgba(0,0,0,0.3)] h-[7vh] pl-3 text-sm rounded-lg focus:outline-none' value={formData.productName} onChange={handleChange}/>
                    <input type='number' name='price' placeholder='Price' className='border-[1px] border-[rgba(0,0,0,0.3)] h-[7vh] pl-3 text-sm rounded-lg focus:outline-none' value={formData.price} onChange={handleChange}/>

                    <input type="number" placeholder='Quantity' name="quantity" className='border-[1px] border-[rgba(0,0,0,0.3)] h-[7vh] pl-3 text-sm rounded-lg focus:outline-none' min={1} value={formData.quantity} onChange={handleChange}/>

                    <label htmlFor="productImage" className='text-sm font-semibold cursor-pointer'> Upload Product Image
                        <input type="file" name="image" id='productImage' className='hidden' onChange={handleImage}/>
                    </label>

                    <input type="text" name="description" id="" placeholder='Product Description' className='border-[1px] border-[rgba(0,0,0,0.3)] h-[30vh] pl-3 text-sm rounded-lg placeholder:pt-4y pt-2y focus:outline-none' value={formData.description} onChange={handleChange}/>

                    <button className='bg-transparent border-[1px] border-[rgba(0,0,0,0.3)] font-bold rounded-lg flex self-center text-sm px-4 py-2 transition-all delay-[0.3s] hover:bg-black hover:text-[#e9eae7] cursor-pointer '>Submit</button>

                </form>
            </div>
        </div>
  )
}

export default AddProduct
