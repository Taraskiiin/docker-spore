import React from "react";
import { Route, HashRouter, Navigate, Routes } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import { List, Cart } from "../pages";

export const pagesNamings = {
  "/": "List",
  "/cart": "Cart",
};

const Router: React.FC = () => (
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<List />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
  </HashRouter>
);

export default Router;
