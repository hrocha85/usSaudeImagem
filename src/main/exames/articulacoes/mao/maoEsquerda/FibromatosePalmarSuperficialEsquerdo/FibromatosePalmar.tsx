/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../../context/LuadosContext";
import { MaoDireitoNormalContext } from "../../../../../../context/MaoDireitoNormalContext"
import TituloNomeExame from "../../../../../component/titulo_nome_exame";

function FibromatosePalmarEsquerdo() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  let { MaoDireitoLaudoNormal } = useContext(MaoDireitoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

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
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeNodulo = () => {
    laudoPrin.map((e) => {
      if (e.includes("Nódulo palmar aos tendões flexores do")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
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
    MaoDireitoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [MaoDireitoLaudoNormal])

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
