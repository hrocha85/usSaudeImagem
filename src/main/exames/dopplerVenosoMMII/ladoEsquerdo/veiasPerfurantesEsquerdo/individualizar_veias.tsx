/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";

export default function IndividualizarVeias({ numVeia, disable }) {
  const [frasesVeiasP, setFrasesVeiasP] = useState<any>([]);

  const [DistanciaVeiaInput, setDistanciaVeiaInput] = useState("");
  const [posicaoVeiasSelect, setPosicaoVeiasSelect] = useState("");
  const [localizacaoVeiasSelect, setlocalizacaoVeiasSelect] = useState("");
  const [MembroVeiasSelect, setMembroVeiasSelect] = useState("");
  const [multiplosVeiasCheckBox, setmultiplosVeiasCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringMultiplosVeias = (
    DistanciaVeiaInput,
    VeiasSelect,
    localizado,
    MembroVeiasSelect
  ) => {
    removeMultiplosVeias();
    var string;
    if (
      MembroVeiasSelect !== "" &&
      DistanciaVeiaInput !== "" &&
      VeiasSelect !== "" &&
      localizado !== ""
    ) {
      string = `Veia perfurante ${numVeia} - a ${DistanciaVeiaInput} cm ${VeiasSelect}, na face ${localizado} ${MembroVeiasSelect} `;
      setFrasesVeiasP((arr) => [...arr, string]);
    }
  };

  const removeMultiplosVeias = () => {
    frasesVeiasP.map((e) => {
      if (e.includes(`Veia perfurante ${numVeia}`)) {
        var index = frasesVeiasP.indexOf(e);

        if (index > -1) {
          frasesVeiasP.splice(index, 1);
          setFrasesVeiasP((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosVeiasCheckBox) {
      setDisableSelect(false);
      criaStringMultiplosVeias(
        DistanciaVeiaInput,
        posicaoVeiasSelect,
        localizacaoVeiasSelect,
        MembroVeiasSelect
      );
    } else {
      setDisableSelect(true);
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
    MembroVeiasSelect,
  ]);

  const subExame = "Veias Perfurantes Esquerda";
  const titulo_exame = "Doppler Venoso de MMII";

  useEffect(() => {
    if (Object.keys(frasesVeiasP).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesVeiasP
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesVeiasP
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesVeiasP]);

  return (
    <Box display="flex" flexWrap="wrap">
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
          
          textAlign="center"
          onChange={(e) => {
            setDistanciaVeiaInput(e.target.value);
          }}
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
          <option value="da interlinha do joelho">
            da interlinha do joelho
          </option>
          <option value="da face plantar">da face plantar</option>
        </Select>
      </HStack>
      <HStack mt="5px">
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
      </HStack>
    </Box>
  );
}
