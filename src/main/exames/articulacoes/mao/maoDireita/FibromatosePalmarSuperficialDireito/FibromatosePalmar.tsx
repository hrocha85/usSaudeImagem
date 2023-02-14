/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../../component/titulo_nome_exame";

function FibromatosePalmarDireito(Disable) {
  const altura = "100%";
  const largura = "100%";


  const [fraseFibrosePalmarSuperficial, setFraseFibrosePalmarSuperficial] = useState<any>([]);

  const subExame = `Fibrose palmar superficial (contratura de dupuytren) direito`
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

  const criaStringNodulo = (medida1mm, medida2mm, medida3mm, Nodulo) => {
    removeNodulo();
    var medida1 = medida1mm / 10
    var medida2 = medida2mm / 10
    var medida3 = medida3mm / 10
    if (medida1 !== 0 && medida2 !== 0 && medida3 !== 0 && Nodulo !== "") {
      var string = `Presença de nódulo hipoecogênico na região palmar em localização superficial aos tendões flexores do ${Nodulo}, medindo ${medida1} x ${medida2} x ${medida3} cm `;
      setFraseFibrosePalmarSuperficial((arr) => [...arr, string]);
    }
  };

  const removeNodulo = () => {
    fraseFibrosePalmarSuperficial.map((e) => {
      if (e.includes("Presença de nódulo hipoecogênico na região palmar em localização superficial aos tendões flexores do ")) {
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
          isDisabled={Disable}
          onChange={() => setNoduloCheckbox(!NoduloCheckbox)}>
          Nódulo palmar superficial aos tendões flexores do
        </Checkbox>
        <Select
          w='150px'
          isDisabled={disableNoduloInput}
          value={NoduloSelect}
          onChange={(e) => {
            setNoduloSelect(e.target.value);
          }}
        >
          <option value="" disabled selected>Selecione</option>
          <option value="3° dedo">3° dedo</option>
          <option value="4º dedo">4º dedo</option>
          <option value="5º dedo">5º dedo</option>
          <option value="3º e 4º dedos">3º e 4º dedos</option>
          <option value="4º e 5º dedos">4º e 5º dedos</option>
          <option value="3º ao 5º dedos">3º ao 5º dedos</option>
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
export default FibromatosePalmarDireito;
