import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  // const [detailsIsShown, setDetailsIsShown] = useState(false); 

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hiddenCartHandler = () => {
    setCartIsShown(false);
  };
/*
  const showDetailsHandler = () => {
    setDetailsIsShown(true);
  };
  const hiddenDetailsHandler = () => {
    setDetailsIsShown(false);
  };
*/
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hiddenCartHandler} />}
      <Header onShowCart={showCartHandler} />
      
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;