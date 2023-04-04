import React,{useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //    <Route path='/books' element={<Books/>}/>
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import Principal from './pages/Principal';
import { AuthProvider } from './componentes/context/auth';
import { MyAuth } from './componentes/context/auth';

import {BrowserRouter, Routes, Route} from 'react-router-dom' 
const root = ReactDOM.createRoot(document.getElementById('root'));

 const Private = () => {

  const {userLogado,setUserLogado} = useContext(MyAuth)
  
  const logado = userLogado
    if(logado) {
     return <Principal/>
    }
   else {
    return <Login/>
   }
  
}
root.render(
  <React.StrictMode>
     <AuthProvider>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/login' element={<Login/>}
    />
    <Route path='/principal' element={<Private item={Principal}/>}/>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
