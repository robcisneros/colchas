import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
// import MealItem from "./MealItem/MealItem";
import React  from "react";
// import useHttp from "../hooks/use-http";

const AvailableMeals = (props) => {
  // const [productos, setProductos] = useState([]);

  // const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  // useEffect(() => {
  //   const transformMeals = (data) => {
  //     const loadedMeals = [];

  //     for (const key in data) {
  //       loadedMeals.push({
  //         id: key,
  //         model: data[key].name,
  //         description: data[key].description,
  //         color: data[key].color,
  //         size: data[key].size,
  //         price: data[key].price,
  //         photos: data[key].photos,
  //         status: data[key].status,
  //       });
  //     }
  //     console.log(loadedMeals);

  //     setProductos(loadedMeals);
  //   };

  //   fetchMeals(
  //     {
  //       url: "https://react-http-5cc8c-default-rtdb.firebaseio.com/colchas.json/",
  //     },
  //     transformMeals
  //   );
  // }, [fetchMeals]);
  

  // let content = <p>Found no meals.</p>;

  // if (productos.length > 0) {
  //   content = productos.map((product) => (
  //     <MealItem
  //       key={product.id}
  //       id={product.id}
  //       name={product.model}
  //       description={product.description}
  //       price={product.price}
  //       size={product.size}
  //       color={product.color}
  //       photos={product.photos}
  //       status={product.status}
  //     />
  //   ));
  // }
  // if (error) {
  //   content = <p> {error} </p>;
  // }
  // if (isLoading) {
  //   content = <p>Loading...</p>;
  // }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{props.content}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
