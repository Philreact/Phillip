import classes from "./Navbar.module.scss";
import Link from "next/link";
import projects from "../../../Json/projects.json";
import { useState } from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";

const Navbar = () => {
  const [seachedProjects, setSearchProjects] = useState<
    { name: string; url?: string }[] | null
  >(null);
  const [showSearch, setShowSearch] = useState(false);
  const [backdropAnimate, setBackdropAnimate] = useState(1);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setSearchProjects([]);
      return;
    }
    const filter = projects.filter((project, index) => {
      return project.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setSearchProjects(filter);
  };

  const onFocusHandler = () => {
    setShowSearch(true);
    setBackdropAnimate(2);
  };

  let searchListClasses = [classes["search__hide"]];

  if (showSearch && seachedProjects) {
    if (seachedProjects.length === 0) {
      setSearchProjects([{ name: "No Results" }]);
    }
    searchListClasses = [classes["searchList"]];
  }

  const closeBackdrop = () => {
    setShowSearch(false);
    setBackdropAnimate(3);
  };

  return (
    <div className={classes.Navbar}>
      <Backdrop
        show={showSearch}
        clicked={closeBackdrop}
        animate={backdropAnimate}
      />
      <Link href="/">
        <nav className={classes["user-nav-left"]}>
          <div>
            <svg className={classes.Logo}>
              <use xlinkHref="img/symbol-defs.svg#icon-embed2"></use>
            </svg>
          </div>
        </nav>
      </Link>
      {/* <img className={classes.Logo} src="img/logo.png" alt="Logo" /> */}
      <form action="#" className={classes.search}>
        <input
          type="text"
          className={classes.search__input}
          placeholder="Search projects"
          onChange={onChangeHandler}
          onFocus={onFocusHandler}
        />
        <div className={classes.search__button}>
          <svg className={classes.search__icon}>
            <use xlinkHref="img/sprite.svg#icon-magnifying-glass"></use>
          </svg>
        </div>
        {seachedProjects && (
          <div className={searchListClasses.join(" ")}>
            {seachedProjects.map((project: { name: string; url?: string }) => {
              return (
                <div className={classes.searchList__item} key={project.name}>
                  <a
                    onClick={closeBackdrop}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                  >
                    {" "}
                    <p>{project.name}</p>{" "}
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </form>
      <nav className={classes["user-nav"]}>
        {/* <div className={classes["user-nav__icon-box"]}>
          <svg className={classes["user-nav__icon"]}>
            <use xlinkHref="img/sprite.svg#icon-bookmark"></use>
          </svg>
          <span className={classes["user-nav__notification"]}>7</span>
        </div>
        <div className={classes["user-nav__icon-box"]}>
          <svg className={classes["user-nav__icon"]}>
            <use xlinkHref="img/sprite.svg#icon-chat"></use>
          </svg>
          <span className={classes["user-nav__notification"]}>13</span>
        </div> */}
        <a
          href="https://github.com/PhillipLangMartinez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={classes["user-nav__user"]}>
            <svg className={classes.Navbar__github}>
              <use xlinkHref="img/symbol-defs.svg#icon-github"></use>
            </svg>
            {/* <img
            src="img/user.jpg"
            alt=""
            className={classes["user-nav__user-photo"]}
          />
          <span className={classes["user-nav__user-name"]}>Phillip</span> */}
          </div>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
