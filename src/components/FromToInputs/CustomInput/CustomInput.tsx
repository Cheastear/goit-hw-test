import { FieldProps } from "formik";

import css from "./CustomInput.module.css";
import { useState } from "react";

interface Prop extends FieldProps {
  label: string;
}

const isNumeric = (str: string) => /^\d+$/.test(str);

const CustomInput = ({ form, field, label }: Prop) => {
  const [value, setValue] = useState(() => {
    if (field.value == "0") return "";

    return Number(field.value).toLocaleString();
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/,/g, "");

    if (inputValue == "") setValue("");
    else if (!isNumeric(inputValue)) {
      setValue(value);
      return;
    } else setValue(Number(inputValue).toLocaleString());

    form.setFieldValue(field.name, inputValue);
  };

  return (
    <div>
      <span className={css.label}>{label}</span>
      <input
        value={value}
        className={`${css.input} ${css.from}`}
        onChange={handleOnChange}
      />
    </div>
  );
};
export default CustomInput;
