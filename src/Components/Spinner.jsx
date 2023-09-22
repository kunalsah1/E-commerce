import React from "react";
import loading from "../assets/loading.gif";
import "../Styles/product.css";

const Spinner = () => {
  return (
    <div className="loading">
      <div className="text-center">
        <img src={loading} alt="loading..." />
      </div>
    </div>
  );
};

export default Spinner;
