import React from "react";
import { useNavigate } from "react-router-dom";
import { TProduct } from "../../types";
const ProductCard = ({ id, title, img, price }: TProduct) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "gray",
        paddingTop: "5px",
        borderRadius: "2px",
        paddingBottom: "5px",
      }}
      onClick={() => {
        console.log("navigating");

        navigate(`${id}`);
      }}
    >
      <div
        style={{
          width: "80%",
          height: "150px",
          marginBottom: "5px",
          borderRadius: "5px",
        }}
      >
        <img
          src={img}
          alt={title}
          style={{
            minWidth: "100%",
            minHeight: "100%",
            backgroundColor: "whitesmoke",
            borderRadius: "5px",
          }}
        />
      </div>
      <div>
        <p className="title">{title}</p>
        <p className="pric">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
