import React from 'react';


class MenuComponent extends React.Component {
  render () {
      return (
        <div className="menu">
          <ul>
            <li className="menu__item">
              <i className="menu__icon fab fa-accusoft"></i>
              <span>Accesories</span>
            </li>
            <li className="menu__item menu__item--active">
              <i className="menu__icon fas fa-wallet"></i>
              <span>Wallets</span>
            </li>
            <li className="menu__item">
              <i className="menu__icon fas fa-shopping-bag"></i>
              <span>Bags</span>
            </li>
            <li className="menu__item">
              <i className="menu__icon fas fa-suitcase"></i>
              <span>Travel</span>
            </li>
          </ul>
        </div>
      );
    }
  }

export default MenuComponent;