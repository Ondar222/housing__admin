import { Stack, TextField } from "@mui/material";
import { FC } from "react";
import { PassportFormI } from "../../types/Document";

const SnilsForm: FC<PassportFormI> = ({ register, prefix }) => {
  return (
    <Stack>
      <TextField
        label="СНИЛС"
        placeholder="000-000-000 00"
        {...register(`${prefix}.snils.number`)}
      />
    </Stack>
  );
};

export { SnilsForm };
