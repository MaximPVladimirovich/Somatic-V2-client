import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
});

export default function StudioCard(props) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        image={props.studio.img}
      />
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.studio.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.studio.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
