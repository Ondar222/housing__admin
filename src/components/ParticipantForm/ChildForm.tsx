import { Box, Typography, TextField, Button } from "@mui/material";
import { FC, useEffect } from "react";
import { ChildFormI } from "../../types/Participant";

const ChildForm: FC<ChildFormI> = ({
  type,
  register,
  childIndex,
  onDelete
}) => {
  useEffect(() => {}, []);

  return (
    <Box>
      <Typography>Данные ребенка</Typography>
      <TextField
        placeholder="Фамилия"
        {...register(`${type}[${childIndex}].surname`)}
      />
      <TextField
        placeholder="Имя"
        {...register(`${type}[${childIndex}].name`)}
      />
      <TextField
        placeholder="Отчество"
        {...register(`${type}[${childIndex}].patronymic`)}
      />
      <Button onClick={() => onDelete(childIndex)}>Удалить форму</Button>
    </Box>
  );
};

export { ChildForm };
