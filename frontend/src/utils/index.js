import { Api } from "../userService/Api"


  
 

 export const validarEmail = (email,setErros) => {
  const response = email?.toString().includes('@') && email?.toString().includes('.')
  if(!response) {
   return setErros('Precisa de um ponto e um @')

  }
  else {
    return response
  }
  }

  
 export const validarSenha = (senha,setErros) => {
    const response = senha?.toString().length > 3
    if(!response) {
      return setErros("Senha precisa ter mais de 6 caracteres")
    }
    else {
      return response 
    }
  }
  
  export const validarNome =  (nome,setErros) => {
    const response =  nome?.toString().length > 2
    console.log("querosaber2," + response)
    if(!response) {
      return  setErros("Nome precisa ter mais de duas letras")
    }
    else {
      return response
    }
  }






  export async function  RegisterRequest(name,email,password,confirmpassword)  {
    try {
      const request = await Api.post('users/register', {name,email,password,confirmpassword})
      const resposta = request.data
      console.log(resposta.token)
      return request.data
      
    } catch (error) {
      return null
      
    }

  }
  
  export async function  LoginRequest(email,password)  {
    try {
      const request = await Api.post('users/login', {email,password})
      const resposta = request.data
      console.log(resposta.token)
      return request.data
      
    } catch (error) {
      return null
      
    }

  }