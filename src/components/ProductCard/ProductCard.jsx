import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import urls from "../../urls";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ProductCard({
  id,
  name,
  imageUrl,
  count,
  handleOpen,
  description,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.root} style={{ margin: "0 auto" }}>
      <Link to={`${urls.products}/${id}`} style={{ textDecoration: "none" }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imageUrl}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
          <CardContent>Product Count: {count}</CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Link to={`${urls.products}/${id}`} style={{ textDecoration: "none" }}>
          <Button variant="contained" size="small" color="primary">
            Learn More
          </Button>
        </Link>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => handleOpen(id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
