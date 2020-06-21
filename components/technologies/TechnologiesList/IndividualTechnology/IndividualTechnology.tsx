import React from "react";
import classes from "./IndividualTechnology.module.scss";

interface Technology {
  name: string;
  years: number;
  value: string;
  icon: boolean;
  type: string;
  end: string;
}

const IndividualTechnology = (props: Technology) => {
  return (
    <div
      className={[classes.IndividualTechnology, classes[props.type]].join(" ")}
    >
      <div className={classes["IndividualTechnology__header"]}>
        <p>{props.name}</p>
        {props.icon && (
          <svg className={classes["IndividualTechnology__icon"]}>
            <use xlinkHref={`img/symbol-defs.svg#icon-${props.value}`}></use>
          </svg>
        )}
      </div>

      {props.type === "learning" ? (
        <div className={classes["IndividualTechnology__footer"]}>
          <p className={classes["IndividualTechnology__type"]}>Front-end</p>
          <p className={classes["IndividualTechnology__years"]}>
            <span className={classes["IndividualTechnology__exp"]}>
              Learning
            </span>{" "}
          </p>
        </div>
      ) : (
        <div className={classes["IndividualTechnology__footer"]}>
          <p className={classes["IndividualTechnology__type"]}>{props.end}</p>
          <p className={classes["IndividualTechnology__years"]}>
            <span className={classes["IndividualTechnology__exp"]}>EXP</span>{" "}
            {(props.years * 12).toFixed(0)} months{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default IndividualTechnology;
