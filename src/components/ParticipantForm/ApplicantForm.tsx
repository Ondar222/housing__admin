import { Box, Typography, TextField, Stack } from "@mui/material";
import { FC, useEffect } from "react";
import { ParticipantFormI } from "../../types/Participant";
import { SnilsForm } from "../DocumentForm";
import { PassportForm } from "../DocumentForm";

const ApplicantForm: FC<ParticipantFormI> = ({ register, prefix, control }) => {
  useEffect(() => { }, []);

  return (
    <Stack direction={"column"} gap={4}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        px={2}
        alignItems={"center"}
        sx={{
          background: "#007AFF",
        }}>

        <Typography
          fontSize={20}
          fontWeight={"bold"}
          color={"white"}
        >
          Данные заявителя
        </Typography>
      </Stack>

      <Stack direction={"row"} gap={4} width={500} justifyContent={"space-between"}>
        <Stack direction={"column"} justifyContent={"space-between"} gap={2}>
          <TextField label="Фамилия" placeholder="Фамилия" {...register(`${prefix}.surname`)} />
          <TextField label="Имя" placeholder="Имя" {...register(`${prefix}.name`)} />
          <TextField label="Отчество" placeholder="Отчество" {...register(`${prefix}.patronymic`)} />
        </Stack>
        <Stack direction={"column"} gap={2}>
          <TextField label="Телефон" placeholder="79001238899" {...register(`${prefix}.phone`)} />
          <TextField label="Email" placeholder="example@mail.ru" {...register(`${prefix}.email`)} />
          <SnilsForm prefix={prefix} register={register} />
        </Stack>
      </Stack>



      <PassportForm
        prefix={prefix}
        register={register}
        control={control} />
    </Stack >
  );
};

export { ApplicantForm };
