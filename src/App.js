import './App.css';
import Second from './SecondPage/Second';
import Category from './CategoryPage/Category';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import NewArrival from './NewArrival/NewArrival';
import TrendingNow from './TrendingNew/TrendingNow';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Second />
      <Category />
      <NewArrival/>
      <TrendingNow/>
    </div>
  );
}

export default App;
