import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import NavBar from "../NavBar";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
