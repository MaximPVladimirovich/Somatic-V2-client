import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { createTheme } from '@material-ui/core/styles'
import './App.css';
import Navbar from './components/Navbar'
import CardGrid from './components/gallery/CardGrid'
import HomeImage from './components/home_image/Home_image'

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
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 20,
      },
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <HomeImage />
      <CardGrid />
    </ThemeProvider>

  );
}

export default App;
