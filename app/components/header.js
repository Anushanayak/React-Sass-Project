import React from 'react';
import img from '../assets/images/logo.png';


class HeaderComponent extends React.Component {
  render () {
      return (
        <div className="header">
          <div className="header__logo">
            <img
             src={img}
             alt="Logo"
            />
          </div>
          <div className="header__options">
            <div className="header__signin">
              Login &amp; Signup
            </div>
            <div className="header__cart">
              <i className="fas fa-cart-plus"></i>
              <span>Cart</span>
            </div>
          </div>
        </div>
      );
    }
  }

export default HeaderComponent;