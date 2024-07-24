import { MouseEvent } from "react";

import css from "./LoadMoreBtn.module.css";

type Prop = {
  onClick: (e: MouseEvent) => void;
};

const LoadMoreBtn = ({ onClick }: Prop) => {
  return (
    <button type="button" className={css.button} onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
