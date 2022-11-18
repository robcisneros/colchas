import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Catálogo de piezas únicas.</h2>
      <p>
        Puedes levantar tu pedido por whatsApp al 833 218 8379.
      </p>
    </section>
  );
};

export default MealsSummary;