import { Box, Typography, TextField } from "@mui/material";
import { FC, useEffect } from "react";
import { ParticipantFormI, ParticipantType, SpouseFormI } from "./ParticipantForm";

const SpouseForm: FC<SpouseFormI> = ({
  type,
  register
}) => {
  useEffect(() => {}, []);

  return (
    <Box>
      <Typography>Данные супруги</Typography>
      <TextField
        placeholder="Фамилия"
        {...register(`${type}.surname`)}
      />
      <TextField
        placeholder="Имя"
        {...register(`${type}.name`)}
      />
      <TextField
        placeholder="Отчество"
        {...register(`${type}.patronymic`)}
      />
    </Box>
  );
};

export { SpouseForm };