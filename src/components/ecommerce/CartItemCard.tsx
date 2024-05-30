import React from "react";
import { TProduct } from "../../types";
const CartItemCard = ({
  img,
  title,
  id,
  haneleRemoveFromCart,
}: TProduct & {
  haneleRemoveFromCart: (id: number) => void;
}) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <div style={{ minWidth: "150px" }}>
        <img
          src={img}
          alt={title}
          style={{
            height: "100px",
            backgroundColor: "gray",
          }}
        />
      </div>
      <div>
        <p>{title}</p>
        <p>color</p>
        <button
          onClick={() => {
            haneleRemoveFromCart(id);
          }}
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
