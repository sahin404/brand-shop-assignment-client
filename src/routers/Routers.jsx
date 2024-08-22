import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Homepage from "../pages/HomePage/Homepage";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Homepage></Homepage>
            }
        ]
    }
])