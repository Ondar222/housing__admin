import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import './styles/Sidebar.module.css'
import { ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter} from 'react-router-dom'
import Router from './app/router/index.tsx'
// import LayoutSidebar from './components/LayoutSidebar/LayoutSidebar.tsx'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#007AFF', light: '#E3F2FD', dark: '#4CD7F6' },
    secondary: { main: '#4CD7F6', light: '#F3E5F5', dark: '#AB47BC' },
    error: { main: '#FF285C', light: '#E57373', dark: '#D32F2F' },
    warning: { main: '#FFAB08', light: '#FFB74D', dark: '#F57C00' },
    info: { main: '#04B1FF', light: '#4FC3F7', dark: '#0288D1' },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: { styleOverrides: { root: { padding: '12px' } } },
    MuiList: {
      styleOverrides: {
        root: { padding: 0, '& ul': { marginLeft: '40px' } },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Router />
    </BrowserRouter>
</React.StrictMode>

)
