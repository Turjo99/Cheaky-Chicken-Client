import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Header/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);
export default router;
