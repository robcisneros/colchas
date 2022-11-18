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

  let colorStatus =  '';
      if(props.status === 'Disponible') {
        colorStatus = 'bg-verde';}
      else if (props.status === 'Agotado') {
        colorStatus = 'bg-rojo';
      } else {
        colorStatus = 'bg-naranja';
      }
      // console.log("El estado es: ", colorStatus);

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
          status={props.status}
          onHideDetails={hiddenDetailsHandler}
        />
      )}
      <div className="flex justify-between m-4 pb-4 border-b border-solid border-gray-400">
        <div className="w-40 h-40" onClick={showDetailsHandler}>
          <img
            className="w-40 rounded-full"
            src={imagesArray[0]}
            alt={props.name}
          />
        </div>
        <div className="flex flex-col items-end justify-center">
          <p className="mb-1 text-right font-bold"> {props.description} </p>
          <div className="mt-1 font-bold text-xl text-blue-700 text-right">
            {price}
          </div>
          <p className="mb-1 text-right"> {props.name} </p>
          <div className="flex flex-wrap flex-row">
            <button className={`h-5 w-5 mx-2 rounded-full border ${colorStatus}`}></button>
            <p>{props.status}</p>
          </div>
          <MealItemForm onAddToCart={addToCartHandler} />{" "}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MealItem;
