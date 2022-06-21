import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import '../style/bookCard.css'
import { API_IMG } from "../const/API";

const BookCard = ({book}) => {
  return (
    <div className="book_card mx-2 mb-4 ">
      {" "}
      <Card sx={{ maxWidth: 345 }} >
        <CardMedia
          component="img"
          height="140"
          image={book.imgUrl && `${API_IMG}/${book.imgUrl}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.name}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button> */}
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default BookCard;
