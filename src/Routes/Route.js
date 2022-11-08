import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Header/Home/Home";
import AllItem from "../Components/Items/AllItem";
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
    ],
  },
]);
export default router;
