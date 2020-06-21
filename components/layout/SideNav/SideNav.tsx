import classes from "./SideNav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const SideNav = () => {
  const Router = useRouter();
  console.log(Router);
  let classesLinkHome = [classes["side-nav__item"]];
  let classesLinkTechnologies = [classes["side-nav__item"]];
  let classesLinkProjects = [classes["side-nav__item"]];
  let classesLinkContact = [classes["side-nav__item"]];

  if (Router.pathname === "/") {
    classesLinkHome.push(classes["side-nav__item--active"]);
  } else if (Router.pathname === "/technologies") {
    classesLinkTechnologies.push(classes["side-nav__item--active"]);
  } else if (Router.pathname === "/projects") {
    classesLinkProjects.push(classes["side-nav__item--active"]);
  } else if (Router.pathname === "/contact") {
    classesLinkContact.push(classes["side-nav__item--active"]);
  }

  return (
    <nav className={classes["sidebar"]}>
      <ul className={classes["side-nav"]}>
        <li className={classesLinkHome.join(" ")}>
          <Link href="/">
            <a className={classes["side-nav__link"]}>
              <svg className={classes["side-nav__icon"]}>
                <use xlinkHref="img/sprite.svg#icon-home"></use>
              </svg>
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li className={classesLinkTechnologies.join(" ")}>
          <Link href="/technologies">
            <a className={classes["side-nav__link"]}>
              <svg className={classes["side-nav__icon"]}>
                <use xlinkHref="img/symbol-defs.svg#icon-html-five2"></use>
              </svg>
              <span>Technologies</span>
            </a>
          </Link>
        </li>
        <li className={classesLinkProjects.join(" ")}>
          <Link href="/projects">
            <a href="" className={classes["side-nav__link"]}>
              <svg className={classes["side-nav__icon"]}>
                <use xlinkHref="img/symbol-defs.svg#icon-briefcase"></use>
              </svg>
              <span>Projects</span>
            </a>
          </Link>
        </li>
        <li className={classesLinkContact.join(" ")}>
          <Link href="/contact">
            <a href="" className={classes["side-nav__link"]}>
              <svg className={classes["side-nav__icon"]}>
                <use xlinkHref="img/symbol-defs.svg#icon-address-book"></use>
              </svg>
              <span>Contact</span>
            </a>
          </Link>
        </li>
      </ul>
      {/* <div className={classes["legal"]}>
        &copy; 2020 by Phillip. All rights reserved
      </div> */}
    </nav>
  );
};

export default SideNav;
