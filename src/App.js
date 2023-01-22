import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "*",
    element: <div>blay</div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
