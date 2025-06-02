import { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Login from "./components/Login";
import Home from "./components/Home";
import DashBoard from "./components/DashBoard";

//  Not using this router file

const router = createBrowserRouter([
    {
        path: "/",
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
       {
        path: "/login",
        element: (
          <Suspense>
            <Login />
          </Suspense>
        ),
      },
       {
        path: "/dashboard",
        element: (
          <Suspense>
            <DashBoard />
          </Suspense>
        ),
      },
]);

export default router;
