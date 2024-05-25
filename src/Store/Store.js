import { create } from "zustand";

const loggedcheck = () =>{
    const checklog = localStorage.getItem('LOGGEDIN')
    return checklog
}

const successLogin = ()=>{
    localStorage.setItem("LOGGEDIN" , "true")
}

const endpoint = "https://bubble-backend-nine.vercel.app"
const localapi = "http://127.0.0.1:4000"

export const useStore = create ((set) =>({
    apiendpoint : localapi,
    loggedin : loggedcheck(),
    login : ()=>set((state)=>({ loggedin :'true'  ,successLogin }))
}))