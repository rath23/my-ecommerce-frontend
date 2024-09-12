import Footer from "./customer/componenst/footer/Footer"
import Navbar from "./customer/componenst/navigation/Navbar"
import HomePage from "./customer/componenst/pages/HomePage"
import Product from "./customer/componenst/product/Product"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./customer/componenst/productDetailsFiles/ProductDetail";
import CartPage from "./customer/componenst/cart/CartPage";
import Checkout from "./customer/componenst/checkout/Checkout";
import Order from "./customer/componenst/order/Order";
import OrderDetails from "./customer/componenst/order/OrderDetails";


function App() {

  return (
    <>
    <Router>
     <Navbar/>
    {/* <HomePage/> */}
    {/* <Product/> */}
    {/* <ProductDetail/> */}
    {/* <CartPage/> */}
    {/* <Checkout/> */}
    {/* <Order/> */}
    <OrderDetails/>
    <Footer/>
    </Router>
    </>
  )
}

export default App
