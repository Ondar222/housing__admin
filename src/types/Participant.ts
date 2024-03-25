import { IAppForm } from "./Form"
import { IdentificationDocument, Snils } from "./Document"

export type Participant = {
  id: number
  surname: string
  name: string
  patronymic: string
  family: number
  phone: string
  email: string
  snils: Snils
  identification_document: IdentificationDocument,
  personal_docs: Array<any>,
  application: number

  user_created: string
  date_created: string
  user_updated: string
  date_updated: string
}

export interface ParticipantFormData {
  surname: string;
  name: string;
  patronymic: string;

  snils: Array<Snils>
  identification_document: Array<IdentificationDocument>

  family: {
    is_marries: boolean;
    is_complete: boolean;
    is_large: boolean;
    family: Array<any>;
  };

  application: {
    housing_program: number,
    intention: string
  }[]
}


export enum ParticipantType {
  APPLICANT = "applicant",
  SPOUSE = "spouse",
  CHILD = "child",
}

export interface ParticipantFormI extends IAppForm {
}

export interface SpouseFormI extends ParticipantFormI { }

export interface ApplicantFormI extends ParticipantFormI { }

export interface ChildFormI extends ParticipantFormI {
  childIndex: number;
  onDelete: (index: number) => void
}

export interface UniversavParticipantFormI extends SpouseFormI, ApplicantFormI, ChildFormI {

}