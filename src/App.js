import './App.css';
import AuthContext from './contexts/AuthContext';

import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';
import Catalog from './components/Catalog/Catalog';
import Details from './components/Details/Details';
import Sold from './components/Sold/Sold';
import Buy from './components/Buy/Buy';
import Logout from './components/Logout/Logout';

import RouteGuard from './components/Common/RouteGuard';

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  function setUserData(userData) {
    setUser(userData);
  }

  function clearUserData() {
    setUser(null);
  }

  return (
    <div className="App">
      <AuthContext.Provider value={{ user, setUserData, clearUserData }}>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/catalog/:category' element={<Catalog />} />

          <Route element={<RouteGuard user={user}/>}>
            <Route path='/create' element={<Create />} />
            <Route path='/edit/:id' element={<Edit />} />
          </Route>
          <Route path='/sales' element={<Sold />} />
          <Route path='/buy' element={<Buy />} />
        </Routes>

      </AuthContext.Provider>
    </div >

  );

}

export default App;
