
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import styles from './CurrentList.module.css'
import { FC } from 'react';
import { Select, Stack } from '@mui/material';
import { Search } from '@mui/icons-material';

const status = [
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

export const CurrentListComponent: FC = () => {
    return (
        <Stack direction={'row'} justifyContent={"space-between"} sx={{
            margin: "20px 0px"
        }}>
            <Typography variant="h4" gutterBottom >
                Заявки
            </Typography>
            <Box className={styles.CurrentSearch_class}>
                <TextField
                    size="small"
                    placeholder='Введите запрос'
                    InputProps={{
                        startAdornment: <><Search />&nbsp;</>
                    }}>
                </TextField>

                <TextField
                    select
                    size="small"
                    InputProps={{
                        startAdornment: <Typography>Теги:&nbsp;</Typography>
                    }}
                    sx={{ width: "172px" }}>
                    {status.map((option) => (
                        <MenuItem
                            key={option.value}
                            value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>
        </Stack>
    );
}

