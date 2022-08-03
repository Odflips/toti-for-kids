import React,{useState,useEffect}from "react"
import { Navigate } from "react-router-dom"


const RouteController = props => {
    const {Component: Component, isAuthenticated, ...rest} = props

    const [isAuth, setIsAuth] = useState(true)

    const init = ()=>{
        if(!localStorage.getItem("auth")){
            setIsAuth(false)
        }else{
            const auth = JSON.stringify(localStorage.getItem("auth"))
            if(auth === "yes"){
                setIsAuth(true)
            }else{
                setIsAuth(false)
            }
        }
    }
  useEffect(init,[])

  return (  isAuth ? <Component {...rest}/> : < Navigate to='/estudante'/>)
}
export default RouteController