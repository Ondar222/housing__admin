import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiResponse } from "../../../../types/Api";

const getUserData = createAsyncThunk('user/getUserData', async (_, { getState }) => {

    // @ts-ignore
    const { auth } = getState()
    const { access_token } = auth

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