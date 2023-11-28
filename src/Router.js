import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Search } from "./pages/search/Search";
import { Login } from "./pages/login/Login";
import { Signup } from "./pages/login/Signup";
import { SearchId } from "./pages/login/SearchId";
import { PageNotFound } from "./PageNotFound";
import { Header } from "./components/header/Header";

const Router = () => {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.search} element={<Search />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
