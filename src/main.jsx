import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import SignupPage from "./components/SignupPage";
import "./index.css";

const appRouter = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/signin", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/profile", element: <ProfilePage /> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
