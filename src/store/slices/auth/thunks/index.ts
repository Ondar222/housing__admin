import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiResponse } from "../../../../types/Api";
import { AuthCredentials } from "..";
import { getUserData } from "../../user/thunks";

type AuthFormData = {
    email: string,
    password: string
}

const authLogin = createAsyncThunk("auth/authLogin", async ({ email, password }: AuthFormData, getState) => {
    const credentials = await axios.post<ApiResponse<AuthCredentials>>(`${import.meta.env.VITE_API}/auth/login`, {
        email: email,
        password: password
    })
        .then((res) => res.data.data)
        .catch((e) => {
            console.error(e)
            throw new Error()
        })

    getState.dispatch(getUserData(credentials.access_token))
    return credentials
})


export { authLogin }