import React from "react";
import "./App.css";
import About from "./components/about/About";
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
      <About />
    </div>
  );
};

export default App;
