import { AxiosRequestConfig } from "axios"

export type ApiResponse<T> = {
    data: T,
    meta?: {
        total_count: number,
        filter_count: number
    }
}
