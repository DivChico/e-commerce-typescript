import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { changeItemQuantity } from "../../store/cart/cartSlice";
type TProductChngeQuantiyProsp = {
  quantity: number;
  id: number;
  max: number;
};
const productChngeQuantiy = ({
  quantity,
  id,
  max,
}: TProductChngeQuantiyProsp) => {
  const dispatch = useAppDispatch;
  const changeQuantityHandler = (id: number, newQuantity: number) => {
    dispatch(changeItemQuantity({ id: id, newQuantity: newQuantity }));
  };
  const maxQuantity = Array(max).fill(0);

  return (
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
  );
};

export default productChngeQuantiy;
