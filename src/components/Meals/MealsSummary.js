import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Catálogo de piezas únicas.</h2>
      <p>
        Puedes levantar pedido usando el carrito (esquina superior derecha) o por whatsApp al 833 444 2244.
      </p>
    </section>
  );
};

export default MealsSummary;