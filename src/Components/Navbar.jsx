import React from "react";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const toggleBurger = () => {
    const nav = document.querySelector(".catagories");
    nav.classList.toggle("nav-open");
  };
  return (
    <>
      <div className="burger" onClick={toggleBurger}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="catagories">
        <Link to="/">
          <div className="tab">All</div>
        </Link>
        <Link to="/smartphones">
          <div className="tab">Smartphones</div>
        </Link>
        <Link to="laptops">
          <div className="tab">Laptops</div>
        </Link>
        <Link to="/fragrances">
          <div className="tab">Fragrances</div>
        </Link>
        <Link to="/skincare">
          <div className="tab">Skincare</div>
        </Link>
        <Link to="/groceries">
          <div className="tab">Groceries</div>
        </Link>
        <Link to="/home-decoration">
          <div className="tab">Home-decoration</div>
        </Link>
        <Link to="/furniture">
          <div className="tab">Furniture</div>
        </Link>
        <Link to="/tops">
          <div className="tab">Tops</div>
        </Link>
        <Link to="/womens-dresses">
          <div className="tab">Women's-dresses</div>
        </Link>
        <Link to="/womens-shoes">
          <div className="tab">Women's-shoes</div>
        </Link>
        <Link to="/womens-watches">
          <div className="tab">Women's-watches</div>
        </Link>
        <Link to="/womens-bags">
          <div className="tab">Women's-bags</div>
        </Link>
        <Link to="/womens-jewellery">
          <div className="tab">Women's-jeweller</div>
        </Link>
        <Link to="/mens-shirts">
          <div className="tab">Men's-shirts</div>
        </Link>
        <Link to="/mens-shoes ">
          <div className="tab">Men's-shoes</div>
        </Link>
        <Link to="/mens-watches">
          <div className="tab">Men's-watches</div>
        </Link>
        <Link to="/sunglasses">
          <div className="tab">Sunglasses</div>
        </Link>
        <Link to="/automotive">
          <div className="tab">Automotive</div>
        </Link>
        <Link to="/motorcycle">
          <div className="tab"> Motorcycle </div>
        </Link>
        <Link to="/lighting">
          <div className="tab"> Lighting</div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
