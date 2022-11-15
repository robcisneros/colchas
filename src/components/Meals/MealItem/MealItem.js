// import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import React, { useContext, useState } from "react";
import Details from "./Details";

const MealItem = (props) => {
  const imagesArray = Object.values(props.photos);
  const cartCtx = useContext(CartContext);
  const [detailsIsShown, setDetailsIsShown] = useState(false);
  const price = `$${props.price.toFixed(2)}`;

  const showDetailsHandler = () => {
    setDetailsIsShown(true);
  };
  const hiddenDetailsHandler = () => {
    setDetailsIsShown(false);
  };

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <React.Fragment>
      {detailsIsShown && (
        <Details
          key={props.id}
          id={props.id}
          name={props.name}
          description={props.description}
          price={props.price}
          size={props.size}
          color={props.color}
          photos={imagesArray}
          onHideDetails={hiddenDetailsHandler}
        />
      )}
      <div className="flex justify-between m-4 pb-4 border-b border-solid border-gray-400">
        <div 
          className="w-40 h-40"
          onClick={showDetailsHandler}
        >
          <img className="w-40 rounded-full" src={imagesArray[0]} alt={props.name}/>
        </div>
        <div>
        <h3 className="mb-1 text-right"> {props.description} </h3>
        <div className="mt-1 font-bold text-xl text-blue-500 text-right"> {price} </div>
          <MealItemForm onAddToCart={addToCartHandler} />{" "}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MealItem;
