import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../common/layout/Layout";
import AccountList from "../pages/AccountList";
import Home from "../pages/Home";
import AccountListModify from "../pages/AccountListModify";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/account/list" element={<AccountList />} />
          <Route path="/account/list/modify" element={<AccountListModify />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
