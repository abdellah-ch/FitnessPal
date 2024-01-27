"use client"

import { auth } from "@/lib/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react"

type AuthType = {
    isLogged: boolean | null,
    isLoading: boolean
}

const AuthContext = createContext<AuthType>({
    isLogged: false,
    isLoading: false
})


export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isLogged, setIsLogged] = useState<boolean | null>(null)
    useEffect(() => {
        setIsLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoading(false)
                setIsLogged(true)
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                //console.log(user);
                // ... 
                //setUserf(user)
            } else {
                setIsLoading(false)
                setIsLogged(false)
                // User is signed out
                // ...
                //setUserf(null)
            }
        });

    }, [isLoading, isLogged])

    return (
        <AuthContext.Provider value={{ isLogged, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}