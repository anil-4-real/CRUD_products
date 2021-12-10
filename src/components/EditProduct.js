import { React, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function EditProduct() {
  const params = useParams();
  let [product, setProduct] = useState("");
  let [price, setPrice] = useState("");
  let [picture, setPicture] = useState("");
  let [description, setDescription] = useState("");
  let [seller, setSeller] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();

  const handleSave = async () => {
    await axios
      .put(
        "https://614eabf7b4f6d30017b482ae.mockapi.io/products/" + params.id,
        { product, price, picture, description, seller }
      )
      .then((data) => Promise.resolve(data))
      .catch((err) => console.log(err));
    navigate("/viewproducts");
  };

  //getting the specific data to edit
  const getData = async () => {
    await axios
      .get("https://614eabf7b4f6d30017b482ae.mockapi.io/products/" + params.id)
      .then((res) => {
        setProduct(res.data.product);
        setPrice(res.data.price);
        setPicture(res.data.picture);
        setDescription(res.data.description);
        setSeller(res.data.seller);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 className="edit-products-heading">Edit Product</h1>
      <Link to="/viewproducts">
        <button className="btn btn-secondary mx-5">Back</button>
      </Link>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="product">Item Name</label>
          <input
            id="product"
            name="product"
            type="text"
            className="form-control"
            placeholder="Pasta"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            placeholder="This is the world's best pasta"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="text"
            className="form-control"
            placeholder="enter price in USD"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="picture">Picture URL</label>
          <input
            id="picture"
            name="picture"
            type="text"
            className="form-control"
            placeholder="URL"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="seller">Seller Name</label>
          <input
            id="seller"
            name="seller"
            type="text"
            className="form-control"
            placeholder="John's Shop"
            value={seller}
            onChange={(e) => setSeller(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={handleSave}
          className="btn btn-success submit"
        >
          Save
        </button>
      </div>
      <p className="text-center m-5 font-weight-bold">
        All right reserved &copy;
      </p>
    </>
  );
}

export default EditProduct;
