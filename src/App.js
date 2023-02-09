import React from 'react';
import { Button } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
// import { Home } from './components/Home';
import { Footer } from './components/Footer';
import Home from './components/Home';
import { Videos } from './components/Videos';
import { Upload } from './components/Upload';
import {Login} from "./components/Login"
import {SignUp} from "./components/SignUp"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />}></Route>
        <Route path="/upload" element={<Upload />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
