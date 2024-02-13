import { useAppContext } from "../context/Product"
import { Navigate } from "react-router-dom"
import { RequireProps } from "../Types/interface"

export const RequireAuth = (props:RequireProps )=>{
    const {isAuth} = useAppContext()

    if (!isAuth) {
       return <Navigate to={'/'}/> 
    }
    return props.children

}