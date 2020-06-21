import React from "react";
import classes from "./Contact.module.scss";
import validator from "validator";
import Modal from "../UI/Modal/Modal";
import { contactEmail } from "../../actions/actions";
import alert from "../../actions/Alert";
import Spinner from "../UI/Spinner/Spinner";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    purpose: "developer",
    next: false,
  });
  const [animate, setAnimate] = React.useState(1);

  const [showSpinner, setShowSpinner] = React.useState(false);
  // const [sentClass, setSentClass] = React.useState([
  //   classes["modal__icon-hide"],
  // ]);

  const onSubmitHandlerNext = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    const email = validator.isEmail(formData.email);
    if (!formData.name) {
      console.log("enter name");
      return;
    } else if (!email) {
      console.log("enter email");
      return;
    }

    setFormData({
      ...formData,
      next: true,
    });
    setAnimate(2);
  };

  const onChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const modalClosed = () => {
    setFormData((prevState) => {
      return {
        ...prevState,
        next: false,
      };
    });

    setAnimate(3);
  };

  const sendMessage = async () => {
    const email = validator.isEmail(formData.email);
    if (!formData.name) {
      console.log("enter name");
      return;
    } else if (!email) {
      console.log("enter email");
      return;
    } else if (!formData.message) {
      console.log("enter message");
      return;
    }

    let body = document.querySelector("body");
    body?.classList.add(classes.hideScrollBar);

    // setSentClass([classes["modal__icon-send"]]);
    contactEmail;
    try {
      setShowSpinner(true);
      const res = await contactEmail(formData);
      setShowSpinner(false);

      setFormData({
        name: "",
        email: "",
        message: "",
        purpose: "developer",
        next: false,
      });

      modalClosed();

      alert({
        alertSuccess: {
          msg: res.data.msg,
        },
      });
    } catch (error) {
      setShowSpinner(false);

      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach((error: { msg: string }) =>
          alert({
            alertError: {
              msg: error.msg,
            },
          })
        );
      }
    }
  };

  const radioHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.id,
    });
  };

  return (
    <div className={classes["Contact"]}>
      <div className={classes["Contact__form"]}>
        <Spinner show={showSpinner} />
        <form onSubmit={onSubmitHandlerNext} className={classes["form"]}>
          <div className={"margin-bottom-medium"}>
            <h2 className="heading-secondary">Contact Phillip</h2>
          </div>
          <div className={classes["form__group"]}>
            <input
              type="text"
              placeholder="Your Name"
              required
              className={classes["form__input"]}
              id="name"
              value={formData.name}
              name="name"
              onChange={onChangeHandler}
            />
            <label htmlFor="name" className={classes["form__label"]}>
              Your Name
            </label>
          </div>
          <div className={classes["form__group"]}>
            <input
              type="email"
              placeholder="Your Email"
              required
              className={classes["form__input"]}
              id="email"
              value={formData.email}
              name="email"
              onChange={onChangeHandler}
            />
            <label htmlFor="email" className={classes["form__label"]}>
              Email Address
            </label>
          </div>

          {/* <div
            className={[
              classes["form__group"],
              classes["u-margin-bottom-medium"],
            ].join(" ")}
          >
            <div className={classes["form__radio-group"]}>
              <input
                type="radio"
                className={classes["form__radio-input"]}
                id="small"
                name="size"
              />
              <label htmlFor="small" className={classes["form__radio-label"]}>
                <span className={classes["form__radio-button"]}></span>
                Job opportunity
              </label>
            </div>
            <div className={classes["form__radio-group"]}>
              <input
                type="radio"
                className={classes["form__radio-input"]}
                id="large"
                name="size"
              />
              <label htmlFor="large" className={classes["form__radio-label"]}>
                <span className={classes["form__radio-button"]}></span>
                Large tour group
              </label>
            </div>
          </div> */}

          <div className={classes["form__group"]}>
            <button className={[classes["btn"]].join(" ")}>Next Step</button>
          </div>
        </form>
      </div>
      <Modal
        backgroundColor="primary"
        animate={animate}
        modalClosed={modalClosed}
        show={formData.next}
      >
        <div className={classes["modal"]}>
          <div
            className={[
              classes["form__group--center"],
              "margin-bottom-medium",
            ].join(" ")}
          >
            <svg className={classes["modal__icon"]}>
              <use xlinkHref="img/symbol-defs.svg#icon-envelop"></use>
            </svg>
          </div>
          <div className={classes["form__group"]}>
            <input
              type="text"
              placeholder="Your Name"
              required
              className={classes["form__input"]}
              id="name"
              value={formData.name}
              name="name"
              onChange={onChangeHandler}
            />
            <label htmlFor="name" className={classes["form__label"]}>
              Your Name
            </label>
          </div>
          <div className={classes["form__group"]}>
            <input
              type="email"
              placeholder="Your Email"
              required
              className={classes["form__input"]}
              id="email2"
              value={formData.email}
              name="email"
              onChange={onChangeHandler}
            />
            <label htmlFor="email" className={classes["form__label"]}>
              Email Address
            </label>
          </div>
          <div className={classes["form__group"]}>
            <textarea
              placeholder="Message"
              required
              className={classes["form__input"]}
              id="message"
              value={formData.message}
              name="message"
              onChange={onChangeHandler}
              rows={4}
            />
            <label htmlFor="message" className={classes["form__label"]}>
              Message
            </label>
          </div>
          <div>
            <p className={[classes["form__paragraph"]].join(" ")}>
              Purpose of message
            </p>
          </div>
          <div
            className={[
              classes["form__group"],
              classes["form__radio-group"],
            ].join(" ")}
          >
            <input
              type="radio"
              className={classes["form__radio-input"]}
              id="developer"
              name="purpose"
              checked={formData.purpose === "developer"}
              value={formData.purpose}
              onChange={radioHandler}
            />

            <label htmlFor="developer" className={classes["form__radio-label"]}>
              <span className={classes["form__radio-button"]}></span>
              Fellow Coder
            </label>
          </div>
          <div
            className={[
              classes["form__group"],
              classes["form__radio-group"],
            ].join(" ")}
          >
            <input
              type="radio"
              className={classes["form__radio-input"]}
              id="job"
              name="purpose"
              checked={formData.purpose === "job"}
              value={formData.purpose}
              onChange={radioHandler}
            />
            <label htmlFor="job" className={classes["form__radio-label"]}>
              <span className={classes["form__radio-button"]}></span>
              Job opportunity
            </label>
          </div>

          <div
            className={[
              classes["form__group"],
              classes["form__group--center"],
            ].join(" ")}
          >
            <button
              onClick={sendMessage}
              className={[classes["btn"], classes["btn"]].join(" ")}
            >
              Send
            </button>
          </div>
        </div>
      </Modal>
      {/* <div
        className={[
          classes["form__group--center"],
          "margin-bottom-medium",
        ].join(" ")}
      >
        <svg className={sentClass.join(" ")}>
          <use xlinkHref="img/symbol-defs.svg#icon-envelop"></use>
        </svg>
      </div> */}
    </div>
  );
};

export default Contact;
