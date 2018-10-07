import React from 'react';
import wallet from '../assets/images/wallet4.png';

class CardComponent extends React.Component {
  render () {
      return (
        <div className="shoppingcard">
          <div className="shoppingcard__img">
            <img src={wallet} alt="wallet" />
          </div>
          <div className="shoppingcard__title">
            Tommy Hilfiger Men Brown Genuine Leather Wallet
          </div>
          <div className="shoppingcard__slot">Total 6 slots</div>
          <div className="shoppingcard__cost">&#8377;2376/-</div>
          <button className="btn btn__addtocart">Add to Cart</button>
        </div>
      )
    }
  }

export default CardComponent;

