import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

function createData(
    name: string,
    direction: string,
    phone: string,
    email: string,
    application: string,
    status: string
) {
    return { name, direction, phone, email, application, status };
}

const rows = [
    createData('Иванов Иванов', 'Строительство', '8(225)5550118', 'jane@microsoft.com', '21/02/23', 'В работе'),
    createData('Иванов Иванов', 'Ипотека', '8(205)5550100', 'floyd@yahoo.com', '21/02/23', 'Не готов'),
    createData('Иванов Иванов', 'Ипотека', '8(205)5550100', 'floyd@yahoo.com', '21/02/23', 'Не готов'),
    createData('Иванов Иванов', 'Строительство', '8(225)5550118', 'jane@microsoft.com', '21/02/23', 'В работе'),
    createData('Иванов Иванов', 'Строительство', '8(225)5550118', 'jane@microsoft.com', '21/02/23', 'В работе'),
    createData('Иванов Иванов', 'Строительство', '8(225)5550118', 'jane@microsoft.com', '21/02/23', 'В работе'),
    createData('Иванов Иванов', 'Ипотека', '8(208)5550112', 'jacob@yahoo.com', '21/02/23', 'В работе'),
    createData('Иванов Иванов', 'Ипотека', '8(205)5550100', 'floyd@yahoo.com', '21/02/23', 'Не готов'),
];

export default function TableListComponent() {
    return (
        <Container maxWidth={false} disableGutters>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Имя Фамилия</TableCell>
                            <TableCell align="right">Направление</TableCell>
                            <TableCell align="right">Телефон</TableCell>
                            <TableCell align="right">Почта</TableCell>
                            <TableCell align="right">Дата заявки</TableCell>
                            <TableCell align="right">Статус</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.direction}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.application}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "20px" }}>

                <Typography variant="subtitle1" gutterBottom sx={{ fontSize: "14px", fontWeight: "normal", }}>
                    Показывать 1 - 8 из 800 заявок
                </Typography>
                <Stack spacing={2}>
                    <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack>
            </Box>
        </Container>

    );
}