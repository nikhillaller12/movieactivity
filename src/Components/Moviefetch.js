import React,{ useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Favourite from './Favourite';



export default function Moviefetch() {
  const [articles, setArticles] = useState([]);
  const [fav, setFav] = useState([]);

  const update = async () => {
    const url ="https://www.omdbapi.com/?i=tt3896198&apikey=f14b2847&s=Game%20of%20Thrones";
    let data = await fetch(url);
    let pdata = await data.json();
    setArticles(pdata.Search);
  };
  const handlefav = (element1)=>{
    setFav(fav.concat(element1));
    console.log(fav);
    <Favourite art={fav}/>
  }
  useEffect(() => {
    update();
  }, []);

  return <div>
      <div className="container my-4">
          <div className="row">
            {articles.map((element) => {
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
                <Button onClick={handlefav} size="small">Add To Favourite</Button>
              </CardActions>
            </Card>
            </div>
              );
              })}
              </div>
              </div>
  </div>;
}
