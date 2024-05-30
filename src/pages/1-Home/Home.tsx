import React from "react";
import { FearuredProducts } from "../../components";
const Home = () => {
  return (
    <main
      style={{
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingTop: "2%",
        minWidth: "100vh",
      }}
    >
      <div className="hero" style={{ width: "100%", height: "300px" }}>
        <img
          src=""
          alt="hero banner"
          style={{
            minWidth: "100%",
            minHeight: "100%",
            backgroundColor: "whitesmoke",
          }}
        />
      </div>
      <FearuredProducts />
    </main>
  );
};

export default Home;
