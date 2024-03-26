import { Box, FormControl, MenuItem, Select, Stack, TextField, } from "@mui/material";
import { FC } from "react";
import { PassportFormI } from "../../types/Document";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller } from "react-hook-form";
import { InputLabel } from "@mui/material";
import dayjs from "dayjs";

const PassportForm: FC<PassportFormI> = ({ register, prefix, control }) => {

  return (
    <Stack direction={"column"} gap={4} maxWidth={500}>
      <FormControl>
        <InputLabel>
          Тип документа
        </InputLabel>
        <Select label="Тип документа" {...register(`${prefix}.identification_document.type`)}>
          <MenuItem value={"passport"}>Паспорт</MenuItem>
          <MenuItem value={"certificate"}>Свидетельство о рождении</MenuItem>
        </Select>
      </FormControl>

      <Stack direction={"row"} gap={4} justifyContent={"start"} width={"100%"}>
        <TextField
          label="Серия"
          placeholder="0000"
          {...register(`${prefix}.identification_document.series`)}
          sx={{
            width: "50%"
          }} />
        <TextField
          label="Номер"
          placeholder="000000"

          {...register(`${prefix}.identification_document.number`)}
          sx={{
            width: "50%"
          }}
        />
      </Stack>

      <Stack
        direction={"row"}
        gap={4}
        justifyContent={"space-between"}
      >
        <TextField
          label="Код подразделения"
          placeholder="111-000"
          {...register(`${prefix}.identification_document.unit_code`)}
          sx={{
            width: "50%"
          }}
        />

        <Controller
          control={control}
          name={`${prefix}.identification_document.issued_date`}
          render={({ field }) => (
            <DatePicker
              {...field}
              // defaultValue={dayjs().toDate()}
              label="Дата выдачи"
              onChange={(date: Date | null) => field.onChange(date)}
              sx={{
                width: "50%"
              }}
            />
          )}
        />
      </Stack>
      <TextField
        label="Выдан"
        placeholder="Отделом ОФМС России по Республике Тыва в г. Кызыле"
        {...register(`${prefix}.identification_document.issued_by`)}
      />
    </Stack>
  );
};

export { PassportForm };
