/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Text, Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { DisableTributariasContext } from "../../../../../context/disableTributariasContext"


export default function IndividualizarVeias({ numVeia, disable }) {
  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  const { DisableTributaria, setDisableTributaria } = useContext(DisableTributariasContext)

  const [localizacaoVeiasSelect, setlocalizacaoVeiasSelect] = useState("");
  const [MembroVeiasSelect, setMembroVeiasSelect] = useState("");
  const [multiplosVeiasCheckBox, setmultiplosVeiasCheckBox] = useState(false);
  const [TremboflebiteCheckBox, setTremboflebiteCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringMultiplosVeias = (localizado, MembroVeiasSelect) => {
    removeMultiplosVeias();
    var string;
    if (TremboflebiteCheckBox) {
      if (MembroVeiasSelect !== '' && localizado !== "") {
        string = `Veia tributária ${numVeia} - na face ${localizado} ${MembroVeiasSelect}, com sinais de Tremboflebite `;
        setLaudoPrin((arr) => [...arr, string]);
      }
    } else {
      if (MembroVeiasSelect !== '' && localizado !== "") {
        string = `Veia tributária ${numVeia} - na face ${localizado} ${MembroVeiasSelect} `;
        setLaudoPrin((arr) => [...arr, string]);
      }
    }
  };

  const removeMultiplosVeias = () => {
    laudoPrin.map((e) => {
      if (e.includes(`Veia tributária ${numVeia}`)) {
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
      setDisableTributaria(true)
      criaStringMultiplosVeias(
        localizacaoVeiasSelect,
        MembroVeiasSelect
      );
    } else {
      setDisableSelect(true)
      setDisableTributaria(false)
      removeMultiplosVeias();
      setlocalizacaoVeiasSelect("");
      setMembroVeiasSelect("");
    }
  }, [
    multiplosVeiasCheckBox,
    localizacaoVeiasSelect,
    MembroVeiasSelect,
    TremboflebiteCheckBox
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
          Tributária {numVeia}
        </Checkbox>
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
      </HStack>
      <HStack
        mt='5px'
      >

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
        <Checkbox
          whiteSpace="nowrap"
          isDisabled={DisableSelect}
          onChange={() => setTremboflebiteCheckBox(!TremboflebiteCheckBox)}
        >
          Tremboflebite
        </Checkbox>
      </HStack >
    </Box>
  );
}
