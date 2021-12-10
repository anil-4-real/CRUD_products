import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      product: "",
      description: "",
      picture: "",
      price: "",
      seller: "",
    },
    validationSchema: yup.object({
      product: yup.string().required("Required"),
      description: yup
        .string()
        .min(50, "Too short")
        .max(150, "Too long")
        .required("Required"),
      picture: yup
        .string()
        .matches(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
          "Invalid URL"
        )
        .required("Required"),
      price: yup
        .string()
        .matches(/^\d{0,8}(\.\d{1,4})?$/, "Invalid Price Format"),
      seller: yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      handleFormSave(values);
    },
  });

  let handleFormSave = async (data) => {
    try {
      let res = await axios.post(
        "https://614eabf7b4f6d30017b482ae.mockapi.io/products",
        data
      );
      console.log(res);
      navigate("/viewproducts");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1 className="title">Add Product</h1>
      <Link to="/">
        <button className="btn btn-secondary mx-5">Home</button>
      </Link>
      <form className="form-container" onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="product">Item Name</label>
          <input
            id="product"
            name="product"
            type="text"
            className="form-control"
            placeholder="Pasta"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.product}
          />
          {formik.touched.product && formik.errors.product ? (
            <div style={{ color: "red" }}>{formik.errors.product}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            placeholder="This is the world's best pasta"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div style={{ color: "red" }}>{formik.errors.description}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="text"
            className="form-control"
            placeholder="enter price in USD"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <div style={{ color: "red" }}>{formik.errors.price}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="picture">Picture URL</label>
          <input
            id="picture"
            name="picture"
            type="text"
            className="form-control"
            placeholder="URL"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.picture}
          />
          {formik.touched.picture && formik.errors.picture ? (
            <div style={{ color: "red" }}>{formik.errors.picture}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="seller">Seller Name</label>
          <input
            id="seller"
            name="seller"
            type="text"
            className="form-control"
            placeholder="John's Shop"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.seller}
          />
          {formik.touched.seller && formik.errors.seller ? (
            <div style={{ color: "red" }}>{formik.errors.seller}</div>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary submit">
          Submit
        </button>
      </form>
      <p className="text-center m-5 font-weight-bold">
        All right reserved &copy;
      </p>
    </div>
  );
}
export default AddProduct;
