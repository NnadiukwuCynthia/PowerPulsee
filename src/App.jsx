import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from '../Routes/Layout'
import './index.css'
import ErrorPage from '../Routes/ErrorPage';
import Home from "../Routes/Home";
import About from './../Routes/About';
import Contact from './../Routes/Contact';

const router = createBrowserRouter ([
  {
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/home',
        element: <Home />, 
        index: true,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    
    ]
  }
]);


const App = () => {
  return (
    <>
    <div className="App">
      <RouterProvider router={router} />
    </div>
    </>
  )
}

export default App
