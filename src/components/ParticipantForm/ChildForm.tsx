import { Box, Typography, TextField, Button } from "@mui/material";
import { FC, useEffect } from "react";
import { ChildFormI } from "../../types/Participant";
import { PassportForm } from "../DocumentForm";
import {
  RegisterOptions,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import { SnilsForm } from "../DocumentForm";

const ChildForm: FC<ChildFormI> = ({
  prefix,
  register,
  childIndex,
  onDelete,
  control,
}) => {
  useEffect(() => {}, []);

  return (
    <Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}
    >
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
        Данные ребенка
      </Typography>
       
      <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "20px"}}>
      <TextField
        placeholder="Фамилия"
        {...register(`${prefix}[${childIndex}].surname`)}
      />
      <TextField
        placeholder="Имя"
        {...register(`${prefix}[${childIndex}].name`)}
      />
      <TextField
        placeholder="Отчество"
        {...register(`${prefix}[${childIndex}].patronymic`)}
      />
      </Box>

      {/* <TextField
        placeholder="СНИЛС"
        {...register(`${prefix}[${childIndex}].snils`)}
      /> */}

      <SnilsForm prefix={prefix} register={register} />
      <Box sx={{display: 'flex', flexDirection: "row"}}>
      <PassportForm
        prefix={`${prefix}[${childIndex}]`}
        register={register}
        control={control}
       
      />
      </Box>
      <Button
        sx={{ display: "block", flexDirection: "column", justifyContent: "center", background: "#007AFF", color: "#FFF", height: "40px", width: '40px' }}
        onClick={() => onDelete(childIndex)}
      >
        <DeleteIcon />
      </Button>
    </Box>
    </Box>
  );
};

export { ChildForm };
