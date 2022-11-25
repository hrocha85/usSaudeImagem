/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Text, Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";

export default function IndividualizarVeias({ numVeia, disable }) {
  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [DistanciaVeiaInput, setDistanciaVeiaInput] = useState("");
  const [posicaoVeiasSelect, setPosicaoVeiasSelect] = useState("");
  const [localizacaoVeiasSelect, setlocalizacaoVeiasSelect] = useState("");
  const [MembroVeiasSelect, setMembroVeiasSelect] = useState("");
  const [multiplosVeiasCheckBox, setmultiplosVeiasCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);


  const criaStringMultiplosVeias = (DistanciaVeiaInput, VeiasSelect, localizado, MembroVeiasSelect) => {
    removeMultiplosVeias();
    var string;
    if (MembroVeiasSelect !== '' && DistanciaVeiaInput !== "" && VeiasSelect !== "" && localizado !== "") {
      string = `Veia perfurante ${numVeia} - a ${DistanciaVeiaInput} cm ${VeiasSelect}, na face ${localizado} ${MembroVeiasSelect} `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeMultiplosVeias = () => {
    laudoPrin.map((e) => {
      if (e.includes(`Veia perfurante ${numVeia}`)) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosVeiasCheckBox) {
      setDisableSelect(false)
      criaStringMultiplosVeias(
        DistanciaVeiaInput,
        posicaoVeiasSelect,
        localizacaoVeiasSelect,
        MembroVeiasSelect
      );
    } else {
      setDisableSelect(true)
      removeMultiplosVeias();
      setDistanciaVeiaInput("");
      setPosicaoVeiasSelect("");
      setlocalizacaoVeiasSelect("");
      setMembroVeiasSelect("");
    }
  }, [
    multiplosVeiasCheckBox,
    posicaoVeiasSelect,
    DistanciaVeiaInput,
    localizacaoVeiasSelect,
    MembroVeiasSelect
  ]);

  return (
    <Box
      display='flex'
      flexWrap="wrap">
      <HStack>
        <Checkbox
          whiteSpace="nowrap"
          isDisabled={disable}
          onChange={() => setmultiplosVeiasCheckBox(!multiplosVeiasCheckBox)}
        >
          Perfurante {numVeia}
        </Checkbox>

        <Input
          isDisabled={DisableSelect}
          value={DistanciaVeiaInput}
          w="60px"
          h="77x"
          padding="5px"
          maxLength={2}
          textAlign="center"
          onChange={(e) => { setDistanciaVeiaInput(e.target.value); }}
          placeholder={"cm"}
        />
        <Select
          w="auto"
          isDisabled={DisableSelect}
          onChange={(e) => {
            setPosicaoVeiasSelect(e.target.value);
          }}
          value={posicaoVeiasSelect}
        >
          <option value="" disabled selected>
            Posição
          </option>
          <option value="da interlinha do joelho">da interlinha do joelho</option>
          <option value="da face plantar">da face plantar</option>
        </Select>

      </HStack>
      <HStack
        mt='5px'
      >
        <Text>
          na face
        </Text>
        <Select
          w="120px"
          isDisabled={DisableSelect}
          onChange={(e) => {
            setlocalizacaoVeiasSelect(e.target.value);
          }}
          value={localizacaoVeiasSelect}
        >
          <option value="" disabled selected>
            Selecione
          </option>
          <option value="medial">medial</option>
          <option value="anterior">anterior</option>
          <option value="posterior">posterior</option>
          <option value="lateral">lateral</option>
        </Select>
        <Select
          w="120px"
          isDisabled={DisableSelect}
          onChange={(e) => {
            setMembroVeiasSelect(e.target.value);
          }}
          value={MembroVeiasSelect}
        >
          <option value="" disabled selected>
            Selecione
          </option>
          <option value="da perna">da perna</option>
          <option value="da coxa">da coxa</option>
          <option value="do joelho">do joelho</option>
        </Select>

      </HStack >
    </Box>
  );
}
