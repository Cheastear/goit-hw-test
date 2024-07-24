import { Field, Form, Formik } from "formik";
import CustomSelect, { OptionType } from "../CustomSelect/CustomSelect";
import css from "./Filters.module.css";
import FromToInputs from "../FromToInputs/FromToInputs";

import MakesJSON from "../../makes.json";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setFilterThunk } from "../../redux/filter/operations";
import { Filter } from "../../redux/filter/slice";
import { selectFilters } from "../../redux/filter/selectors";

const priceOptions = () => {
  const options = [];
  for (let value = 30; value <= 150; value += 10) {
    options.push({
      value: value.toString(),
      label: `${value}$`,
    });
  }
  return options;
};

const Filters = () => {
  const dispatch: AppDispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleSumbit = (values: FormValues) => {
    if (
      parseInt(values.from) > parseInt(values.to) &&
      values.from != "0" &&
      values.to != "0"
    ) {
      const temp = values.from;
      values.from = values.to;
      values.to = temp;
    }

    const option: Filter = {
      makes: values.makes.value == "0" ? "" : values.makes.value,
      minPrice: parseInt(values.price.value) || 0,
      mileage: {
        from: parseInt(values.from) || 0,
        to: parseInt(values.to) || 0,
      },
    };

    dispatch(setFilterThunk(option));
  };

  type FormValues = {
    makes: OptionType;
    price: OptionType;
    from: string;
    to: string;
  };

  const initialValues: FormValues = {
    makes: { value: filters.makes, label: filters.makes },
    price: {
      value: filters.minPrice.toString(),
      label: `${filters.minPrice}$`,
    },
    from: filters.mileage.from.toString(),
    to: filters.mileage.from.toString(),
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSumbit}>
      <Form className={css.container}>
        <div className={css["input-container"]}>
          <label className={css.label}>Car brand</label>
          <Field name="makes" component={CustomSelect} array={MakesJSON} />
        </div>

        <div className={css["input-container"]}>
          <label className={css.label}>Price/ 1 hour</label>
          <Field
            name="price"
            component={CustomSelect}
            array={priceOptions()}
            width="125px"
          />
        </div>

        <div className={css["input-container"]}>
          <label className={css.label}>Сar mileage / km</label>
          <FromToInputs />
        </div>

        <button type="submit" className={css.button}>
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default Filters;
