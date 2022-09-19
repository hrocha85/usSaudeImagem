import { Routes, Route } from "react-router-dom";
import AbdomemTotal from "../main/exames/abdomemTotal";
import Tireoide from "../main/exames/tireoide";
import SplashScreen from "../main/splashScreen";
import Configuracoes from "../main/configuracao/configuracoes";
import Home from "../main/home/index"


function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Home/1" element={<AbdomemTotal />} />
      <Route path="/Home/9" element={<Tireoide />} />
      <Route path="/Home/Configuracoes" element={<Configuracoes />} />
    </Routes>
  );
}

export default Rotas;