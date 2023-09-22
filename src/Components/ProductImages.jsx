import React, { useState,useEffect } from "react";
import "../Styles/images.css";

const ProductImages = ({ img = [] }) => {
   const [mainImage, setMainImage] = useState('')

   useEffect(() => {
    if (img.length > 0) {
      setMainImage(img[0]);
    }
  }, [img]);
  return (
    <div className="img-container">
      <div className="product-image">
        {img.map((image) => {
          return (
            <figure key={image}>
              <img src={image} alt="product"  onClick={()=>setMainImage(image)} />
            </figure>
          );
        })}
      </div>
      <div className="main-image">
        <img src={mainImage} alt="product" key={mainImage} />
      </div>
    </div>
  );
};

export default ProductImages;
