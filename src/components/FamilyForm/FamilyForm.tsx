import { Stack, Switch } from "@mui/material";
import { FC } from "react";
import { FormControlLabel } from "@mui/material";
import { FamilyFormI } from "../../types/Family";

const FamilyForm: FC<FamilyFormI> = ({ register}) => {
  return (
    <Stack direction={"column"} gap={2}>
      <FormControlLabel
        control={<Switch {...register("family.is_married")} />}
        label="В браке"
      />

      <FormControlLabel
        control={<Switch {...register("family.is_large")} />}
        label="Многодетная семья"
      />
      <FormControlLabel
        control={<Switch {...register("family.is_complete")} />}
        label="Полная семья"
      />
    </Stack>
  );
};

export { FamilyForm };
