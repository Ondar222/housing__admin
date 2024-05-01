import { IAppForm } from "./Form"

export enum IdentificationDocumentType {
    PASSPORT,
    CERTIFICATE
}

interface Document {

}

interface Snils {
    number: string
}

interface IdentificationDocument {
    type: IdentificationDocumentType
    series: string
    number: string
    unit_code: string
    birthdate: string
    issued_date: string
    issued_by: string
}

interface PassportFormI extends IAppForm<{ [prefix: string]: IdentificationDocument }> {

}

export type { IdentificationDocument, Snils, Document, PassportFormI }