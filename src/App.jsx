
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Registration from '../src/components/Pages/Registration'
import Login from "./components/Pages/Login";
import firebaseConfig from "./components/firebase/firebaseConfig";
import Forgot from "./components/Forgot/Forgot";
import Home from "./components/Pages/Home";
import Message from "./components/Message/Message";
import Settings from "./components/Settings/Settings";


function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
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
  {
    path: "/msg",
    element: <Message></Message>
  },
  {
    path: "/setting",
    element: <Settings></Settings>
  }
]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
