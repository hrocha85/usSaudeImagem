/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function IndividualizarNodulos({ numNodulo, disable }) {
  const [FrasesNodulos, setFrasesNodulos] = useState<any>([]);
  const [ConclusaoNodulos, setConclusaoNodulos] = useState<any>([]);

  const [tamanhoNoduloInput, settamanhoNoduloInput] = useState("");
  const [posicaoNoduloSelect, setPosicaoNoduloSelect] = useState("");
  const [conteudoNoduloSelect, setConteudoNoduloSelect] = useState("");
  const [localizacaoNoduloSelect, setlocalizacaoNoduloSelect] = useState("");
  const [multiplosNodulosCheckBox, setmultiplosNodulosCheckBox] =
    useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringMultiplosNodulos = (
    conteudoNoduloselect,
    tamanhoNoduloInput,
    NoduloSelect,
    localizado
  ) => {
    const conclusao = 'Nódulo testicular.'
    removeItemConclusao(conclusao)
    removeMultiplosNodulos();
    if (tamanhoNoduloInput !== "" && NoduloSelect !== "" && localizado !== "") {
      var string = `Nódulo Testícular ${numNodulo}: mede ${tamanhoNoduloInput} cm, conteúdo ${conteudoNoduloselect}, localizado no ${NoduloSelect}, do  ${localizado} `;
      setFrasesNodulos((arr) => [...arr, string]);
      setConclusaoNodulos((arr) => [...arr, conclusao]);
    }
  };
  const removeItemConclusao = (value) => {
    var index = ConclusaoNodulos.indexOf(value);

    if (index > -1) {
      ConclusaoNodulos.splice(index, 1);
      setConclusaoNodulos((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };
  const removeMultiplosNodulos = () => {
    FrasesNodulos.map((e) => {
      if (e.includes(`Nódulo Testícular ${numNodulo}`)) {
        var index = FrasesNodulos.indexOf(e);

        if (index > -1) {
          FrasesNodulos.splice(index, 1);
          setFrasesNodulos((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosNodulosCheckBox) {
      setDisableSelect(false);
      criaStringMultiplosNodulos(
        conteudoNoduloSelect,
        tamanhoNoduloInput,
        posicaoNoduloSelect,
        localizacaoNoduloSelect
      );
    } else {
      removeItemConclusao('Nódulo testicular.')
      setDisableSelect(true);
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
    localizacaoNoduloSelect,
  ]);

  const subExame = `Nódulos Testiculares ${numNodulo}`;
  const titulo_exame = "Testículo";

  useEffect(() => {
    if (Object.keys(FrasesNodulos).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesNodulos,
        ConclusaoNodulos
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesNodulos,
        ConclusaoNodulos
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesNodulos]);

  return (
    <Box gap="15px" display="flex" flexWrap="wrap">
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
        <Text fontSize="13px">Mede</Text>
        <Input
          isDisabled={DisableSelect}
          value={tamanhoNoduloInput}
          w="60px"
          h="77x"
          padding="0px"

          textAlign="center"
          onChange={(e) => settamanhoNoduloInput(e.target.value)}
          placeholder={"cm"}
        />
        <Text fontSize="13px">cm</Text>
      </HStack>
      <HStack>
        <Text fontSize="13px">Local</Text>
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
        <Text fontSize="13px">Do</Text>
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
