import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/About';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "about",
    element: <About />
  },
  // Add additional route objects here for other URLs
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Route path="/" element={<App />} />
      {}
    </RouterProvider>
  </React.StrictMode>
);
