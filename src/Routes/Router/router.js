import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import CheckOut from "../../pages/CheckOut/CheckOut";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/Profile/Profile";
import Register from "../../pages/Register/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
  {
    paht: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://learn-physics-server.vercel.app/"),
      },
      {
        path: "course/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`https://learn-physics-server.vercel.app/details/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivetRoute>
            <CheckOut></CheckOut>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://learn-physics-server.vercel.app/details/${params.id}`),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
