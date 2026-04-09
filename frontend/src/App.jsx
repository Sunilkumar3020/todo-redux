import { createBrowserRouter } from "react-router";
import { RouterProvider } from 'react-router';
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Todo from "./pages/Todo";

import Dashboard from "./pages/Dashboard";
import { ProtectedRoute } from "./components/ProtectedRoute";



function App() {



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }, {
      path: "/todo",
      element: <Todo />
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>

      )
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
