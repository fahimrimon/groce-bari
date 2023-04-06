import Main from "../../Layout/Main";
import Booking from "../../Pages/Booking/Booking";
import Home from "../../Pages/Home/Home/Home";
import ProductCategory from "../../Pages/Home/ProductCategory/ProductCategory";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/products',
          element:<ProductCategory></ProductCategory>
        },
        {
          path:'/booking',
          element:<Booking></Booking>
        }
      ]
    }
  ]);

  export default router;