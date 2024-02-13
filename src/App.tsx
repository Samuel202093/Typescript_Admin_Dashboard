// import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements,Route } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import MyProducts from './pages/MyProducts'
import  MyOrders from './pages/MyOrders'
import Overview from './pages/Overview'
import Payments from './pages/Payments'
import ManageUsers from './pages/ManageUsers'
import Updates from './pages/Updates'
import AddProduct from './pages/AddProduct'
import AdminSettings from './pages/AdminSettings'
import Login from './pages/Login'
import ErrorPage from './pages/ErrorPage'
import { RequireAuth } from './components/RequireAuth'



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element = {<RootLayout/>}>
       <Route index element={<Login />}/>
       <Route path='products' element={<RequireAuth><MyProducts/></RequireAuth>}/>
       <Route path='orders' element = {<RequireAuth><MyOrders/></RequireAuth>}/>
       <Route path='payments' element ={<RequireAuth><Payments/></RequireAuth>}/>
       <Route path='users' element={<RequireAuth><ManageUsers/></RequireAuth>} />
       <Route path = 'updates' element ={<RequireAuth><Updates/></RequireAuth>}/>
       <Route path='add-product' element ={<RequireAuth><AddProduct/></RequireAuth>}/>
       <Route path='settings' element = {<RequireAuth><AdminSettings/></RequireAuth>} />
       <Route path='overview' element = {<RequireAuth><Overview/></RequireAuth>}/>
       <Route path= '*' element = {<ErrorPage/>} />

  </Route>
))


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
