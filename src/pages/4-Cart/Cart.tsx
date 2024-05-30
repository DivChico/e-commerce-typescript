import React, { useEffect } from "react";
import { CartItem } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  actGetProductsByItems,
  changeItemQuantity,
  clearCart,
  productsFullInfoCleanUp,
  removeFromCart,
} from "../../store/cart/cartSlice";
import Loading from "../../components/feedback/Loading";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error, productsFullInfo } = useAppSelector(
    (state) => state.cart
  );

  const subtotalPrice = productsFullInfo.reduce((acc, el) => {
    return acc + (el.price || 0) * items[el.id];
  }, 0);
  useEffect(() => {
    const promise = dispatch(actGetProductsByItems());

    return () => {
      dispatch(productsFullInfoCleanUp());
      promise.abort();
    };
  }, [dispatch]);
  const haneleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };
  const changeQuantityHandler = (id: number, newQuantity: number) => {
    dispatch(changeItemQuantity({ id: id, newQuantity: newQuantity }));
  };

  const handleCartClear = () => {
    dispatch(clearCart());
  };

  const cartItemList = productsFullInfo.map((product) => {
    const quantitiy = items[product.id] || 0;
    return (
      <CartItem
        {...product}
        key={product.id}
        quantity={quantitiy}
        haneleRemoveFromCart={haneleRemoveFromCart}
        changeQuantityHandler={changeQuantityHandler}
      />
    );
  });
  return (
    <Loading
      laoding={loading}
      error={error}
      childComponent={
        <div style={{ width: "85%", margin: "auto" }}>
          <div className="heading" style={{ textAlign: "center" }}>
            <h2>Shopping cart</h2>
          </div>
          <div className="cartList">
            <table style={{ width: "100%", gap: "5px" }}>
              <thead style={{}}>
                <tr>
                  <th style={{ width: "40%", textAlign: "start" }}>item</th>
                  <th style={{ width: "20%", textAlign: "start" }}>price</th>
                  <th style={{ width: "20%", textAlign: "start" }}>quantity</th>
                  <th style={{ width: "20%", textAlign: "end" }}>total</th>
                </tr>
              </thead>
              <tbody>{cartItemList} </tbody>
              <tfoot>
                <tr>
                  <td>
                    <button onClick={handleCartClear}>clear</button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div
            className="checkout"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <p>subtotal : ${subtotalPrice.toFixed(2)}</p>
          </div>
          <div
            className="checkout"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <button>checkout</button>
          </div>
        </div>
      }
    />
  );
};

export default Cart;
