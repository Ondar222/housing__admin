import {
    AppBar as MuiAppBar,
    AppBarProps as MuiAppBarProps, styled
} from "@mui/material"
import { drawerWidth } from "./consts";

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}
const Header = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
    width: "100vw",
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100vw - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export { Header }