import React from "react";
import classes from "./Project.module.scss";

interface Props {
  name: string;
  url: string;
  active: boolean;
  side: string;
  text: string;
  technologies: string[];
  hide?: boolean;
  subtitle: string;

  github: string;
}

const Project = (props: Props) => {
  console.log(props);
  const isActive = () => {
    if (props.hide) {
      return "hide";
    } else if (props.active) {
      return `active-${props.side}`;
    } else {
      return props.side;
    }
  };

  return (
    <div className={classes.container}>
      <div className={[classes["Project"], classes[isActive()]].join(" ")}>
        <div className={[classes["Project__left"]].join(" ")}>
          <div className={[classes["Project__left-box"]].join(" ")}>
            <p className={[classes["Project__title"]].join(" ")}>
              {props.name}
            </p>
            <p className={[classes["Project__subtitle"]].join(" ")}>
              {props.subtitle}
            </p>
            <a
              target="_blank"
              href={props.github}
              className={classes["Project__link"]}
            >
              <svg className={classes.Project__github}>
                <use xlinkHref="img/symbol-defs.svg#icon-github"></use>
              </svg>
            </a>
          </div>
        </div>
        <div className={[classes["Project__right"]].join(" ")}>
          <div className={[classes["Project__right-box"]].join(" ")}>
            <div
              className={[classes["Project__right-box-description"]].join(" ")}
            >
              <p>
                <a target="_blank" href={props.url}>
                  <span>
                    {props.name}{" "}
                    <svg className={classes["Project__link"]}>
                      <use xlinkHref="img/symbol-defs.svg#icon-link"></use>
                    </svg>{" "}
                  </span>
                </a>
                {props.text}
              </p>
            </div>
            <div
              className={[classes["Project__right-box-technologies"]].join(" ")}
            >
              <ul>
                {props.technologies.map((technology, index) => {
                  return <li key={technology}>{technology}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
