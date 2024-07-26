import { FieldProps } from "formik";
import Select, { StylesConfig, SingleValue } from "react-select";
import { useCallback, useState } from "react";

const getDefaultStyles = (width: string): StylesConfig<OptionType, false> => ({
  control: (provided, state) => ({
    ...provided,
    width: width,
    boxSizing: "border-box",
    height: 48,
    borderRadius: 14,
    background: "#F7F7FB",
    color: "#121417",
    paddingLeft: 18,
    border: "none",
    boxShadow: state.isFocused ? "none" : provided.boxShadow, // Remove blue shadow
    "&:hover": {
      borderColor: "none", // Remove hover border color
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0 6px",
  }),
  input: (provided) => ({
    ...provided,
    margin: "0",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "48px",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "#121417",
    transition: "transform 0.3s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#121417",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: 14,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    color: state.isSelected ? "#121417" : "#12141733",
    padding: "4px 18px",
  }),
});

export type OptionType = {
  value: string;
  label: string;
};

interface Prop extends FieldProps {
  array: string[] | OptionType[];
  width?: string;
}

const CustomSelect = ({ field, form, array, width = "225px" }: Prop) => {
  let options;

  if (Array.isArray(array) && array.every((elem) => typeof elem === "string")) {
    options = [
      { value: "0", label: "Any" },
      ...array.map((elem) => {
        return { value: elem, label: elem };
      }),
    ];
  } else {
    options = [{ value: "0", label: "Any" }, ...array];
  }

  const [value, setValue] = useState<
    SingleValue<{ value: string; label: string }>
  >(field.value);

  const handleChange = (
    option: SingleValue<{ value: string; label: string }>
  ) => {
    form.setFieldValue(field.name, option);
    if (option == options[0]) setValue({ value: "0", label: "" });
    else setValue(option);
  };

  const handleBlur = useCallback(
    () => form.setFieldTouched(field.name, true),
    [form, field.name]
  );

  return (
    <Select
      value={value}
      styles={getDefaultStyles(width)}
      options={options}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};
export default CustomSelect;
