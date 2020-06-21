import React, { Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Zoom } from "react-toastify";
import classes from "./Alert.module.scss";

const Alert = (alert) => {
  const messageError = () => {
    return (
      <Fragment>
        <div className={classes["row"]}>{alert.alertError.msg}</div>
      </Fragment>
    );
  };
  const messageSuccess = () => {
    return (
      <Fragment>
        <div className={classes["row"]}>{alert.alertSuccess.msg}</div>
      </Fragment>
    );
  };

  if (alert.alertError) {
    toast.error(messageError);
  }
  if (alert.alertSuccess) {
    console.log("alert");
    toast.success(messageSuccess);
  }

  return (
    <ToastContainer
      className={classes["Alert__zIndexToast"]}
      transition={Zoom}
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange={false}
      draggable
      pauseOnHover
    />
  );
};

export default Alert;
