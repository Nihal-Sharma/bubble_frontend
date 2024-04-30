import { create } from "zustand";

const loggedcheck = () =>{
    const checklog = localStorage.getItem('LOGGEDIN')
    return checklog
}

const successLogin = ()=>{
    localStorage.setItem("LOGGEDIN" , "true")
}

export const useStore = create ((set) =>({
    loggedin : loggedcheck(),
    login : ()=>set((state)=>({ loggedin :'true'  ,successLogin }))
}))