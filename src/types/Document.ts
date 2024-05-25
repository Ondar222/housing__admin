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
    passport: string
    type: IdentificationDocumentType
    series: string
    number: string
    unit_code: string
    birthdate: string
    issued_date: string
    issued_by: string
}

interface PassportFormI extends IAppForm<{ [prefix: string]: IdentificationDocument }> {

interface PassportFormI extends IAppForm {
    value?: IdentificationDocument
}

export type { IdentificationDocument, Snils, Document, PassportFormI }