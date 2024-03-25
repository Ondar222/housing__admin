import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { ApiResponse } from "../../../../types/Api"
import { HousingProgramList } from "../../../../types/HousingProgram"

const getHousingProgramList = createAsyncThunk("housing_program/getHousingProgramList", async () => {
    const housingProgramList = await axios.get<ApiResponse<HousingProgramList>>((`${import.meta.env.VITE_API}/items/housing_program`))
    
    return housingProgramList.data
})

export { getHousingProgramList }