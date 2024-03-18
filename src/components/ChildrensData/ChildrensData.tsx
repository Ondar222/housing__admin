import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import "react-datepicker/dist/react-datepicker.css";
import { Typography } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ChildrensDataComponent() {
    return (
        <div style={{ background: "#FFFFFF", marginTop: "20px" }}>
            <Typography variant='h5' sx={{ padding: "0px 10px", background: "#007AFF", color: "#FFFFFF", }}>
                Данные детей (при необходимости)
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
                                label="Имя"
                                placeholder="Введите Имю"
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
                                label="Дата рождения"
                                placeholder="Введите Дату рождения"
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
                                label="Отчество"
                                placeholder="Введите Отчество"
                            />
                              <TextField
                                required
                                id="outlined-required"
                                label="СНИЛС"
                                placeholder="Введите СНИЛС"
                            />

                        </Box>

                    </Grid>
                    <Grid xs={4}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '40ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                required
                                id="outlined-required"
                                label="Свидетельство о рождении (Паспортные данные)*"
                                placeholder="Введите здесь..."
                                multiline
                                rows={4}
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
                                label="Скан документов"
                                placeholder="Введите Скан документов"
                                multiline
                                rows={4}
                            />


                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}