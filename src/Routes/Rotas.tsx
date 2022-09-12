import { Routes, Route } from "react-router-dom";
import AbdomemTotal from "../Main/exames/abdomemTotal";
import Tireoide from "../Main/exames/tireoide";
import SplashScreen from "../Main/splashScreen";
import Configuracoes from "../Main/configuracao/configuracoes";

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