import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  home_banner: {
    margin: 'auto'
  }
}))


export default function HomeImage() {
  const classes = useStyles()
  return (
    <Grid container >
      <Grid item xs={12} className={classes.home_banner}>
        <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Ffreefuninaustin.com%2Fwp-content%2Fuploads%2Fsites%2F44%2F2015%2F08%2FScreen-Shot-2015-08-13-at-8.37.09-AM.png%3Fssl%3D1&f=1&nofb=1' alt='dance class'></img>
      </Grid>
    </Grid>
  )
}
