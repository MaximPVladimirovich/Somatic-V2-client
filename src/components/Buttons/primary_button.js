import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/Styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({

  primary_btn: {
    marginTop: theme.spacing(2),
    margin: 'auto',
    borderRaduis: 25,
    width: 370,
    height: 40,
  },
  secondary_btn: {
    marginTop: theme.spacing(2),
    margin: 'auto',
    borderRaduis: 25,
    width: 370,
    height: 40,
    color: '#FFFFFF',
    backgroundColor: '#18A0FB',
  },
}))

export default function PrimaryButton() {
  const classes = useStyles()

  return (
    <Grid container direction="column" alignItems="center" justifyContent="space-between">
      <Grid item xs={12}>
        <Button className={classes.primary_btn} color="secondary" variant="outlined" >Get Started</Button>
      </Grid>
      <Grid item xs={12}>
        <Button className={classes.secondary_btn} variant="outlined" >Explore classes</Button>
      </Grid>
    </Grid>

  )
}
