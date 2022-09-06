import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';

import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
 

const App = () => {
  const user = true; 
  return <Router>
  <div className="app ">
    <Routes>
      <Route exact path="/" element={<Home/>}/> 
      <Route path="/products/:category" element={<ProductList/>}/>  
      <Route path="/product/:id" element={<Product/>}/>  
      <Route path="/cart" element={<Cart/>}/>  
      <Route path="/login" element={user ? <Navigate replace to="/" />:<Login/>}/>
      <Route path="/register" element={user ? <Navigate replace to="/" />:<Register/>}/>       
    </Routes>
  </div>
</Router>
};

export default App;