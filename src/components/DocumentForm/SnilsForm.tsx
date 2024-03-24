import { Box, Stack, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { PassportFormI } from "../../types/Document";

const SnilsForm: FC<PassportFormI> = ({ register, prefix }) => {
  return (
    <Box>
      <Typography>СНИЛС</Typography>

      <Stack>
        <TextField
          placeholder="СНИЛС"
          {...register(`${prefix}.snils.number`)}
        />
        {/* <TextField>Загрузить скан</TextField> */}
      </Stack>
    </Box>
  );
};

export { SnilsForm };
