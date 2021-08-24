import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { createTheme } from '@material-ui/core/styles'
import './App.css';
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router-dom'


// Pages
import Home from './Pages/Home'
import Classes from './Pages/classes'
import SignUp from './Pages/SignUp'

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
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/classes' component={Classes} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
