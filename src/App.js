import React from "react";
import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import SidebarLeft from "./components/sidebarLeft/SidebarLeft";
import SidebarRight from "./components/sidebarRight/SidebarRight";
import Work from "./components/work/Work";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <SidebarLeft />
      <SidebarRight />
      <div className="components">
        <Header />
        <About />
        <Work />
      </div>
    </div>
  );
};

export default App;
