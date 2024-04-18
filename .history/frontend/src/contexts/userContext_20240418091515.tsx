import { createContext, useContext, useState , ReactNode } from "react";
import { api } from "../config/api";
import { toast } from "react-toastify";


export interface ISignInFormValues{
    email : string,
    password:string,
}

export const UserContext=createContext({
    isAuthenticated: false,
    onLogin: async (values:ISignInFormValues)=>{},
    onRegister: async (values:ISignInFormValues)=>{},
    onLogout: async ()=>{},
})

export const UserContextProvider = ({children} : {children: ReactNode} )=>{
    const [isAuthenticated , setIsAuthenticated] = useState(false)
    const onLogout=async()=>{
        try {
            localStorage.removeItem("authtoken")
        } catch (error) {
            
        }
    }

    const onLogin= async( values:ISignInFormValues)=>{
        try {
            const response = await api.post("/auth/login" , values)
            localStorage.setItem("authtoken" , response?.data?.authToken)
            setIsAuthenticated(true)
            console.log('login');
            
            toast.success("Your are Loggind in !")
        } catch (error:any) {
            toast.error(error?.response?.data?.error || "")
              console.log("non");
        }
    }
    const onRegister= async( values:ISignInFormValues)=>{
        try {
            const response = await api.post("/auth/register" , values)
            localStorage.setItem("authtoken" , response?.data?.authToken)
            console.log('login');
            setIsAuthenticated(true)
            toast.success("Account created!")
        } catch (error:any) {
            console.log("non");
            
            toast.error(error?.response?.data?.error || "")
        }
    }

    return <UserContext.Provider value={{ isAuthenticated , onLogin , onRegister , onLogout}}>
        {children}
    </UserContext.Provider>

}
export const useUserContext = ()=>{
    return useContext(UserContext)
}