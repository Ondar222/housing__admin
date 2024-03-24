import { Box, Button, MenuItem, Select, TextField, styled } from "@mui/material"
import { FC } from "react"
import { PassportFormI } from "../../types/Document"
import { DatePicker } from "@mui/x-date-pickers"
import { Controller } from "react-hook-form"
import { CloudUpload } from '@mui/icons-material';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});



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

            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUpload />}
            >
                Upload file
                <VisuallyHiddenInput type="file" {...register("files")} />
            </Button>

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

            {/* <input type="file" {...register("files")}/> */}
        </Box>
    )
}

export { PassportForm }