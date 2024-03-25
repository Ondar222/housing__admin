import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import {  Stack } from '@mui/material';
import styles from './AnalyticHeader.module.css'

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



export default function AnalyticsHeaderComponent() {
    return (
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Typography className={styles.analytics_header_title} variant="h4" gutterBottom >
                Аналитика
            </Typography>

            <Stack direction={"row"} gap={3}>
                <Box className={styles.analytic_subtitle_blocks}>
                    <Box className={styles.Analytic_avatar}>
                        <img src="/img/official-icon.png" alt="" />
                        <img src="/img/filtr-bottim-icon.png" alt="" />
                        <img src="/img/filtr-top-icon.png" alt="" />
                        <img src="/img/small.png" alt="" />
                        <img src="/img/edit-icon.png" alt="" />
                    </Box>
                </Box>

                <Box className={styles.DashboardList_block}>
                    <Item className={styles.item_dashboard}>
                        <img src='/img/dashboard.png' />
                        Дашборды
                    </Item>
                    <Item className={styles.item_list}>
                        <MenuIcon sx={{ color: "#424242" }} />
                        Списком
                    </Item>
                </Box>
            </Stack>
        </Stack>
    )

}









