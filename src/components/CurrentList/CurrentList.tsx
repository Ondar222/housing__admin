import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{

                p: 1,
                m: 1,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

const currencies = [
    {
        value: 'All',
        label: 'Все',
    },
    {
        value: 'at work',
        label: 'В работе',
    },
    {
        value: 'not ready',
        label: 'Не готов',
    },
];

export default function CurrentListComponent() {
    return (
        <div style={{ width: '100%' }}>
            <Box
                sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1, flexDirection: 'row', justifyContent: "space-between" }}
            >
                <Box sx={{ width: '30%' }}>
                    <Typography variant="h4" gutterBottom sx={{ fontSize: "24px", fontWeight: "bold" }}>
                        Текущая страница
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom sx={{ fontSize: "14px", fontWeight: "normal", color: "green" }}>
                        Название фильтра
                    </Typography>
                </Box>


                <Box sx={{ display: "flex", flexDirection: 'row', justifyContent: "end", width: "100%", gap: "20px" }}>
                    <Box>
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 264, height: 48, }}
                        >
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Введите запрос"
                                inputProps={{ 'aria-label': 'Введите запрос' }}
                            />
                        </Paper>

                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { width: '172px' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <TextField
                            id="filled-select-currency"
                            select
                            label="Теги"
                            defaultValue="All"
                            variant="filled"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </Box>

                </Box>
            </Box>
        </div>
    );
}

