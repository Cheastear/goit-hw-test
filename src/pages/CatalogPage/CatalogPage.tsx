import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCatalog,
  selectIsEnd,
  selectIsLoading,
} from "../../redux/catalog/selectors";
import {
  getCatalogThunk,
  appendCatalogThunk,
} from "../../redux/catalog/operations";
import Filters from "../../components/Filters/Filters";
import Card from "../../components/Card/Card";
import css from "./CatalogPage.module.css";
import { AppDispatch } from "../../redux/store";
import { CatalogItem } from "../../redux/catalog/slice";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import Loader from "../../components/Loader/Loader";
import { selectFilters } from "../../redux/filter/selectors";

export const loadLimit = 12;

const CatalogPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const catalog = useSelector(selectCatalog);
  const filters = useSelector(selectFilters);
  const isEnd = useSelector(selectIsEnd);
  const isLoading = useSelector(selectIsLoading);
  const [pageCounter, setPageCounter] = useState(1);

  useEffect(() => {
    setPageCounter(1);
    dispatch(getCatalogThunk({ page: 1, limit: loadLimit }));
  }, [dispatch]);

  const onLoadMore = () => {
    dispatch(appendCatalogThunk({ page: pageCounter + 1, limit: loadLimit }));
    setPageCounter(pageCounter + 1);
  };

  if (isLoading) return <Loader />;

  const filteredCatalog = catalog.filter(
    (elem) =>
      elem.make.includes(filters.makes) &&
      parseInt(elem.rentalPrice.replace("$", "")) <=
        (filters.maxPrice !== 0 ? filters.maxPrice : 999) &&
      elem.mileage >= filters.mileage.from &&
      (filters.mileage.to != 0 ? elem.mileage <= filters.mileage.to : 9999)
  );

  return (
    <div className={css["page-container"]}>
      <Filters />
      <div className={css.container}>
        {filteredCatalog.map((elem: CatalogItem) => {
          return <Card key={elem.id} item={elem} />;
        })}
      </div>
      {!isEnd && <LoadMoreBtn onClick={onLoadMore} />}
    </div>
  );
};

export default CatalogPage;
