import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about/About";
import HomeAccount from "./pages/account/HomeAccount";
import Basket from "./pages/account/basket/Basket";
import Login from "./pages/login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/myaccount',
        element: <HomeAccount />,
        handle: {
            async middleware({ request }, context) {
              console.log("adawda");
            },
        },
    },
    {
        path: '/basket',
        element: <Basket />
    }
]);

export default router