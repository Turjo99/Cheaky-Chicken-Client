import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Forms/Login";
import Signup from "../Components/Forms/Signup";
import Home from "../Components/Header/Home/Home";
import AllItem from "../Components/Items/AllItem";
import ItemDetail from "../Components/Items/ItemDetail";
import Main from "../Components/Main/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allItems",
        element: <AllItem></AllItem>,
      },
      {
        path: "/allItems/:id",
        element: <ItemDetail></ItemDetail>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allItems/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
export default router;
