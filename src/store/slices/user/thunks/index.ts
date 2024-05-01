import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiResponse } from "../../../../types/Api";

const getUserData = createAsyncThunk('user/getUserData', async (access_token: string, { getState }) => {
    const user = await axios.get<ApiResponse<any>>(`${import.meta.env.VITE_API}/users/me`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    }).then((res) => {
        console.log(res)
        return res
    })

    return user.data.data
})

export { getUserData }