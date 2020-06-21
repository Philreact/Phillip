import React from "react";
import classes from "./Backdrop.module.scss";

interface Props {
  show: boolean;
  clicked(): void;
  animate: number;
}
const Backdrop = (props: Props) => {
  // return props.show ? (
  //   <div className={classes.Backdrop} onClick={props.clicked}></div>
  // ) : null;

  let classList = [classes["Backdrop"]];

  if (props.animate === 1) {
    classList = [classes["Backdrop"], classes["no-animate"]];
  } else if (props.animate === 2) {
    classList = [classes["Backdrop"], classes["animate"]];
  } else if (props.animate === 3) {
    classList = [classes["Backdrop"]];
  }

  return <div className={classList.join(" ")} onClick={props.clicked}></div>;
};

export default Backdrop;
