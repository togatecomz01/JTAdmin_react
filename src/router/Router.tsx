import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "../common/layout/List/List";
import Layout from "../common/layout/Layout";

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
