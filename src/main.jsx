import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import '@/styles/index.css';
import Root from './routes/root';
import Home from './routes/home';
import Calculator from './routes/calculator';
import Quote from './routes/quote';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home to="home" /> },
      { path: 'home', element: <Home /> },
      { path: 'calculator', element: <Calculator /> },
      { path: 'quote', element: <Quote /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
