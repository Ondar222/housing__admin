import { ApiResponse } from "./Api"

export type HousingProgram = {
    id: number
    name: string
    description: string
}

export type HousingProgramList = Array<HousingProgram>

export interface HousingProgramState {
    housing_programs: ApiResponse<HousingProgramList>
    isLoading: boolean
}