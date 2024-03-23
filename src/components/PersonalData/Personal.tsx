import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import "react-datepicker/dist/react-datepicker.css";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Button, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Personal.module.css";
import axios from "axios";

export default function PersonalComponent() {
  const { register, handleSubmit } = useForm();
  const [state, setState] = React.useState({
    childrens: true,
    spouse: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const onSubmit: SubmitHandler<any> = async (values) => {
    console.log(values)
    const data = {
      surname: values.surname,
      name: values.name,
      patronymic: values.patronymic,
      snils: [
        {
          number: values.snils_number,
        },
      ],
      identification_document: [
        {
          type: "passport",
          series: "4518",
          number: "611872",
        },
      ],
      phone: values.phone,
      family: {
        isMerried: values.family.isMerried,
        isComplete: values.family.isComplete,
        isLarge: values.family.isLarge,
        family: []
      }
    };

    await axios
      .post("https://cbr17.rtyva.ru/cms/items/participant", data, {
        headers: {
          Authorization: "Bearer S05SaNBtAYK1xgzj8PKvEVtchmfQCCFx",
        },
      })
      .then((res) => console.log(res));
  };

  return (
    <div style={{ background: "#FFFFFF" }}>
      <Typography className={styles.personal_title} variant="h5">
        Личные данные
      </Typography>
      <Box className={styles.personal_surname} sx={{ flexGrow: 1 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Button type="submit">Send</Button>
            <Grid xs={4}>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "35ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Фамилия"
                  placeholder="Введите фамилию"
                  {...register("surname")}
                />
              </Box>
            </Grid>
            <Grid xs={4}>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "35ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Телефон"
                  placeholder="Введите номер тел"
                  {...register("participant_1.phone")}
                />
              </Box>
            </Grid>
            <Grid xs={4}>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "38ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Дата рождения"
                  placeholder="Введите дату"
                />
              </Box>
            </Grid>
          </Grid>
        </form>

        <Grid container spacing={3}>
          <Grid xs={4}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                required
                id="outlined-required"
                label="Имя"
                placeholder="Введите имю"
                {...register("name")}
              />
              <TextField
                required
                id="outlined-required"
                label="Отчество(при наличии)"
                placeholder="Введите отчество"
                {...register("patronymic")}
              />
            </Box>
          </Grid>
          <Grid xs={4}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="filled-multiline-static"
                label="Паспортные данные"
                multiline
                rows={4}
                placeholder="Введите здесь..."
                {...register("identification_document")}
              />
            </Box>
          </Grid>
          <Grid xs={4}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "38ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="filled-multiline-static"
                label="Скан документов"
                multiline
                rows={4}
                placeholder="Прикрепить документы"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid xs={4}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                required
                id="outlined-required"
                label="СНИЛС"
                placeholder="Введите СНИЛС"
                {...register('snils_number')}
              />
            </Box>
          </Grid>
          <Grid className={styles.personal_spouse} xs={4}>
            <Box className={styles.personal_spouse_container}>
              <FormControl
                className={styles.personal_spouse_formcontrol}
                component="fieldset"
                variant="standard"
              >
                <FormLabel component="legend" sx={{ fontSize: "14px" }}>
                  Наличие супруга(-ги)*
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={state.spouse}
                        onChange={handleChange}
                        name="spouse"
                      />
                    }
                    label="Потребуется доп. инф."
                  />
                </FormGroup>
              </FormControl>
            </Box>
            <Box>
              <FormGroup>
                <FormLabel component="legend" sx={{ fontSize: "14px" }}>
                  Наличие супруга(-ги)*
                </FormLabel>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.childrens}
                      onChange={handleChange}
                      name="childrens"
                    />
                  }
                  label="Заполните форму ниже"
                />
              </FormGroup>
            </Box>
          </Grid>
        </Grid>

        <Box className={styles.personal_spouse_bottom_block}>
          <Grid xs={4}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                required
                id="outlined-required"
                label="ID Заявки"
                placeholder="Введите ID Заявки"
              />
            </Box>
          </Grid>
          <Grid xs={4}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                required
                id="outlined-required"
                label="Номер в очереди"
                placeholder="Введите Номер в очереди"
              />
            </Box>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
