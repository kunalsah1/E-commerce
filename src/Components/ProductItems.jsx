import React from "react";
import "../Styles/Product.css";

const ProductItems = (props) => {
  const { title, img, description, price } = props;
  return (
    <div className="card">
      <img src={img} alt={title} />
      <div className="pad-detail">
        <div className="title-price">
          <h2>{title}...</h2>
          <h4>$ {price}</h4>
        </div>
        <p>{description}...</p>
      </div>
    </div>
  );
};

export default ProductItems;
