import './App.css';
import Second from './SecondPage/Second';
import Category from './CategoryPage/Category';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import NewArrival from './NewArrival/NewArrival';
import TrendingNow from './TrendingNew/TrendingNow';
import DetailsCart from './DetailsCart/DetailsCart';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Second />
      <Category />
      <NewArrival/>
      <TrendingNow/>
      <DetailsCart/>
    </div>
  );
}

export default App;
