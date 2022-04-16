import './App.css'

import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import Catalog from './components/Catalog/Catalog';
import Details from './components/Details/Details';
import Sold from './components/Sold/Sold';
import Buy from './components/Buy/Buy';

function App() {
  return (
    <div className="App">
      <Header />

      <Buy />
    </div >

  );

}

export default App;
