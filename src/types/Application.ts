import { Participant } from "./Participant"
import { ApiResponse } from "./Api"
import { UsePaginationProps } from "@mui/material/usePagination/usePagination"
import { IAppForm } from "./Form"
import { HousingProgramList } from "./HousingProgram"

export enum ApplicationStatus {
    SUBMITTED = "submitted",
    ASSIGNED = "assigned",
    CONSIDERATION = "consideration",
    REJECTED = "rejected",
    ACCEPTED = "accepted"
}

export enum ApplicationIntention {
    MORTGAGE = "mortgage",
    CONSTRUCTION = "construction"
}

export type ApplicationT = {
    id: number
    status: ApplicationStatus
    intention: ApplicationIntention

    housing_program: {
        [key: string]: string
    },
    applicant: Participant

    date_created?: string
    date_updated?: string
    accepted_date?: string | null
    rejected_date?: string | null
}

export interface ApplicationFormI extends IAppForm {
    programs: HousingProgramList
    isLoading: boolean
    isLarge: boolean
}

export type ApplicationStoreT = {
    applications: ApiResponse<Array<ApplicationT>>
    applicationDetails: ApplicationT | undefined
    isLoading: boolean
    error: Error | null
}

export type ApplicationTableT = {
    isLoading: boolean
    data: Array<ApplicationT>
    currentPage: number
    limit: number
    total: number
    pageCount: number
    onSearch: (e: string) => void
    onFilter: (params: { name: string, value: string | number | null }) => void
    onPageChange: UsePaginationProps["onChange"]
}