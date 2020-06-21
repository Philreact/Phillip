import classes from "./TechnologiesList.module.scss";
import IndividualTechnology from "./IndividualTechnology/IndividualTechnology";

import React from "react";

const TECHNOLOGIES = [
  {
    name: "REACT",
    years: 2,
    value: "react",
    icon: true,
    type: "technology",
    end: "Front-end",
  },

  {
    name: "CSS",
    years: 2,
    value: "csswizardry",
    icon: true,
    type: "technology",
    end: "Front-end",
  },
  {
    name: "JAVASCRIPT",
    years: 2,
    value: "javascript",
    icon: true,
    type: "technology",
    end: "Front-end",
  },
  {
    name: "REDUX",
    years: 2,
    value: "redux",
    icon: true,
    type: "technology",
    end: "Front-end",
  },
  {
    name: "TYPESCRIPT",
    years: 0.25,
    value: "typescript",
    icon: true,
    type: "technology",
    end: "Front-end",
  },
  {
    name: "JEST",
    years: 0.25,
    value: "jest",
    icon: true,
    type: "technology",
    end: "Front-end",
  },
  {
    name: "ENZYME",
    years: 0.25,
    value: "jest",
    icon: false,
    type: "technology",
    end: "Front-end",
  },
  {
    name: "NEXT.JS",
    years: 0.334,
    value: "next",
    icon: false,
    type: "technology",
    end: "Front-end",
  },
  {
    name: "REDUX-THUNK",
    years: 2,
    value: "redux-thunk",
    icon: false,
    type: "technology",
    end: "Front-end",
  },
  {
    name: "SASS",
    years: 0.5,
    value: "sass",
    icon: true,
    type: "technology",
    end: "Front-end",
  },
  {
    name: "JSON WEB TOKENS",
    years: 1,
    value: "jwt",
    icon: false,
    type: "technology",
    end: "Front-end",
  },
  {
    name: "STRIPE",
    years: 1,
    value: "stripe",
    icon: false,
    type: "service",
    end: "Service",
  },
  {
    name: "CLOUDINARY",
    years: 1,
    value: "cloudinary",
    icon: false,
    type: "service",
    end: "Service",
  },
  {
    name: "SENDGRID",
    years: 1,
    value: "sendgrid",
    icon: false,
    type: "service",
    end: "Service",
  },
  {
    name: "GRAPHQL",
    years: 1,
    value: "graphql",
    icon: true,
    type: "learning",
    end: "Learning",
  },
];

const TechnologiesList = () => {
  return (
    <div className={classes.TechnologiesList}>
      {TECHNOLOGIES.map((technology, index) => {
        return <IndividualTechnology {...technology} key={technology.name} />;
      })}
    </div>
  );
};

export default TechnologiesList;
