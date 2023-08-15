

import { Box, Checkbox, Select } from "@chakra-ui/react";


import { useEffect, useState } from "react";
import { Format_Laudo } from "../../component/function_format_laudo";
import Figado from "./figado/figado";
import VesiculaBiliar from "./vesicula_bliar/vesicula_biliar";
import ViasBiliares from "./vias biliares/vias_biliares";
import Pancreas from "./pancreas/pancreas";
import Baco from "./baco/baco";


function AbdomemSuperior() {
  const altura = '100%'
  const largura = '40%'

  const [frasesAdomenSuperior, setFrasesAdomenSuperior] = useState<any>([]);

  const [Disable, SetDisable] = useState(false)
  const [NormalSelect, SetNormalSelect] = useState('')
  const [NormalEstruturasSelect, SetNormalEstruturasSelect] = useState('')


  const subExame = "Abdomen superior";
  const titulo_exame = "Abdomen Superior";
  const removeStringSelect = (value) => {
    frasesAdomenSuperior.map((e) => {
      if (e.includes(value)) {
        const index = frasesAdomenSuperior.indexOf(e);
        if (index > -1) {
          frasesAdomenSuperior.splice(index, 1);
          setFrasesAdomenSuperior((arr) => [...arr]);
        }
      }
    });
  };
  useEffect(() => {
    let frase = 'Com situação, forma, contornos e dimensões'
    removeStringSelect(frase)
    if (Disable) {
      if (NormalSelect && NormalEstruturasSelect) {
        frase = `${frase} ${NormalSelect}.
        Parênquima hepático com textura uniforme, sem alterações de ecogenicidade.
        Estruturas vasculares intra-hepáticas e tronco da veia porta de características ${NormalEstruturasSelect} (Calibre normal até 1,2 cm).
        Hilo hepático de aspecto normal.`
        setFrasesAdomenSuperior([frase])
      }
    } else {
      SetNormalSelect("")
      SetNormalEstruturasSelect("")
    }
  }, [Disable, NormalSelect, NormalEstruturasSelect])

  useEffect(() => {
    if (Object.keys(frasesAdomenSuperior).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesAdomenSuperior
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesAdomenSuperior
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesAdomenSuperior]);

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

    </Box>

  );
}

export default AbdomemSuperior;
