import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(4),
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '75%',
    height: theme.spacing(20),
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));

export default function StudioCard(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined" square />
    </div>

  )
}
