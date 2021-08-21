import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/Styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  primary_btn: {
    margin: 'auto',
  }
}))

export default function PrimaryButton() {
  const classes = useStyles()

  return (
    <Grid container direction="row" justifyContent="center" alignItems="stretch">
      <Button className={classes.primary_btn} color="secondary" variant="outlined" >Explore classes</Button>
      <Button className={classes.primary_btn} color="secondary" variant="outlined" >Explore classes</Button>
    </Grid>

  )
}
