import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import {
  Chip,
  IconButton,
  MenuItem,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { ApplicationTableT } from "../../types/Application";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

const status = [
  {
    value: "all",
    label: "Все",
  },
  {
    value: "assigned",
    label: "Одобрена",
  },
  {
    value: "rejected",
    label: "Отклонена",
  },
];

const ApplicationTable: FC<ApplicationTableT> = ({
  isLoading,
  data,
  currentPage,
  pageCount,
  onPageChange,
  onFilter,
}) => {
  const [filter, setFilter] = useState<Array<[string, string]>>();
  console.log(filter);
  const navigate = useNavigate()

  const ApplicationView = {
    false: (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell>Имя Фамилия</TableCell>
              <TableCell align="center">Назначение</TableCell>
              <TableCell align="center">Телефон</TableCell>
              <TableCell align="center">Почта</TableCell>
              <TableCell align="center">Дата заявки</TableCell>
              <TableCell align="center">Статус</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{item.id}</TableCell>
                <TableCell component="th" scope="row">
                  {item.applicant?.surname}&nbsp;
                  {item.applicant?.name}&nbsp;
                  {item.applicant?.patronymic}
                </TableCell>
                <TableCell align="center">{String(item.intention)}</TableCell>
                <TableCell align="center">{item.applicant?.phone}</TableCell>
                <TableCell align="center">{item.applicant?.email}</TableCell>
                <TableCell align="center">{item.date_created}</TableCell>
                <TableCell align="center">
                  <Chip
                    label={item.status}
                    color="success"
                    variant="filled"
                    sx={{
                      width: "100%",
                    }}
                  />
                  <IconButton onClick={() => navigate(`/application/${item.id}`)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    ),
    true: <Skeleton height={200} />,
  };

  return (
    <Stack direction={"column"} gap={3} paddingY={5}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h4">Заявки</Typography>

        <Stack direction={"row"} gap={3}>
          {/* <TextField
                        size="small"
                        name='*'
                        placeholder='Введите запрос'
                        InputProps={{
                            startAdornment: <><Search />&nbsp;</>
                        }}
                        onChange={(e) => {
                            console.log(e)
                            setFilter([[e.target.name, e.target.value]])
                        }}
                    >
                    </TextField> */}

          <TextField
            select
            name="status"
            size="small"
            InputProps={{
              startAdornment: <Typography>Статус:&nbsp;</Typography>,
            }}
            sx={{ width: "172px" }}
            onChange={(e) => {
              const { name, value } = e.target;

              console.log(name, value);

              if (value === "all") {
                setFilter((prev) => prev?.filter((item) => item[0] != name));
                onFilter({ name, value: null });
              } else {
                setFilter((prev) => {
                  if (prev != undefined) {
                    return [...prev, [name, value]];
                  }

                  if (prev === undefined) {
                    return [[name, value]];
                  }
                });

                onFilter({ name, value });
              }
            }}
          >
            {status.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
      </Stack>

      {ApplicationView[`${isLoading}`]}
      <Pagination
        count={pageCount}
        variant="outlined"
        shape="rounded"
        page={currentPage}
        onChange={onPageChange}
      />
    </Stack>
  );
};

export { ApplicationTable };
