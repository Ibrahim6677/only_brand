import React from 'react';
import Navbar from './components/Navbar';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Registration from './pages/Registration';
import Men from './pages/Men';
import Woman from './pages/Woman';
import Search from './pages/Search';
import { ProductsData } from './api/api';
import ProductPage from './pages/ProductPage';


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
    <Route>
      
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} loader={ProductsData} />
        <Route path='/men' element={<Men />} />
        <Route path='/Women' element={<Woman />} />
        <Route path='/search' element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/product/:id' element={<ProductPage />} loader={ProductsData} />
      </Route>

      <Route path='/sign' element={<SignIn />} />
      <Route path='/register' element={<Registration />} />

      
    
    </Route>
  ));

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;  // export default App;