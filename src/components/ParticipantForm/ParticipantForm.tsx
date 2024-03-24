import { Box, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { UniversavParticipantFormI, ParticipantType } from "../../types/Participant";



const ParticipantForm: FC<UniversavParticipantFormI> = ({ prefix, register, childIndex }) => {
  const notChild = type != ParticipantType.CHILD;
  return (
    <Box>
      <Typography>
        {prefix === ParticipantType.APPLICANT && "Личные данные"}
        {prefix === ParticipantType.SPOUSE && "Данные супруга/супруги"}
        {prefix === ParticipantType.CHILD && "Данные ребенка"}
      </Typography>
      <TextField
        placeholder="Фамилия"
        {...register(
          `${prefix}${childIndex != undefined ? `[${childIndex}]` : ""}.surname`
        )}
      />
      <TextField
        placeholder="Имя"
        {...register(
          `${prefix}${childIndex != undefined ? `[${childIndex}]` : ""}.name`
        )}
      />
      <TextField
        placeholder="Отчество"
        {...register(
          `${prefix}${childIndex != undefined ? `[${childIndex}]` : ""
          }.patronymic`
        )}
      />
      {notChild && (
        <TextField
          placeholder="Номер телефона"
          {...register(`${prefix}.phone`)}
        />
      )}
      {notChild && (
        <TextField
          placeholder="Адрес электрооной почты"
          {...register("email")}
        />
      )}
    </Box>
  );
};

export { ParticipantForm };
