import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Favourite(props) {
  return props.art.length===0?<h1>No fav Added</h1>:<div>
      <div className="container my-4">
          <div className="row">
            {props.art.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={element.Poster}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {element.Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Release Year: {element.Year}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
              </CardActions>
            </Card>
            </div>
              );
              })}
              </div>
              </div>
  </div>;
}
