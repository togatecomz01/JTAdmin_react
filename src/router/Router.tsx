import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "../common/layout/Layout";
import Home from "../pages/Home/Home";
import AccountList from "../pages/AccountList";
import AccountListModify from "../pages/AccountListModify";
import SubList from "../pages/SubList";
import SubListWrite from "../pages/SubListWrite";
import SubListModify from "../pages/SubListModify";
import NoticeList from "../pages/NoticeList";
import NoticeListWrite from "../pages/NoticeListWrite";

import Login from "../pages/Login/Login";
import NoticeListModify from "../pages/NoticeListModify";
import Menu from "../pages/Menu";
import Menu2dep from "../pages/Menu2dep";
import Menu3dep from "../pages/Menu3dep";
import Menu4dep from "../pages/Menu4dep";
import Menu1dep from "../pages/Menu1dep";

const Router = () => {
  console.log("현재 주소:", location.href);
  console.log("해시:", location.hash);
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="account/list" element={<AccountList />} />
          <Route path="account/list/modify" element={<AccountListModify />} />
          <Route path="account/sublist" element={<SubList />} />
          <Route path="account/sublist/write" element={<SubListWrite />} />
          <Route path="account/sublist/modify" element={<SubListModify />} />
          <Route path="account/noticelist" element={<NoticeList />} />
          <Route
            path="account/noticelist/write"
            element={<NoticeListWrite />}
          />
          <Route
            path="account/noticelist/modify"
            element={<NoticeListModify />}
          />
          <Route path="menu" element={<Menu />}>
            <Route path="1dep" element={<Menu1dep />} />
            <Route path="2dep" element={<Menu2dep />} />
            <Route path="3dep" element={<Menu3dep />} />
            <Route path="4dep" element={<Menu4dep />} />
          </Route>
        </Route>

        <Route path="login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
