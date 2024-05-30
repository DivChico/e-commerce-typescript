import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import actGetSingleProductById from "../../store/products/act/actGetSingleProductById";
import { productStateCleanUp } from "../../store/products/productsSlice";
import { addToCart, changeItemQuantity } from "../../store/cart/cartSlice";
import Loading from "../../components/feedback/Loading";
import { error } from "console";
const Product = () => {
  const dispatch = useAppDispatch();
  const {
    item: productFullInfo,
    loading,
    error,
  } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  const params = useParams();
  console.log(params.productid);
  useEffect(() => {
    dispatch(actGetSingleProductById(params.productid || "0"));

    return () => {
      dispatch(productStateCleanUp());
    };
  }, [dispatch, params]);
  console.log(productFullInfo);
  const handleAddToCard = () => {
    dispatch(addToCart(productFullInfo.id));
  };
  const quantity = cartItems[productFullInfo.id];
  const [isDisabled, setIsDisabled] = useState(false);
  const ProductReachedToMaxQuantity =
    quantity >= (productFullInfo.max || 0) ? true : false;
  const changeQuantityHandler = (id: number, newQuantity: number) => {
    dispatch(changeItemQuantity({ id: id, newQuantity: newQuantity }));
  };

  const maxQuantity = Array(productFullInfo.max).fill(0);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="left" style={{ width: "50%", display: "flex" }}>
          <div
            className="imgSelction"
            style={{
              width: "20%",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              padding: "5px",
            }}
          >
            <img
              src={productFullInfo.img}
              alt={productFullInfo.title}
              style={{
                minWidth: "100%",
                minHeight: "100px",
                backgroundColor: "whitesmoke",
                borderRadius: "2px",
              }}
            />
            <img
              src={productFullInfo.img}
              alt={productFullInfo.title}
              style={{
                minWidth: "100%",
                minHeight: "100px",
                backgroundColor: "whitesmoke",
                borderRadius: "2px",
              }}
            />{" "}
            <img
              src={productFullInfo.img}
              alt={productFullInfo.title}
              style={{
                minWidth: "100%",
                minHeight: "100px",
                backgroundColor: "whitesmoke",
                borderRadius: "2px",
              }}
            />
            <img
              src={productFullInfo.img}
              alt={productFullInfo.title}
              style={{
                minWidth: "100%",
                minHeight: "100px",
                backgroundColor: "whitesmoke",
                borderRadius: "2px",
              }}
            />
          </div>
          <div className="img" style={{ width: "80%" }}>
            <img
              src={productFullInfo.img}
              alt={productFullInfo.title}
              style={{
                minWidth: "100%",
                minHeight: "500px",
                backgroundColor: "whitesmoke",
                borderRadius: "2px",
              }}
            />
          </div>
        </div>
        <div className="right" style={{ width: "50%" }}>
          <p>title : {productFullInfo.title}</p>
          <p>price :${productFullInfo.price?.toFixed(2)}</p>
          <p>reviews</p>
          <hr style={{ width: "50%" }} />
          <p>description</p>
          <hr style={{ width: "50%" }} />
          <p>category :{productFullInfo.cat_prefix}</p>
          <p>brand</p>
          <p>stock</p>
          <hr style={{ width: "50%" }} />
          <p>color</p>
          <hr style={{ width: "50%" }} />
          <p>max : {productFullInfo.max}</p>

          <p style={{ visibility: quantity ? undefined : "hidden" }}>
            in cart :
            <select
              name="itemQuantity"
              id="itemQuantity"
              value={quantity}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                changeQuantityHandler(productFullInfo.id, +e.target.value);
              }}
            >
              {maxQuantity.map((quantity: number, idx: number) => (
                <option value={idx + 1} key={idx}>
                  {idx + 1}
                </option>
              ))}
            </select>
          </p>

          <hr style={{ width: "50%" }} />
          <button
            onClick={handleAddToCard}
            disabled={isDisabled || ProductReachedToMaxQuantity}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
