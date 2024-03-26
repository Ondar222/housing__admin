import { createSlice } from "@reduxjs/toolkit";
import { getUserData } from "./thunks";

const UserStore = createSlice({
    name: "user",
    initialState: {
        name: "",
        surname: ""
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getUserData.fulfilled, (state, action) => {
            state.name = action.payload.first_name,
            state.surname = action.payload.last_name
        })
    }
})


export const { } = UserStore.actions
export default UserStore.reducer