
import {Route,Routes} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import  Home from './pages/home/Home.jsx'
import Cart from './pages/cart/Cart.jsx';
import Order from './pages/orders/Order.jsx';
const App = () => {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/orders' element={<Order/>}/>
        </Routes>

    </>
  );
};

export default App;
