import {UseFormRegister, FieldValues} from "react-hook-form"

export interface ParticipantFormData {
    surname: string;
    name: string;
    patronymic: string;
    family: {
      is_marries: boolean;
      is_complete: boolean;
      is_large: boolean;
      family: Array<any>;
    };
  }


export enum ParticipantType {
    APPLICANT = "applicant",
    SPOUSE = "spouse",
    CHILD = "child",
}

export interface ParticipantFormI {
    register: UseFormRegister<FieldValues>;
    type: ParticipantType;
}

export interface SpouseFormI extends ParticipantFormI { }

export interface ApplicantFormI extends ParticipantFormI { }

export interface ChildFormI extends ParticipantFormI {
    childIndex: number;
    onDelete: (index: number) => void
}

export interface UniversavParticipantFormI extends SpouseFormI, ApplicantFormI, ChildFormI {

}