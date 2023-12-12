import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import logo from "./logoUsg3.png";
import "./styles.css";
import { Box } from "@chakra-ui/react";
import Splash_Screen from '../images/SplashOnly.png'
import GetMedicosAdmin from "../Helpers/UserAdmin/GetMedicosAdmin";
import GetMedicosFree from "../Helpers/UserFree/GetMedicosFree";
import Cookies from 'js-cookie';
import verificarTesteGratuito from "../Helpers/verificaTeste";

const SplashScreen = () => {
  const [redirectNow, setRedirectNow] = useState(false);
  const [PrimeiroLogin, setPrimeiroLogin] = useState(false);
  const [AdminMaster, setAdminMaster] = useState(false);
  const [TesteGratuito, setTesteGratuito] = useState(false);
  const [lista_medico, setlista_medico] = useState<any[]>([]);
  //tempo de 4 segundos para sair da pagina
  setTimeout(() => setRedirectNow(true), 4000);

  const firstLogin = localStorage.getItem('USGImagem_firstLogin');

  useEffect(() => {
    if (!firstLogin) {
      const dataInicioTeste = new Date();
      console.log(dataInicioTeste)
      localStorage.setItem('USGImagem_firstLogin', dataInicioTeste.toString());
    } else {
      setTesteGratuito(verificarTesteGratuito(firstLogin.toString()));
    }
  }, [])

  return redirectNow ? (
    TesteGratuito ?
      <Navigate to="/Expired" />
      :
      <Navigate to="/SelectMedicos" />
  ) : (
    <Box
      w="100vw"
      h="100vh"
      //bgGradient='linear(to-r, blue.100, #fff)'
      backgroundImage={Splash_Screen}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition={'center'}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w={'40rem'}
        h={'12rem'}
        display={'flex'}
        justifyContent={'center'}
        padding="1rem"
      >
        <img src={logo} alt="logo" />
      </Box>
    </Box>

  );
};

export default SplashScreen;
