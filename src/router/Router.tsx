import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../common/layout/Layout";
import Home from "../pages/Home";
import AccountList from "../pages/AccountList";
import AccountListModify from "../pages/AccountListModify";
import SubList from "../pages/SubList";
import NoticeList from "../pages/NoticeList";

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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
