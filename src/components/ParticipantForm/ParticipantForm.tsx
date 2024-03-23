import { Box, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { UniversavParticipantFormI, ParticipantType } from "../../types/Participant";



const ParticipantForm: FC<UniversavParticipantFormI> = ({ type, register, childIndex }) => {
  const notChild = type != ParticipantType.CHILD;
  return (
    <Box>
      <Typography>
        {type === ParticipantType.APPLICANT && "Личные данные"}
        {type === ParticipantType.SPOUSE && "Данные супруга/супруги"}
        {type === ParticipantType.CHILD && "Данные ребенка"}
      </Typography>
      <TextField
        placeholder="Фамилия"
        {...register(
          `${type}${childIndex != undefined ? `[${childIndex}]` : ""}.surname`
        )}
      />
      <TextField
        placeholder="Имя"
        {...register(
          `${type}${childIndex != undefined ? `[${childIndex}]` : ""}.name`
        )}
      />
      <TextField
        placeholder="Отчество"
        {...register(
          `${type}${childIndex != undefined ? `[${childIndex}]` : ""
          }.patronymic`
        )}
      />
      {notChild && (
        <TextField
          placeholder="Номер телефона"
          {...register(`${type}.phone`)}
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
