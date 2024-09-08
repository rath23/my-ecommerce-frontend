import Footer from "./customer/componenst/footer/Footer"
import Navbar from "./customer/componenst/navigation/Navbar"
import HomePage from "./customer/componenst/pages/HomePage"
import Product from "./customer/componenst/product/Product"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <Router>
     <Navbar/>
    {/* <HomePage/> */}
    <Product/>
    <Footer/>
    </Router>
    </>
  )
}

export default App
