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
import Error from "../main/error/error";
import AdmMaster from "../main/adminMaster/admMaster";
import EditProfile from "../main/EditUser/EditProfile";
import EsqueciSenha from "../main/login/EsqueciSenha";
import Compartilha_PDF from "../main/folha_laudos/compartilha_pdf";
import PageLaudos from "../main/folha_laudos/PageLaudos";
import PerguntaFreq from "../main/LandingPage/perguntaFequ/PerguntaFreq";
import Tutorial from "../Tutorial/tutorial";
import PeriodoTesteExpired from "../main/Periodo_Teste";
import Manutencao from "../main/manutencao";



function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Manutencao />} />
      {/* <Route path="/" element={<SplashScreen />} />
      <Route path="/Expired" element={<PeriodoTesteExpired />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Home/Tutorial" element={<Tutorial />} />
      <Route path="/SelectMedicos" element={<SelectMedicos />} />
      <Route path="/Home/Configuracoes" element={<Configuracoes />} />
      <Route path="/Home/Laudos" element={<PageLaudos />} />
      <Route path="/Format_PDF" element={<Format_PDF />} />
      <Route path="/Compartilha_PDF" element={<Compartilha_PDF />} />
      <Route path="/Exames" element={<Box_Default_With_Sidebar />} /> */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Rotas;
