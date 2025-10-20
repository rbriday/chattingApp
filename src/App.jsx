
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Registration from '../src/components/Pages/Registration'
import Login from "./components/Pages/Login";
import firebaseConfig from "./components/firebase/firebaseConfig";
import Forgot from "./components/Forgot/Forgot";


function App() {

  const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/forgotPassword",
    element: <Forgot></Forgot>,
  },
]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
