import classes from "./Overview.module.scss";

import React from "react";

const Overview = () => {
  return (
    <div className={classes["column"]}>
      <div className={classes["overview"]}>
        <figure className={classes["overview__figure"]}>
          <img
            src="https://res.cloudinary.com/unnamed/image/upload/c_scale,w_426/v1578135786/phillip_s_clean_photo_1_hsxrwx.jpg"
            alt=""
            className={classes["overview__photo"]}
          />
        </figure>
        <h1 className={classes["overview__heading"]}>Phillip Lang</h1>

        <div className={classes["overview__location"]}>
          <svg className={classes["overview__icon-location"]}>
            <use xlinkHref="img/sprite.svg#icon-location-pin"></use>
          </svg>
          <button className={classes["btn-inline"]}>Alicante, Spain</button>
        </div>
      </div>
      <div className={classes["overview__status"]}>
        <div className={classes["overview__status-description"]}>
          React Front-end Developer
        </div>
        <div>
          <p className={classes["overview__status-description2"]}>
            <svg className={classes["overview__info"]}>
              <use xlinkHref="img/symbol-defs.svg#icon-info"></use>
            </svg>
            Looking for remote front-end position
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
