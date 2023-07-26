import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import logo from "./logo.png";
import "./styles.css";
import { Box } from "@chakra-ui/react";
import Splash_Screen from '../images/Splash_Screen.png'

const SplashScreen = () => {
  const isFirstTime = localStorage.getItem("isFirstTime");
  if (!isFirstTime) {
    localStorage.clear();
    localStorage.setItem("isFirstTime", "false");
  }

  const [redirectNow, setRedirectNow] = useState(false);
  //tempo de 5 segundos para sair da pagina
  setTimeout(() => setRedirectNow(true), 5000);
  //está sendo jogado para abdomen total pqe nao temos a pagina principal, ajustar isso futuramente
  // return (


  //     <Box
  //       w="100%"
  //       h="100vh"
  //       minH="80vh"
  //       // bgGradient='linear(to-r, blue.100, #fff)'
  //       backgroundImage={Splash_Screen}
  //       backgroundSize="cover"
  //       backgroundRepeat="no-repeat"
  //     >
  //     </Box>
  //   );
  // };
  return redirectNow ? (
    <Navigate to="/Login" />
  ) : (
    <div className="body">
      <div className="container">
        <div className="box">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
