import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../Components/Footer';
import ProductItem from '../components/ProductItem';

import gallery1 from '/images/gallery-1.jpg';
import gallery2 from '/images/gallery-2.jpg';
import gallery3 from '/images/gallery-3.jpg';
import gallery4 from '/images/gallery-4.jpg';
import product9 from '/images/product-9.jpg';
import product10 from '/images/product-10.jpg';
import product11 from '/images/product-11.jpg';
import product12 from '/images/product-12.jpg';

const ProductDetails = () => {
  const [mainProductImage, setMainProductImage] = useState(gallery1);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('Select Size');

  const handleSmallImageClick = (imageSrc) => {
    setMainProductImage(imageSrc);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    const name = "Red Printed T-Shirt by HRX"; // Hardcoded as per HTML
    const price = 50.00; // Hardcoded as per HTML
    const img = mainProductImage;
    const qty = parseInt(quantity);
    const size = selectedSize;

    const product = {
      name: name,
      price: parseFloat(price),
      img: img,
      qty: qty,
      size: size,
    };

    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if product already in cart (by name, size, and img)
    let found = false;
    for (let i = 0; i < cart.length; i++) {
      if (
        cart[i].name === product.name &&
        cart[i].size === product.size &&
        cart[i].img === product.img
      ) {
        cart[i].qty += product.qty;
        found = true;
        break;
      }
    }
    if (!found) cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  };

  return (
    <>
      <div className="container">
        <Navbar />
      </div>

      {/* Single Products */}
      <div className="small-container single-product">
        <div className="row">
          <div className="col-2">
            <img src={mainProductImage} width="100%" id="ProductImg" alt="Main Product" />

            <div className="small-img-row">
              <div className="small-img-col">
                <img
                  src={gallery1}
                  width="100%"
                  className="small-img"
                  onClick={() => handleSmallImageClick(gallery1)}
                  alt="Gallery 1"
                />
              </div>
              <div className="small-img-col">
                <img
                  src={gallery2}
                  width="100%"
                  className="small-img"
                  onClick={() => handleSmallImageClick(gallery2)}
                  alt="Gallery 2"
                />
              </div>
              <div className="small-img-col">
                <img
                  src={gallery3}
                  width="100%"
                  className="small-img"
                  onClick={() => handleSmallImageClick(gallery3)}
                  alt="Gallery 3"
                />
              </div>
              <div className="small-img-col">
                <img
                  src={gallery4}
                  width="100%"
                  className="small-img"
                  onClick={() => handleSmallImageClick(gallery4)}
                  alt="Gallery 4"
                />
              </div>
            </div>
          </div>
          <div className="col-2">
            <p>Home / T-Shirt</p>
            <h1>Red Printed T-Shirt by HRX</h1>
            <h4>$50.00</h4>
            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
              <option>Select Size</option>
              <option>XXL</option>
              <option>XL</option>
              <option>L</option>
              <option>M</option>
              <option>S</option>
            </select>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
            />

            <a href="#" id="add-to-cart-btn" className="btn" onClick={handleAddToCart}>
              Add To Cart
            </a>

            <h3>
              Product Details <i className="fa fa-indent"></i>
            </h3>
            <br />
            <p>
              Give your summer wardrobe a style upgrade with the HRX Men's Active
              T-Shirt. Team it with a pair of shorts for your morning workout or a
              denims for an evening out with the guys.
            </p>
          </div>
        </div>
      </div>

      {/* title */}
      <div className="small-container">
        <div className="row row-2">
          <h2>Related Products</h2>
          <p>View More</p>
        </div>
      </div>

      {/* Products */}
      <div className="small-container">
        <div className="row">
          <ProductItem image={product9} title="Red Printed T-Shirt" price={50.00} />
          <ProductItem image={product10} title="Red Printed T-Shirt" price={50.00} />
          <ProductItem image={product11} title="Red Printed T-Shirt" price={50.00} />
          <ProductItem image={product12} title="Red Printed T-Shirt" price={50.00} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;