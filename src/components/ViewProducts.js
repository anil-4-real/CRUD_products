import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function ViewProducts() {
  //used to load products after page loads
  useEffect(() => {
    getProducts();
  }, []);

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  //remove item based on id
  const removeItem = async (id) => {
    await axios
      .delete("https://614eabf7b4f6d30017b482ae.mockapi.io/products/" + id)
      .catch((error) => {
        console.log(error);
      });
    getProducts();
  };

  //getting all the products
  const getProducts = async () => {
    await axios
      .get("https://614eabf7b4f6d30017b482ae.mockapi.io/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1 className="all-products-heading">All Products</h1>
      <Link to="/">
        <button className="btn btn-secondary mx-5">Home</button>
      </Link>
      <div className="container-fluid">
        {products.map((product) => {
          return (
            <div
              className="card m-3"
              key={product.id}
              style={{ width: "18rem" }}
            >
              <img
                src={product.picture}
                className="card-img-top prod-img"
                alt={"picture of " + product.product}
              />
              <div className="p-3">
                <h5 className="sub">{product.product}</h5>
                <p className="card-text">{product.description}</p>
                <h6
                  style={{
                    fontWeight: "600",
                    opacity: "0.8",
                    color: "black",
                  }}
                >
                  Price:&nbsp;
                  <span style={{ color: "darkblue" }}>
                    {"$" + product.price}
                  </span>
                </h6>
                <p
                  style={{ fontWeight: "600", opacity: "0.8", color: "black" }}
                >
                  Sold by:{" "}
                  <span style={{ color: "darkblue", fontWeight: "bold" }}>
                    {product.seller}
                  </span>
                </p>
                <button
                  className="btn btn-info p-1"
                  onClick={() => {
                    navigate("/editproduct/" + product.id);
                  }}
                >
                  Edit Item
                </button>
                &nbsp; &nbsp;
                <button
                  className="btn btn-danger p-1"
                  onClick={() => removeItem(product.id)}
                >
                  Delete Item
                </button>
              </div>
            </div>
          );
        })}
        <p className="text-center m-5 font-weight-bold">
          All right reserved &copy;
        </p>
      </div>
    </>
  );
}

export default ViewProducts;
