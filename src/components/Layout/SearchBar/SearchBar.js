import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import Meals from "../../Meals/Meals";
import MealItem from "../../Meals/MealItem/MealItem";

const SearchBar = (props) => {
  const [filteredProducts, setFilteredProducts] = useState(props.products);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredProducts(
      props.products.filter((product) => {
        return product.description.toLowerCase().includes(searchTerm.toLowerCase()) || product.size.toLowerCase().includes(searchTerm.toLowerCase())
      })
    );
    console.log("dentro");
  }, [searchTerm, props.products]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  let content = <p>Found no products.</p>;

  if (filteredProducts.length > 0) {
    content = filteredProducts.map((product) => (
      <MealItem
        key={product.id}
        id={product.id}
        name={product.model}
        description={product.description}
        price={product.price}
        size={product.size}
        color={product.color}
        photos={product.photos}
        status={product.status}
      />
    ));
  }
  if (props.error) {
    content = <p> {props.error} </p>;
  }
  if (props.isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <Fragment>
      <div className="flex flex-row flex-wrap w-full justify-center py-36">
        <div className="px-6 sm:w-1/2 w-4/5 lg:w-1/4 rounded-lg sm:mx-auto h-20 items-center flex flex-col justify-center">
        <p className="font-bold flex flex-wrap flex-row w-full mb-4">Filtra por tamaño o descripción: </p>
        <form action="" className="relative mx-auto flex flex-wrap flex-row w-full">
          
          <input
            type="search"
            onChange={searchChangeHandler}
            name="search"
            id="search"
            className="relative peer bg-transparent w-full h-12 rounded-full border cursor-pointer outline-none focus:w-full focus:border-orange-500 focus:cursor-text focus:pl-14 duration-700"
          />
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="absolute inset-y-0 w-12 h-8 my-auto px-3.5 stroke-gray-500 border-r border-transparent peer-focus:border-orange-500 peer-focus:stroke-orange-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </form>
      </div>
    </div>
    <Meals content={content} />
    </Fragment>
  );
};
export default SearchBar;
