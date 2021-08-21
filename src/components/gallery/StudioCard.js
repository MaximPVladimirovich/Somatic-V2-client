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
    padding: theme.spacing(2),
    margin: 'auto',
    marginTop: 20,
    maxWidth: 400,
    backgroundColor: '#FFFFFF',
  },
  img: {
    width: 128,
    height: 128,

  },
  image: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  name: {
    fontWeight: 'Bold',
  }
}));

export default function StudioCard(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined" square>
        <Grid container spacing={2}>
          <Grid item xs>
            <img className={classes.image} alt={'Not found'} src={props.studio.img} />
          </Grid>
          <Grid item xs container direction="column" spacing={1}>
            <Typography variant="body2" color="textSecondary">{props.studio.categories}</Typography>
            <Typography gutterBottom className={classes.name}>{props.studio.name}</Typography>
            <Typography>{props.studio.city}</Typography>
          </Grid>

        </Grid>
      </Paper >

    </div >

  )
}
