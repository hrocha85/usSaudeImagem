/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-pascal-case */
import { Box, Checkbox, Select } from "@chakra-ui/react";

import AlcasIntestinais from "./alcas_intestinais/Alcas_Intestinais";
import Aorta from "./aorta/aorta";
import Baco from "./baco/baco";
import Bexiga from "./bexiga/bexiga";
import Calculos from "./calculos/calculos";
import Cisto from "./cisto/cisto";
import Dilatacao from "./dilatacao/dilatacao";
import Figado from "./figado/figado";
import LiquidoLivre from "./liquido_livre/liquido_livre";
import Nodulos from "./nodulos/nodulos";
import Pancreas from "./pancreas/pancreas";
import RimDireito from "./rim_direito/rim_direito";
import RimEsquerdo from "./rim_esquerdo/rim_esquerdo";
import VesiculaBiliar from "./vesicula_bliar/vesicula_biliar";
import ViasBiliares from "./vias biliares/vias_biliares";
import Aorta_Retroperitoneo from "./Aorta_Retroperitoneo/Aorta_retroperitoneo"
import Volume_vesical from "./volume_vesical/volume_vesical";
import RinsUreteres from "./Rins_ureteres/rins_ureteres";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../component/function_format_laudo";

function AbdomemTotal() {
  const altura = '100%'
  const largura = '40%'

  const [frasesFigado, setFrasesFigado] = useState<any>([]);

  const [Disable, SetDisable] = useState(false)
  const [NormalSelect, SetNormalSelect] = useState('')
  const [NormalEstruturasSelect, SetNormalEstruturasSelect] = useState('')

  const subExame = "Fígado";
  const titulo_exame = "Abdômen total";
  const removeStringSelect = (value) => {
    frasesFigado.map((e) => {
      if (e.includes(value)) {
        var index = frasesFigado.indexOf(e);
        if (index > -1) {
          frasesFigado.splice(index, 1);
          setFrasesFigado((arr) => [...arr]);
        }
      }
    });
  };
  useEffect(() => {
    var frase = 'Com situação, forma, contornos e dimensões'
    removeStringSelect(frase)
    if (Disable) {
      if (NormalSelect && NormalEstruturasSelect) {
        frase = `${frase} ${NormalSelect}.
        Parênquima hepático com textura uniforme, sem alterações de ecogenicidade.
        Estruturas vasculares intra-hepáticas e tronco da veia porta de características ${NormalEstruturasSelect} (Calibre normal até 1,2 cm).
        Hilo hepático de aspecto normal.`
        setFrasesFigado([frase])
      }
    } else {
      SetNormalSelect("")
      SetNormalEstruturasSelect("")
    }
  }, [Disable, NormalSelect, NormalEstruturasSelect])

  useEffect(() => {
    if (Object.keys(frasesFigado).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesFigado
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesFigado
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesFigado]);

  return (

    <Box>
      <Box
        bg="#FAFAFA"
        w={largura}
        h={altura}
        bgPosition="center"
        bgRepeat="no-repeat"
        borderRadius="10.85px"
        boxShadow="md"
        padding='10px 15px 10px 15px'
        mt='2px'
        mb='5px'
        display='flex'
        flexWrap='wrap'
        alignItems='center' gap='5px'>

        <Box w='150px' >
          <Checkbox
            id="tudoNormal"
            onChange={(e) => { SetDisable(!Disable) }}
          >Abdômen normal</Checkbox>
        </Box>
        <Select
          borderColor='black'
          w='150px'
          isDisabled={!Disable}
          value={NormalSelect}
          onChange={(e) => {
            SetNormalSelect(e.target.value);
          }}
        >
          <option value="" disabled selected>
            Dimensões
          </option>
          <option value="normais">Normais</option>
          <option value="aumentado">Aumentado</option>
          <option value="diminuído">Diminuído</option>
        </Select>
        <Select
          borderColor='black'
          w='150px'
          isDisabled={!Disable}
          value={NormalEstruturasSelect}
          onChange={(e) => {
            SetNormalEstruturasSelect(e.target.value);
          }}
        >
          <option value="" disabled selected>
            Estruturas vasculares
          </option>
          <option value="normais">Normais</option>
          <option value="não visibilizados">Não visibilizados</option>
        </Select>
      </Box >

      <Figado Disable={Disable} />

      <VesiculaBiliar Disable={Disable} />

      <ViasBiliares Disable={Disable} />

      <Pancreas Disable={Disable} />

      <Baco Disable={Disable} />

      <AlcasIntestinais Disable={Disable} />

      <Aorta_Retroperitoneo Disable={Disable} />

      <Volume_vesical Disable={Disable} />

      <LiquidoLivre Disable={Disable} />

      <Bexiga Disable={Disable} />
      <RinsUreteres Disable={Disable} />

      {/* <Aorta />

        <RimDireito />

        <RimEsquerdo />

        <Calculos />

        <Dilatacao />

        <Nodulos />

        <Cisto /> */}
    </Box>

  );
}

export default AbdomemTotal;
