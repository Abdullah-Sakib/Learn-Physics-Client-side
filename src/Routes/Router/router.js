import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../pages/Courses/Courses";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

export const router = createBrowserRouter([
  {
    paht: '/', 
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'courses',
        element: <Courses></Courses>,
        loader: () => fetch('http://localhost:5000/')
      }
    ]
  },

])