/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Text, HStack, Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";

export default function IndividualizarNodulos({ numNodulo, disable }) {
  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [tamanhoNoduloInput, settamanhoNoduloInput] = useState("");
  const [posicaoNoduloSelect, setPosicaoNoduloSelect] = useState("");
  const [conteudoNoduloSelect, setConteudoNoduloSelect] = useState("");
  const [localizacaoNoduloSelect, setlocalizacaoNoduloSelect] = useState("");
  const [multiplosNodulosCheckBox, setmultiplosNodulosCheckBox] =
    useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringMultiplosNodulos = (conteudoNoduloselect, tamanhoNoduloInput, NoduloSelect, localizado) => {
    removeMultiplosNodulos();
    if (tamanhoNoduloInput !== "" && NoduloSelect !== "" && localizado !== "") {
      var string = `Nódulo Testícular ${numNodulo}: mede ${tamanhoNoduloInput} mm, conteúdo ${conteudoNoduloselect}, localizado no ${NoduloSelect}, do  ${localizado} `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeMultiplosNodulos = () => {
    laudoPrin.map((e) => {
      if (e.includes(`Nódulo Testícular ${numNodulo}`)) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosNodulosCheckBox) {
      setDisableSelect(false)
      criaStringMultiplosNodulos(
        conteudoNoduloSelect,
        tamanhoNoduloInput,
        posicaoNoduloSelect,
        localizacaoNoduloSelect,
      );
    } else {
      setDisableSelect(true)
      removeMultiplosNodulos();
      settamanhoNoduloInput("");
      setPosicaoNoduloSelect("");
      setlocalizacaoNoduloSelect("");
    }
  }, [
    multiplosNodulosCheckBox,
    conteudoNoduloSelect,
    posicaoNoduloSelect,
    tamanhoNoduloInput,
    localizacaoNoduloSelect
  ]);

  return (
    <Box
      gap='15px'
      display='flex'
      flexWrap="wrap">
      <Checkbox
        whiteSpace="nowrap"
        isDisabled={disable}
        onChange={() => setmultiplosNodulosCheckBox(!multiplosNodulosCheckBox)}
      >
        Nodulo {numNodulo}
      </Checkbox>
      <HStack>
        <Select
          w="auto"
          isDisabled={DisableSelect}
          onChange={(e) => {
            setConteudoNoduloSelect(e.target.value);
          }}
          value={conteudoNoduloSelect}
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
          value={tamanhoNoduloInput}
          w="60px"
          h="77x"
          padding="5px"
          maxLength={2}
          textAlign="center"
          onChange={(e) => settamanhoNoduloInput(e.target.value)}
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
            setPosicaoNoduloSelect(e.target.value);
          }}
          value={posicaoNoduloSelect}
        >
          <option value="" disabled selected>
            Posição
          </option>
          <option value="terço superior">terço superior</option>
          <option value="terço médio">terço médio </option>
          <option value="terço inferior">terço inferior</option>
        </Select>
      </HStack>
      <HStack>
        <Text fontSize='13px'>Do</Text>
        <Select
          w="auto"
          isDisabled={DisableSelect}
          onChange={(e) => {
            setlocalizacaoNoduloSelect(e.target.value);
          }}
          value={localizacaoNoduloSelect}
        >
          <option value="" disabled selected>
            Localizado
          </option>
          <option value="testículo direito">Testículo direito</option>
          <option value="testículo esquerdo">Testículo esquerdo</option>

        </Select>
      </HStack>
    </Box>

  );
}
