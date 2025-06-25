import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../common/layout/Layout";
import List from "../common/layout/List/List";
import { HEADERS, LIST_ITEMS } from "../constants/listItems";
import Table from "../common/layout/Table/Table";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<List headers={HEADERS} listItems={LIST_ITEMS} />}
          />
          <Route path="/account/modify" element={<Table />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
