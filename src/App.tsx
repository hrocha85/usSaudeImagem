import React from 'react';
import logo from './logo.svg';
import './App.css';
import SplashScreen from './main/splashScreen';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <SplashScreen></SplashScreen>
    </ChakraProvider>
  );
}

export default App;
