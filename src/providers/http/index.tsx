import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { FC, ReactNode, createContext, useContext } from "react";
import { useAuth } from "../auth/auth";
import axiosRetry from "axios-retry";

type HttpContextProps = {
    getApi: <T>(url: string, config: AxiosRequestConfig) => Promise<AxiosResponse<T>>
}

const HttpContext = createContext<HttpContextProps>({} as HttpContextProps)

const HttpProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const { refreshTokens, refresh_token } = useAuth()
    const axiosInstance = axios.create({
        baseURL: import.meta.env.VITE_API,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
    })

    async function getApi<T>(url: string, config: AxiosRequestConfig<T>): Promise<T> {
        let isFirstRetry = true
        axiosRetry(axiosInstance, {
            retries: 2,
            retryCondition: (error) => {
                if (isFirstRetry && error.response?.status === 401) {
                    if (refresh_token) {
                        refreshTokens(refresh_token)
                        return true
                    }
                    isFirstRetry = false
                }
                return false
            },
            retryDelay() {
                return 5000
            }
        })

        return await axiosInstance.request({
            url: url,
            ...config,
        })
    }

    return (
        <HttpContext.Provider value={{ getApi }}>
            {children}
        </HttpContext.Provider>
    )
}

export const useHttp = () => {
    return useContext(HttpContext)
}
export default HttpProvider
