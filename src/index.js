/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './Component/Nav';
import Home from './Component/Home';
import Aboutus from './Component/Aboutus';
// import Contact from './Component/Contact';
import Portfolio from './Component/Portfolio';
import ProductDetail from './ProductDetail';
import ThemeProvider from './ThemeContext.js';



const Contact = React.lazy(() => import('./Component/Contact.js'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        index: 'Home',
        element: <Home />
      },  // by default home page load
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/about',
        element: <Aboutus />
      },
      {
        path: '/contact',
        element:
          <React.Suspense>
            <Contact />
          </React.Suspense>
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/product',
        element: <App />
      },
      {
        path: '/readmore/:id',
        element: <ProductDetail />
      },

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <App />
  <ThemeProvider>
    <RouterProvider router={router} />


  </ThemeProvider>





);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

