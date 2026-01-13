import { createBrowserRouter, Outlet } from "react-router-dom";
import Body from "./components/Body";

const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);

export default App;
