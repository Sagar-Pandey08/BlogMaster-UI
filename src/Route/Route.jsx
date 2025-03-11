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
import ContactPage from "../pages/ContactPage/ContactPage";
import Dashboard from "./Dashboard";
import WriteBlogs from "../pages/Dashboard/WriteBlogs/WriteBlogs";
import Feedback from "../pages/Dashboard/Feedback/Feedback";
import SingleBlogs from "../pages/AllBlogs/SingleBlogs";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import MyBlog from "../pages/Dashboard/MyBlog/MyBlog";
import ManageBlogs from "../pages/Dashboard/ManageBlogs/ManageBlogs";
import UpdateBlog from "../pages/Dashboard/ManageBlogs/UpdateBlog";
import ManageAllBlogs from "../pages/Dashboard/ManageAllBlogs/ManageAllBlogs";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Profile from "../pages/Profile/Profile";
import EditProfile from "../pages/Profile/EditProfile";
import ManageReview from "../pages/Dashboard/ManageReview/ManageReview";
import EditReview from "../pages/Dashboard/ManageReview/EditReview";

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
            },
            {
                path:'/contact',
                element: <ContactPage></ContactPage>
            },
            {
                path:'/Profile',
                element: <Profile></Profile>
            },
            {
                path:'/editProfile/:id',
                element: <EditProfile></EditProfile>,
                loader: ({params})=>fetch(`http://localhost:5000/profiles/${params.id}`)
            },
            {
                path:'/blogs/:id',
                element: <SingleBlogs></SingleBlogs>,
                loader: ({params})=>fetch(`http://localhost:5000/blogs/${params.id}`)
            },
           
        ]
    },
    {
        path:"/dashboard",
        element: <Dashboard></Dashboard>,
        children:[
            {
                path:"writeBlogs",
                element: <PrivateRoute> <WriteBlogs></WriteBlogs></PrivateRoute>
            },
            {
                path:'feedback',
                element: <Feedback></Feedback>
            },
            {
                path:'myBlog',
                element: <MyBlog></MyBlog>
            },
            {
                path:'manageBlogs',
                element: <ManageBlogs></ManageBlogs>
            },
            {
                path:'updateBlog/:id',
                element: <UpdateBlog></UpdateBlog>,
                loader: ({params})=>fetch(`http://localhost:5000/blog/${params.id}`)
            },
            {
                path:"manageAllBlogs",
                element: <ManageAllBlogs></ManageAllBlogs>
            },
            {
                path:'manageUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path:'manageReview',
                element: <ManageReview></ManageReview>
            },
            {
                path:'editReview/:id',
                element: <EditReview></EditReview>,
                loader: ({params})=>fetch(`http://localhost:5000/review/${params.id}`)
            }
        ]
    }
]);

export default Route;