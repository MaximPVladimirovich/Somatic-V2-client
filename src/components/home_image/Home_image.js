import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import PrimaryButton from '../Buttons/primary_button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    maxHeight: 400,
  },
  text: {
    display: 'flex',
    width: '55%',
    margin: 'auto',
    marginTop: theme.spacing(2),
    textAlign: 'center',
    fontSize: 22,
  }
}))


export default function HomeImage() {
  const classes = useStyles()
  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia className={classes.media} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Ffreefuninaustin.com%2Fwp-content%2Fuploads%2Fsites%2F44%2F2015%2F08%2FScreen-Shot-2015-08-13-at-8.37.09-AM.png%3Fssl%3D1&f=1&nofb=1' title='dance class' />
        </CardActionArea>
      </Card>
      <Typography className={classes.text}>Easily find the classes you want and start moving.</Typography>
      <PrimaryButton ></PrimaryButton>
    </>
  )
}
