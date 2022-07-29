import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import Signup from './components/Authentication/Signup';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Authentication/Login';
import '../src/App.css'

function App() {
  return (
    <div>
     <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
     </Routes>
    </div>
  );
}

export default App;
