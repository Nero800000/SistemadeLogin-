
import React from "react";
import { useState } from "react";
import './Register.css'

import {validarEmail, validarSenha, RegisterRequest,validarNome} from '../utils/index'
import {useNavigate,Link} from 'react-router-dom'


const Register = () => {
    const [email, setEmail] =useState()
    const [password, setPassword] = useState()
    const [name,setName] = useState()
    const [confirmapassword,setConfirmPassword]= useState()

    const [Errors, setErros] = useState('')

    const navigate =  useNavigate()

 

  
    const Registeer = async(e) => {
  
      e.preventDefault()
  
         try {

          
            const response = await validatorInput()
             
            console.log("queroSaberrr", response)
            
            if(response) {
              
             await RegisterRequest(name, email, password, confirmapassword)
            
             alert("registrou")
             let myUser = {email,password}
             localStorage.setItem('user', JSON.stringify(myUser))
          
             navigate('/login')
            
       
            }
   
   
           
         } catch (error) {
          console.log(error)
            
         }  

        
    }

    const  validatorInput = async() => {
      return await validarNome(name, setErros) && validarEmail(email,setErros) && validarSenha(password,setErros) 

    } 


    return (
        <div className="Mycadastro">
  
            <form className="formulario">
            <h1>Cadastro</h1>
            <input type="text" placeholder="Digite seu Nome" name="name" onChange={(e)=> setName(e.target.value)}/>
              <input type="text" placeholder="Digite seu email" name="email"  onChange={(e)=> setEmail(e.target.value)}/>
              <input type="password" placeholder="Digite sua senha" name="password" onChange={(e)=>setPassword(e.target.value) } />
              <input type="password" placeholder="Confirme sua senha" name="confirmpassword" onChange={(e)=>setConfirmPassword(e.target.value) } />
                   {Errors && <h5>{Errors}</h5>}
                   <div className="buttons"> 
                   <button className="btn-login" onClick={Registeer}>Register</button>
                   <Link className='btn-login-link' to='/login'>Login</Link>
                
                   </div>
      
            

            </form>
      
        </div>
    )
}

export default Register