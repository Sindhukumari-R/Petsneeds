import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../assets/logo.png';
import {
  removeFromCart,
  toggleCart,
  changeQuantity, 
} from '../redux/cartSlice';


export default function Nav({ userName, onNavigate, refs }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dispatch = useDispatch();

  const { cartItems, isCartOpen } = useSelector(state => state.cart);

  const getInitial = () =>
    userName ? userName.charAt(0).toUpperCase() : <FaUser size={24} />;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY <= lastScrollY || currentScrollY <= 60);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div>
      <nav className={`main-nav ${showNav ? 'show-nav' : 'hide-nav'}`}>
        <div className="nav-left">
          <li onClick={() => onNavigate(refs.heroRef)}>HOME</li>
          <li>ABOUT</li>
          <li onClick={() => onNavigate(refs.shopRef)}>SHOP</li>
          <li onClick={() => onNavigate(refs.serviceRef)}>SERVICE</li>
        </div>

        <span className="nav-paw">
          <img src={logo} alt="logo" />
        </span>

        <div className="nav-right">
          <li>BLOG</li>
          <li onClick={() => onNavigate(refs.contactRef)}>CONTACT</li>

          <div className="cart-icon" onClick={() => dispatch(toggleCart())}>
            <HiOutlineShoppingBag size={24} />
            <span className="cart-count">{cartItems.length}</span>
          </div>

          <div className="profile-circle">{getInitial()}</div>
        </div>

        <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <AiOutlineClose size={28} /> : <GiHamburgerMenu size={28} />}
        </div>
      </nav>

      {isCartOpen && (
        <div className="cart-modal-overlay" onClick={() => dispatch(toggleCart())}>
          <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cart-left">
              <h3>MY CART</h3>
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
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
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td className="product-info">
                          <img src={item.img} alt={item.title} />
                          <span>{item.title}</span>
                        </td>
                        <td>Rs {item.newPrice}</td>
                        <td>
                          <input 
                            type='number'
                            value={item.quantity}
                            onChange={(e) =>
                              dispatch(
                                changeQuantity({
                                  id: item.id,
                                  quantity: Number(e.target.value),
                                })
                              )
                            }
                          >
                            {/* {[1, 2, 3, 4, 5].map((q) => (
                              <option key={q} value={q}>
                                {q}
                              </option>
                            ))} */}
                          </input>
                        </td>
                        <td>Rs {(item.newPrice * item.quantity).toFixed(2)}</td>
                        <td>
                          <button onClick={() => dispatch(removeFromCart(item.id))} className='close-btn-cart'>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <div className="cart-right">
              <h4>ORDER SUMMARY</h4>
              <p>
                Subtotal: Rs{' '}
                {cartItems
                  .reduce((total, item) => total + item.newPrice * item.quantity, 0)
                  .toFixed(2)}
              </p>
              <p>
                Total: Rs{' '}
                {cartItems
                  .reduce((total, item) => total + item.newPrice * item.quantity, 0)
                  .toFixed(2)}
              </p>
              <button className="checkout-btn">Checkout</button>
              <button
                className="continue-btn"
                onClick={() => dispatch(toggleCart())}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}

      {showMenu && (
        <div className="mobile-menu">
          <li
            onClick={() => {
              onNavigate(refs.heroRef);
              setShowMenu(false);
            }}
          >
            HOME
          </li>
          <li>ABOUT</li>
          <li
            onClick={() => {
              onNavigate(refs.shopRef);
              setShowMenu(false);
            }}
          >
            SHOP
          </li>
          <li
            onClick={() => {
              onNavigate(refs.serviceRef);
              setShowMenu(false);
            }}
          >
            SERVICE
          </li>
          <li>BLOG</li>
          <li
            onClick={() => {
              onNavigate(refs.contactRef);
              setShowMenu(false);
            }}
          >
            CONTACT
          </li>
        </div>
      )}
    </div>
  );
}
