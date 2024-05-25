import axios from "axios";
import { FC, ReactNode, createContext, useContext, useLayoutEffect, useState } from "react";
import { ApiResponse } from "../../types/Api";
import { AuthCredentials } from "../../types/Auth";
import { useNavigate } from "react-router-dom";

export type AuthContextProps = {
    isAuth: boolean | null
    isLoading: boolean
    access_token: string | null
    refresh_token: string | null
    expires: number | null
    login: (email: string, password: string) => Promise<void>
    refreshTokens: (token: string) => Promise<void>
    logout: () => void
}

export const AuthContext = createContext<AuthContextProps | null>(null)

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean | null>(null)
    const [access_token, setAccessToken] = useState<string | null>(null)
    const [refresh_token, setRefreshToken] = useState<string | null>(null)
    const [expires, setExpires] = useState<number | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const navigate = useNavigate()

    const login = async (email: string, password: string) => {
        setIsLoading(true)
        const credentials = await axios.post<ApiResponse<AuthCredentials>>(`${import.meta.env.VITE_API}/auth/login`, {
            email: email,
            password: password
        })
            .then((res) => res.data.data)
            .catch((e) => {
                console.error(e)
                throw new Error()
            })

        const { access_token, refresh_token, expires } = credentials

        localStorage.setItem('isAuth', String(true))
        localStorage.setItem("access_token", access_token)
        localStorage.setItem("refresh_token", refresh_token)
        localStorage.setItem("expires", String(expires))

        setIsAuth(true)
        setAccessToken(access_token)
        setRefreshToken(refresh_token)
        setExpires(expires)
        setIsLoading(false)
    }

    const refreshTokens = async (refresh_token: string) => {
        setIsLoading(true)
        await axios
            .post<ApiResponse<AuthCredentials>>(
                `${import.meta.env.VITE_API}/auth/refresh`,
                {
                    refresh_token: refresh_token
                },
            )
            .then((res) => {
                console.log('tokens refreshed')
                const { access_token, refresh_token, expires } = res.data.data
                localStorage.setItem('isAuth', String(true))
                localStorage.setItem("access_token", access_token)
                localStorage.setItem("refresh_token", refresh_token)
                localStorage.setItem("expires", String(expires))

                setIsAuth(true)
                setAccessToken(access_token)
                setRefreshToken(refresh_token)
                setExpires(expires)
                setIsLoading(false)
            })
            .catch((e) => {
                logout()
                setIsLoading(false)
                throw e
            });
        setIsLoading(false)
    }

    const checkIsAuth = async () => {
        setIsLoading(true)
        const isAuthRecord = localStorage.getItem("isAuth")
        const accessTokenRecord = localStorage.getItem("access_token");
        const refreshTokenRecord = localStorage.getItem("refresh_token");
        const expiresRecord = localStorage.getItem("expires")

        if (accessTokenRecord && refreshTokenRecord && isAuthRecord === "true") {
            setIsAuth(true)
            setAccessToken(accessTokenRecord)
            setRefreshToken(refreshTokenRecord)
            setExpires(Number(expiresRecord))
        } else if (refreshTokenRecord && !isAuthRecord) {
            refreshTokens(refreshTokenRecord)
            navigate('/')
        }
        else {
            setIsAuth(false)
        }
        setIsLoading(false)
    }

    const logout = () => {
        localStorage.removeItem('isAuth')
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        localStorage.removeItem("expires")

        setIsAuth(false)
        setAccessToken(null)
        setRefreshToken(null)
        setExpires(null)
        navigate('/')
    }

    useLayoutEffect(() => {
        checkIsAuth()
    }, [])

    if (isAuth === null) {
        return <div>loading</div>
    }

    return (
        <AuthContext.Provider value={{ isAuth, access_token, refresh_token, expires, login, logout, refreshTokens, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('auth context was not provided')
    }
    return context
}
export { AuthProvider }