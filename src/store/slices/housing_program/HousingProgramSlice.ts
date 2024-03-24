import { createSlice } from "@reduxjs/toolkit"
import type { HousingProgramState } from "../../../types/HousingProgram"
import { getHousingProgramList } from "./thunks"

const initialState: HousingProgramState = {
    housing_programs: {
        meta: {
            total_count: 0,
            filter_count: 0
        },
        data: []
    },
    isLoading: true
}

const HousingProgramStore = createSlice({
    name: "housing_program",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getHousingProgramList.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getHousingProgramList.fulfilled, (state, action) => {
                state.housing_programs = action.payload
                state.isLoading = false
            })
    }
})

export const { } = HousingProgramStore.actions
export default HousingProgramStore.reducer