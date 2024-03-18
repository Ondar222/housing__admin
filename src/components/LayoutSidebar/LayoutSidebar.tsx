import * as React from 'react';
import { useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import AvatarSidebar from '../AvatarSidebar/AvatarSidebar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import FolderIcon from '@mui/icons-material/Folder';
import NotificationsIcon from '@mui/icons-material/Notifications';
import styles from './LayoutSidebar.module.css'

const drawerWidth = 280;
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const itemData = [
  {
    img: './public/img/housing-logo.png',
    title: 'Breakfast',
  }

];

export default function LayoutSidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
              height: "88px"
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box className={styles.header}>
          <Paper className='header_form'
            component="form"
            sx={{ p: '2px 4px',}}
          >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Введите запрос"
              inputProps={{ 'aria-label': 'Введите запрос' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <ExitToAppIcon />
            </IconButton>
          </Paper>
          <IconButton className={styles.header_icon} type="button" aria-label="search">
              <FolderIcon/>
              <NotificationsIcon />
            </IconButton>
          </Box>
            
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Box className={styles.menu}>
          <ImageList sx={{ width: 31, height: 31 }} cols={1} rowHeight={31}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>

            ))}

          </ImageList>
          <Box className={styles.menu_title_block}>
            <Typography className={styles.menu_title} variant="h4" gutterBottom>
              ИС Жилищных программ
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ marginBottom: "20px" }} />
        <AvatarSidebar />
        <Divider sx={{ marginTop: "20px" }} />


        <List sx={{marginLeft: "10px"}}>
          <ListItem button component={Link} href="/analytics">
            <ListItemIcon>
              <DataSaverOffIcon />
            </ListItemIcon>
            <ListItemText primary="Аналитика" />
          </ListItem>
          <ListItem button component={Link} href="/list">
            <ListItemIcon>
              <BorderColorIcon />
            </ListItemIcon>
            <ListItemText primary="Текущий список" />
          </ListItem>
          <ListItem button component={Link} href="/edit">
            <ListItemIcon>
              <PlaylistAddIcon />
            </ListItemIcon>
            <ListItemText primary="Редактировать" />
          </ListItem>
        </List>
        <Divider />
        <Divider sx={{ marginTop: "20px" }} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 1, }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
