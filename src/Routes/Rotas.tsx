import { Routes, Route } from "react-router-dom";
import AbdomemTotal from "../main/abdomemTotal";
import SplashScreen from "../main/splashScreen";
import Configuracoes from "../main/configuracao/configuracoes";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/AbdomemTotal" element={<AbdomemTotal />} />
      <Route path="/Configuracoes" element={<Configuracoes/>} />
    </Routes>
  );
}

export default Rotas;