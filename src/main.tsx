import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import Router from './app/router/index.tsx'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

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

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename='/'>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </LocalizationProvider>


  </React.StrictMode>

)
