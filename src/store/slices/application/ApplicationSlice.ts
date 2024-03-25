import { createSlice } from "@reduxjs/toolkit"
import { getApplicationDetails, getApplications } from "./thunks"
import { ApplicationStoreT } from "../../../types/Application"

const initialState: ApplicationStoreT = {
    applications: {
        data: [],
        meta: {
            total_count: 0,
            filter_count: 0
        }
    },
    applicationDetails: undefined,
    isLoading: true,
    error: null
}

const ApplicationStore = createSlice({
    name: "ApplicationStore",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            // get all
            .addCase(getApplications.pending, (state, _) => {
                state.isLoading = true
            })
            .addCase(getApplications.fulfilled, (state, action) => {
                state.applications = action.payload
                state.isLoading = false
            })
            .addCase(getApplications.rejected, (state, action) => {
                state.error = new Error(action.error.message)
            })
            // get details
            .addCase(getApplicationDetails.pending, (state, _) => {
                state.isLoading = true
            })
            .addCase(getApplicationDetails.fulfilled, (state, action) => {
                state.applicationDetails = action.payload
                state.isLoading = false
            })
            .addCase(getApplicationDetails.rejected, (state, action) => {
                state.error = new Error(action.error.message)
            })
    }
})

export const { } = ApplicationStore.actions
export default ApplicationStore.reducer