import React from 'react';
import logo from './logo.svg';
import './App.css';
import SplashScreen from './main/splashScreen';
import { ChakraProvider } from '@chakra-ui/react'
import tema from './main/Theme/Tema'

function App() {
  return (
    <ChakraProvider theme={tema}>
      <SplashScreen></SplashScreen>
    </ChakraProvider>
  );
}

export default App;
