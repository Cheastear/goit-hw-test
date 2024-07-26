import Modal from "react-modal";
import { CatalogItem } from "../../redux/catalog/slice";

import css from "./LeanMore.module.css";
import toast, { Toaster } from "react-hot-toast";

type Prop = {
  item: CatalogItem;
  onClose: () => void;
};
const LeanMore = ({ item, onClose }: Prop) => {
  const handleRentCar = () => {
    toast.success("Contact with us: +380730000000");
  };
  return (
    <Modal
      isOpen={true}
      className={css.modal}
      overlayClassName={css.overlay}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <div>
        <button className={css.close} onClick={onClose}></button>
        <img src={item.img} className={css["img-src"]} alt={item.make} />
        <div className={css.description}>
          <ul>
            <li className={`${css.inline} ${css.label}`}>
              <p>
                {item.make}
                <span className={css.blue}> {item.model}</span>, {item.year}
              </p>
            </li>
            <li className={`${css.inline} ${css["small-description"]}`}>
              {[
                `Id: ${item.id}`,
                `Year: ${item.year}`,
                `Type: ${item.type}`,
                `Fuel Consumption: ${item.fuelConsumption}`,
                `Engine Size: ${item.engineSize}`,
              ].map((elem, i) => {
                if (i != 0) {
                  return ` | ${elem}`;
                }
                return `${elem}`;
              })}
            </li>
            <li className={css["car-description"]}>{item.description}</li>
            <p className={css.accessories}>Accessories and functionalities:</p>
            <li className={css["small-description"]}>
              {[...item.accessories, ...item.functionalities].map((elem, i) => {
                if (i != 0) {
                  return ` | ${elem}`;
                }
                return `${elem}`;
              })}
            </li>
            <p className={css.accessories}>Rental Conditions: </p>
            <li className={css["rental-condition"]}>
              {[
                ...item.rentalConditions.split("\n"),
                `Mileage: ${item.mileage.toLocaleString()}`,
                `Price: ${item.rentalPrice}`,
              ].map((elem, index) => {
                const parts = elem.split(":");
                if (parts.length === 2) {
                  return (
                    <span key={index} className={css.condition}>
                      {parts[0]}:<span className={css.blue}>{parts[1]}</span>
                    </span>
                  );
                }
                return (
                  <span key={index} className={css.condition}>
                    {elem}
                  </span>
                );
              })}
            </li>
          </ul>
          <button className={css.rentCarBtn} onClick={handleRentCar}>
            Rental car
          </button>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </Modal>
  );
};

export default LeanMore;
