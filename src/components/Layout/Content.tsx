import styled from "@emotion/styled";
import { drawerWidth } from "./consts";
import { Theme } from "@mui/material";

const Content = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    theme: Theme;
    open?: boolean;
}>(({ theme, open }) => ({
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100vw - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export { Content }