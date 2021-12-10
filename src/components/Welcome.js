import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      <div className="welcome-container">
        <h1 className="title">Welcome, admin!</h1>
        <div className="link">
          <Link className="links" to="/viewproducts">
            <h4 className="">View Products</h4>
          </Link>
        </div>
        <br></br>
        <div className="link">
          <Link className="links" to="/addproduct">
            <h4 className="links">Add a Product</h4>
          </Link>
        </div>
        <p className="text-center m-5 font-weight-bold">
          All right reserved &copy;
        </p>
      </div>
    </>
  );
}

export default Welcome;
