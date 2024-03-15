import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                bgcolor: '#FFFFFF',
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


export default function People() {
    return (
        <div style={{ width: '1095px' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    p: 1,
                    m: 1,
                    bgcolor: '#FFFFFF',
                    borderRadius: 1,
                    width: '100%'
                }}
            >

                <Box sx={{ width: '244px', height: '55px', display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
                    <img src='./public/img/total-logo.png' />
                    <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', margin: "0 auto" }}>
                        <Typography variant="subtitle2" gutterBottom sx={{ fontSize: "12px", fontWeight: "normal" }}>
                            Всего
                        </Typography>
                        <Typography variant="h5" gutterBottom sx={{ fontSize: "20px", fontWeight: "bold" }}>
                            800
                        </Typography>
                    </Box>
                </Box >

                <Divider sx={{ marginRight: "20px" }} orientation="vertical" variant="middle" flexItem />
                <Box sx={{ width: '244px', height: '55px', display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
                    <img src='./public/img/standart-logo.png' />
                    <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', margin: "0 auto" }}>
                        <Typography variant="subtitle2" gutterBottom sx={{ fontSize: "12px", fontWeight: "normal" }}>
                            Обычные
                        </Typography>
                        <Typography variant="h5" gutterBottom sx={{ fontSize: "20px", fontWeight: "bold" }}>
                            561
                        </Typography>
                    </Box>
                </Box >
                <Divider sx={{ marginRight: "20px" }} orientation="vertical" variant="middle" flexItem />
                <Box sx={{ width: '244px', height: '55px', display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
                    <img src='./public/img/large-logo.png' />
                    <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', margin: "0 auto" }}>
                        <Typography variant="subtitle2" gutterBottom sx={{ fontSize: "12px", fontWeight: "normal" }}>
                            Многодетные
                        </Typography>
                        <Typography variant="h5" gutterBottom sx={{ fontSize: "20px", fontWeight: "bold" }}>
                            279
                        </Typography>
                    </Box>
                </Box>

            </Box>

        </div>
    );
}