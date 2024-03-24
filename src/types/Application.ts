import { UseFormRegister, FieldValues } from "react-hook-form"
import { Participant } from "./Participant"
import { ApiResponse } from "./Api"
import { UsePaginationProps } from "@mui/material/usePagination/usePagination"

export enum ApplicationStatus {
    SUBMITTED = "submitted",
    ASSIGNED = "assigned",
    CONSIDERATION = "consideration",
    REJECTED = "rejected",
    ACCEPTED = "accepted"
}

export enum ApplicationIntention {
    MORTGAGE = "mortgage"
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

export type ApplicationFormI = {
    register: UseFormRegister<FieldValues>
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