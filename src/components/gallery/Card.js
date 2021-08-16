import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({

});

export default function SimpleCard() {
  const [studios, setStudios] = useState([])

  const getStudioData = () => {
    fetch("http://127.0.0.1:3000/")
      .then(response => response.json())
      .then(json => {
        setStudios(json)
      });
  };

  useEffect(() => {
    getStudioData()
  }, [])

  const classes = useStyles();

  return (
    <div>Api data...
      <p>
        {JSON.stringify(studios, null)}
      </p>
    </div>
  )

}

