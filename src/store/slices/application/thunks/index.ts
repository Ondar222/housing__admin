import { createAsyncThunk } from "@reduxjs/toolkit"
import axios, { AxiosRequestConfig } from "axios"
import { ApplicationT } from "../../../../types/Application"
import { ApiResponse } from "../../../../types/Api"

const getApplications = createAsyncThunk("application/getApplications",
    async (params: AxiosRequestConfig["params"], { getState }) => {
        const data = await axios
            .get<ApiResponse<ApplicationT[]>>(`${import.meta.env.VITE_API}/items/application?fields=*.*.*`, {
                headers: {
                    //@ts-ignore
                    Authorization: `Bearer ${getState().auth.access_token}`
                },
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
    async (id: number, { getState }) => {
        const data = await axios
            .get<ApplicationT>(`${import.meta.env.VITE_API}/items/application/${id}`, {
                headers: {//@ts-ignore
                    Authorization: `Bearer ${getState().auth.access_token}`
                }
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