import { Box, FormControl,MenuItem, Select, TextField, } from "@mui/material";
import { FC } from "react";
import { PassportFormI } from "../../types/Document";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller } from "react-hook-form";
import { InputLabel } from "@mui/material";

const PassportForm: FC<PassportFormI> = ({ register, prefix, control }) => {

  return (
    <Box sx={{ width: "100%", maxWidth: "500px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", }}>

        <FormControl>
          <InputLabel>
            Тип документа
          </InputLabel>
          <Select label="Тип документа" {...register(`${prefix}.identification_document.type`)}>
            <MenuItem value={"passport"}>Паспорт</MenuItem>
            <MenuItem value={"certificate"}>Свидетельство о рождении</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "20px", }}>
          <TextField label="Серия" {...register(`${prefix}.identification_document.series`)} />
          <TextField label="Номер" {...register(`${prefix}.identification_document.number`)} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "20px" }}>
          <TextField label="Код подразделения" {...register(`${prefix}.identification_document.unit_code`)} />
          <TextField label="Выдан" {...register(`${prefix}.identification_document.issued_by`)} />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <Controller
            control={control}
            name={`${prefix}.identification_document.issued_date`}
            // {...register(`${prefix}.identification_document.issued_date`)}
            render={({ field }) => (
              <DatePicker sx={{ width: '85%' }}
                {...field}
                label="Дата выдачи"
                onChange={(date: Date | null) => field.onChange(date)}
              />
            )}
          />

          {/* <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", }}>
            <input type="file" />   
            <Input type="file" {...register(`${prefix}.identification_document.skan`)} />
          </Box> */}
        </Box>
      </Box>

    </Box >
  );
};

export { PassportForm };
