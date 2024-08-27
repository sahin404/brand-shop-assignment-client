import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Homepage from "../pages/HomePage/Homepage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import PrivateRouter from './../PrivateRouter/PrivateRouter';
import ShowBrandWiseCamera from "../pages/ShowBrandWiseCamera/ShowBrandWiseCamera";
import ShowDetails from "../pages/ShowDetails/ShowDetails";

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
            },
            {
                path:'/:cameraName',
                element: <ShowBrandWiseCamera></ShowBrandWiseCamera>,
                loader: ({params})=>fetch(`http://localhost:5000/cameras/${params.cameraName}`)
            },
            {
                path:'/camera/:id',
                element: <PrivateRouter><ShowDetails></ShowDetails></PrivateRouter>,
                loader: ({params})=>fetch(`http://localhost:5000/camera/${params.id}`)
            }
        ]
    }
])