import { forwardRef, useState } from "react";
import { CatalogItem } from "../../redux/catalog/slice";
import LeanMore from "../LeanMore/LeanMore";
import css from "./Card.module.css";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoritesThunk,
  deleteFavoritesThunk,
} from "../../redux/favorite/operations";
import { selectFavorite } from "../../redux/favorite/selectors";

type Prop = {
  item: CatalogItem;
};

const Card = forwardRef<HTMLDivElement, Prop>(({ item }: Prop, ref) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const favorites = useSelector(selectFavorite);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.checked;
    if (inputValue) dispatch(addFavoritesThunk(item.id));
    else dispatch(deleteFavoritesThunk(item.id));
  };
  const handleOnClick = () => {
    setIsOpenModal(true);
  };
  const handloOnCloseModla = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={css.container} ref={ref}>
      <label className={css.slider}>
        <input
          type="checkbox"
          checked={favorites.find((elem) => elem == item.id) != undefined}
          name="incomeExpense"
          onChange={handleOnChange}
        />
        <span className={css["slider-circle"]}></span>
      </label>
      <div className={css.img}>
        <img src={item.img} className={css["img-src"]} alt={item.make} />
      </div>
      <div className={css.description}>
        <ul>
          <li className={`${css.inline} ${css.label}`}>
            <p>
              {item.make}
              <span className={css.blue}> {item.model}</span>, {item.year}
            </p>
            <p>{item.rentalPrice}</p>
          </li>
          <li className={`${css.inline} ${css["small-description"]}`}>
            {[
              item.type,
              ...item.accessories,
              item.engineSize,
              item.fuelConsumption,
            ].map((elem, i) => {
              if (i != 0) {
                return ` | ${elem}`;
              }
              return `${elem}`;
            })}
          </li>
        </ul>
        <button className={css.leanMoreBtn} onClick={handleOnClick}>
          Lean more
        </button>
      </div>
      {isOpenModal && <LeanMore item={item} onClose={handloOnCloseModla} />}
    </div>
  );
});
export default Card;
