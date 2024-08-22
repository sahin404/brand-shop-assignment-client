import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Homepage from "../pages/HomePage/Homepage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import PrivateRouter from './../PrivateRouter/PrivateRouter';

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Homepage></Homepage>
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/add_product',
                element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>
            }
            ,{
                path:'/my_cart',
                element:<PrivateRouter><MyCart></MyCart></PrivateRouter>
            }
        ]
    }
])