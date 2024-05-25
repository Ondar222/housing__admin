import { Participant } from "./Participant"
import { ApiResponse } from "./Api"
import { UsePaginationProps } from "@mui/material/usePagination/usePagination"
import { IAppForm } from "./Form"
import { HousingProgram, HousingProgramList } from "./HousingProgram"
import { IdentificationDocument, Snils } from "./Document"
import { UseFormRegister } from "react-hook-form"

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

export type ApplicationFirstLevel = {
    id: number
    status: ApplicationStatus
    intention: ApplicationIntention

    housing_program: number
    applicant: number
    large_queue?: number
    base_queue?: number

    date_created?: string
    date_updated?: string
    accepted_date?: string | null
    rejected_date?: string | null
}

export type ApplicationSecondLevel = {
    id: number
    status: ApplicationStatus
    intention: ApplicationIntention

    housing_program: HousingProgram,
    applicant: Participant
    large_queue?: Queue
    base_queue?: Queue

    date_created?: string
    date_updated?: string
    accepted_date?: string | null
    rejected_date?: string | null
}


type Queue = {
    queue: number
}

export type ApplicationT = {
    id: number
    status: ApplicationStatus
    intention: ApplicationIntention

    housing_program: {
        [key: string]: string
    },
    applicant: Participant
    queue: number
    large_queue?: Queue,
    base_queue?: Queue,
    poor_queue?: Queue

    date_created?: string
    date_updated?: string
    accepted_date?: string | null
    rejected_date?: string | null
}

export type ApplicationFormFields = {

}

export interface ApplicationFormI extends IAppForm<{ [prefix: string]: ApplicationT }> {
export interface ApplicationFormI extends IAppForm {
    application?: ApplicationT,
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

export type Queue = {
    id: number
    status: string
    queue: number
}

export type EditableApplication = {
    id: number
    status: string
    intention: string,

    base_queue: Queue
    large_queue: Queue

    housing_program: Omit<HousingProgram, "description">

    applicant: {
        surname: string;
        name: string;
        patronymic: string;
        phone: string
        email: string
        snils: UseFormRegister<Array<Snils>>
        identification_document: UseFormRegister<Array<IdentificationDocument>>

        family: {
            is_married: boolean;
            is_complete: boolean;
            is_large: boolean;
            family: Array<{
                id: number
                surname: string
                name: string
                patronymic: string

                phone: string
                email: string
                snils: Array<Snils>
                identification_document: Array<IdentificationDocument>,
                personal_docs: any,
            }>
        };
    }

    related_documents: any
}