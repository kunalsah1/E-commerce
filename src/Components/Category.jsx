import React, { useEffect, useState } from "react";
import "../Styles/category.css";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

const Category = (props) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://dummyjson.com/products/category/${props.category}`;

  const capital = (word)=>{
    const title = word[0].toUpperCase() + word.slice(1).toLowerCase()
    return title
  } 

  document.title = `${capital(props.category)} - E-Commerce`;

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        setIsLoading(true);
        const categoryResponse = await fetch(url);
        const categoryData = await categoryResponse.json();
        setCategories(categoryData.products);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchCategoryData();
  }, [url]);
  return (
    <>
      {isLoading && <Spinner />}
     
      <div className="categories">
        {categories.map((category) => {
          const { id, thumbnail, title, price, description } = category;
          return (
            <div className="product" key={id}>
              <Link to={`/products/${id}`}>
                <div className="card">
                  <img src={thumbnail} alt={title} />
                  <div className="pad-detail">
                  <div className="title-price">
                    <h2>{title.slice(0, 18)}...</h2>
                    <h4>${price}</h4>
                  </div>
                  <p>{description.slice(0, 82)}...</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Category;
