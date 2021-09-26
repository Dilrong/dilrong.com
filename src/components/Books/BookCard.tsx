import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Rating,
} from "@mui/material";
import BookCardType from "../../types";

const BookCard: React.FC<BookCardType> = ({
  id,
  image,
  title,
  author,
  publisher,
  grade,
  created_at,
}) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia component="img" height="300" image={image} alt={title} />
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6" noWrap={true}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">{author}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">{publisher}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption">{created_at}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Rating name="read-only" value={grade} readOnly />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BookCard;
