import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../common/layout/Layout";
import List from "../common/layout/List/List";
// import Table from "../common/layout/Table/Table";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
