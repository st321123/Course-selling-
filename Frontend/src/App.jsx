import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/login";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);
function App() {
  return (
    <div className="bg-[#F1F1F2]">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
