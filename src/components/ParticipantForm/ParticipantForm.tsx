import { Box, TextField, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

export enum ParticipantType {
  APPLICANT = "applicant",
  SPOUSE = "spouse",
  CHILD = "child",
}

export interface ParticipantFormI {
  register: UseFormRegister<FieldValues>;
  type: ParticipantType;
}

export interface SpouseFormI extends ParticipantFormI {}

export interface ApplicantFormI extends ParticipantFormI {}

export interface ChildFormI extends ParticipantFormI {
  childIndex: number;
  onDelete: (index: number) => void
}

export interface UniversavParticipantFormI extends SpouseFormI, ApplicantFormI, ChildFormI {

}

const ParticipantForm: FC<UniversavParticipantFormI> = ({ type, register }) => {
  const notChild = type != ParticipantType.CHILD;

  useEffect(() => {}, []);

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
          `${type}${
            childIndex != undefined ? `[${childIndex}]` : ""
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
