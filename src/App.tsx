import { useState } from 'react'
import './App.css'
import { Box, Button } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <Button type="button" variant="contained">Отправить</Button>
    </Box>
  )
}

export default App
