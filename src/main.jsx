import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Layout/Root';
import ErrorPage from './Pages/Errorpage/ErrorPage';
import Home from './Pages/Home/Home';
import News from './Pages/News/News';
import DashboardLayout from './Pages/Dashboard/DashboardLayout/DashboardLayout';
import AllNews from './Pages/Dashboard/News/News';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import Users from './Pages/Dashboard/Users/Users';
import CreateNews from './Pages/Dashboard/CreateNews/CreateNews';
import Analytics from './Pages/Dashboard/Analytics/Analytics';
import { Provider } from 'react-redux';
import { store } from './Features/Store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news/:id",
        element: <News />,
      },
    ],
    
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children:[
      {
        path:"dashboard-home",
        element:<DashboardHome/>
      },
      {
        path:"all-news",
        element:<AllNews/>
      },
      {
        path:"all-users",
        element:<Users/>
      },
      {
        path:"create-news",
        element:<CreateNews/>
      },
      {
        path:"analytics",
        element:<Analytics/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
   <RouterProvider router={router}></RouterProvider>
   </Provider>
  </React.StrictMode>,
)
