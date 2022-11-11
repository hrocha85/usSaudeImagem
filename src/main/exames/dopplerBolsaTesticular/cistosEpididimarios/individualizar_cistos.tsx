/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Text, HStack, Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";

export default function IndividualizarCistos({ numCisto, disable }) {
  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [tamanhoCistoInput, settamanhoCistoInput] = useState("");
  const [posicaoCistosSelect, setPosicaoCistosSelect] = useState("");
  const [conteudoCistosSelect, setConteudoCistosSelect] = useState("");
  const [localizacaoCistosSelect, setlocalizacaoCistosSelect] = useState("");
  const [multiplosCistosCheckBox, setmultiplosCistosCheckBox] =
    useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringMultiplosCistos = (conteudoCistoSelect, tamanhoCistoInput, CistosSelect, localizado) => {
    removeMultiplosCistos();
    if (tamanhoCistoInput !== "" && CistosSelect !== "" && localizado !== "") {
      var string = `Cisto Epididimários ${numCisto}: mede ${tamanhoCistoInput} mm, conteúdo ${conteudoCistoSelect}, localizado no ${CistosSelect}, do  ${localizado} `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeMultiplosCistos = () => {
    laudoPrin.map((e) => {
      if (e.includes(`Cisto Epididimários ${numCisto}`)) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosCistosCheckBox) {
      setDisableSelect(false)
      criaStringMultiplosCistos(
        conteudoCistosSelect,
        tamanhoCistoInput,
        posicaoCistosSelect,
        localizacaoCistosSelect,
      );
    } else {
      setDisableSelect(true)
      removeMultiplosCistos();
      settamanhoCistoInput("");
      setPosicaoCistosSelect("");
      setlocalizacaoCistosSelect("");
    }
  }, [
    multiplosCistosCheckBox,
    conteudoCistosSelect,
    posicaoCistosSelect,
    tamanhoCistoInput,
    localizacaoCistosSelect
  ]);

  return (
    <Box
      gap='15px'
      display='flex'
      flexWrap="wrap">
      <Checkbox
        whiteSpace="nowrap"
        isDisabled={disable}
        onChange={() => setmultiplosCistosCheckBox(!multiplosCistosCheckBox)}
      >
        Cisto {numCisto}
      </Checkbox>
      <HStack>
        <Select
          w="auto"
          isDisabled={DisableSelect}
          onChange={(e) => {
            setConteudoCistosSelect(e.target.value);
          }}
          value={conteudoCistosSelect}
        >
          <option value="" disabled selected>
            Conteúdo
          </option>
          <option value="anecóico">anecóico</option>
          <option value="hipoecóico">hipoecóico </option>
          <option value="denso">denso</option>
        </Select>
      </HStack>
      <HStack>
        <Text fontSize='13px'>Mede</Text>
        <Input
          isDisabled={DisableSelect}
          value={tamanhoCistoInput}
          w="60px"
          h="77x"
          padding="5px"
          maxLength={2}
          textAlign="center"
          onChange={(e) => settamanhoCistoInput(e.target.value)}
          placeholder={"mm"}
        />
        <Text fontSize='13px'>mm</Text>
      </HStack>
      <HStack>
        <Text fontSize='13px'>Local</Text>
        <Select
          w="auto"
          isDisabled={DisableSelect}
          onChange={(e) => {
            setPosicaoCistosSelect(e.target.value);
          }}
          value={posicaoCistosSelect}
        >
          <option value="" disabled selected>
            Posição
          </option>
          <option value="na cabeça epididimária">na cabeça epididimária</option>
          <option value="no corpo epididimário">terço</option>
          <option value="na cauda epididimária">na cauda epididimária</option>

        </Select>
      </HStack>
      <HStack>
        <Text fontSize='13px'>Do</Text>
        <Select
          w="auto"
          isDisabled={DisableSelect}
          onChange={(e) => {
            setlocalizacaoCistosSelect(e.target.value);
          }}
          value={localizacaoCistosSelect}
        >
          <option value="" disabled selected>
            Localizado
          </option>
          <option value="à direita">à direita</option>
          <option value="à esquerda">à esquerda</option>
        </Select>
      </HStack>
    </Box>

  );
}
