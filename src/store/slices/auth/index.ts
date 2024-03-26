import { createSlice } from "@reduxjs/toolkit";

const AuthStore = createSlice({
    name: "auth",
    initialState: {
        isAuth: false,
        access_token: "",
        refresh_token: "",
        expires: 9000,
    },
    reducers: {
        setCredentials: (state, action) => {
            state.isAuth = true
            state.access_token = action.payload.access_token
            state.refresh_token = action.payload.access_token
            state.expires = action.payload.expires
        }
    }
})

export const { setCredentials } = AuthStore.actions
export default AuthStore.reducer