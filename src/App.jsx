// import Parent from "./components/Parent"; TUGAS BASIC COMPONENT
// import Button from "./components/Button/Index";
// import InputRadio from "./components/Button/InputRadio";
// import "../src/assets/CSS/globals.css";
// import { Container } from "react-bootstrap";
// import FormCom from "./components/FormCom/Index";

// import LifeCycleComponent from "./components/lifecycle";
// import NavbarComponent from "./components/navbar";
// import Component from "./components/NewsHook";
import { Outlet } from "react-router-dom";
import NavbarSec from "./components/AppsRouting/navbar/navbarsec";

// import Navbar from "./components/NewsAppCom/Navbar";
// import News from "./components/NewsAppCom/News/News";

// import { useState } from "react";
// import Navbar from "./components/NewsCom/Navbar";
// import NewsBoard from "./components/NewsCom/NewsBoard";

function App() {
  // const [category, setCategory] = useState("general");
  return (
    <div className="App">
      {/* <Navbar setCategory={setCategory} />
      <NewsBoard category={category} /> */}
      {/* <Navbar />
      <News /> */}
      {/* <NavbarComponent />
      <LifeCycleComponent /> */}
      <NavbarSec />
      <Outlet />
    </div>
  );
}

export default App;
