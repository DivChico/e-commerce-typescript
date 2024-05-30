import React from "react";
import { Footer, Header, Navbar } from "../components";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <main style={{ margin: "0" }}>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Mainlayout;
