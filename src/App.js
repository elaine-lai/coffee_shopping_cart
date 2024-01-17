import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ProductDetails } from './pages/productdetails/productdetails';
import { ShopContext, ShopContextProvider } from "./context/shop-context"

function App() {
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
