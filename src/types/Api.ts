import { AxiosRequestConfig } from "axios"

export type ApiResponse<T> = {
    data: T,
    meta?: {
        total_count: number,
        filter_count: number
    }
}



export const API_HEADERS: AxiosRequestConfig["headers"] = {

    Authorization: `Bearer ${import.meta.env.VITE_APIKEY}`

}