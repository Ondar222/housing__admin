import { Box, Typography, TextField, Stack } from "@mui/material";
import { FC } from "react";
import { SpouseFormI } from "../../types/Participant";
import { PassportForm, SnilsForm } from "../DocumentForm";
import {
  RegisterOptions,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";

const SpouseForm: FC<SpouseFormI> = ({ prefix, register, control }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}
    >
      <Typography
        sx={{ fontWeight: "bold", fontSize: "20px", padding: "5px 10px", background: "#007AFF", color: "#FFF", height: "42px" }}
      >
        Данные супруга(-ги)
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>

        <TextField placeholder="Фамилия" {...register(`${prefix}.surname`)} />
        <TextField placeholder="Имя" {...register(`${prefix}.name`)} />
        <TextField placeholder="Отчество" {...register(`${prefix}.patronymic`)} />
        <TextField placeholder="Телефон" {...register(`${prefix}.phone`)} />
      </Box>
      <Stack direction={"column"}>
        <PassportForm prefix={prefix} register={register} control={control} />
        <SnilsForm prefix={prefix} register={register} control={control} />
      </Stack>


    </Box>
  );
};

export { SpouseForm };
