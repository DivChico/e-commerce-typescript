import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <nav
      style={{
        height: "50px",

        paddingLeft: "2%",
        paddingRight: "2%",
        borderBottom: "1px solid whitesmoke",
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 0",
          margin: "auto",
        }}
      >
        <div
          onClick={() => {
            navigate("/");
          }}
          style={{ cursor: "pointer", width: "100%" }}
        >
          <li
            style={{
              borderBottom: params.prefix === undefined ? "1px solid " : "",
              width: "fit-content",
              textAlign: "center",
              margin: "auto",
            }}
          >
            Home
          </li>
        </div>
        <div
          onClick={() => {
            navigate("categories/phone");
          }}
          style={{ cursor: "pointer", width: "100%" }}
        >
          <li
            style={{
              borderBottom: params.prefix === "phone" ? "1px solid " : "",
              width: "fit-content",
              textAlign: "center",
              margin: "auto",
            }}
          >
            Phone
          </li>
        </div>
        <div
          onClick={() => {
            navigate("categories/laptop");
          }}
          style={{ cursor: "pointer", width: "100%" }}
        >
          <li
            style={{
              borderBottom: params.prefix === "laptop" ? "1px solid " : "",
              width: "fit-content",
              textAlign: "center",
              margin: "auto",
            }}
          >
            Laptop
          </li>
        </div>
        <div
          onClick={() => {
            navigate("categories/desktop");
          }}
          style={{ cursor: "pointer", width: "100%" }}
        >
          <li
            style={{
              borderBottom: params.prefix === "desktop" ? "1px solid " : "",
              width: "fit-content",
              textAlign: "center",
              margin: "auto",
            }}
          >
            Desktop
          </li>
        </div>
        <div
          onClick={() => {
            navigate("categories/watch");
          }}
          style={{ cursor: "pointer", width: "100%" }}
        >
          <li
            style={{
              borderBottom: params.prefix === "watch" ? "1px solid " : "",
              width: "fit-content",
              textAlign: "center",
              margin: "auto",
            }}
          >
            Watch
          </li>
        </div>
        <div
          onClick={() => {
            navigate("categories/tv");
          }}
          style={{ cursor: "pointer", width: "100%" }}
        >
          <li
            style={{
              borderBottom: params.prefix === "tv" ? "1px solid " : "",
              width: "fit-content",
              textAlign: "center",
              margin: "auto",
            }}
          >
            Tv
          </li>
        </div>
        <div
          onClick={() => {
            navigate("categories/accesories");
          }}
          style={{ cursor: "pointer", width: "100%" }}
        >
          <li
            style={{
              borderBottom: params.prefix === "accesories" ? "1px solid " : "",
              width: "fit-content",
              textAlign: "center",
              margin: "auto",
            }}
          >
            Accesories
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
