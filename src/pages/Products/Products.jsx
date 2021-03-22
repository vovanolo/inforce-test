import React, { useState, useEffect } from "react";
import styles from "./Products.module.css";
import ProductCard from "../../components/ProductCard";
import axios from "axios";
import { ConfirmProvider } from "material-ui-confirm";
import { useConfirm } from "material-ui-confirm";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Alert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Products() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  useEffect(async () => {
    const result = await axios(
      "https://inforce-test-app.herokuapp.com/products"
    );

    setProducts(result.data);
  }, []);

  const openAddModal = () => {
    setOpenAdd(true);
  };

  const handleClickOpen = (id) => {
    setDeleteProduct(id);
    setOpen(true);
  };

  const handleAddModalCLose = () => {
    setOpenAdd(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    // let size = {
    //   widht,
    //   height,
    // };
    e.preventDefault();
    // console.log(JSON.stringify({ name, image, count, size, weight }));
    axios
      .post(`https://inforce-test-app.herokuapp.com/products`, {
        name: name,
        imageUrl: image,
        count: count,
        size: {
          width: Number(width),
          height: Number(height),
        },
        weight: weight,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  const handleProductRemove = () => {
    console.log(deleteProduct);
    axios
      .delete(
        `https://inforce-test-app.herokuapp.com/products/${deleteProduct}`
      )
      .then((response) => {
        console.log(response);
      });
    setOpen(false);
  };
  const handleAll = async () => {
    const result = await axios(
      "https://inforce-test-app.herokuapp.com/products"
    );

    setProducts(result.data);
  };

  const handleAscending = async () => {
    const result = await axios(
      "https://inforce-test-app.herokuapp.com/products?_sort=name:ASC"
    );

    setProducts(result.data);
  };
  const handleDescending = async () => {
    const result = await axios(
      "https://inforce-test-app.herokuapp.com/products?_sort=name:DESC"
    );

    setProducts(result.data);
  };

  const handleCountAscending = async () => {
    const result = await axios(
      "https://inforce-test-app.herokuapp.com/products?_sort=count:ASC"
    );

    setProducts(result.data);
  };
  const handleCountDescending = async () => {
    const result = await axios(
      "https://inforce-test-app.herokuapp.com/products?_sort=count:DESC"
    );

    setProducts(result.data);
  };
  return (
    <div>
      <h2 className={styles.title}>The products list</h2>

      <div className={styles.centered}>
        <Button
          onClick={openAddModal}
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
        >
          New Product
        </Button>
      </div>
      <h3 className={styles.title}>Sort the products</h3>
      <div className={styles.centered}>
        <Button onClick={handleAll} variant="contained" color="primary">
          ALL
        </Button>
        <PopupState
          variant="popover"
          popupId="demo-popup-menu"
          className={styles.offsetX}
        >
          {(popupState) => (
            <React.Fragment>
              <Button
                variant="contained"
                color="primary"
                {...bindTrigger(popupState)}
              >
                Sort By Name
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem
                  onClick={() => {
                    popupState.close();
                    handleAscending();
                  }}
                >
                  Acending
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    popupState.close();
                    handleDescending();
                  }}
                >
                  Descending
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button
                variant="contained"
                color="primary"
                {...bindTrigger(popupState)}
              >
                Sort By Count
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem
                  onClick={() => {
                    popupState.close();
                    handleCountAscending();
                  }}
                >
                  Ascending
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    popupState.close();
                    handleCountDescending();
                  }}
                >
                  Descending
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </div>
      {products &&
        products.map((product) => (
          <div key={product.id} className={styles.offset}>
            <ConfirmProvider>
              <ProductCard
                handleOpen={handleClickOpen}
                id={product.id}
                name={product.name}
                imageUrl={product.imageUrl}
                count={product.count}
              />
            </ConfirmProvider>
          </div>
        ))}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle id="alert-dialog-slide-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleProductRemove} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      {/*  safsaf*/}

      <Dialog
        open={openAdd}
        onClose={handleAddModalCLose}
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
              id="name"
              label="Name of Product"
              type="name"
              fullWidth
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
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
              label="Count of Product"
              type="number"
              fullWidth
              onChange={(e) => setCount(e.target.value)}
            />
            <Grid container>
              <Box>
                <TextField
                  autoFocus
                  margin="dense"
                  id="width"
                  label="Width"
                  type="number"
                  onChange={(e) => setWidth(e.target.value)}
                />
              </Box>
              <Box ml={2}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="height"
                  label="Height"
                  type="number"
                  onChange={(e) => setHeight(e.target.value)}
                />
              </Box>
            </Grid>
            <TextField
              autoFocus
              margin="dense"
              id="weight"
              label="Weight"
              type="text"
              fullWidth
              onChange={(e) => setWeight(e.target.value)}
            />
            <DialogActions>
              <Button onClick={handleAddModalCLose} color="primary">
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={handleAddModalCLose}
                color="primary"
              >
                Add
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
