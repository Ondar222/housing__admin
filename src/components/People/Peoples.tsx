import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import styles from './People.module.css'
import { Stack } from '@mui/material';

export default function People() {
    return (
        <Stack
            direction={"row"}
            justifyContent={"space-between"}
            className={styles.People}
        >
            <Box className={styles.People_class}>
                <img src='/img/total-logo.png' />
                <Box className={styles.All_class}>
                    <Typography className={styles.all_text} variant="subtitle2" gutterBottom >
                        Всего
                    </Typography>
                    <Typography className={styles.all_number} variant="h5" gutterBottom >
                        800
                    </Typography>
                </Box>
            </Box >

            <Divider sx={{ marginRight: "20px" }} orientation="vertical" variant="middle" flexItem />
            <Box className={styles.Standar_class}>
                <img src='/img/standart-logo.png' />
                <Box className={styles.Standart_block}>
                    <Typography className={styles.standart_text} variant="subtitle2" gutterBottom >
                        Обычные
                    </Typography>
                    <Typography className={styles.standart_number} variant="h5" gutterBottom >
                        561
                    </Typography>
                </Box>
            </Box >

            <Divider sx={{ marginRight: "20px" }} orientation="vertical" variant="middle" flexItem />

            <Box className={styles.Large_class}>
                <img src='/img/large-logo.png' />
                <Box className={styles.Large_block}>
                    <Typography className={styles.large_text} variant="subtitle2" gutterBottom sx={{ fontSize: "12px", fontWeight: "normal" }}>
                        Многодетные
                    </Typography>
                    <Typography variant="h5" gutterBottom sx={{ fontSize: "20px", fontWeight: "bold" }}>
                        279
                    </Typography>
                </Box>
            </Box>

        </Stack>
    );
}