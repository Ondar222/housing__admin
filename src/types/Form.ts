import { UseFormRegister, FieldValues, Control } from "react-hook-form"

interface IAppForm<T extends FieldValues> {
    prefix: string
    control?: Control<T>
    register: UseFormRegister<T>
}

export type { IAppForm }