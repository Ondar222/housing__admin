import { Box, Typography, TextField, Stack } from "@mui/material";
import { FC } from "react";
import { SpouseFormI } from "../../types/Participant";
import { PassportForm } from "../DocumentForm";

const SpouseForm: FC<SpouseFormI> = ({ prefix, register, control, applicant }) => {
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
        className="subform">
        <Stack direction={"column"} gap={2} sx={{
          width: "100%"
        }}>
          <TextField label="Фамилия" placeholder="Фамилия" {...register(`${prefix}.surname`)} />
          <TextField label="Имя" placeholder="Имя" {...register(`${prefix}.name`)} />

        </Stack>

        <Stack direction={"column"} gap={2}
          sx={{
            width: "100%"
          }}>
          <TextField label="Отчество" placeholder="Отчество" {...register(`${prefix}.patronymic`)} />
          <TextField
            label="Адрес электронной почты"
            placeholder="example@mail.ru"
            {...register(`${prefix}.email`)}
          />
        </Stack>
      </Stack>


      <PassportForm
        value={applicant?.identification_document[0]}
        prefix={prefix}
        register={register}
        control={control}
      />
    </Box>
  );
};

export { SpouseForm };
