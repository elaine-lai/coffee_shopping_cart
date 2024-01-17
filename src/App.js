// https://www.youtube.com/watch?v=tEMrD9t85v4
import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ProductDetails } from './pages/productdetails/productdetails';
import { ShopContextProvider } from "./context/shop-context"

function App() {
  const [favicon, setFavicon] = useState('./src/assets/images/beanstack-logo.png');
  useEffect(() => {
    // This will set the title when the component mounts
    document.title = "Beanstack Brews";
    // This will remove the title when the component unmounts
    return () => {
      document.title = "Default Title";
    };
  }, []);

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element = {<Shop/>} />
            <Route path="/cart" element = {<Cart/>}/>
            <Route path="/product-details/:id" element={<ProductDetails/>}></Route>
          </Routes>
        </Router>
      </ShopContextProvider>
      <Footer />
    </div>
  );
}

export default App;
