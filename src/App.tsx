
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PatientList from "./pages/patient-list";
import { AdminLayout } from "./layout/admin-layout";
import { Error404 } from "./pages/error-404";
import { Dashboard } from "./pages/dashboard";
{/* <a href="https://storyset.com/user">User illustrations by Storyset</a> */}


const router = createBrowserRouter([
  {
    element: <AdminLayout />,
    errorElement: <Error404 />,
    children: [
      { 
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/patients",
        element: <PatientList />
      },
      // {
      //   path: "/medication-schedule",
      //   element: <>medication-schedule</>
      // }
    ]
  },
]);


function App() {
  return <RouterProvider router={router} />
}

export default App
