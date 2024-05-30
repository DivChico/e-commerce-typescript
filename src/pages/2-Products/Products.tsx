import React, { useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import actGetCategories from "../../store/categories/act/actGetCategories";
import { actGetProductsByCatPrefix } from "../../store/products/productsSlice";
import { productsStateCleanUp } from "../../store/products/productsSlice";
import Loading from "../../components/feedback/Loading";
const Products = () => {
  const params = useParams();
  console.log("render");
  console.log(params.prefix);

  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);
  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
    console.log("useEffect");

    return () => {
      dispatch(productsStateCleanUp());
    };
  }, [dispatch, params]);

  const productsList = records.map((product) => {
    return <ProductCard {...product} />;
  });
  return (
    <Loading
      laoding={loading}
      error={error}
      childComponent={
        <div
          className="products"
          style={{
            minHeight: "80vh",
            display: "flex",
          }}
        >
          <div
            className="filter"
            style={{
              flex: "1",
              minHeight: "100%",
              padding: "5px",
            }}
          >
            <h3>filter</h3>
            <div style={{ padding: "10px" }}>
              <label htmlFor="priceFilter">price</label>
              <input
                type="range"
                name="priceFilter"
                id="priceFilter"
                min={10}
                max={1000}
              />
            </div>
          </div>
          <div
            className="productsList"
            style={{
              flex: "5 ",
              minHeight: "100%",
              padding: "10px",
            }}
          >
            <h2
              style={{
                marginBottom: "10px",
              }}
            >
              {params?.prefix}
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {productsList}
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Products;
