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
import AddAuthor from "../pages/Dashboard/AddAuthor/AddAuthor";
import UpdateAllBlogs from "../pages/Dashboard/ManageAllBlogs/UpdateAllBlogs";
import ManageAuthors from "../pages/Dashboard/ManageAuthors/ManageAuthors";
import UpdateAuthor from "../pages/Dashboard/ManageAuthors/UpdateAuthor";
import AdminRoute from "../pages/PrivateRoute/AdminRoute";

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
                path: '/allBlogs',
                element: <AllBlogs></AllBlogs>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/contact',
                element: <ContactPage></ContactPage>
            },
            {
                path: '/Profile',
                element: <Profile></Profile>
            },
            {
                path: '/editProfile/:id',
                element: <EditProfile></EditProfile>,
                loader: ({ params }) => fetch(`https://blogging-server-side.vercel.app/profiles/${params.id}`)
            },
            {
                path: '/blogs/:id',
                element: <SingleBlogs></SingleBlogs>,
                loader: ({ params }) => fetch(`https://blogging-server-side.vercel.app/blogs/${params.id}`)
            },

        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "writeBlogs",
                element: <PrivateRoute> <WriteBlogs></WriteBlogs></PrivateRoute>
            },
            {
                path: 'feedback',
                element: <Feedback></Feedback>
            },
            {
                path: 'myBlog',
                element: <MyBlog></MyBlog>
            },
            {
                path: 'manageBlogs',
                element: <ManageBlogs></ManageBlogs>
            },
            {
                path: 'updateBlog/:id',
                element: <UpdateBlog></UpdateBlog>,
                loader: ({ params }) => fetch(`https://blogging-server-side.vercel.app/blog/${params.id}`)
            },
            //admin route
            {
                path: "manageAllBlogs",
                element: <AdminRoute><ManageAllBlogs></ManageAllBlogs></AdminRoute>
            },
            {
                path: 'updateAllBlogs/:id',
                element: <AdminRoute><UpdateAllBlogs></UpdateAllBlogs></AdminRoute>,
                loader: ({ params }) => fetch(`https://blogging-server-side.vercel.app/blogs/${params.id}`)
            },
            {
                path: 'manageUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'manageReview',
                element: <AdminRoute><ManageReview></ManageReview></AdminRoute>
            },
            {
                path: 'editReview/:id',
                element: <AdminRoute><EditReview></EditReview></AdminRoute>,
                loader: ({ params }) => fetch(`https://blogging-server-side.vercel.app/review/${params.id}`)
            },
            {
                path: "addAuthor",
                element: <AdminRoute><AddAuthor></AddAuthor></AdminRoute>
            },
            {
                path: "manageAuthors",
                element: <AdminRoute> <ManageAuthors></ManageAuthors></AdminRoute>
            },
            {
                path: 'updateAuthor/:id',
                element: <AdminRoute><UpdateAuthor></UpdateAuthor></AdminRoute>,
                loader: ({ params }) => fetch(`https://blogging-server-side.vercel.app/author/${params.id}`)
            },
        ]
    }
]);

export default Route;