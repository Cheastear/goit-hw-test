import { useDispatch, useSelector } from "react-redux";
import { selectFavorite } from "../../redux/favorite/selectors";
import Card from "../../components/Card/Card";
import { getByIdCatalogItemThunk } from "../../redux/catalog/operations";
import { CatalogItem } from "../../redux/catalog/slice";
import { useEffect, useState } from "react";
import { AppDispatch } from "../../redux/store";
import css from "./FavoritePage.module.css";
import { NavLink } from "react-router-dom";

const FavoritePage = () => {
  const favorite = useSelector(selectFavorite);
  const dispatch: AppDispatch = useDispatch();
  const [fetchedItems, setFetchedItems] = useState<CatalogItem[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await Promise.all(
        favorite.map(async (id) => {
          const response = await getByIdCatalogItemThunk(id);
          return response;
        })
      );
      setFetchedItems(items);
    };

    fetchItems();
  }, [favorite, dispatch]);

  if (favorite.length == 0)
    return (
      <div className={css.container}>
        <h2 className={css.message}>There is no favorites car</h2>
        <p className={css.message}>
          Go to{" "}
          <NavLink to="/catalog" className={css.link}>
            Catalog
          </NavLink>
        </p>
      </div>
    );

  return (
    <div className={css.container}>
      <h2 className={css.message}>Favorites</h2>
      <div className={css["element-container"]}>
        {fetchedItems.map((elem, index) => {
          return <Card key={index} item={elem} />;
        })}
      </div>
    </div>
  );
};

export default FavoritePage;
