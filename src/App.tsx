import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";

function App() {
  return (
    <>
      <Header />

      <Suspense>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/catalog" Component={CatalogPage} />
          <Route path="/favorites" Component={FavoritePage} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
