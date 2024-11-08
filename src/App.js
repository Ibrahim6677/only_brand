import './App.css';
import Second from './SecondPage/Second';
import Category from './CategoryPage/Category';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Second />
      <Category />
    </div>
  );
}

export default App;
