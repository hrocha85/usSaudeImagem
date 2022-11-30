import { Routes, Route } from "react-router-dom";
import AbdomemTotal from "../main/exames/abdomemTotal";
import SplashScreen from "../main/splashScreen";
import Configuracoes from "../main/configuracao/configuracoes";
import Transvaginal from "../main/exames/transvaginal";
import Home from "../main/home/index";
import AbdomemSuperior from "../main/exames/abdomenSuperior";
import Tireoide from "../main/exames/tireoide";
import Tireoide2 from "../main/exames/tireoide2";
import DopplerTireoide from "../main/exames/dopplerTireoide";
import DopplerTireoide2 from "../main/exames/dopplerTireoide2";

import PartesMoles from "../main/exames/partesMoles";

import Doppler_Arterial_MMII from "../main/exames/doppler_arterial_MMII";
import Pelvico from "../main/exames/pelvico";
import DopplerTransvaginal from "../main/exames/dopplerTransvaginal";
import DopplerCarotidas from "../main/exames/dopplerCarotidas";
import DopplerCarotidas2 from "../main/exames/dopplerCarotidas2";
import DopplerRenal from "../main/exames/dopplerRenal";
import Testiculo from "../main/exames/testiculo";
import DopplerBolsaTesticular from "../main/exames/dopplerBolsaTesticular";
import RinseViasUrinarias from "../main/exames/RinsViasUrinarias";
import Login from "../main/login/login";
import Mamas from "../main/exames/mamas";
import Prostata from "../main/exames/prostata";

import Format_PDF from "../main/folha_laudos/format_pdf";
import Sidebar from "../main/menu/sideBar";

function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home/1" element={<AbdomemTotal />} />
        <Route path="/Home/2" element={<DopplerTransvaginal />} />
        <Route path="/Home/3" element={<Mamas />} />
        <Route path="/Home/5" element={<AbdomemSuperior />} />
        <Route path="/Home/6" element={<Transvaginal />} />
        <Route path="/Home/7" element={<DopplerRenal />} />
        <Route path="/Home/9" element={<Tireoide />} />
        <Route path="/Home/10" element={<DopplerCarotidas />} />
        <Route path="/Home/13" element={<Tireoide2 />} />
        <Route path="/Home/14" element={<DopplerCarotidas2 />} />
        <Route path="/Home/15" element={<RinseViasUrinarias />} />
        <Route path="/Home/17" element={<DopplerTireoide />} />
        <Route path="/Home/18" element={<PartesMoles />} />
        <Route path="/Home/19" element={<Testiculo />} />
        <Route path="/Home/20" element={<DopplerBolsaTesticular />} />
        <Route path="/Home/22" element={<Pelvico />} />
        <Route path="/Home/21" element={<DopplerTireoide2 />} />
        <Route path="/Home/23" element={<Prostata />} />
        <Route path="/Home/12" element={<Doppler_Arterial_MMII />} />
        <Route path="/Home/Configuracoes" element={<Configuracoes />} />
        <Route path="/Format_PDF" element={<Format_PDF />} />
      </Routes>
    </>
  );
}

export default Rotas;
