import { Box, Typography, TextField, Stack } from "@mui/material";
import { FC } from "react";
import { SpouseFormI } from "../../types/Participant";
import { PassportForm, SnilsForm } from "../DocumentForm";

const SpouseForm: FC<SpouseFormI> = ({ prefix, register, control }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}
    >
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
          Данные супруги(-га)
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        gap={4}
        width={500}>
        <Stack direction={"column"} gap={2} width={"50%"}>
          <TextField label="Фамилия" placeholder="Фамилия" {...register(`${prefix}.surname`)} />
          <TextField label="Имя" placeholder="Имя" {...register(`${prefix}.name`)} />
          <TextField label="Отчество" placeholder="Отчество" {...register(`${prefix}.patronymic`)} />
        </Stack>

        <Stack direction={"column"} gap={2}>
          <TextField label="Адрес электронной почты" placeholder="example@mail.ru" {...register(`${prefix}.email`)} />
          <TextField label="Телефон" placeholder="Телефон" {...register(`${prefix}.phone`)} />
          <SnilsForm prefix={prefix} register={register} control={control} />
        </Stack>
      </Stack>


      <PassportForm prefix={prefix} register={register} control={control} />


    </Box>
  );
};

export { SpouseForm };
