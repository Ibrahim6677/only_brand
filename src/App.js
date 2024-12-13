import React from 'react';
import Navbar from './components/Navbar';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Men from './pages/Men';
import Woman from './pages/Woman';
import Search from './pages/Search';
import { ProductsData } from './api/api';
import ProductPage from './pages/ProductPage';
import CheckOut from './pages/Check';
import LoginSignupModal from './components/LoginSignupModal';
import FavoretPag from './pages/FavoretPag';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} loader={ProductsData} />
        <Route path='/men' element={<Men />} />
        <Route path='/Women' element={<Woman />} />
        <Route path='/search' element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/product/:id' element={<ProductPage />} loader={ProductsData} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/Regester' element={<LoginSignupModal />} />
        <Route path='/FavoretPag' element={<FavoretPag />} />
      </Route>
    
    </>
  ));

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;  // export default App;