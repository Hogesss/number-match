import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import Game from "./components/Game";
import Home from "./components/Home";
import GameOver from "./components/GameOver";

export default function AppRoutes(): JSX.Element {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />}>
        <Route path="*" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/winner" element={<GameOver />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
