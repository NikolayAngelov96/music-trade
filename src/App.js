import './App.css';

import AuthContext from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';

import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';
import Catalog from './components/Catalog/Catalog';
import Details from './components/Details/Details';
import Sold from './components/Sold/Sold';
import Checkout from './components/Checkout/Checkout';
import Logout from './components/Logout/Logout';
import NotFound from './components/NotFound/NotFound';
import Notification from './components/Common/Notification';

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
        <NotificationProvider>
          <Header />

          <Notification />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/catalog/:category' element={<Catalog />} />
            <Route path='/catalog?search=' element={<Catalog />} />

            <Route element={<RouteGuard user={user} />}>
              <Route path='/create' element={<Create />} />
              <Route path='/edit/:id' element={<Edit />} />
              <Route path='/sales' element={<Sold />} />
            </Route>

            <Route path='/checkout/:id' element={<Checkout />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </NotificationProvider>
      </AuthContext.Provider>
    </div >

  );

}

export default App;
