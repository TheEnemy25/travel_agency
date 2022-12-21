import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { SignIn } from './components/SignIn/SignIn';
import { SignUp } from './components/SignUp/SignUp';
import { Madrid } from './components/Madrid/Madrid';


export const App = () => {

  return (


    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Main />} />
        <Route path='hotel' element={<div></div>} />
        <Route path='session' element={<div></div>} />
        <Route path='store' element={<div></div>} />
        <Route path='register' element={<SignUp />} />
        <Route path='login' element={<SignIn />} />
        <Route path='madrid' element={<Madrid />} />
      </Route>
    </Routes>

  );
}

