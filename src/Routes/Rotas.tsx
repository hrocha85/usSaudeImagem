import { Route, Routes, useNavigate } from "react-router-dom";
import Configuracoes from "../main/configuracao/configuracoes";
import Home from "../main/home/index";
import SplashScreen from "../main/splashScreen";

import SelectMedicos from "../main/login/select_medicos";

import Box_Default_With_Sidebar from "../main/component/screen_exames";
import Format_PDF from "../main/folha_laudos/format_pdf";
import LandingPage from "../main/LandingPage/LandingPage";
import LoginForm from "../main/login/loginForm";
import CadastroUsuario from "../main/CadastroFree/Cadastro";
import LoginFormFree from "../main/login/loginFormFree";
import PrivateRoute from "./PrivateRoute";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Splash" element={<SplashScreen />} />
      <Route path="/Cadastro" element={<CadastroUsuario />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<LoginForm />} />
      <Route path="/LoginFree" element={<LoginFormFree />} />
      <Route path="/SelectMedicos" element={<PrivateRoute RouteRoles={['userFree', 'admin']} element={<SelectMedicos />} />} />
      <Route path="/Home/Configuracoes" element={<PrivateRoute RouteRoles={['userFree']} element={<Configuracoes />} />} />
      <Route path="/Format_PDF" element={<Format_PDF />} />
      <Route path="/Exames" element={<Box_Default_With_Sidebar />}
      />
    </Routes>
  );
}

export default Rotas;
