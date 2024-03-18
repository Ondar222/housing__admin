import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function PersonalComponent() {
    const [startDate, setStartDate] = useState(new Date());

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


    return (
        <div style={{ background: "#FFFFFF" }}>
            <Typography variant='h5' sx={{ padding: "0px 10px", background: "#007AFF", color: "#FFFFFF" }}>
                Личные данные
            </Typography>
            <Box sx={{ flexGrow: 1, width: "100%", paddingTop: "20px" }}>
                <Grid container spacing={3}>
                    <Grid xs={4}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '35ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                required
                                id="outlined-required"
                                label="Фамилия"
                                placeholder="Введите фамилию"
                            />
                        </Box>

                    </Grid>
                    <Grid xs={4}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '35ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                required
                                id="outlined-required"
                                label="Телефон"
                                placeholder="Введите номер тел"
                            />
                        </Box>

                    </Grid>
                    <Grid xs={4}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '38ch' },
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
                <Grid container spacing={3}>
                    <Grid xs={4}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '35ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                required
                                id="outlined-required"
                                label="Имя"
                                placeholder="Введите имю"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Отчество(при наличии)"
                                placeholder="Введите отчество"
                            />
                        </Box>

                    </Grid>
                    <Grid xs={4}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '100%' },
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

                            />
                        </Box>

                    </Grid>
                    <Grid xs={4}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '38ch' },
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
                                '& .MuiTextField-root': { m: 1, width: '35ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                required
                                id="outlined-required"
                                label="СНИЛС"
                                placeholder="Введите СНИЛС"
                            />
                        </Box>

                    </Grid>
                    <Grid xs={4} sx={{ display: 'flex', flexDirection: "row", padding: "20px 20px" }}>
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                            <FormControl sx={{ width: "100%", display: 'flex', flexDirection: 'row' }} component="fieldset" variant="standard">
                                <FormLabel component="legend" sx={{ fontSize: "14px" }}>Наличие супруга(-ги)*</FormLabel>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Switch checked={state.spouse} onChange={handleChange} name="spouse" />
                                        }
                                        label="Потребуется доп. инф."
                                    />
                                </FormGroup>
                            </FormControl>
                        </Box>
                        <Box>
                            <FormGroup >
                                <FormLabel component="legend" sx={{ fontSize: "14px" }}>Наличие супруга(-ги)*</FormLabel>
                                <FormControlLabel
                                    control={
                                        <Switch checked={state.childrens} onChange={handleChange} name="childrens" />
                                    }
                                    label="Заполните форму ниже"
                                />
                            </FormGroup>
                        </Box>
                    </Grid>

                </Grid>

                <Box sx={{ display: "flex", flexDirection: "row", gap: "46px" }}>

                    <Grid xs={4}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '35ch' },
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
                                '& .MuiTextField-root': { m: 1, width: '35ch' },
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
    )
}