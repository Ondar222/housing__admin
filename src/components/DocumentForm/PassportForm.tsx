import { Box, MenuItem, Select, TextField } from "@mui/material"
import { FC } from "react"
import { PassportFormI } from "../../types/Document"
import { DatePicker } from "@mui/x-date-pickers"
import { Controller } from "react-hook-form"

const PassportForm: FC<PassportFormI> = ({ register, prefix, control }) => {
    return (
        <Box>
            <Select {...register(`${prefix}.passport.type`)}>
                <MenuItem value={"passport"}>Паспорт</MenuItem>
                <MenuItem value={"certificate"}>Свидетельство о рождении</MenuItem>
            </Select>
            <TextField {...register(`${prefix}.passport.series`)} />
            <TextField {...register(`${prefix}.passport.number`)} />



            <TextField />
            <TextField {...register(`${prefix}.passport.unit_code`)} />
            <TextField {...register(`${prefix}.passport.issued_by`)} />
            <Controller
                control={control}
                {...register(`${prefix}.passport.issued_date`)}
                render={({ field }) => (
                    <DatePicker
                        {...field}
                        label="Дата"
                        onChange={(date: Date | null) => field.onChange(date)}

                    />
                )} />

            <input type="file" />
        </Box>
    )
}

export { PassportForm }