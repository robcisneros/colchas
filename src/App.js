import { useState, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import SearchBar from "./components/Layout/SearchBar/SearchBar";
import CartProvider from "./store/CartProvider";
import useHttp from "./components/hooks/use-http";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [productos, setProductos] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hiddenCartHandler = () => {
    setCartIsShown(false);
  };
  

  useEffect(() => {
    const transformMeals = (data) => {
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          model: data[key].name,
          description: data[key].description,
          color: data[key].color,
          size: data[key].size,
          price: data[key].price,
          photos: data[key].photos,
          status: data[key].status,
        });
      }
      // console.log(loadedMeals);

      setProductos(loadedMeals);
    };

    fetchMeals(
      {
        url: "https://react-http-5cc8c-default-rtdb.firebaseio.com/colchas.json/",
      },
      transformMeals
    );
  }, [fetchMeals]);

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hiddenCartHandler} />}
      <Header onShowCart={showCartHandler} />
      
      <main>
        <SearchBar products={productos} isLoading={isLoading} error={error} />
      </main>
    </CartProvider>
  );
}

export default App;