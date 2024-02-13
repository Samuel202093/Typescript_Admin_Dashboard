import {useEffect} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './NavBar'
import TopNav from './TopNav'
import TabHeading from './TabHeading'
import { useAppContext } from '../context/Product'
import { ToastContainer } from 'react-toastify'

const RootLayout = () => {
const {isOpenMobile, setIsOpenMobile} = useAppContext()
const location = useLocation()

useEffect(()=>{
    if (location.pathname != '/') {
      return setIsOpenMobile(false)  
    }
    if (location.pathname === '/' && isOpenMobile === true) {
        return setIsOpenMobile(false) 
    }
},[location.pathname])


  return (
    <main className='flex justify-between h-[100vh] '>
    <NavBar/>
    <section className='rootLayout border-[1px]y border-blacky w-[100%] lg:w-[80%] h-[100vh] overflow-y-scroll border-2y border-red-500y'>
      <TopNav/>
      <TabHeading/>
      <Outlet />
    </section>
    <ToastContainer/>
  </main>
  )
}

export default RootLayout
