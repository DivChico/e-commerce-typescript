import React from "react";
import { ProductCard } from "..";

const FearuredProducts = () => {
  return (
    <div style={{ marginTop: "10px" }}>
      <h2>FearuredProducts</h2>
      <div
        className="showProducs"
        style={{
          marginTop: "5px",
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <ProductCard /> <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default FearuredProducts;
