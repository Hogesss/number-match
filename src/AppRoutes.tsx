import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import Game from "./components/Game";
import Home from "./components/Home";

export default function AppRoutes(): JSX.Element {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />} errorElement={<div>Error</div>}>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
