import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import WallDecorSale from "./pages/Decor-and-Pillows/WallDecorSale";
import Authentication from "./pages/Authentication";
import { useEffect, useState } from "react";
import Cart from "./pages/Cart";

function App() {
  const [showNavbarAndFooter, setShowNavbarAndFooter] = useState(false)
  
  const CheckRoute = ()=>{
    const location = useLocation()

    useEffect(()=>{
      setShowNavbarAndFooter(location.pathname == "/authentication" ? false : true)
    },[location])
  }
  return (
    <>
    <CheckRoute/>
{showNavbarAndFooter &&  <>
  <Header />
  <Navbar />
  </>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wall-decor-sale" element={<WallDecorSale />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="*" element={<h1 className="text-7xl m-6 my-20 text-center">No valid page found</h1>} />
        
      </Routes>
{ showNavbarAndFooter && <Footer /> }
    </>
  );
}

export default App;
