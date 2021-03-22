import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./ProductPage.module.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "60%",
    margin: "0 auto",
  },
  comment: {
    ...theme.typography.button,
    // backgroundColor: theme.text.secondary,
    padding: theme.spacing(1),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
export default function ProductPage() {
  const classes = useStyles();
  const [productInfo, setProductInfo] = useState([]);
  const [comment, setComment] = useState("");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const { id } = useParams();
  useEffect(async () => {
    const result = await axios(
      `https://inforce-test-app.herokuapp.com/products/${id}`
    );
    setProductInfo(result.data);
    console.log(result.data);
  }, [id]);

  const handleComment = () => {
    console.log(comment);
    axios
      .post(`https://inforce-test-app.herokuapp.com/comments`, {
        description: comment,
        product: { ...productInfo },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };
  const handleSubmit = (e) => {
    // let size = {
    //   widht,
    //   height,
    // };
    e.preventDefault();
    console.log(name);
    // // console.log(JSON.stringify({ name, image, count, size, weight }));
    // axios
    //   .post(`https://inforce-test-app.herokuapp.com/products`, {
    //     name: name,
    //     imageUrl: image,
    //     count: count,
    //     size: {
    //       width: Number(width),
    //       height: Number(height),
    //     },
    //     weight: weight,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //   });
  };

  const openEditModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={styles.centered}>
        <Button
          onClick={openEditModal}
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<EditIcon />}
        >
          Edit Product
        </Button>
      </div>
      <img className={styles.mainImage} src={productInfo.imageUrl} alt="" />
      <h1 className={styles.title}>{productInfo.name}</h1>
      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {productInfo.size && (
            <>
              <Typography>widht: {productInfo.size.width}</Typography>
              <br />
              <Typography ml={2}>height: {productInfo.size.height}</Typography>
            </>
          )}
          <Typography>weight: {productInfo.weight}</Typography>
        </AccordionDetails>
      </Accordion>
      <h2 className={styles.title}>Comments</h2>
      <div className={styles.centered}>
        <FormControl fullWidth className={classes.root} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Comment</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={comment}
            labelWidth={60}
            onChange={(e) => setComment(e.target.value)}
          />
        </FormControl>
      </div>
      <div className={styles.centered}>
        <Button onClick={handleComment} variant="contained">
          Add Comment
        </Button>
      </div>
      {productInfo.comments &&
        productInfo.comments.map((comment) => (
          <div className={styles.offset} key={comment.id}>
            <Box className={classes.root} p={3} my={3} bgcolor="text.secondary">
              {comment.description}
            </Box>
          </div>
        ))}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add new Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the form to add new product
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              value={productInfo.name}
              id="name"
              label="Name of Product"
              type="name"
              fullWidth
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              value={productInfo.imageUrl}
              id="image"
              label="imageUrl"
              type="text"
              fullWidth
              onChange={(e) => setImage(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="count"
              value={productInfo.count}
              label="Count of Product"
              type="number"
              fullWidth
              onChange={(e) => setCount(e.target.value)}
            />
            <Grid container>
              <Box>
                {/* <TextField
                  autoFocus
                  margin="dense"
                  value={productInfo.size.width}
                  id="width"
                  label="Width"
                  type="number"
                  onChange={(e) => setWidth(e.target.value)}
                /> */}
              </Box>
              <Box ml={2}>
                {/* <TextField
                  autoFocus
                  margin="dense"
                  value={productInfo.size.height}
                  id="height"
                  label="Height"
                  type="number"
                  onChange={(e) => setHeight(e.target.value)}
                /> */}
              </Box>
            </Grid>
            <TextField
              autoFocus
              margin="dense"
              value={productInfo.weight}
              id="weight"
              label="Weight"
              type="text"
              fullWidth
              onChange={(e) => setWeight(e.target.value)}
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" onClick={handleClose} color="primary">
                Add
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
