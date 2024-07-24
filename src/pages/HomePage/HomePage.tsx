import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <h1>
        Rent <span className={css.blue}>car</span>!
      </h1>
      <p>
        Discover the freedom of the open road with Car Rentals. Whether you're
        planning a business trip, a family vacation, or a weekend getaway, we've
        got the perfect vehicle to suit your needs. With a wide range of cars,
        SUVs, and luxury vehicles, we offer unmatched convenience,
        affordability, and customer service.
      </p>
    </div>
  );
};

export default HomePage;
