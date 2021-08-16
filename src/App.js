import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { createTheme } from '@material-ui/core/styles'
import './App.css';
import Navbar from './components/Navbar'
import SimpleCard from './components/gallery/Card'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#18A0FB',
    },
    background: {
      paper: '#BDBDBD',
    },
    text: {
      white: '#FFFFFF',
      black: '000000'
    }
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
      </div>
      <SimpleCard />
    </ThemeProvider>

  );
}

export default App;
