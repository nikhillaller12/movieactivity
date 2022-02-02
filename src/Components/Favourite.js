import React,{useContext} from 'react';
import  MovieContext from './Context';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Favourite() {
  const {movieList,update} = useContext(MovieContext);
  const a = {movieList};
  return <>
  {a.length===0?<h1>No favourite Found</h1>:<div className="container my-4">
          <div className="row">
            {a.map((element) => {
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
                <Button onClick={()=>{update(element);console.log(movieList)}} size="small">Add To Favourite</Button>
              </CardActions>
            </Card>
            </div>
              );
              })}
              </div>
              </div>}
  </>  
}
