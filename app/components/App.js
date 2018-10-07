import React from 'react';
import HeaderComponent from './header'
import OffersComponent from './offers'
import MenuComponent from './menu'
import ShoppingComponent from './shopping'


const App = () => {
  return (
    <div className="container">
      <HeaderComponent />
      <OffersComponent />
      <MenuComponent />
      <ShoppingComponent />
    </div>
  );
};

export default App;
