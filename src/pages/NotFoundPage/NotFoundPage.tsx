import { NavLink } from "react-router-dom";

import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <h2>Page not found</h2>
      <p>
        Back to{" "}
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
      </p>
    </div>
  );
};

export default NotFoundPage;
