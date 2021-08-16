import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import HamburgerMenu from './HamburgerMenu'


import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginRight: 'auto',
    color: theme.palette.text.black
  },
  AppBar: {
    backgroundColor: theme.palette.background.paper,
  }
}))

export default function Navbar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      < AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Somatic
          </Typography>
          <HamburgerMenu />
        </Toolbar>
      </AppBar >
    </div>
  )
}
