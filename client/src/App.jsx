import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';

import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
 

const App = () => {
  const user = false; 
  return <Router>
  <div className="app ">
    <Routes>
      
      <Route path="/products/:category" element={<ProductList/>}/>  
      <Route path="/product/:id" element={<Product/>}/>  
      <Route path="/cart" element={<Cart/>}/>  
      <Route path="/login" element={user ? <Navigate replace to="/" />:<Login/>}/>
      <Route path="/register" element={user ? <Navigate replace to="/" />:<Register/>}/> 
      <Route exact path="/" element={<Home/>}/>       
    </Routes>
  </div>
</Router>
};

export default App;