import { Box, Typography, TextField } from "@mui/material";
import { FC, useEffect } from "react";
import { ParticipantFormI } from "../../types/Participant";
import { SnilsForm } from "../DocumentForm";
import { PassportForm } from "../DocumentForm";

const ApplicantForm: FC<ParticipantFormI> = ({ prefix, register }) => {
  useEffect(() => {}, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "20px",
          padding: "5px 10px",
          background: "#007AFF",
          color: "#FFF",
          height: "42px",
        }}
      >
        Данные заявителя
      </Typography>
      <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "20px"}}>
      <TextField placeholder="Фамилия" {...register(`${prefix}.surname`)} />
      <TextField placeholder="Имя" {...register(`${prefix}.name`)} />
      <TextField placeholder="Отчество" {...register(`${prefix}.patronymic`)} />
      <TextField placeholder="Телефон" {...register(`${prefix}.phone`)} />
      </Box>
      <Box sx={{marginTop: "20px"}}>
      <SnilsForm prefix={prefix} register={register} />
      </Box>
    </Box>
  );
};

export { ApplicantForm };
