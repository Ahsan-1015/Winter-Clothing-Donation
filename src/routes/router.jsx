import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/MainLayout/MainLayout';
import Home from '../components/Home/Home';
import Campaign from '../components/Campaign/Campaign';
import Dashboard from '../components/Dashboard/Dashboard';

import Profile from '../components/Profile/Profile';
import Details from '../components/Details/Details';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async () => {
          const campaignsRes = await fetch('/campaign.json');
          const campaignsData = await campaignsRes.json();

          const feedBackRes = await fetch('/happyclients.json');
          const feedBackData = await feedBackRes.json();

          return { campaignsData, feedBackData };
        },
      },
      {
        path: '/campaigns',
        element: <Campaign></Campaign>,
        loader: () => fetch('/campaign.json'),
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: '/details/:id',
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch('/campaign.json');
          const data = await res.json();
          const singleData = data.find(d => d.id == params.id);
          return singleData;
        },
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
