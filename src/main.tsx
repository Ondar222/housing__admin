import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Button, ThemeProvider, createTheme } from '@mui/material'



const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#F1FF4C', light: '#E3F2FD', dark: '#CCD750' },
    secondary: { main: '#F19DFF', light: '#F3E5F5', dark: '#AB47BC' },
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
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
