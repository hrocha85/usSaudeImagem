/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../../context/LuadosContext";
import { MaoEsquerdoNormalContext } from "../../../../../../context/MaoEsquerdoNormalContext"
import { Format_Laudo } from "../../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../../component/titulo_nome_exame";

function FibromatosePalmarEsquerdo() {
  const altura = "100%";
  const largura = "95%";

  let { MaoEsquerdoLaudoNormal } = useContext(MaoEsquerdoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  const [fraseFibrosePalmarSuperficial, setFraseFibrosePalmarSuperficial] = useState<any>([]);

  const subExame = `Fibrose palmar superficial (contratura de dupuytren) Esquerdo`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(fraseFibrosePalmarSuperficial).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        fraseFibrosePalmarSuperficial
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        fraseFibrosePalmarSuperficial
      ).Format_Laudo_Create_Storage();
    }
  }, [fraseFibrosePalmarSuperficial]);

  //States TenossinoviteExtensores - input,checkbox e select - Inicio

  const [NoduloInput, setNoduloInput] = useState("");
  const [NoduloInput2, setNoduloInput2] = useState("");
  const [NoduloInput3, setNoduloInput3] = useState("");
  const [disableNoduloInput, setdisableNoduloInput] = useState(true);
  const [NoduloCheckbox, setNoduloCheckbox] = useState(false);
  const [NoduloSelect, setNoduloSelect] = useState("");

  const criaStringNodulo = (medida1, medida2, medida3, Nodulo) => {
    removeNodulo();
    console.log(medida1, medida2, medida3)
    console.log(Nodulo)
    if (medida1 !== "" && medida2 !== "" && medida3 !== "" && Nodulo !== "") {
      var string = `Nódulo palmar aos tendões flexores do ${Nodulo} com intervalo de ${medida1}x${medida2}x${medida3} mm `;
      setFraseFibrosePalmarSuperficial((arr) => [...arr, string]);
    }
  };

  const removeNodulo = () => {
    fraseFibrosePalmarSuperficial.map((e) => {
      if (e.includes("Nódulo palmar aos tendões flexores do")) {
        var index = fraseFibrosePalmarSuperficial.indexOf(e);

        if (index > -1) {
          fraseFibrosePalmarSuperficial.splice(index, 1);
          setFraseFibrosePalmarSuperficial((arr) => [...arr]);
        }
      }
    });
  };


  useEffect(() => {
    if (NoduloCheckbox) {
      setdisableNoduloInput(false);
    } else {
      removeNodulo();
      setdisableNoduloInput(true);
      setNoduloInput("");
      setNoduloInput2("");
      setNoduloInput3("");
      setNoduloSelect("")
    }
  }, [NoduloCheckbox]);

  useEffect(() => {
    criaStringNodulo(NoduloInput, NoduloInput2, NoduloInput3, NoduloSelect);
  }, [NoduloInput, NoduloInput2, NoduloInput3, NoduloSelect]);

  useEffect(() => {
    MaoEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [MaoEsquerdoLaudoNormal])

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Fibromatose palmar superficial (contratura de Dupuytren)" />

      <Box display="flex" flexWrap="wrap" gap='5px'>
        <Checkbox
          isDisabled={disableTudo}
          onChange={() => setNoduloCheckbox(!NoduloCheckbox)}>
          Nódulo palmar superficial aos tendões flexores do
        </Checkbox>
        <Select
          w='170px'
          isDisabled={disableNoduloInput}
          value={NoduloSelect}
          onChange={(e) => {
            setNoduloSelect(e.target.value);
          }}
        >
          <option value="" disabled selected>            Selecione          </option>
          <option value="entre o 3° e 4° túneis dorsais">entre o 3° e 4° túneis dorsais</option>
          <option value="entre o 1° e 2° túneis dorsais">entre o 1° e 2° túneis dorsais</option>
          <option value="na face flexora">na face flexora</option>
        </Select>
        <HStack>
          <Input
            isDisabled={disableNoduloInput}
            value={NoduloInput}
            w="45px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => { setNoduloInput(e.target.value) }}
          />
          <Text> x </Text>
          <Input
            isDisabled={disableNoduloInput}
            value={NoduloInput2}
            w="45px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => { setNoduloInput2(e.target.value) }}
          />
          <Text> x </Text>
          <Input
            isDisabled={disableNoduloInput}
            value={NoduloInput3}
            w="45px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => { setNoduloInput3(e.target.value) }}
          />

          <Text>mm</Text>
        </HStack>
      </Box>
    </Box>

  );
}
export default FibromatosePalmarEsquerdo;
