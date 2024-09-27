
import { Route, Routes } from 'react-router';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import Footer from './Footer';
import Nav from './Nav';
import ProductsList from './componants.js/ProductsList';
import Home from './componants.js/Home';
import Cart from './componants.js/Cart';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
  
  <>
  <ToastContainer/>
 <Nav/>
  <Routes>
   {/* <Route path='' element={<Home/>} />*/}
    <Route path="ProductsList" element={<ProductsList/>}       />
    <Route path="Cart" element={<Cart/>}/>
  </Routes>
  <Footer/>
  </>
  );
}

export default App;
