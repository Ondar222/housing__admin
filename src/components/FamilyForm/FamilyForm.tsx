import { Box, Switch } from "@mui/material";
import { FC } from "react";
import { FormControlLabel } from "@mui/material";
import { FamilyFormI } from "../../types/Family";

const FamilyForm: FC<FamilyFormI> = ({ register }) => {
  return (
    <Box>
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
    </Box>
  );
};

export { FamilyForm };
