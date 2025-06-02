import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router";
import { Suspense } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import "./styles-wc.css"

const HelloApp = (prop: any) => {
  console.log("Hello App : ", prop);
  const router = createHashRouter([
    {
      path: "/",
      element: (
        <Suspense>
          <Home data={prop} />
        </Suspense>
      ),
    },
    {
      path: "/home",
      element: (
        <Suspense>
          <Home data={prop} />
        </Suspense>
      ),
    },
    {
      path: "/login",
      element: (
        <Suspense>
          <Login data={prop} />
        </Suspense>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <Suspense>
          <DashBoard data={prop} />
        </Suspense>
      ),
    },
  ]);

  return (
    <>
      {/* <div style={{ backgroundColor: "aquamarine",
  fontFamily: "sans-serif",
  textAlign: "center"}}>  */}

      <div className="testClass">
        <div>Main Page Router </div> 
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default HelloApp;
