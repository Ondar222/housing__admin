import { Box, MenuItem, Select, Typography } from "@mui/material"
import { FC } from "react"
import { ApplicationFormI } from "../../types/Application"

const ApplicationForm: FC<ApplicationFormI> = ({ register }) => {
    return (
        <Box>
            <Box>
                <Typography>Заявка</Typography>
            </Box>
            <Select
                defaultValue={"mortgage"}
                placeholder="Жилищная программа"
                {...register('application.program')}
            >
                <MenuItem value={"mortgage"}>Молодая семья</MenuItem>
                <MenuItem value={"construction"}>Ипотека 2%</MenuItem>
            </Select>

            <Select
                defaultValue={"mortgage"}
                placeholder="Назначение"
                {...register('application.intention')}
            >
                <MenuItem value={"mortgage"}>Ипотека</MenuItem>
                <MenuItem value={"construction"}>Строительство</MenuItem>
            </Select>
        </Box>
    )
}

export { ApplicationForm }