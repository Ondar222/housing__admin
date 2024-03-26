import { FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import { FC } from "react"
import { ApplicationFormI, ApplicationIntention } from "../../types/Application"
import { Controller } from "react-hook-form"

const ApplicationForm: FC<ApplicationFormI> = ({ register, programs, control, isLarge }) => {
    return (
        <Stack
            direction={"column"}
            gap={4}

        >
            <Stack
                px={2}
                sx={{ background: "#007AFF" }}>
                <Typography
                    fontSize={20}
                    fontWeight={"bold"}
                    color={"white"}
                >
                    Заявка
                </Typography>
            </Stack>

            <Stack direction={"column"} gap={2} width={500}>
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

                <FormControl>
                    <TextField
                        label="Номер в очереди"
                        placeholder="Номер в очереди"
                        {...register("application.queue")} />
                    <FormHelperText>
                        {
                            isLarge ?
                                <>Очередь многодетных семей</>
                                :
                                <>Обычная очередь</>
                        }
                    </FormHelperText>
                </FormControl>
            </Stack>
        </Stack>
    )
}

export { ApplicationForm }