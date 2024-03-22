import { Box, Switch, TextField } from "@mui/material";
import { FC } from "react";
import { FormControlLabel } from "@mui/material";
import { useState } from "react";
// import { SubmitHandler, useForm } from "react-hook-form";

const FamilyForm: FC<any> = (props) => {
  return (
    <Box>
      <FormControlLabel
        control={<Switch {...props.register("family.isMarried")} />}
        label="В браке"
      />
      <FormControlLabel
        control={<Switch {...props.register("family.isLarge")} />}
        label="Многодетная семья"
      />
      <FormControlLabel
        control={<Switch {...props.register("family.isComplete")} />}
        label="Полная семья"
      />
    </Box>
  );
};

export { FamilyForm };
