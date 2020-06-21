import classes from "./Bio.module.scss";
import Link from "next/link";

import React from "react";

const Bio = () => {
  return (
    <div className={classes["Bio"]}>
      <figure className={classes["Bio__figure"]}>
        <blockquote className={classes["Bio__text"]}>
          Welcome to my portfolio app. My name is Phillip and I have been a web
          developer for 2 years. I started off coding part time and eventually I
          learnt modern Javascript, CSS, React and Express.
          <br />
          <br />
          It was at the end of June 2019 that I decided that programming was my
          passion and I dove into it full time. Shortly after I launched my
          first commercial app called{" "}
          <a
            className={classes["anchor"]}
            target="_blank"
            href="https://www.topscholar.io"
          >
            Topscholar
          </a>
          .
          <br />
          <br />
          After that project I decided to focus on the front-end. Since then I
          have learned SASS, Nextjs, Typescript, Jest, Enzyme and much more.
        </blockquote>
      </figure>

      <div className={classes["container"]}>
        <a
          href="https://github.com/PhillipLangMartinez"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <div className={classes["box"]}>
            <p className={classes["box__title"]}>Github</p>
            <svg className={classes["box__icon"]}>
              <use xlinkHref="img/symbol-defs.svg#icon-github"></use>
            </svg>
            <p className={classes["box__description"]}>
              Check out my Github for the source code of my projects
            </p>
          </div>
        </a>
        <Link href="/technologies">
          <a className={classes.link}>
            <div className={classes["box"]}>
              <p className={classes["box__title"]}>Technologies</p>
              <svg className={classes["box__icon"]}>
                <use xlinkHref="img/symbol-defs.svg#icon-html-five2"></use>
              </svg>
              <p className={classes["box__description"]}>
                See which technologies I am proficient in and which ones I am
                currently learning.
              </p>
            </div>
          </a>
        </Link>
        <Link href="/projects">
          <a className={classes.link}>
            <div className={classes["box"]}>
              <p className={classes["box__title"]}>Projects</p>
              <svg className={classes["box__icon"]}>
                <use xlinkHref="img/symbol-defs.svg#icon-briefcase"></use>
              </svg>
              <p className={classes["box__description"]}>
                Check out some of the projects that I've worked on.
              </p>
            </div>
          </a>
        </Link>
        <Link href="/contact">
          <a className={classes.link}>
            <div className={classes["box"]}>
              <p className={classes["box__title"]}>Contact</p>
              <svg className={classes["box__icon"]}>
                <use xlinkHref="img/symbol-defs.svg#icon-address-book"></use>
              </svg>
              <p className={classes["box__description"]}>
                Need to ask me a question ? Send me a message through the
                contact page.
              </p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Bio;
