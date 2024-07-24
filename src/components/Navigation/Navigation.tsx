import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={css.link}>
        Catalog
      </NavLink>
      <NavLink to="/favorites" className={css.link}>
        Favorites
      </NavLink>
    </nav>
  );
};

export default Navigation;
