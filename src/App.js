
import { Route, Routes } from 'react-router';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import Footer from './Footer';
import Nav from './Nav';
import ProductsList from './componants/ProductsList';

import Cart from './componants/Cart';
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
