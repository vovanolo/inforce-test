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
import EditForm from "../../components/EditForm";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "60%",
    margin: "0 auto",
  },
  comment: {
    ...theme.typography.button,
    padding: theme.spacing(1),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
export default function ProductPage() {
  const classes = useStyles();
  const [productInfo, setProductInfo] = useState(null);
  const [comment, setComment] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [allComments, setAllComments] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const result = await axios(
        `https://inforce-test-app.herokuapp.com/products/${id}`
      );
      setProductInfo(result.data);
      setName(result.data.name);
      setImage(result.data.imageUrl);
      setCount(result.data.count);
      setAllComments(result.data.comments);
    })();
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
        setAllComments((state) => [...state, res.data]);
      });
  };
  const handleSubmit = (data) => {
    const finalData = {
      name: data.name,
      imageUrl: data.imageUrl,
      count: data.count,
      size: {
        width: data.width,
        height: data.height,
      },
      weight: data.weight,
      description: data.description,
    };
    handleClose();
    axios
      .put(`https://inforce-test-app.herokuapp.com/products/${id}`, finalData)
      .then((res) => {
        setProductInfo(res.data);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://inforce-test-app.herokuapp.com/comments/${id}`)
      .then((response) => {
        setAllComments((state) => state.filter((comment) => comment.id !== id));
      });
  };

  const openEditModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {productInfo && (
        <>
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
          <h2 className={styles.subtitle}>{productInfo.description}</h2>
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
                <div>
                  <h2>widht: {productInfo.size.width}</h2>
                  <h2 ml={2}>height: {productInfo.size.height}</h2>
                  <h2>weight: {productInfo.weight}</h2>
                </div>
              )}
            </AccordionDetails>
          </Accordion>
          <h2 className={styles.title}>Comments</h2>
          <div className={styles.centered}>
            <FormControl fullWidth className={classes.root} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">
                Comment
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={comment}
                labelWidth={60}
                error={!!error}
                onChange={(e) => setComment(e.target.value)}
              />
            </FormControl>
          </div>
          <div className={styles.centered}>
            <Button onClick={handleComment} variant="contained">
              Add Comment
            </Button>
          </div>
          {allComments &&
            allComments.reverse().map((comment) => (
              <div className={styles.offset} key={comment.id}>
                <Box
                  className={classes.root}
                  p={3}
                  my={3}
                  bgcolor="text.secondary"
                >
                  {comment.description}
                </Box>
                <div className={styles.centered}>
                  <Button
                    onClick={() => handleDelete(comment.id)}
                    variant="contained"
                    color="secondary"
                  >
                    Delete
                  </Button>
                </div>
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

              <EditForm
                onSubmit={handleSubmit}
                modalClose={handleClose}
                id={productInfo.id}
              />
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
}
