
import './App.css'
// import ButtonUsage from './components/Button'
// import AnchorTemporaryDrawer from './components/Drawer'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

import BoxSx from './theme/box'
import MiniDrawer from './components/Drawer';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BoxSx>
        {/* <AnchorTemporaryDrawer /> */}
        <MiniDrawer />
        {/* <ButtonUsage /> */}
      </BoxSx>
    </ThemeProvider>
  )
}

export default App
