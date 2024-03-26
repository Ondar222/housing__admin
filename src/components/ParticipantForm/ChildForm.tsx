import { Box, Typography, TextField, Button, Stack, IconButton } from "@mui/material";
import { FC, useEffect } from "react";
import { ChildFormI } from "../../types/Participant";
import { PassportForm } from "../DocumentForm";
import DeleteIcon from "@mui/icons-material/Delete";
import { SnilsForm } from "../DocumentForm";

const ChildForm: FC<ChildFormI> = ({
  prefix,
  register,
  childIndex,
  onDelete,
  control,
}) => {
  useEffect(() => { }, []);

  return (
    <Stack
      direction={"column"}
      gap={5}
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
          Данные ребенка
        </Typography>

        <IconButton onClick={() => onDelete(childIndex)} sx={{ padding: 0 }}>
          <DeleteIcon htmlColor="white" />
        </IconButton>
      </Stack>

      <Stack direction={"row"} gap={4} width={500}>
        <Stack
          direction={"column"}
          justifyContent={"space-between"}
          gap={2}
          sx={{
            width: "100%"
          }}
        >
          <TextField
            label="Фамилия"
            placeholder="Фамилия"
            {...register(`${prefix}[${childIndex}].surname`)}

          />
          <TextField
            label="Имя"
            placeholder="Имя"
            {...register(`${prefix}[${childIndex}].name`)}

          />
          <TextField
            label="Отчество"
            placeholder="Отчество"
            {...register(`${prefix}[${childIndex}].patronymic`)}

          />
        </Stack>
        <Stack sx={{
          width: "100%"
        }}>
          <SnilsForm
            prefix={`${prefix}[${childIndex}]`}
            register={register}
            control={control}
          />
        </Stack>
      </Stack>


      <Stack direction={"column"} gap={4}>
        <PassportForm
          prefix={`${prefix}[${childIndex}]`}
          register={register}
          control={control}
        />
      </Stack>

    </Stack >
  );
};

export { ChildForm };
