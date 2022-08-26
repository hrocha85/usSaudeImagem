import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AbdomemTotal from "../main/abdomemTotal";
import SplashScreen from "../main/splashScreen";

function Rotas() {
  return (
    

      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="abdomemTotal" element={<AbdomemTotal />} />
      </Routes>
   
  );
}

export default Rotas;