import css from "./FromToInputs.module.css";
import CustomInput from "./CustomInput/CustomInput";
import { Field } from "formik";

const FromToInputs = () => {
  return (
    <div className={css.container}>
      <Field name="from" component={CustomInput} label="From" />
      <div className={css["vertical-separator"]}></div>
      <Field name="to" component={CustomInput} label="To" />
    </div>
  );
};
export default FromToInputs;
