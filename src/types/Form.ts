import { UseFormRegister, FieldValues, Control } from "react-hook-form"

interface IAppForm {
    prefix: string
    control?: Control<FieldValues>
    register: UseFormRegister<FieldValues>
}

export type { IAppForm }