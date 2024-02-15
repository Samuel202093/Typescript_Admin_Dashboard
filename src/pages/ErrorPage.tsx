import { useNavigate } from "react-router-dom"

const ErrorPage = () => {
  const navigate = useNavigate()
  
  const handleHome = ()=>{
    navigate('/')
  }

  return (
    <div className='errorPage flex justify-center self-center fixed top-0 left-0 w-[100%] h-[100vh] bg-[rgba(0,0,0,1)]'>
        <div className='flex flex-col gap-3 lg:p-4 p-2 justify-center self-center h-[25vh] my-auto lg:w-[30%] border-2y border-red-600y bg-[#e9eae7] rounded-lg'>
            <p className='flex self-center text-xl font-semibold'>Page Not Found!!!</p>
            <p>Please click on the button to go back to home page</p>
            <button className='flex self-center border-[1px] border-[rgba(0,0,0,0.8)] text-sm px-4 py-2 rounded-md cursor-pointer text-white bg-[rgba(0,0,0,0.9)] transition-all ease-in-out delay-75 hover:border-[1px] hover:bg-transparent hover:border-[rgba(0,0,0,0.8)] hover:text-black hover:font-bold' onClick={handleHome}>Home</button>
        </div>

    </div>
  ) 
}

export default ErrorPage
