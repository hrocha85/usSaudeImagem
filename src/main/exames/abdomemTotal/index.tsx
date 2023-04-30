/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-pascal-case */
import { Box, Checkbox, Select } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { Format_Laudo } from "../../component/function_format_laudo";
import Aorta_Retroperitoneo from "./Aorta_Retroperitoneo/Aorta_retroperitoneo";
import RinsUreteres from "./Rins_ureteres/rins_ureteres";
import AlcasIntestinais from "./alcas_intestinais/Alcas_Intestinais";
import Baco from "./baco/baco";
import Bexiga from "./bexiga/bexiga";
import Figado from "./figado/figado";
import LiquidoLivre from "./liquido_livre/liquido_livre";
import Pancreas from "./pancreas/pancreas";
import VesiculaBiliar from "./vesicula_bliar/vesicula_biliar";
import ViasBiliares from "./vias biliares/vias_biliares";
import Volume_vesical from "./volume_vesical/volume_vesical";

function AbdomemTotal() {
  const altura = '100%'
  const largura = '40%'

  const [frasesAdomenTotal, setFrasesAdomenTotal] = useState<any>([]);

  const [Disable, SetDisable] = useState(false)
  const [NormalSelect, SetNormalSelect] = useState('')
  const [NormalEstruturasSelect, SetNormalEstruturasSelect] = useState('')

  const subExame = "Abdômen total";
  const titulo_exame = "Abdômen total";
  const removeStringSelect = (value) => {
    frasesAdomenTotal.map((e) => {
      if (e.includes(value)) {
        var index = frasesAdomenTotal.indexOf(e);
        if (index > -1) {
          frasesAdomenTotal.splice(index, 1);
          setFrasesAdomenTotal((arr) => [...arr]);
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
        setFrasesAdomenTotal([frase])
      }
    } else {
      SetNormalSelect("")
      SetNormalEstruturasSelect("")
    }
  }, [Disable, NormalSelect, NormalEstruturasSelect])

  useEffect(() => {
    if (Object.keys(frasesAdomenTotal).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesAdomenTotal
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesAdomenTotal
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesAdomenTotal]);

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
