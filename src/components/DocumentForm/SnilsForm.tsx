import { Stack, TextField } from "@mui/material";
import { FC } from "react";
import { PassportFormI } from "../../types/Document";
import { ParticipantFormI } from "../../types/Participant";

const SnilsForm: FC<ParticipantFormI> = ({ register, prefix }) => {
  return (
    <Stack width={500}>
      <TextField
        label="СНИЛС"
        placeholder="000-000-000 00"
        {...register(`${prefix}.snils.number`)}
      />
    </Stack>
  );
};

export { SnilsForm };
