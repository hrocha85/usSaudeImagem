/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function IndividualizarCistos({ numCisto, disable }) {
  const [FrasesCistos, setFrasesCistos] = useState<any>([]);
  const [ConclusaoCistos, setConclusaoCistos] = useState<any>([]);

  const [tamanhoCistoInput, settamanhoCistoInput] = useState("");
  const [posicaoCistosSelect, setPosicaoCistosSelect] = useState("");
  const [conteudoCistosSelect, setConteudoCistosSelect] = useState("");
  const [localizacaoCistosSelect, setlocalizacaoCistosSelect] = useState("");
  const [multiplosCistosCheckBox, setmultiplosCistosCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringMultiplosCistos = (
    conteudoCistoSelect,
    tamanhoCistoInput,
    CistosSelect,
    localizado
  ) => {
    removeItemConclusao('Cisto testicular.')
    removeMultiplosCistos();
    if (tamanhoCistoInput !== "" && CistosSelect !== "" && localizado !== "") {
      var string = `Cisto Testícular ${numCisto}: mede ${tamanhoCistoInput} mm, conteúdo ${conteudoCistoSelect}, localizado no ${CistosSelect}, do  ${localizado} `;
      setFrasesCistos((arr) => [...arr, string]);
      setConclusaoCistos(['Cisto testicular.'])
    }
  };
  const removeItemConclusao = (value) => {
    var index = ConclusaoCistos.indexOf(value);

    if (index > -1) {
      ConclusaoCistos.splice(index, 1);
      setConclusaoCistos((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };
  const removeMultiplosCistos = () => {
    FrasesCistos.map((e) => {
      if (e.includes(`Cisto Testícular ${numCisto}`)) {
        var index = FrasesCistos.indexOf(e);

        if (index > -1) {
          FrasesCistos.splice(index, 1);
          setFrasesCistos((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosCistosCheckBox) {
      setDisableSelect(false);
      criaStringMultiplosCistos(
        conteudoCistosSelect,
        tamanhoCistoInput,
        posicaoCistosSelect,
        localizacaoCistosSelect
      );
    } else {
      removeItemConclusao('Cisto testicular.')
      setDisableSelect(true);
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
    localizacaoCistosSelect,
  ]);

  const subExame = `Cistos Testiculares ${numCisto}`;
  const titulo_exame = "Testículo";


  useEffect(() => {
    if (Object.keys(FrasesCistos).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesCistos,
        ConclusaoCistos
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesCistos,
        ConclusaoCistos
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesCistos]);

  return (
    <Box gap="15px" display="flex" flexWrap="wrap">
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
        <Text fontSize="13px">Mede</Text>
        <Input
          isDisabled={DisableSelect}
          value={tamanhoCistoInput}
          w="60px"
          h="77x"
          padding="5px"
          
          textAlign="center"
          onChange={(e) => settamanhoCistoInput(e.target.value)}
          placeholder={"mm"}
        />
        <Text fontSize="13px">mm</Text>
      </HStack>
      <HStack>
        <Text fontSize="13px">Local</Text>
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
          <option value="terço superior">terço superior</option>
          <option value="terço médio">terço médio </option>
          <option value="terço inferior">terço inferior</option>
        </Select>
      </HStack>
      <HStack>
        <Text fontSize="13px">Do</Text>
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
          <option value="testículo direito">Testículo direito</option>
          <option value="testículo esquerdo">Testículo esquerdo</option>
        </Select>
      </HStack>
    </Box>
  );
}
