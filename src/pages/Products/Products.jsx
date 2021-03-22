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
import { makeStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Alert from "@material-ui/lab/Alert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Form from "../../components/Form";

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

  const handleAddProduct = (data) => {
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

    handleAddModalCLose();
    axios
      .post(`https://inforce-test-app.herokuapp.com/products`, finalData)
      .then((res) => {
        setProducts((state) => [...state, res.data]);
      });
  };

  const handleProductRemove = () => {
    console.log(deleteProduct);
    axios
      .delete(
        `https://inforce-test-app.herokuapp.com/products/${deleteProduct}`
      )
      .then((response) => {
        setProducts((state) =>
          state.filter((product) => product.id !== deleteProduct)
        );
        setDeleteProduct(null);
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
        products.reverse().map((product) => (
          <div key={product.id} className={styles.offset}>
            <ConfirmProvider>
              <ProductCard
                handleOpen={handleClickOpen}
                id={product.id}
                name={product.name}
                imageUrl={product.imageUrl}
                count={product.count}
                description={product.description}
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
          <Form onSubmit={handleAddProduct} modalClose={handleAddModalCLose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
