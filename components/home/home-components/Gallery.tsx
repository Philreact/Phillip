import classes from "./Gallery.module.scss";

const HomeTop = () => {
  return (
    <div className={classes["gallery"]}>
      <svg className={classes["gallery__item"]}>
        <use xlinkHref="img/symbol-defs.svg#icon-react"></use>
      </svg>
      <svg className={classes["gallery__item"]}>
        <use xlinkHref="img/symbol-defs.svg#icon-redux"></use>
      </svg>
      <svg className={classes["gallery__item"]}>
        <use xlinkHref="img/symbol-defs.svg#icon-javascript"></use>
      </svg>
      <svg className={classes["gallery__item"]}>
        <use xlinkHref="img/symbol-defs.svg#icon-jest"></use>
      </svg>
      <svg className={classes["gallery__item"]}>
        <use xlinkHref="img/symbol-defs.svg#icon-typescript"></use>
      </svg>
    </div>
  );
};

export default HomeTop;
