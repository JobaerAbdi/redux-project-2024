import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import LogIn from "../pages/LogIn";
import NotFound from "../pages/NotFound";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '*',
        element: <NotFound/>
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/login',
        element: <LogIn/>
    },
])

export default routes;