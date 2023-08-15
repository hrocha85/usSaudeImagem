/* eslint-disable array-callback-return */

import { Box, Checkbox, HStack, Select, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { DisableTributariasContext } from "../../../../../context/disableTributariasContext";
import { Format_Laudo } from "../../../../component/function_format_laudo";

export default function IndividualizarVeias({ numVeia, disable }) {
  const [frasesVeiasT, setFrasesVeiasT] = useState<any>([]);

  const { DisableTributaria, setDisableTributaria } = useContext(
    DisableTributariasContext
  );

  const [localizacaoVeiasSelect, setlocalizacaoVeiasSelect] = useState("");
  const [MembroVeiasSelect, setMembroVeiasSelect] = useState("");
  const [multiplosVeiasCheckBox, setmultiplosVeiasCheckBox] = useState(false);
  const [TremboflebiteCheckBox, setTremboflebiteCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringMultiplosVeias = (localizado, MembroVeiasSelect) => {
    removeMultiplosVeias();
    let string;
    if (TremboflebiteCheckBox) {
      if (MembroVeiasSelect !== "" && localizado !== "") {
        string = `Veia tributária ${numVeia} - na face ${localizado} ${MembroVeiasSelect}, com sinais de Tremboflebite `;
        setFrasesVeiasT((arr) => [...arr, string]);
      }
    } else {
      if (MembroVeiasSelect !== "" && localizado !== "") {
        string = `Veia tributária ${numVeia} - na face ${localizado} ${MembroVeiasSelect} `;
        setFrasesVeiasT((arr) => [...arr, string]);
      }
    }
  };

  const removeMultiplosVeias = () => {
    frasesVeiasT.map((e) => {
      if (e.includes(`Veia tributária ${numVeia}`)) {
        const index = frasesVeiasT.indexOf(e);

        if (index > -1) {
          frasesVeiasT.splice(index, 1);
          setFrasesVeiasT((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosVeiasCheckBox) {
      setDisableSelect(false);
      setDisableTributaria(true);
      criaStringMultiplosVeias(localizacaoVeiasSelect, MembroVeiasSelect);
    } else {
      setDisableSelect(true);
      setDisableTributaria(false);
      removeMultiplosVeias();
      setlocalizacaoVeiasSelect("");
      setMembroVeiasSelect("");
    }
  }, [
    multiplosVeiasCheckBox,
    localizacaoVeiasSelect,
    MembroVeiasSelect,
    TremboflebiteCheckBox,
  ]);
  const subExame = "Veias Tributárias Direita";
  const titulo_exame = "Doppler Venoso de MMII";

  useEffect(() => {
    if (Object.keys(frasesVeiasT).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesVeiasT
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesVeiasT
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesVeiasT]);
  return (
    <Box display="flex" flexWrap="wrap">
      <HStack>
        <Checkbox
          whiteSpace="nowrap"
          isDisabled={disable}
          onChange={() => setmultiplosVeiasCheckBox(!multiplosVeiasCheckBox)}
        >
          Tributária {numVeia}
        </Checkbox>
        <Text>na face</Text>
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
      <HStack mt="5px">
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
      </HStack>
    </Box>
  );
}
