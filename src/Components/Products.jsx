import React, { useEffect, useState } from "react";
import "../Styles/Product.css";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductItems from "./ProductItems";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  document.title = "E-Commerce"

  const itemsPerPage = 18;
  const initialLoadUrl = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`;
  const moreDataUrl = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
    skip + itemsPerPage
  }`;

  const fetchData = async () => {
    try {
      setLoading(true);
      let response = await fetch(initialLoadUrl);
      let data = await response.json();
      setProducts(data.products);
      setTotalResults(data.total);
      setLoading(false);
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchMoreData = async () => {
    let res = await fetch(moreDataUrl);
    let data = await res.json();
    setProducts((prevProducts) => [...prevProducts, ...data.products]);
    setSkip(skip + itemsPerPage);
    setTotalResults(data.total);
  };

  return (
    <>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreData}
        hasMore={products.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="cards">
          {products.map((item) => {
            return (
              <div className="product" key={item.id}>
                <Link to={`/products/${item.id}`}>
                  <ProductItems
                    img={item.thumbnail}
                    title={item.title.slice(0, 18)}
                    description={item.description.slice(0, 80)}
                    price={item.price}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Products;
