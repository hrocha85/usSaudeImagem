import React from 'react';
import logo from './logo.svg';
import './App.css';
import SplashScreen from './main/splashScreen';
import { ChakraProvider } from '@chakra-ui/react'
import Routess from './Routes/index';

function App() {
  return (
    <ChakraProvider>
      <Routess></Routess>
      
    </ChakraProvider>
  );
}

export default App;
