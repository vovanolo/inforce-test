import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import axios from "axios";

let firstRun = true;

export default function EditForm({ onSubmit, modalClose, id }) {
  const [errors, setErrors] = useState({});
  const [productData, setProductData] = useState({
    name: "",
    imageUrl: "",
    count: 0,
    width: 0,
    height: 0,
    weight: 0,
    description: "",
  });

  useEffect(() => {
    firstRun = false;
    (async () => {
      const res = await axios.get(
        `https://inforce-test-app.herokuapp.com/products/${id}`
      );
      setProductData({
        name: res.data.name,
        imageUrl: res.data.imageUrl,
        count: res.data.count,
        width: res.data.size.width,
        height: res.data.size.height,
        weight: res.data.weight,
        description: res.data.description,
      });
    })();
  }, []);

  useEffect(() => {
    if (!firstRun) {
      validateForm();
    }
  }, [productData]);
  const validateForm = () => {
    let errorMessages = {};

    if (productData.name.length === 0) {
      errorMessages.name = "Name can't be empty";
    }
    if (productData.imageUrl.length === 0) {
      errorMessages.imageUrl = "Image field can't be empty";
    }

    if (productData.width === 0 || productData.width === "0") {
      errorMessages.width = "Width can't be zero";
    }

    if (productData.height === 0 || productData.height === "0") {
      errorMessages.height = "Height can't be zero";
    }
    if (productData.weight.length === 0) {
      errorMessages.weight = "Weight is required";
    }
    if (productData.description.length === 0) {
      errorMessages.description = "There is no description";
    }
    setErrors(errorMessages);
    const formValid = Object.values(errorMessages).length === 0;
    return formValid;
  };

  const handleChange = (e) => {
    setProductData((state) => {
      return {
        ...state,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(productData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Name of Product"
        type="name"
        fullWidth
        value={productData.name}
        name="name"
        onChange={handleChange}
        // required
        helperText={errors.name}
        error={!!errors.name}
      />
      <TextField
        autoFocus
        margin="dense"
        id="description"
        label="Desctiption of product"
        type="text"
        fullWidth
        value={productData.description}
        name="description"
        onChange={handleChange}
        // required
        helperText={errors.description}
        error={!!errors.description}
      />
      <TextField
        autoFocus
        margin="dense"
        id="image"
        label="imageUrl"
        type="url"
        fullWidth
        name="imageUrl"
        value={productData.imageUrl}
        onChange={handleChange}
        // error={errorMes.name}
        helperText={errors.imageUrl}
        error={!!errors.imageUrl}
      />
      <TextField
        autoFocus
        margin="dense"
        id="count"
        name="count"
        label="Count of Product"
        type="number"
        fullWidth
        onChange={handleChange}
        value={productData.count}
        helperText={errors.count}
        error={!!errors.count}
      />
      <Grid container>
        <Box>
          <TextField
            autoFocus
            margin="dense"
            id="width"
            label="Width"
            name="width"
            type="number"
            onChange={handleChange}
            value={productData.width}
            helperText={errors.width}
            error={!!errors.width}
          />
        </Box>
        <Box ml={2}>
          <TextField
            autoFocus
            margin="dense"
            id="height"
            label="Height"
            name="height"
            type="number"
            onChange={handleChange}
            value={productData.height}
            helperText={errors.height}
            error={!!errors.height}
          />
        </Box>
      </Grid>
      <TextField
        autoFocus
        margin="dense"
        id="weight"
        label="Weight"
        type="text"
        name="weight"
        fullWidth
        onChange={handleChange}
        value={productData.weight}
        helperText={errors.weight}
        error={!!errors.weight}
      />
      <DialogActions>
        <Button onClick={modalClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" color="primary">
          Add
        </Button>
      </DialogActions>
    </form>
  );
}
