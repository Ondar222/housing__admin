import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import "react-datepicker/dist/react-datepicker.css";
import { Typography } from '@mui/material';

import styles from './Spouses.module.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function SpousesDetalisComponent(props : any) {
    return (
        <div className={styles.spouses}>
            <Typography  className={styles.spouses_title} variant='h5'>
                Данные супруга(-ги) (при необходимости)
            </Typography>
            <Box className={styles.spouses_surname} sx={{ flexGrow: 1 }}>
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
                                {...props.register("spouse.surname")}
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
                                {...props.register("spouse.name")}
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
                                label="СНИЛС"
                                placeholder="Введите СНИЛС"
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
                                placeholder="Введите Номер Телефона"
                                {...props.register("spouse.phone")}
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
            </Box>
        </div>
    )
}