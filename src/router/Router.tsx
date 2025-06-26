import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../common/layout/Layout";
import Home from "../pages/Home/Home";
import AccountList from "../pages/AccountList";
import AccountListModify from "../pages/AccountListModify";
import SubList from "../pages/SubList";
import NoticeList from "../pages/NoticeList";
import Login from "../pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/account/list" element={<AccountList />} />
          <Route path="/account/list/modify" element={<AccountListModify />} />
          <Route path="/account/sublist" element={<SubList />} />
          <Route path="/account/noticelist" element={<NoticeList />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
