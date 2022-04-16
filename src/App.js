import './App.css';

import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import Catalog from './components/Catalog/Catalog';
import Details from './components/Details/Details';
import Sold from './components/Sold/Sold';
import Buy from './components/Buy/Buy';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />


      {/* // Need to add some nested routes for secondary nav */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create' element={<Create />} />
        <Route path='/details' element={<Details />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/sales' element={<Sold />} />
        <Route path='/buy' element={<Buy />} />
      </Routes>

    </div >

  );

}

export default App;
