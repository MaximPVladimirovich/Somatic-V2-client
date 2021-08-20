import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import StudioCard from './StudioCard'
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({

});

export default function CardGrid() {
  const [studios, setStudios] = useState(null)


  const getStudioData = async function () {
    try {
      const req = await fetch("http://127.0.0.1:3001")
      const data = await req.json()
      console.log(data)
      setStudios(data.studios)
    } catch (error) {
      console.log(error)
    }

  };

  useEffect(() => {
    getStudioData()

  }, [])

  const classes = useStyles();

  const loaded = function () {
    return studios.map(studio => {
      return (
        <div>
          <h1>{studio.name}</h1>
        </div >);
    })
  }
  return (
    <div>
      {studios ? loaded() : <h1>Loading...</h1>}
    </div>
  )
}




