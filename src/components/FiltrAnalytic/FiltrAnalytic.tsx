import { Typography } from "@mui/material"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Avatar from '@mui/material/Avatar';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function FiltrAnalyticComponent() {
    return <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <Item>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "67%" }}>
                        <Typography variant="h4" gutterBottom sx={{ fontSize: "11px", fontWeight: "bold" }}>
                            Всего
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontSize: "11px", fontWeight: "bold", color: "blue", display: "flex", flexDirection: "row", gap: "10px" }}>
                            <img src="/img/official-icon.png" alt="" width={20} height={20} />
                            800
                        </Typography>
                    </Box>

                    <Box>
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Typography variant="h4" gutterBottom sx={{ fontSize: "10px", fontWeight: "bold" }}>
                                Готово документов
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom sx={{ fontSize: "11px", fontWeight: "bold", color: "blue", display: "flex", flexDirection: "row", gap: "10px" }}>
                                632/800
                            </Typography>
                        </Box>
                        <Box sx={{ width: 222 }}>

                            <Slider
                                // size="small"
                                defaultValue={70}
                                aria-label="Default"
                                valueLabelDisplay="auto"

                            />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "start", gap: "20px" }}>
                            <Typography variant="h4" gutterBottom sx={{ fontSize: "10px", fontWeight: "bold", background: "#007AFF", color: "#FFFF", padding: "10px 10px", borderRadius: "40px" }}>
                                Ипотека
                            </Typography>
                            <Typography variant="h4" gutterBottom sx={{ fontSize: "10px", fontWeight: "bold", background: "#EAB308", color: "#FFFF", padding: "10px 10px", borderRadius: "40px" }}>
                                Строительство
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: 'row', justifyContent: "space-between" }}>

                            <Box sx={{ display: "flex", flexDirection: 'row', justifyContent: "start" }}>
                                <Avatar sx={{ width: "32px", height: "32px" }} alt="Travis Howard" src="/img/avatar1.png" />
                                <Avatar sx={{ width: "32px", height: "32px" }} alt="Agnes Walker" src="/img/avatar3.png" />
                                <Avatar sx={{ width: "32px", height: "32px" }} alt="Agnes Walker" src="/img/Other.png" />
                                <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', gap: "20px" }}>
                                    <img src="./img/Add-icon.png" alt="" width={32} height={32} style={{ marginLeft: "5px" }} />
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row", marginLeft: "10px", gap: "10px", marginTop: "5px" }}>
                                    <Box sx={{ display: "flex", flexDirection: 'row', gap: "10px" }}>
                                        <img src="./img/file_present.png" alt="" width={20} height={20} />
                                        <Typography variant="h1" gutterBottom sx={{ fontSize: "10px", fontWeight: "bold", display: "flex", flexDirection: 'column', justifyContent: 'center' }}>
                                            2
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: 'row', gap: "10px" }}>
                                        <img src="./img/message.png" alt="" width={20} height={20} />
                                        <Typography variant="h1" gutterBottom sx={{ fontSize: "10px", fontWeight: "bold", display: "flex", flexDirection: 'column', justifyContent: 'center' }}>
                                            3
                                        </Typography>
                                    </Box>

                                </Box>

                            </Box>
                        </Box>
                    </Box>
                </Item>
            </Grid>
            <Grid item xs={4}>
                <Item>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "67%" }}>
                        <Typography variant="h4" gutterBottom sx={{ fontSize: "11px", fontWeight: "bold" }}>
                            Обычные
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontSize: "11px", fontWeight: "bold", color: "blue", display: "flex", flexDirection: "row", gap: "10px" }}>
                            <img src="/img/official-icon.png" alt="" width={20} height={20} />
                            561
                        </Typography>
                    </Box>

                    <Box>
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Typography variant="h4" gutterBottom sx={{ fontSize: "10px", fontWeight: "bold" }}>
                                Прогресс
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom sx={{ fontSize: "11px", fontWeight: "bold", color: "blue", display: "flex", flexDirection: "row", gap: "10px" }}>
                                324/561
                            </Typography>
                        </Box>
                        <Box sx={{ width: 222 }}>

                            <Slider
                                // size="small"
                                defaultValue={50}
                                aria-label="Default"
                                valueLabelDisplay="auto"

                            />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "start", gap: "20px" }}>
                            <Typography variant="h4" gutterBottom sx={{ fontSize: "10px", fontWeight: "bold", background: "#007AFF", color: "#FFFF", padding: "10px 10px", borderRadius: "40px" }}>
                                Отработано
                            </Typography>
                            <Typography variant="h4" gutterBottom sx={{ fontSize: "10px", fontWeight: "bold", background: "#EAB308", color: "#FFFF", padding: "10px 10px", borderRadius: "40px" }}>
                                Строительство
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: 'row', justifyContent: "space-between" }}>

                            <Box sx={{ display: "flex", flexDirection: 'row', justifyContent: "start" }}>
                                <Avatar sx={{ width: "32px", height: "32px" }} alt="Travis Howard" src="/img/avatar1.png" />
                                <Avatar sx={{ width: "32px", height: "32px" }} alt="Agnes Walker" src="/img/avatar3.png" />
                                <Avatar sx={{ width: "32px", height: "32px" }} alt="Agnes Walker" src="/img/Other.png" />
                                <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', gap: "20px" }}>
                                    <img src="./img/Add-icon.png" alt="" width={32} height={32} style={{ marginLeft: "5px" }} />
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row", marginLeft: "10px", gap: "10px", marginTop: "5px" }}>
                                    <Box sx={{ display: "flex", flexDirection: 'row', gap: "10px" }}>
                                        <img src="./img/file_present.png" alt="" width={20} height={20} />
                                        <Typography variant="h1" gutterBottom sx={{ fontSize: "10px", fontWeight: "bold", display: "flex", flexDirection: 'column', justifyContent: 'center' }}>
                                            2
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: 'row', gap: "10px" }}>
                                        <img src="./img/message.png" alt="" width={20} height={20} />
                                        <Typography variant="h1" gutterBottom sx={{ fontSize: "10px", fontWeight: "bold", display: "flex", flexDirection: 'column', justifyContent: 'center' }}>
                                            4
                                        </Typography>
                                    </Box>

                                </Box>

                            </Box>
                        </Box>
                    </Box>
                </Item>
            </Grid>
            <Grid item xs={4}>
                <Item>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "67%" }}>
                        <Typography variant="h4" gutterBottom sx={{ fontSize: "11px", fontWeight: "bold" }}>
                            Многодетные
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontSize: "11px", fontWeight: "bold", color: "blue", display: "flex", flexDirection: "row", gap: "10px" }}>
                            <img src="/img/official-icon.png" alt="" width={20} height={20} />
                            279
                        </Typography>
                    </Box>

                    <Box>
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Typography variant="h4" gutterBottom sx={{ fontSize: "10px", fontWeight: "bold" }}>
                                Прогресс
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom sx={{ fontSize: "11px", fontWeight: "bold", color: "blue", display: "flex", flexDirection: "row", gap: "10px" }}>
                                83/279
                            </Typography>
                        </Box>
                        <Box sx={{ width: 222 }}>

                            <Slider
                                // size="small"
                                defaultValue={35}
                                aria-label="Default"
                                valueLabelDisplay="auto"

                            />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "start", gap: "20px" }}>
                            {/* <Typography variant="h4" gutterBottom sx={{ fontSize: "10px", fontWeight: "bold", background: "#007AFF", color: "#FFFF", padding: "10px 10px", borderRadius: "40px" }}>
                                    Ипотека
                                </Typography> */}
                            <Typography variant="h4" gutterBottom sx={{ fontSize: "10px", fontWeight: "bold", background: "#EAB308", color: "#FFFF", padding: "10px 10px", borderRadius: "40px" }}>
                                Строительство
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: 'row', justifyContent: "space-between" }}>

                            <Box sx={{ display: "flex", flexDirection: 'row', justifyContent: "start" }}>
                                <Avatar sx={{ width: "32px", height: "32px" }} alt="Travis Howard" src="/img/avatar1.png" />

                                <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', gap: "20px" }}>
                                    <img src="./img/Add-icon.png" alt="" width={32} height={32} style={{ marginLeft: "5px" }} />
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row", marginLeft: "10px", gap: "10px", marginTop: "5px" }}>
                                    <Box sx={{ display: "flex", flexDirection: 'row', gap: "10px" }}>
                                        <img src="./img/file_present.png" alt="" width={20} height={20} />
                                        <Typography variant="h1" gutterBottom sx={{ fontSize: "10px", fontWeight: "bold", display: "flex", flexDirection: 'column', justifyContent: 'center' }}>
                                            2
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: 'row', gap: "10px" }}>
                                        <img src="./img/message.png" alt="" width={20} height={20} />
                                        <Typography variant="h1" gutterBottom sx={{ fontSize: "10px", fontWeight: "bold", display: "flex", flexDirection: 'column', justifyContent: 'center' }}>
                                            4
                                        </Typography>
                                    </Box>

                                </Box>

                            </Box>
                        </Box>
                    </Box>
                </Item>
            </Grid>
        </Grid>
    </Box>

}