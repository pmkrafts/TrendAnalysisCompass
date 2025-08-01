
import './App.css'
// import ButtonUsage from './components/Button'
// import AnchorTemporaryDrawer from './components/Drawer'
import { ThemeProvider, CssBaseline } from '@mui/material';
import bentoGlassTheme from './theme';

// import BoxSx from './theme/box'
// import MiniDrawer from './components/Drawer';

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
