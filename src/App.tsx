import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";

const Header = lazy(() => import("./components/Header/Header"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage/FavoritePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />

        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/catalog" Component={CatalogPage} />
          <Route path="/favorites" Component={FavoritePage} />
          <Route path="*" Component={NotFoundPage} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
