import { TailSpin } from "react-loader-spinner";

import css from "./Loader.module.css";

const Loader = () => {
  return (
    <TailSpin
      height="40"
      width="40"
      color="#3470FF"
      wrapperClass={css.loader}
    />
  );
};

export default Loader;
