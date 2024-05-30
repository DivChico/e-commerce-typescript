import React from "react";
import { useNavigate } from "react-router-dom";
import { getCartTotalQuantitySelector } from "../../../store/cart/selectors";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
const Header = () => {
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);
  const navigate = useNavigate();
  return (
    <header
      style={{
        height: "50px",
        display: "flex",
        backgroundColor: "whitesmoke",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "2%",
        paddingRight: "2%",
      }}
    >
      <div className="left">
        <h3 className="logo">Chicostore</h3>
      </div>
      <div
        className="center"
        style={{
          backgroundColor: "white",
          height: "70%",
          borderRadius: "5px",
        }}
      >
        {/* search */}
        <input
          className="saerchInput"
          type="text"
          name="sarchbar"
          id="sarchbar"
          placeholder="search..."
          style={{
            border: "none",
            height: "100%",
            outline: "none",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
          }}
        />
        <button
          style={{
            border: "none",
            height: "100%",
            backgroundColor: "gray",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
        >
          search
        </button>
      </div>
      <div className="right" style={{ display: "flex", gap: "20px" }}>
        {/* login and cart counter */}
        <div
          onClick={() => {
            navigate("cart");
          }}
          style={{ cursor: "pointer " }}
        >
          <p>
            cart <span>{totalQuantity}</span>
          </p>
        </div>
        <div className="login">
          <p>login</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
