//Core
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//pages
import { RootLayout } from "./pages/RootLayout";
import { HomePage } from "./pages/HomePage";
import { MoviesPage } from "./pages/MoviesPage";
import { ErrorPage } from "./pages/404";
import { MovieInfoPages } from "./pages/MovieInfoPages";
import { TVShowsPages } from "./pages/TVShowPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/movie-app", element: <HomePage /> },
      {
        path: "/movies",
        element: <MoviesPage />,
      },
      {
        path: "/movies/movie/:idFilm",
        element: <MovieInfoPages />,
      },
      {
        path: "tv-shows",
        element: <TVShowsPages />,
      },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

const App:React.FC=()=> {
  return <RouterProvider router={router} />;
}

export default App;
