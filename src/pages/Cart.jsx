import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../Components/Footer';


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    renderCart();
  }, []);

  useEffect(() => {
    calculateTotals();
  }, [cartItems]);

  const renderCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  };

  const calculateTotals = () => {
    let newSubtotal = 0;
    cartItems.forEach((item) => {
      newSubtotal += item.price * item.qty;
    });
    const newTax = +(newSubtotal * 0.175).toFixed(2);
    const newTotal = +(newSubtotal + newTax).toFixed(2);

    setSubtotal(newSubtotal);
    setTax(newTax);
    setTotal(newTotal);
  };

  const handleRemoveItem = (idxToRemove) => {
    const updatedCart = cartItems.filter((_, idx) => idx !== idxToRemove);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleQuantityChange = (idxToUpdate, newQty) => {
    const updatedCart = cartItems.map((item, idx) =>
      idx === idxToUpdate ? { ...item, qty: parseInt(newQty) } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
    } else {
      alert("Thank you for your purchase! (Checkout functionality to be implemented)");
      localStorage.removeItem("cart");
      setCartItems([]); // Clear cart in state
    }
  };

  return (
    <>
      <div className="container">
        <Navbar />
      </div>

      {/* Cart items details */}
      <div className="small-container cart-page">
        <table id="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan="3">
                  <div
                    id="empty-cart-message"
                    style={{
                      textAlign: 'center',
                      color: '#888',
                      fontSize: '18px',
                      margin: '30px 0',
                      display: 'block', // Always show if cart is empty
                    }}
                  >
                    Your cart is empty.
                  </div>
                </td>
              </tr>
            ) : (
              cartItems.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="cart-info">
                      <img src={item.img} style={{ width: '80px' }} alt={item.name} />
                      <div>
                        <p>{item.name}</p>
                        <small>Price: ${item.price.toFixed(2)}</small>
                        <br />
                        {item.size && item.size !== "Select Size" && (
                          <>
                            <small>Size: {item.size}</small>
                            <br />
                          </>
                        )}
                        <a href="#" className="remove-btn" onClick={() => handleRemoveItem(idx)}>
                          Remove
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.qty}
                      onChange={(e) => handleQuantityChange(idx, e.target.value)}
                      style={{ width: '50px' }}
                    />
                  </td>
                  <td>${(item.price * item.qty).toFixed(2)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <div className="total-price">
          <table id="total-table">
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td id="subtotal-val">${subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td id="tax-val">${tax.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td id="total-val">${total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <button
            id="checkout-btn"
            onClick={handleCheckout}
            style={{
              marginTop: '20px',
              padding: '10px 30px',
              background: '#ff523b',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Final Checkout
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;