import React from 'react';
import logo from './logo.svg';
import './App.css';
import SplashScreen from './main/splashScreen';
import { ChakraProvider } from '@chakra-ui/react'
<<<<<<< HEAD
import Routess from './Routes/index';

function App() {
  return (
    <ChakraProvider>
      <Routess></Routess>
      
=======
import tema from './main/Theme/Tema'

function App() {
  return (
    <ChakraProvider theme={tema}>
      <SplashScreen></SplashScreen>
>>>>>>> b97be733f230f006bdfbb85219dc621531552ab3
    </ChakraProvider>
  );
}

export default App;
