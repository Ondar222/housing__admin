import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material"
import { FC } from "react"
import { ApplicationFormI, ApplicationIntention } from "../../types/Application"
import { Controller } from "react-hook-form"

const ApplicationForm: FC<ApplicationFormI> = ({ register, programs, prefix, control }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px", padding: "5px 10px", background: "#007AFF", color: "#FFF", height: "42px" }}>Заявка</Typography>
            <FormControl>
                <InputLabel>Жилищная программа</InputLabel>
                <Controller
                    name={`application.housing_program`}
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            label="Жилищная программа"
                            placeholder="Жилищная программа"
                        // {...register(`application.housing_program`)}
                        >
                            {
                                programs.map((item) => {
                                    return <MenuItem value={item.id}>{item.name}</MenuItem>
                                })
                            }
                        </Select>
                    )}
                />

            </FormControl>


            <FormControl>
                <InputLabel>Назначение</InputLabel>
                <Select
                    label="Назначение"
                    defaultValue={"mortgage"}
                    placeholder="Назначение"
                    {...register('application.intention')}
                >
                    <MenuItem value={ApplicationIntention.MORTGAGE}>Ипотека</MenuItem>
                    <MenuItem value={ApplicationIntention.CONSTRUCTION}>Строительство</MenuItem>
                </Select>
            </FormControl>

        </Box>
    )
}

export { ApplicationForm }