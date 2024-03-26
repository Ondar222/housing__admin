import { Box, Stack, Switch } from "@mui/material";
import { FC } from "react";
import { FormControlLabel } from "@mui/material";
import { FamilyFormI } from "../../types/Family";

const FamilyForm: FC<FamilyFormI> = ({ register, control }) => {
  return (
    <Stack direction={"column"} gap={2}>
      <FormControlLabel
        control={<Switch {...register("family.isMarried")} />}
        label="В браке"
      />

      <FormControlLabel
        control={<Switch {...register("family.isLarge")} />}
        label="Многодетная семья"
      />
      <FormControlLabel
        control={<Switch {...register("family.isComplete")} />}
        label="Полная семья"
      />
    </Stack>
  );
};

export { FamilyForm };
