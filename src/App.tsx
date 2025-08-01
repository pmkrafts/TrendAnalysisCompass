
import './App.css'
import { ThemeProvider, CssBaseline } from '@mui/material';
import bentoGlassTheme from './theme';


import PersistentDrawerLeft from './components/card/Drawer';

function App() {

  return (
    <ThemeProvider theme={bentoGlassTheme}>
      <CssBaseline />
      <PersistentDrawerLeft />
    </ThemeProvider>
  )
}

export default App
