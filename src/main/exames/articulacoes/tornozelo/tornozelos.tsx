/* eslint-disable react/jsx-pascal-case */
import { Flex } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import Bolsa_Direito from "./direito/bolsa_direito";
import Cisto_Direito from "./direito/cisto_direito";
import Derrame_Articular_Direito from "./direito/derrame_articular_direito";
import Estruturas_Ligamentares_Direito from "./direito/estruturas_ligamentares_direito";
import Fascia_Plantar_Direito from "./direito/fascia_plantar_direito";
import Gordura_Kager_Direito from "./direito/gordura_kager_direito";
import Neuroma_Morton_Direito from "./direito/neuroma_morton_direito";
import Tendao_Calcaneo_Direito from "./direito/tendao_calcaneo_direito";
import Tendao_Extensor_Dedos_Direito from "./direito/tendao_extendor_dedos_direito";
import Tendao_Extensor_Halux_Direito from "./direito/tendao_extensor_halux_direito";
import Tendao_Fibular_Curto_Direito from "./direito/tendao_fibular_curto_direito";
import Tendao_Fibular_Longo_Direito from "./direito/tendao_fibular_longo_direito";
import Tendao_Flexor_Dedos_Direito from "./direito/tendao_flexor_dedos_direito";
import Tendao_Flexor_Halux_Direito from "./direito/tendao_flexor_halux_direito";
import Tendao_Tibial_Anterior_Direito from "./direito/tendao_tibial_anterior_direito";
import Tendao_Tibial_Posterior_Direito from "./direito/tendao_tibial_posterior_direito";
import Bolsa_Esquerdo from "./esquerdo/bolsa_esquerdo";
import Cisto_Esquerdo from "./esquerdo/cisto_esquerdo";
import Derrame_Articular_Esquerdo from "./esquerdo/derrame_articular_esquerdo";
import Estruturas_Ligamentares_Esquerdo from "./esquerdo/estruturas_ligamentares_esquerdo";
import Fascia_Plantar_Esquerdo from "./esquerdo/fascia_plantar_esquerdo";
import Gordura_Kager_Esquerdo from "./esquerdo/gordura_kager_esquerdo ";
import Lado_Esquerdo_Torn from "./esquerdo/lado_esquerdo_box";
import Neuroma_Morton_Esquerdo from "./esquerdo/neuroma_morton_esquerdo";
import Tendao_Calcaneo_Esquerdo from "./esquerdo/tendao_calcaneo_esquerdo";
import Tendao_Extensor_Dedos_Esquerdo from "./esquerdo/tendao_extendor_dedos_esquerdo";
import Tendao_Extensor_Halux_Esquerdo from "./esquerdo/tendao_extensor_halux_esquerdo";
import Tendao_Fibular_Curto_Esquerdo from "./esquerdo/tendao_fibular_curto_esquerdo";
import Tendao_Fibular_Longo_Esquerdo from "./esquerdo/tendao_fibular_longo_esquerdo";
import Tendao_Flexor_Dedos_Esquerdo from "./esquerdo/tendao_flexor_dedos_esquerdo";
import Tendao_Flexor_Halux_Esquerdo from "./esquerdo/tendao_flexor_halux_esquerdo";
import Tendao_Tibial_Anterior_Esquerdo from "./esquerdo/tendao_tibial_anterior_esquerdo";
import Tendao_Tibial_Posterior_Esquerdo from "./esquerdo/tendao_tibial_posterior_esquerdo";

export default function Tornozelos({ Disable }) {
  return (
    <Flex flexDirection="column" maxW="98%">
      <TituloNomeExame titulo="Tornozelos/Pés" />
      <Flex gap={4} alignItems="start" justifyItems="center" flexWrap="wrap">
        <Flex flex={1} flexDirection="column">
          <Lado_Esquerdo_Torn lado={"Esquerdo"} />
          <Derrame_Articular_Esquerdo Disable={Disable} />
          <Tendao_Tibial_Anterior_Esquerdo Disable={Disable} />
          <Tendao_Extensor_Halux_Esquerdo Disable={Disable} />
          <Tendao_Extensor_Dedos_Esquerdo Disable={Disable} />
          <Tendao_Tibial_Posterior_Esquerdo Disable={Disable} />
          <Tendao_Flexor_Halux_Esquerdo Disable={Disable} />
          <Tendao_Flexor_Dedos_Esquerdo Disable={Disable} />
          <Tendao_Fibular_Curto_Esquerdo Disable={Disable} />
          <Tendao_Fibular_Longo_Esquerdo Disable={Disable} />
          <Tendao_Calcaneo_Esquerdo Disable={Disable} />
          <Estruturas_Ligamentares_Esquerdo Disable={Disable} />
          <Cisto_Esquerdo Disable={Disable} />
          <Bolsa_Esquerdo Disable={Disable} />
          <Gordura_Kager_Esquerdo Disable={Disable} />
          <Fascia_Plantar_Esquerdo Disable={Disable} />
          <Neuroma_Morton_Esquerdo Disable={Disable} />
        </Flex>
        <Flex flex={1} flexDirection="column" flexWrap="wrap">
          <Lado_Esquerdo_Torn lado={"Direito"} />
          <Derrame_Articular_Direito Disable={Disable} />
          <Tendao_Tibial_Anterior_Direito Disable={Disable} />
          <Tendao_Extensor_Halux_Direito Disable={Disable} />
          <Tendao_Extensor_Dedos_Direito Disable={Disable} />
          <Tendao_Tibial_Posterior_Direito Disable={Disable} />
          <Tendao_Flexor_Halux_Direito Disable={Disable} />
          <Tendao_Flexor_Dedos_Direito Disable={Disable} />
          <Tendao_Fibular_Curto_Direito Disable={Disable} />
          <Tendao_Fibular_Longo_Direito Disable={Disable} />
          <Tendao_Calcaneo_Direito Disable={Disable} />
          <Estruturas_Ligamentares_Direito Disable={Disable} />
          <Cisto_Direito Disable={Disable} />
          <Bolsa_Direito Disable={Disable} />
          <Gordura_Kager_Direito Disable={Disable} />
          <Fascia_Plantar_Direito Disable={Disable} />
          <Neuroma_Morton_Direito Disable={Disable} />
        </Flex>
      </Flex>
    </Flex>
  );
}
