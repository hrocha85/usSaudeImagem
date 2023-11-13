import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import logo from "./logoUsg3.png";
import "./styles.css";
import { Box } from "@chakra-ui/react";
import Splash_Screen from '../images/SplashOnly.png'
import GetMedicosAdmin from "../Helpers/UserAdmin/GetMedicosAdmin";
import GetMedicosFree from "../Helpers/UserFree/GetMedicosFree";
import Cookies from 'js-cookie';

const SplashScreen = () => {
  const [redirectNow, setRedirectNow] = useState(false);
  const [PrimeiroLogin, setPrimeiroLogin] = useState(true);
  const [AdminMaster, setAdminMaster] = useState(false);
  const [lista_medico, setlista_medico] = useState<any[]>([]);
  //tempo de 5 segundos para sair da pagina
  setTimeout(() => setRedirectNow(true), 4000);

  useEffect(() => {
    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role === 'admin' ? isAdmin = true : isAdmin = false
      role === 'adminMaster' ? setAdminMaster(true) : setAdminMaster(false)
    }
    if (!isAdmin) {
      setlista_medico(GetMedicosFree())
    } else {
      GetMedicosAdmin()
        .then(medicos => {
          setlista_medico(medicos)
        })
        .catch(error => {
          console.error('Erro ao obter clínicas:', error);
        });
    }

    if (lista_medico.length > 0) {
      setPrimeiroLogin(false)
    }
  }, [])
  //está sendo jogado para abdomen total pqe nao temos a pagina principal, ajustar isso futuramente
  // };
  return redirectNow ? (
    PrimeiroLogin ?
      <Navigate to="/Home/Tutorial" />
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
