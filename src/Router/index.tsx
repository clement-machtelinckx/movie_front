import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import DefaultTemplate from "../pages/DefaultTemplate";
import Movie from "../pages/Movie";
import Movies from "../pages/Movies";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultTemplate />,

    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "movies/:movieId",
        element: <Movie />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
