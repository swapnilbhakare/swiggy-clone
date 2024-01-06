import React, { lazy, Suspense } from "react";
import "../index.css";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import Profile from "./Components/Profile";
import Shimmer from "./Components/Shimmer";

const About = lazy(() => import("./Components/About"));
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },

      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
/**
         * header
              -logo
              -nav Items(right side)
              -cart
         * body 
              - searchbar
              -restauntRest
                -restaurantCard
                      -img
                      -price
                      -name
                      -rating
                      -cusines
                      -
         * footer
            -lines
            -copyrights
            -
         * 
         */
