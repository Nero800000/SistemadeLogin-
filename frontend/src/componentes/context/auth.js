
import {createContext, useState} from 'react'

export const MyAuth = createContext()

export const AuthProvider = ({children}) => {
    const [userLogado, setUserLogado] = useState(null)


    return (
        <MyAuth.Provider value={{userLogado,setUserLogado}}>
            {children}
        </MyAuth.Provider>
    )

}