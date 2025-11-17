import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../Components/Footer.jsx';
import ProductItem from '../components/ProductItem';
import { Link } from 'react-router-dom';

import product1 from '/images/product-1.jpg';
import product2 from '/images/product-2.jpg';
import product3 from '/images/product-3.jpg';
import product4 from '/images/product-4.jpg';
import product5 from '/images/product-5.jpg';
import product6 from '/images/product-6.jpg';
import product7 from '/images/product-7.jpg';
import product8 from '/images/product-8.jpg';
import product9 from '/images/product-9.jpg';
import product10 from '/images/product-10.jpg';
import product11 from '/images/product-11.jpg';
import product12 from '/images/product-12.jpg';

const Products = () => {
  return (
    <>
      <div className="container">
        <Navbar />
      </div>

      {/* All Products */}
      <div className="small-container">
        <div className="row row-2">
          <h2>All Products</h2>
          <select>
            <option>Default Sort</option>
            <option>Sort By Price</option>
            <option>Sort By Popularity</option>
            <option>Sort By Rating</option>
            <option>Sort By Sale</option>
          </select>
        </div>
        <div className="row">
          <ProductItem image={product1} title="Red Printed T-Shirt" price={50.00} />
          <ProductItem image={product2} title="Red Printed T-Shirt" price={50.00} />
          <ProductItem image={product3} title="Red Printed T-Shirt" price={50.00} />
          <ProductItem image={product4} title="Red Printed T-Shirt" price={50.00} />
        </div>
        <div className="row">
          <ProductItem image={product5} title="Red Printed T-Shirt" price={50.00} />
          <ProductItem image={product6} title="Red Printed T-Shirt" price={50.00} />
          <ProductItem image={product7} title="Red Printed T-Shirt" price={50.00} />
          <ProductItem image={product8} title="Red Printed T-Shirt" price={50.00} />
        </div>
        <div className="row">
          <ProductItem image={product9} title="Red Printed T-Shirt" price={50.00} />
          <ProductItem image={product10} title="Red Printed T-Shirt" price={50.00} />
          <ProductItem image={product11} title="Red Printed T-Shirt" price={50.00} />
          <ProductItem image={product12} title="Red Printed T-Shirt" price={50.00} />
        </div>
        <div className="page-btn">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>&#8594;</span>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;