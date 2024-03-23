import { Box, Typography, TextField } from "@mui/material";
import { FC, useEffect } from "react";
import { ParticipantFormI } from "../../types/Participant";

const ApplicantForm: FC<ParticipantFormI> = ({
  type,
  register,
}) => {
  useEffect(() => {}, []);

  return (
    <Box>
      <Typography>Данные заявителя</Typography>
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

export { ApplicantForm };