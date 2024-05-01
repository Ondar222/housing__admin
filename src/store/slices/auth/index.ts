import { createSlice } from "@reduxjs/toolkit";
import { authLogin } from "./thunks";

export type AuthCredentials = {
    isLoading: boolean,
    isAuth: boolean,
    access_token: string,
    refresh_token: string,
    expires: number,
}

const initialState: AuthCredentials = {
    isLoading: false,
    isAuth: false,
    access_token: "",
    refresh_token: "",
    expires: 9000,
}

const AuthStore = createSlice({
    name: "auth",
    initialState,
    reducers: {
        getCredentials: (state) => {
            const access_token = localStorage.getItem("access_token")
            const refresh_token = localStorage.getItem("refresh_token")
            const expires = localStorage.getItem("expires")

            if (access_token && refresh_token && expires) {
                state.isAuth = true
                state.access_token = access_token
                state.refresh_token = refresh_token
                state.expires = Number(expires)
            }
        },
        setCredentials: (state, { payload }: { payload: AuthCredentials, type: string }) => {
            localStorage.setItem("access_token", payload.access_token)
            localStorage.setItem("refresh_token", payload.refresh_token)
            localStorage.setItem("expires", String(payload.expires))

            state.isAuth = true
            state.access_token = payload.access_token
            state.refresh_token = payload.refresh_token
            state.expires = payload.expires
        },
        logout: (state) => {
            localStorage.removeItem("access_token")
            localStorage.removeItem("refresh_token")
            localStorage.removeItem("expires")

            state.isAuth = false
            state.access_token = ""
            state.refresh_token = ""
            state.expires = 0
        }
    },
    extraReducers: (builder) => builder
        .addCase(authLogin.pending, (state, _) => {
            state.isLoading = true
        })
        .addCase(authLogin.rejected, (state, _) => {
            state.isLoading = false
        })
        .addCase(authLogin.fulfilled, (state, { payload }) => {
            console.group('action.payload auth')
            console.log(payload)
            console.groupEnd()
            state.isAuth = true
            state.access_token = payload.access_token
            state.refresh_token = payload.refresh_token
            state.expires = payload.expires
            state.isLoading = false
        })
})

export const { setCredentials, getCredentials, logout } = AuthStore.actions
export default AuthStore.reducer