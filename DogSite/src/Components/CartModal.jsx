import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, toggleCart } from '../redux/cartSlice';

const CartModal = () => {
  const { cartItems, totalAmount, isCartOpen } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  if (!isCartOpen) return null;

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal">
        <div className="cart-left">
          <h2>MY CART</h2>
          <table className="cart-table">
            <thead>
              <tr>
                <th>PRODUCTS</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td className="product-info">
                    <img src={item.image} alt={item.title} />
                    <span>{item.title}</span>
                  </td>
                  <td>Rs {item.newPrice}</td>
                  <td>
                    <select defaultValue={item.quantity}>
                      {[1, 2, 3, 4, 5].map(q => (
                        <option key={q} value={q}>{q}</option>
                      ))}
                    </select>
                  </td>
                  <td>Rs {(item.newPrice * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>✕</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cart-right">
          <h3>ORDER SUMMARY</h3>
          <div className="summary-item">
            <span>Sub Total:</span>
            <span>Rs {totalAmount.toFixed(2)}</span>
          </div>
          <div className="summary-item total">
            <span>Total:</span>
            <span>Rs {totalAmount.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Checkout</button>
          <p className="discount-note">Get extra 2% discount on paid under <span>S Pay</span></p>
          <button className="continue-btn" onClick={() => dispatch(toggleCart())}>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
