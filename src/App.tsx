import React from "react";
import "./App.css";
import Router from "./Router/Router";

const defaultState = [
  {
    id: 1,
    name: "article 1",
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 25,
  },
];

localStorage.setItem("items", JSON.stringify(defaultState));

const App: React.FC = () => {
  return <Router />;
};

export default App;
