import React, { useState, useEffect } from "react";
import "../Styles/productDetails.css";
import { useParams } from "react-router-dom";
import ProductImages from "./productImages";

const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();
  const url = `https://dummyjson.com/products/${id}`;

  const fetchProduct = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProductDetail(data);
  };
  useEffect(() => {
    fetchProduct();
  }, [id]);
  const {
    id: alias,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    images,
  } = productDetail;
document.title = `${title}`
  return (
    <div className="modal-container">
      <div className="detail" key={alias}>
          <h1>{title}</h1>
        <ProductImages img={images} />
        <div className="prod">
          <h2>About this item</h2>
          <p> {description}</p>
          <h3>Company: {brand}</h3>
          <h4>Rating: {rating}</h4>
          <h4>Available Stock: {stock}</h4>
          <h3>Discount: {discountPercentage}%</h3>
          <h3>Price: ${price}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
