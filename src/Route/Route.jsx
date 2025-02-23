import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,

            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path:'/allBlogs',
                element: <AllBlogs></AllBlogs>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/login',
                element: <Login></Login>
            }
        ]
    }
]);

export default Route;