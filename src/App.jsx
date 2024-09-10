import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "./appLayout";

const router = createBrowserRouter([{ path: "/", element: <Sidebar /> }]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
