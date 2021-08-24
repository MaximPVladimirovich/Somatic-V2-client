import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import { SecondaryButton } from '../components/Buttons/primary_button'
import { palette } from '@material-ui/system';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  textField: {
    marginTop: 20,
  },
  heading: {
    marginTop: theme.spacing(6)
  },
  subheading: {
    margin: 4
  },
  phelp: {
    color: theme.palette.secondary.main,
    margin: theme.spacing(2),
  }
}));

export default function Signup() {

  const classes = useStyles()

  return (
    <>
      <Grid container direction='column' alignItems='center' justifyContent="space-between">
        <div className={classes.heading}>
          <Typography variant='h4'>Sign Up</Typography>
        </div>
        <div className={classes.subheading}>
          <Typography variant='h6'>Already have an account? Sign in.</Typography>
        </div>
        <div className={classes.root}>
          <TextField className={classes.textField} id="filled-full-width" fullWidth label="Name" variant="filled" />
          <TextField className={classes.textField} id="filled-full-width" fullWidth label="Email" variant="filled" />
          <TextField className={classes.textField} id="filled-full-width" fullWidth label="Password" variant="filled" />
        </div>
        <SecondaryButton text={'Sign up'}></SecondaryButton>
        <div className={classes.phelp}>
          <Typography variant='h6'>Forgot your password?</Typography>
        </div>
      </Grid>
    </>

  )
}
