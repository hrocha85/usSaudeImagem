import { Routes, Route } from "react-router-dom";
import AbdomemTotal from "../Main/exames/abdomemTotal";
import Tireoide from "../Main/exames/tireoide";
import SplashScreen from "../Main/splashScreen";
import Configuracoes from "../Main/configuracao/configuracoes";
import Home from "../Main/home/index"

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="Home" element={<Home/>} />
      <Route path="/1" element={<AbdomemTotal />} />
      <Route path="/2" element={<Tireoide />} />
      <Route path="/Configuracoes" element={<Configuracoes/>} />
    </Routes>
  );
}

export default Rotas;