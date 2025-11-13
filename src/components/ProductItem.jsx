import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ image, title, price }) => {
  return (
    <div className="col-4">
      <Link to="/product_details">
        <img src={image} alt={title} />
      </Link>
      <h4>{title}</h4>
      <div className="rating">
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
      </div>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductItem;