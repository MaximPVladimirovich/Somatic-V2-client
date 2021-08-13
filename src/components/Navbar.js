import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    marginRight: 'auto'
  },
  menuButton: {
    marginLeft: 'auto',
  }
})


export default function Navbar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      < AppBar position="static" >
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Somatic
          </Typography>
          <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar >
    </div>
  )


}
