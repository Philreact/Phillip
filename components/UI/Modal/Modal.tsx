import React, { Component, Fragment, ReactNode } from "react";
import classes from "./Modal.module.scss";
import Backdrop from "../Backdrop/Backdrop";

interface Props {
  show: boolean;
  modalClosed(): void;
  children: ReactNode;
  animate: number;
  backgroundColor: string;
}

class Modal extends Component<Props> {
  shouldComponentUpdate(nextProps: Props) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    let classList = [classes["Modal"], classes["no-animate"]];

    if (this.props.animate === 2) {
      classList = classList = [classes["Modal"], classes["addAnimation"]];
    }
    if (this.props.animate === 3) {
      classList = classList = [classes["Modal"]];
    }

    if (this.props.backgroundColor === "primary") {
      classList.push(classes["Modal--primary"]);
    }
    return (
      <Fragment>
        <Backdrop
          animate={this.props.animate}
          clicked={this.props.modalClosed}
          show={this.props.show}
        />
        <div className={classList.join(" ")}>{this.props.children}</div>
      </Fragment>
    );
  }
}

export default Modal;
