import { Routes, Route } from "react-router-dom";
import AbdomemTotal from "../main/exames/abdomemTotal";
import Tireoide from "../main/exames/tireoide";
import SplashScreen from "../main/splashScreen";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="AbdomemTotal" element={<AbdomemTotal />} />
      <Route path="Tireoide" element={<Tireoide />} />
    </Routes>
  );
}

export default Rotas;