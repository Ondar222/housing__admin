import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CreateIcon from '@mui/icons-material/Create';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import CancelIcon from '@mui/icons-material/Cancel';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
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
    return <div>
        <Box className={styles.analytics_header_container}>
            <Box sx={{ width: '100%' }}>
                <Typography className={styles.analytics_header_title} variant="h4" gutterBottom >
                    Аналитика <CreateIcon />
                </Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
                <AvatarGroup total={8}>
                    <Avatar alt="Travis Howard" src="./public/img/avatar1.png" />
                    <Avatar alt="Travis Howard" src="./public/img/avatar2.png" />
                    <Avatar alt="Agnes Walker" src="./public/img/avatar3.png" />
                </AvatarGroup>

            </Box>
            <Box className={styles.control_point_class}>
                < ControlPointIcon className={styles.control_point_icon} />
            </Box>
        </Box>

        <Box className={styles.analytic_subtitle}>
            <div style={{ width: '100%', marginTop: "20px" }}>
                <Box className={styles.analytic_subtitle_blocks}>

                    <Box className={styles.DashboardList_block}>
                        <Item className={styles.item_dashboard}>
                            <img src='./public/img/dashboard.png' />
                            Дашборды
                        </Item>
                        <Item className={styles.item_list}>
                            <MenuIcon sx={{ color: "#424242" }} />
                            Списком
                        </Item>
                    </Box>
                    <Divider sx={{ marginLeft: "20px" }} orientation="vertical" variant="middle" flexItem />


                    <Box className={styles.AccessOwnersTeam}>
                        <LockIcon className={styles.access_class} />
                        Limited Access
                    </Box>
                    <Divider sx={{ marginLeft: "20px" }} orientation="vertical" variant="middle" flexItem />

                    <Box className={styles.OwnersXTeam}>
                        <Typography className={styles.title_owners} variant="h5">
                            Owners
                        </Typography>
                        <CancelIcon className={styles.CancelIcon} />
                        <Typography className={styles.title_XTeam} variant="h5">
                            X Team
                        </Typography>
                    </Box>
                    <Box className={styles.SearchForm_class}>
                        <Paper className={styles.analytic_form}
                            component="form"
                            
                        >
                            <IconButton type="button" aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <InputBase

                                placeholder="Введите запрос"
                                inputProps={{ 'aria-label': 'Введите запрос' }}
                            />
                        </Paper>
                    </Box>
                    <Box sx={{ marginLeft: "20px" }} >
                        <Box className={styles.Analytic_avatar}>

                            <img src="./public/img/official-icon.png" alt="" />
                            <img src="./public/img/filtr-bottim-icon.png" alt="" />
                            <img src="./public/img/filtr-top-icon.png" alt="" />
                            <img src="./public/img/small.png" alt="" />
                            <img src="./public/img/edit-icon.png" alt="" />
                        </Box>
                    </Box>
                </Box>
            </div>
        </Box>
    </div>

}









