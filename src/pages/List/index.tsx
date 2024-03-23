import { Stack } from "@mui/material";
import { CurrentListComponent } from "../../components/CurrentList/CurrentList";
import People from "../../components/People/Peoples";
import TableListComponent from "../../components/TableList/TableList";
import { Layout } from "../../components/Layout";


export const ListPage = () => {
    return (
        <Layout>
            <Stack direction={"column"} justifyContent={"space-between"}>
                <People />
                <CurrentListComponent />
                <TableListComponent />
            </Stack>
        </Layout>
    )
}