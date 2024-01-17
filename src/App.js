import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Pages/Body";
import Footer from "./Components/Footer";
import Cart from "./Components/Pages/Cart";
import Error from "./Components/UI/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import Profile from "./Components/Pages/Profile";

import { Provider } from "react-redux";
import store from "./Store/store";
import { createBrowserRouter, Outlet } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { ModalProvider } from "./utils/ModalContext";
const About = lazy(() => import("./Components/Pages/About"));
const App = () => {
  return (
    <ModalProvider>
      <Provider store={store}>
        <div className="bg-white min-h-screen">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </Provider>
    </ModalProvider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
