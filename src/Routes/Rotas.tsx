import { Route, Routes } from "react-router-dom";
import Configuracoes from "../main/configuracao/configuracoes";
import Home from "../main/home/index";
import SplashScreen from "../main/splashScreen";



import Login from "../main/login/login";

import Box_Default_With_Sidebar from "../main/component/screen_exames";
import Format_PDF from "../main/folha_laudos/format_pdf";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      {/* <Route path="/Home/1" element={<AbdomemTotal />} />
      <Route path="/Home/2" element={<DopplerTransvaginal />} />
      <Route path="/Home/3" element={<Mamas />} />
      <Route path="/Home/5" element={<AbdomemSuperior />} />
      <Route path="/Home/6" element={<Transvaginal />} />
      <Route path="/Home/7" element={<DopplerRenal />} />
      <Route path="/Home/8" element={<DopplerVenosoMMII />} />
      <Route path="/Home/9" element={<Tireoide />} />
      <Route path="/Home/10" element={<DopplerCarotidas />} />
      <Route path="/Home/12" element={<Doppler_Arterial_MMII />} />
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
      <Route path="/Home/24" element={<Articulacoes />} />
      <Route path="/Home/25" element={<Regiao_Inguinal />} /> */}
      <Route path="/Home/Configuracoes" element={<Configuracoes />} />
      <Route path="/Format_PDF" element={<Format_PDF />} />
      <Route
        path="/Exames"
        element={<Box_Default_With_Sidebar />}
      />
    </Routes>
  );
}

export default Rotas;
