import { FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import { FC, useState } from "react"
import { ApplicationFormI, ApplicationIntention } from "../../types/Application"
import { Controller } from "react-hook-form"

const ApplicationForm: FC<ApplicationFormI> = ({ prefix, register, programs, control, isLarge }) => {
const ApplicationForm: FC<ApplicationFormI> = ({ register, programs, control, isLarge, application }) => {
    const [program, setProgram] = useState(application?.housing_program.id)
    const [intention, setIntention] = useState<ApplicationIntention | undefined>(application?.intention || ApplicationIntention.CONSTRUCTION)
    const [queue, setQueue] = useState<number | undefined>(application?.large_queue?.queue || application?.base_queue?.queue)
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

            <Stack direction={"column"} gap={2} className="subform">
                <FormControl>
                    <InputLabel>Жилищная программа</InputLabel>
                    <Controller
                        name={`${prefix}.housing_program`}
                        control={control}
                        defaultValue={program}
                        render={({ field }) => (
                            <Select
                                {...field}
                                label="Жилищная программа"
                                placeholder="Жилищная программа"
                                {...register(`application.housing_program`)}
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
                        defaultValue={intention}
                        placeholder="Назначение"
                        {...register(`${prefix}.intention`)}
                    >
                        <MenuItem value={ApplicationIntention.MORTGAGE}>Ипотека</MenuItem>
                        <MenuItem value={ApplicationIntention.CONSTRUCTION}>Строительство</MenuItem>
                    </Select>
                </FormControl>

                <FormControl>
                    <TextField
                        label="Номер в очереди"
                        placeholder="Номер в очереди"
                        {...register(`${prefix}.queue`)} />
                        required
                        // value={queue}
                        defaultValue={queue}
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