import React from 'react';
import ShoppingFilterComponent from './shoppingfilter'
import CardComponent from './shoppingcard'

class ShoppingComponent extends React.Component {
  render () {
      return (
        <div className="shopping">
          <div>
              <ShoppingFilterComponent />
          </div>
          <div className="shopping__itemcontainer">
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
        </div>
      )
    }
  }

export default ShoppingComponent;