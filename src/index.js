import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./home/home.jsx";
import Press from "./press/press.jsx";
import People from "./people/people.jsx";
import Publications from "./publications/publications.jsx";
import About from './about/about.jsx';
import Error from "./error/error.jsx"

const router = createHashRouter([
  {
    basename: '/skyien-z.github.io',
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "press",
        element: <Press/>
      },
      {
        path: "people",
        element: <People/>
      },
      {
        path: "publications",
        element: <Publications/>
      },
      {
        path: "about",
        element: <About/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();
