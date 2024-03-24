import { createAsyncThunk } from "@reduxjs/toolkit"
import axios, { AxiosRequestConfig } from "axios"
import { ApplicationT } from "../../../../types/Application"
import { API_HEADERS, ApiResponse } from "../../../../types/Api"

const getApplications = createAsyncThunk("application/getApplications",
    async (params: AxiosRequestConfig["params"]) => {
        const data = await axios
            .get<ApiResponse<ApplicationT[]>>(`${import.meta.env.VITE_API}/application?fields=*.*.*`, {
                headers: API_HEADERS,
                params: params
            })
            .then((res) => {
                console.log(res)
                return res
            })
            .catch((e) => {
                console.error(e)
                throw new Error()
            })

        return data.data
    })

const getApplicationDetails = createAsyncThunk("application/getApplicationDetails",
    async (id: number) => {
        const data = await axios
            .get<ApplicationT>(`${import.meta.env.VITE_API}/application/${id}`, {
                headers: API_HEADERS
            })
            .then((res) => {
                console.log(res)
                return res
            })
            .catch((e) => {
                console.error(e)
                throw new Error()
            })

        return data.data
    })

export { getApplications, getApplicationDetails }