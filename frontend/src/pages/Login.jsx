
import React, {useEffect, useState,useContext} from "react";
import { LoginRequest } from "../utils";
import {useNavigate,Link} from 'react-router-dom'
import { MyAuth } from "../componentes/context/auth";


import './Register.css'

const Login = () => {
const [email,setEmail] = useState()
const [password,setPassword] = useState(null)
const [errors,setErrors] = useState(null)
  
const navigate = useNavigate()

const {userLogado,setUserLogado} = useContext(MyAuth)

   useEffect(()=> {
     if(localStorage.user) {
      const user = JSON.parse(localStorage.getItem('user'))
      const {email,password} = user
      setEmail(email)
      setPassword(password)

     }
 


   },[])
    
   const Login = async (e) => {
    e.preventDefault()
      const response = await LoginRequest(email,password)
      

      if(response) {
        navigate('/principal')
        setUserLogado(true)

      }

      else {
        setErrors("Você digitou algo errado, avalie seus campos")
      }

   }


    return(
        <div className="Mycadastro">
  
        <form className="formulario">
        <h1>Login</h1>
          <input type="text" placeholder="Digite seu email" name="email"  defaultValue={email && email}   onChange={(e)=> setEmail(e.target.value)}/>
          <input type="password" placeholder="Digite sua senha" name="password" defaultValue={password && password}  onChange={(e)=>setPassword(e.target.value) } />

           <div className="buttons"> 
           <button className="btn-login" onClick={Login} >login</button>
           <Link className='btn-login-link' to='/'>register</Link>
           </div>
           {errors && <h4>{errors}</h4>}

        </form>

    </div>

    )
}

export default Login