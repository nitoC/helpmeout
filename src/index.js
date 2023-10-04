import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import File from './pages/File';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    exact:true
  },
  {
    path:"file/:file",
    element:<File/>,
    exact:true
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

