import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';

export default function AvatarSidebar() {
    return (
        <Stack direction="row" spacing={3} sx={{marginTop: '20px', marginLeft: "20px"}}>
            <Avatar alt="Remy Sharp" src="/img/avatar.png" />
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