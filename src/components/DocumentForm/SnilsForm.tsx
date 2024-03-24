import { Box, MenuItem, TextField } from "@mui/material";
import { FC } from "react";
import { PassportFormI } from "../../types/Document";

const SnilsForm: FC<PassportFormI> = ({ register, prefix }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
        <TextField
          placeholder="СНИЛС"
          {...register(`${prefix}.snils.number`)}
        />
        <TextField>Загрузить скан</TextField>
      </Box>
    </Box>
  );
};

export { SnilsForm };
