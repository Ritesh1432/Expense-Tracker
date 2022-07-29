import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Signup from './components/Authentication/Signup';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Authentication/Login';

function App() {
  return (
    <ChakraProvider theme={theme}>
     <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
     </Routes>
    </ChakraProvider>
  );
}

export default App;
