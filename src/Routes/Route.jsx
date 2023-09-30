import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Route = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Hello world!</div>,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Route;
