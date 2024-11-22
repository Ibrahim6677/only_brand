import './App.css';
import Second from './SecondPage/Second';
import Category from './CategoryPage/Category';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import NewArrival from './NewArrival/NewArrival';
import TrendingNow from './TrendingNew/TrendingNow';
import DetailsCart from './DetailsCart/DetailsCart';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import { ProductsData } from './api/api';



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
      </Route>
      <Route path="/second" element={<Second />} />
      <Route path="/category" element={<Category />} />
      <Route path="/new-arrival" element={<NewArrival />} />
      <Route path="/trending-now" element={<TrendingNow />} />
      <Route path="/details-cart" element={<DetailsCart />} />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;
