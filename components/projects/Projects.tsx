import React from "react";
import classes from "./Projects.module.scss";
import Project from "./Project/Project";
// import { useContext } from "react";
// import {StoreContext} from '../store/Store'
import projects from "../../Json/projects.json";
const Projects = () => {
  const [formData, setFormData] = React.useState(projects);

  const [select, setSelect] = React.useState({
    classList: [classes["drop"]],
    open: false,
  });
  const nextProject = () => {
    const index = formData.findIndex((project) => project.active === true);

    const lengthArray = formData.length;

    if (index + 1 === lengthArray) {
      return;
    }

    const newArray = [...formData];

    const newMap = newArray.map((item, index2) => {
      if (index === index2) {
        return {
          ...item,
          active: false,
          side: "right",
          hide: false,
        };
      } else if (index + 1 === index2) {
        return {
          ...item,
          active: true,
          side: "left",
          hide: false,
        };
      } else {
        return {
          ...item,
          hide: true,
        };
      }
    });

    // newArray[index] = {
    //   ...newArray[index],
    //   active: false,
    //   side: "right",
    // };
    // newArray[index + 1] = {
    //   ...newArray[index + 1],
    //   active: true,
    //   side: "left",
    // };

    setFormData(newMap);
  };

  const previousProject = () => {
    let body = document.querySelector("body");
    body?.classList.add(classes.hideScrollBar);
    const index = formData.findIndex((project) => project.active === true);

    if (index === 0) {
      return;
    }

    const newArray = [...formData];

    const newMap = newArray.map((item, index2) => {
      if (index === index2) {
        return {
          ...item,
          active: false,
          side: "left",
          hide: false,
        };
      } else if (index - 1 === index2) {
        return {
          ...item,
          active: true,
          side: "right",
          hide: false,
        };
      } else {
        return {
          ...item,
          hide: true,
        };
      }
    });

    // newArray[index] = { ...newArray[index], active: false, side: "left" };
    // newArray[index - 1] = {
    //   ...newArray[index - 1],
    //   active: true,
    //   side: "right",
    // };

    setFormData(newMap);
  };

  console.log(formData);
  const checkBtnClasses = () => {
    const index = formData.findIndex((project) => project.active === true);

    return index;
  };

  let rightBtnClasses = [classes["Projects__arrows-button"]];
  let leftBtnClasses = [classes["Projects__arrows-button"]];

  if (checkBtnClasses() + 1 === formData.length) {
    rightBtnClasses.push(classes["hideBtn"]);
  }

  if (checkBtnClasses() === 0) {
    leftBtnClasses.push(classes["hideBtn"]);
  }

  const addVisible = () => {
    const newArray = [...select.classList];
    newArray.push(classes["visible"]);
    newArray.push(classes["opacity"]);
    newArray.push(classes["withBG"]);
    if (select.open) {
      setSelect((prevState) => {
        return {
          ...prevState,
          classList: [classes["drop"]],
          open: false,
        };
      });
    } else {
      setSelect((prevState) => {
        return {
          ...prevState,
          classList: newArray,
          open: true,
        };
      });
    }
  };

  function switchSelect(id: string) {
    const dd = document.querySelector(`.${classes["active"]}`);
    dd?.classList.remove(classes["active"]);
    const cc = document.getElementById(id);
    cc?.classList.add(classes["active"]);

    // console.log(cc);
  }

  return (
    <div className={classes.Projects}>
      <div className={classes["Projects__arrows"]}>
        {/* <div onClick={addVisible} className={select.classList.join(" ")}>
          <div
            className={[
              classes["option"],
              classes["active"],
              classes["placeholder"],
            ].join(" ")}
            data-value="placeholder"
          >
            Choose wisely
          </div>
          <div
            onClick={() => switchSelect("12")}
            className={[classes["option"]].join(" ")}
            data-value="wow"
            id="12"
          >
            Wow!
          </div>
          <div className={[classes["option"]].join(" ")} data-value="drop">
            So dropdown!
          </div>
          <div className={[classes["option"]].join(" ")} data-value="select">
            Very select!
          </div>
          <div className={[classes["option"]].join(" ")} data-value="custom">
            Much custom!
          </div>
          <div className={[classes["option"]].join(" ")} data-value="animation">
            Such animation!
          </div>
        </div> */}
        <svg onClick={previousProject} className={leftBtnClasses.join(" ")}>
          <use xlinkHref="img/symbol-defs.svg#icon-circle-left"></use>
        </svg>{" "}
        <svg onClick={nextProject} className={rightBtnClasses.join(" ")}>
          <use xlinkHref="img/symbol-defs.svg#icon-circle-right"></use>
        </svg>{" "}
      </div>

      {formData.map((project, index) => {
        return <Project {...project} key={project.name} />;
      })}
    </div>
  );
};

export default Projects;
