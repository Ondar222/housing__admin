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

export type Application = {
    id: number
    status: ApplicationStatus
    intention: ApplicationIntention
    date_created: string
    date_updated: string
    accepted_date: string | null
    rejected_date: string | null
}

export type ApplicationForm = {
    
}

export type ApplicationList = {

}