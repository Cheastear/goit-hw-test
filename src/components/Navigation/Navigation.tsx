import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

type ClassBuildProp = {
  isActive: boolean;
};

const buildLinkClass = ({ isActive }: ClassBuildProp) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={buildLinkClass}>
        Catalog
      </NavLink>
      <NavLink to="/favorites" className={buildLinkClass}>
        Favorites
      </NavLink>
    </nav>
  );
};

export default Navigation;
