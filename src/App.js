import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import SidebarLeft from "./components/sidebarLeft/SidebarLeft";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <SidebarLeft />
      <Header />
    </div>
  );
};

export default App;
