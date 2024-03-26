import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material"
import { FC } from "react"
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { AccountInfo } from "../Account/Account";
import { drawerWidth } from "./consts";
import { Link } from "react-router-dom";

type SidebarT = {
    isOpen: boolean
    toggleDrawer: (status: boolean) => void
}

const Sidebar: FC<SidebarT> = () => {

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                width: drawerWidth,
            }}
        >
            <Stack
                direction={"row"}
                alignItems={"center"}
                gap={2}
                sx={{
                    margin: "20px"
                }}
            >
                <img
                    srcSet={`/img/housing-logo.png`}
                    src={`/img/housing-logo.png`}
                    loading="lazy"
                    width={31}
                />
                <Typography variant="h4" sx={{
                    width: 155,
                    fontSize: 12,
                    fontWeight: 700
                }}>
                    ИС Жилищных программ
                </Typography>
            </Stack>

            <Divider />
            <AccountInfo name={"Фамилия И.О."} role={"Администратор"} avatar={"/img/avatar.png"} />
            <Divider />

            <List sx={{ marginLeft: "10px" }}>
                <ListItem component={Link} to="/analytics">
                    <ListItemIcon>
                        <DataSaverOffIcon />
                    </ListItemIcon>
                    <ListItemText primary="Аналитика" />
                </ListItem>
                <ListItem component={Link} to="/list">
                    <ListItemIcon>
                        <BorderColorIcon />
                    </ListItemIcon>
                    <ListItemText primary="Список заявок" />
                </ListItem>
                <ListItem component={Link} to="/edit">
                    <ListItemIcon>
                        <PlaylistAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Добавить данные" />
                </ListItem>
            </List>
        </Drawer>
    )
}

export { Sidebar }