import React from "react";
import { CartItemCard } from "..";
import { TProduct } from "../../types";

const CartItem = ({
  id,
  img,
  title,
  price,
  quantity,
  max,
  haneleRemoveFromCart,
  changeQuantityHandler,
}: TProduct & {
  haneleRemoveFromCart: (id: number) => void;
  changeQuantityHandler: (id: number, newQuantity: number) => void;
}) => {
  const maxQuantity = Array(max).fill(0);

  return (
    <tr>
      <td>
        <CartItemCard
          id={id}
          title={title}
          img={img}
          haneleRemoveFromCart={haneleRemoveFromCart}
        />
      </td>
      <td>${price?.toFixed(2)}</td>
      <td>
        <select
          name="itemQuantity"
          id="itemQuantity"
          value={quantity}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            changeQuantityHandler(id, +e.target.value);
          }}
        >
          {maxQuantity.map((quantity: number, idx: number) => (
            <option value={idx + 1} key={idx}>
              {idx + 1}
            </option>
          ))}
        </select>
      </td>
      <td style={{ textAlign: "end" }}>
        ${((quantity || 0) * (price || 0)).toFixed(2)}
      </td>
    </tr>
  );
};

export default CartItem;
