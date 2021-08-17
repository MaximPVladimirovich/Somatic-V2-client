import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StudioCard from './StudioCard'
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({

// });

export default function CardGrid() {
  const [studios, setStudios] = useState([])

  const getStudioData = async () => {
    await fetch("http://127.0.0.1:3000/")
      .then(response => response.json())
      .then(json => {
        setStudios([json])
      });
  };

  useEffect(() => {
    getStudioData()
  }, [])

  // const classes = useStyles();

  let loaded = function () {
    return (
      <div>{
        studios.forEach(function (studio) {
          return <StudioCard studio={studio} />
        })
      }
        <p>
          {JSON.stringify(studios, null)}
        </p>
      </div>
    )

  }

  return (
    <div className="projects">
        {studios ? loaded() : <h1>Loading...</h1>}
    </div>
)
}

