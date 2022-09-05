import { Routes, Route } from "react-router-dom";
import AbdomemTotal from "../main/exames/abdomemTotal";
import Tireoide from "../main/exames/tireoide";
import SplashScreen from "../main/splashScreen";
import Configuracoes from "../main/configuracao/configuracoes";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/AbdomemTotal" element={<AbdomemTotal />} />
      <Route path="/Tireoide" element={<Tireoide />} />
      <Route path="/Configuracoes" element={<Configuracoes/>} />
    </Routes>
  );
}

export default Rotas;