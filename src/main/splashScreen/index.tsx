import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Image, Box, Container } from '@chakra-ui/react'
import logo from './logo.png'
import './styles.css'

const SplashScreen = () => {
  const [redirectNow, setRedirectNow] = useState(false);
  //tempo de 5 segundos para sair da pagina
  setTimeout(() => setRedirectNow(true), 5000);
  //está sendo jogado para abdomen total pqe nao temos a pagina principal, ajustar isso futuramente
  return redirectNow ? (<Navigate to="/AbdomemTotal" />) :
    (
      <div className='body'>
        <div className='container'>
          <div className='box'>
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    );
}

export default SplashScreen; 