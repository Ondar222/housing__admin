import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from "@mui/material"
import { ChartContainer, BarPlot } from '@mui/x-charts';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import Stack from '@mui/material/Stack';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const uData = [3000, 3500, 2500, 2780];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
];


const data = [
  { label: 'Group A', value: 500 },
  { label: 'Group B', value: 100 },
  { label: 'Group C', value: 100 },
  { label: 'Group D', value: 100 },
];

const dataset = [
  {
    seoul: 21,
    result: 'Итоги',
  },
  {
    seoul: 28,
    result: 'За неделю',
  },
  {
    seoul: 41,
    result: 'Прогноз',
  },
  {
    seoul: 73,
    result: 'Всего',
  },
]

const valueFormatter = (value: number) => `${value}mm`;

export default function AnalyticGraficComponent() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "20px", display: "flex", flexDirection: "row", gap: "20px" }}>
      <Grid container spacing={3} sx={{ display: 'flex', flexDirection: "column", width: "34%" }}>
        <Grid xs>
          <Item>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "20px" }}>
              <Typography variant="h4" gutterBottom sx={{ fontSize: "16px", fontWeight: "bold" }}>
                Teams Strength
              </Typography>
              <Typography variant="h4" gutterBottom sx={{ fontSize: "16px", fontWeight: "bold" }}>
                ...
              </Typography>
            </Box>
            <Box>
              <ChartContainer
                width={317}
                height={300}
                series={[{ data: uData, label: 'uv', type: 'bar' }]}
                xAxis={[{ scaleType: 'band', data: xLabels }]}
              >
                <BarPlot />
              </ChartContainer>
            </Box>
          </Item>
        </Grid>
        <Grid xs>
          <Item>
            <Box>
              <Stack direction="row">
                <PieChart
                  series={[
                    {
                      paddingAngle: 5,
                      innerRadius: 60,
                      outerRadius: 40,
                      data,
                    },
                  ]}

                  width={200}
                  height={200}
                  legend={{ hidden: true }}
                />
              </Stack>

            </Box>
          </Item>
        </Grid>
      </Grid>
      <Grid xs>
        <Item>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Typography variant="h4" gutterBottom sx={{ fontSize: "16px", fontWeight: "bold", marginTop: "20px" }}>
              Динамика подачи заявок
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ fontSize: "16px", fontWeight: "bold", display: "flex", flexDirection: "row", gap: "20px" }}>
              <p>Day</p>
              <p>Week</p>
              <p>Month</p>
            </Typography>
          </Box>
          <Box sx={{ height: "530px" }}>
            <BarChart
              dataset={dataset}
              yAxis={[{ scaleType: 'band', dataKey: 'result' }]}
              series={[{ dataKey: 'seoul', valueFormatter }]}
              layout="horizontal"

            />
          </Box>
        </Item>
      </Grid>
    </Box>
  );
}