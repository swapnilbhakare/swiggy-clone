import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet } from "react-router-dom";
import {
  AuthModalProvider,
  GeolocationModalProvider,
} from "./utils/ModalContext";
import store from "./Store/store";
import Header from "./Components/Header";
import Body from "./Components/Pages/Body";
import Footer from "./Components/Footer";
import Error from "./Components/UI/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import Offline from "./Components/UI/Offline";
import useOnline from "./utils/useOnline";
const Offer = lazy(() => import("./Components/Pages/Offer"));
const Cart = lazy(() => import("./Components/Pages/Cart"));
const Help = lazy(() => import("./Components/Pages/Help"));

const App = () => {
  const isOnline = useOnline();
  return (
    <AuthModalProvider>
      <GeolocationModalProvider>
        <Provider store={store}>
          <div className="bg-white min-h-screen">
            <Header />

            {isOnline ? <Outlet /> : <Offline />}
            <Footer />
          </div>
        </Provider>
      </GeolocationModalProvider>
    </AuthModalProvider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Body />,
      },

      {
        path: "restaurant/:resId",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "offer",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Offer />
          </Suspense>
        ),
      },
      {
        path: "help",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Help />
          </Suspense>
        ),
      },
    ],
  },
]);

export { appRouter };
