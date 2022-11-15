import Modal from "../../UI/Modal";
import classes from "./Details.module.css";
import BTcarosuel from "./BTcarousel";

const Details = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <Modal>
      {props.children}

      <h1> {props.description} </h1>
      
      <div className={classes.description}> {props.description} </div>
      <div className={classes.price}> {price} </div>
      <p><span className="font-bold">Color: </span> {props.color} </p>
      <p><span className="font-bold">Tamaño: </span> {props.size} </p>
      <div> <BTcarosuel items={props.photos}/> </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.onHideDetails}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Details;
