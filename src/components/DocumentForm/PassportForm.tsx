import { Box, MenuItem, Select, TextField } from "@mui/material";
import { FC } from "react";
import { PassportFormI } from "../../types/Document";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller } from "react-hook-form";
import { InputLabel } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import React from "react";

const PassportForm: FC<PassportFormI> = ({ register, prefix, control }) => {
  return (
    <Box sx={{width: "40%"}}>
      <InputLabel id="demo-simple-select-label">
        Тип документа
      </InputLabel>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", }}>
        <Select {...register(`${prefix}.passport.type`)}>
          <MenuItem value={"passport"}>Паспорт</MenuItem>
          <MenuItem value={"certificate"}>Свидетельство о рождении</MenuItem>
        </Select>

        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "20px",}}>
          <TextField label="Серия" {...register(`${prefix}.passport.series`)} />
          <TextField label="Номер" {...register(`${prefix}.passport.number`)} />        
        </Box>   
      <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "20px"}}>
          <TextField label="Код подразделения" {...register(`${prefix}.passport.unit_code`)} />
          <TextField label="Выдано" {...register(`${prefix}.passport.issued_by`)} />
      </Box>

      <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between",}}>
        <Controller
          control={control}
          {...register(`${prefix}.passport.issued_date`)}
          render={({ field }) => (
            <DatePicker sx={{width: '85%'}}
              {...field}
              label="Дата выдачи"
              onChange={(date: Date | null) => field.onChange(date)}
            />
          )}
        />
      </Box>
   
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center",}}>
          {/* <input type="file" />    */}
          <TextField label="СКАН документа" {...register(`${prefix}.passport.skan`)} />
      </Box>
      </Box>
      </Box>
    
    </Box>
  );
};

export { PassportForm };
