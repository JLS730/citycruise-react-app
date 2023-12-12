import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styling/global.css'
import './styling/navigation-bar.css'
import './styling/footer.css'

// import App from './App';
import NavigationBar from './components/NavigationBar';
import Account from './pages/Account';
import SignIn from './pages/SignIn';
import CreateAccount from './pages/CreateAccount';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/account' element={<Account />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/create-account' element={<CreateAccount />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
