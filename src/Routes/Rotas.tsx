import { Routes, Route } from "react-router-dom";
import AbdomemTotal from "../main/exames/abdomemTotal";
import SplashScreen from "../main/splashScreen";
import Configuracoes from "../main/configuracao/configuracoes";
import Transvaginal from "../main/exames/transvaginal";
import Home from "../main/home/index";
import AbdomemSuperior from "../main/exames/abdomenSuperior";
import Tireoide from "../main/exames/tireoide";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Home/1" element={<AbdomemTotal />} />
      <Route path="/Home/5" element={<AbdomemSuperior />} />
      <Route path="/Home/9" element={<Tireoide />} />
      <Route path="/Home/Configuracoes" element={<Configuracoes />} />
      <Route path="/Home/6" element={<Transvaginal />} />
    </Routes>
  );
}

export default Rotas;
