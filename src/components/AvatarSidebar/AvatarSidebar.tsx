import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
}));

export default function AvatarSidebar() {
    return (
        <Stack direction="row" spacing={3} sx={{marginTop: '20px', marginLeft: "20px"}}>
            <Avatar alt="Remy Sharp" src="./public/img/avatar.png" />
            <Box sx={{ width: '100%', maxWidth: 100, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h1" gutterBottom sx={{ fontSize: "12px", fontWeight: "bold" }}>
                    Иванов И. И.
                </Typography>
                <Typography variant="subtitle1" gutterBottom sx={{ fontSize: "11px", fontWeight: "normal" }}>
                    Администратор
                </Typography>
            </Box>
        </Stack>
    );
}