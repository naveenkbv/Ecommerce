import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../Components/Footer';
import ProductItem from '../components/ProductItem';
import { Link } from 'react-router-dom';

import image1 from '/images/image1.png';
import category1 from '/images/category-1.jpg';
import category2 from '/images/category-2.jpg';
import category3 from '/images/category-3.jpg';
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
import exclusive from '/images/exclusive.png';
import user1 from '/images/user-1.png';
import user2 from '/images/user-2.png';
import user3 from '/images/user-3.png';
import logoGodrej from '/images/logo-godrej.png';
import logoOppo from '/images/logo-oppo.png';
import logoCocaCola from '/images/logo-coca-cola.png';
import logoPaypal from '/images/logo-paypal.png';
import logoPhilips from '/images/logo-philips.png';

const Home = ({ loggedIn = false }) => {
  return (
    <>
      <div className="header">
        <div className="container">
          <Navbar loggedIn={loggedIn} />
          <div className="row">
            <div className="col-2">
              <h1>
                Give Your Workout <br />A New Style!
              </h1>
              <p>
                Success isn't always about greatness. It's about consistency.
                Consistent <br />
                hard work gains success. Greatness will come.
              </p>
              <a href="" className="btn">
                Explore Now &#8594;
              </a>
            </div>
            <div className="col-2">
              <img src={image1} alt="Workout" />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src={category1} alt="Category 1" />
            </div>
            <div className="col-3">
              <img src={category2} alt="Category 2" />
            </div>
            <div className="col-3">
              <img src={category3} alt="Category 3" />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
          <ProductItem image={product1} title="Red Printed T-Shirt" price={50.00} />
          <ProductItem image={product2} title="Red Printed T-Shirt" price={50.00} />
          <ProductItem image={product3} title="Red Printed T-Shirt" price={50.00} />
          <ProductItem image={product4} title="Red Printed T-Shirt" price={50.00} />
        </div>
        <h2 className="title">Latest Products</h2>
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
      </div>

      {/* Offer */}
      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img src={exclusive} className="offer-img" alt="Exclusive Offer" />
            </div>
            <div className="col-2">
              <p>Exclusively Available on RajStore</p>
              <h1>Smart Band 4</h1>
              <small>
                The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3)
                AMOLED color full-touch display with adjustable brightness, so
                everything is clear as can be.
                <br />
              </small>
              <Link to="/products" className="btn">
                Buy Now &#8594;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="testimonial">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been industry's standard dummy text.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <img src={user1} alt="User 1" />
              <h3>Sean Parker</h3>
            </div>
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been industry's standard dummy text.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <img src={user2} alt="User 2" />
              <h3>Mike Smith</h3>
            </div>
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been industry's standard dummy text.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <img src={user3} alt="User 3" />
              <h3>Mabel Joe</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="brands">
        <div className="small-container">
          <div className="row">
            <div className="col-5">
              <img src={logoGodrej} alt="Godrej Logo" />
            </div>
            <div className="col-5">
              <img src={logoOppo} alt="Oppo Logo" />
            </div>
            <div className="col-5">
              <img src={logoCocaCola} alt="Coca-Cola Logo" />
            </div>
            <div className="col-5">
              <img src={logoPaypal} alt="Paypal Logo" />
            </div>
            <div className="col-5">
              <img src={logoPhilips} alt="Philips Logo" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;