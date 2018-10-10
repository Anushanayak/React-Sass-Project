import React from 'react';


class ShoppingFilterComponent extends React.Component {
  render () {
      return (
        <div className="shopping__filter">
          <h1 className="shopping__filterheader">Category</h1>
          <ul className="shopping__filteritem">
            <li className="checkbox">
              <input type="checkbox" name="show" id="accesories"/>
              <label for="accesories">Accesories</label>
            </li>
            <li className="checkbox">
              <input type="checkbox" name="show" id="wallets" checked/>
              <label for="wallets">Wallets</label>
            </li>
            <li className="checkbox">
              <input type="checkbox" name="show" id="bags"/>
              <label for="bags">Bags</label>
            </li>
            <li className="checkbox">
              <input type="checkbox" name="show" id="travel"/>
              <label for="travel">Travel</label>
            </li>
          </ul>
        </div>
      );
    }
  }

export default ShoppingFilterComponent;