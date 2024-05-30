import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
const Mainlayout = lazy(() => import("../Mainlayout/Mainlayout"));

const Home = lazy(() => import("../pages/1-Home/Home"));
const Cart = lazy(() => import("../pages/4-Cart/Cart"));
const Products = lazy(() => import("../pages/2-Products/Products"));
const Product = lazy(() => import("../pages/3-Product/Product"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback="laoding suspense">
        <Mainlayout />{" "}
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="laoding suspense">
            <Home />
          </Suspense>
        ),
      },

      {
        path: "categories/:prefix",
        element: (
          <Suspense fallback="loadong sus">
            <Products />
          </Suspense>
        ),
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: " Category not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "categories/:prefix/:productid",
        element: (
          <Suspense fallback="loadong sus">
            <Product />{" "}
          </Suspense>
        ),
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: " Category not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "cart",
        element: (
          <Suspense fallback="loadong sus">
            <Cart />{" "}
          </Suspense>
        ),
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
