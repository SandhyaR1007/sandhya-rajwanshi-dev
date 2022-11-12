import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import SidebarLeft from "./components/sidebarLeft/SidebarLeft";
import SidebarRight from "./components/sidebarRight/SidebarRight";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <SidebarLeft />
      <SidebarRight />
      <Header />
    </div>
  );
};

export default App;
