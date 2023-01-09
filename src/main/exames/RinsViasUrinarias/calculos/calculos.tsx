/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import IndividualizarCalculos from "./individualizar_calculos";

function Calculo() {
  const altura = "100%";
  const largura = "66%";

  const [frasesCalc, setFrasesCalc] = useState<any>([]);

  var numberArray = [1, 2, 3, 4];

  const [tamanhoNoduloDireitoInput, settamanhoNoduloDireitoInput] =
    useState("");
  const [posicaoCalculosDireitoSelect, setPosicaoCalculosDireitoSelect] =
    useState("");

  const [
    multiplosCalculosRimDireitoCheckBox,
    setmultiplosCalculosRimDireitoCheckBox,
  ] = useState(false);

  const [DisableSelectDireito, setDisableSelectDireito] = useState(true);

  const [tamanhoNoduloEsquerdoInput, settamanhoNoduloEsquerdoInput] =
    useState("");
  const [posicaoCalculosEsquerdoSelect, setPosicaoCalculosEsquerdoSelect] =
    useState("");

  const [
    multiplosCalculosRimEsquerdoCheckBox,
    setmultiplosCalculosRimEsquerdoCheckBox,
  ] = useState(false);

  const [DisableSelectEsquerdo, setDisableSelectEsquerdo] = useState(true);

  const [UreterCheckBox, setUreterCheckBox] = useState(false);
  const [DisableUreterSelect, setDisableUreterSelect] = useState(true);
  const [UreterSelect, setUreterSelect] = useState("");
  const [posicaoUreterSelect, setPosicaoUreterSelect] = useState("");
  const [tamanhoUreterInput, setTamanhoUreterInput] = useState("");

  const criaStringMultiplosCalculosRimDireito = (
    tamanhoNoduloDireitoInput,
    localizado
  ) => {
    removeMultiplosCalculosRimDireito();

    if (tamanhoNoduloDireitoInput !== "" && localizado !== "") {
      var string = `Múltiplos calculos no rim direito, o maior mede ${tamanhoNoduloDireitoInput}mm  localizado ${localizado} `;
      setFrasesCalc((arr) => [...arr, string]);
    }
  };

  const removeMultiplosCalculosRimDireito = () => {
    frasesCalc.map((e) => {
      if (e.includes("Múltiplos calculos no rim direito")) {
        var index = frasesCalc.indexOf(e);

        if (index > -1) {
          frasesCalc.splice(index, 1);
          setFrasesCalc((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosCalculosRimDireitoCheckBox) {
      setDisableSelectDireito(false);
      criaStringMultiplosCalculosRimDireito(
        tamanhoNoduloDireitoInput,
        posicaoCalculosDireitoSelect
      );
    } else {
      setDisableSelectDireito(true);
      removeMultiplosCalculosRimDireito();
      settamanhoNoduloDireitoInput("");
      setPosicaoCalculosDireitoSelect("");
    }
  }, [
    multiplosCalculosRimDireitoCheckBox,
    posicaoCalculosDireitoSelect,
    tamanhoNoduloDireitoInput,
  ]);
  const criaStringMultiplosCalculosRimEsquerdo = (
    tamanhoNoduloEsquerdoInput,
    localizado
  ) => {
    removeMultiplosCalculosRimEsquerdo();

    if (tamanhoNoduloEsquerdoInput !== "" && localizado !== "") {
      var string = `Múltiplos calculos no rim Esquerdo, o maior mede ${tamanhoNoduloEsquerdoInput}mm  localizado ${localizado} `;
      setFrasesCalc((arr) => [...arr, string]);
    }
  };

  const removeMultiplosCalculosRimEsquerdo = () => {
    frasesCalc.map((e) => {
      if (e.includes("Múltiplos calculos no rim Esquerdo")) {
        var index = frasesCalc.indexOf(e);

        if (index > -1) {
          frasesCalc.splice(index, 1);
          setFrasesCalc((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosCalculosRimEsquerdoCheckBox) {
      setDisableSelectEsquerdo(false);
      criaStringMultiplosCalculosRimEsquerdo(
        tamanhoNoduloEsquerdoInput,
        posicaoCalculosEsquerdoSelect
      );
    } else {
      setDisableSelectEsquerdo(true);
      removeMultiplosCalculosRimEsquerdo();
      settamanhoNoduloEsquerdoInput("");
      setPosicaoCalculosEsquerdoSelect("");
    }
  }, [
    multiplosCalculosRimEsquerdoCheckBox,
    posicaoCalculosEsquerdoSelect,
    tamanhoNoduloEsquerdoInput,
  ]);

  const criaStringCalculoUretal = (
    UreterSelect,
    posicaoUreterSelect,
    tamanhoUreterInput
  ) => {
    removeCalculoUretal();
    if (
      UreterSelect !== "" &&
      posicaoUreterSelect !== "" &&
      tamanhoUreterInput !== ""
    ) {
      var string = `Cálculo uretal medindo ${tamanhoUreterInput} mm  localizado ${posicaoUreterSelect}, do ureter ${UreterSelect}`;
      setFrasesCalc((arr) => [...arr, string]);
    }
  };

  const removeCalculoUretal = () => {
    frasesCalc.map((e) => {
      if (e.includes("Cálculo uretal medindo")) {
        var index = frasesCalc.indexOf(e);

        if (index > -1) {
          frasesCalc.splice(index, 1);
          setFrasesCalc((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (UreterCheckBox) {
      setDisableUreterSelect(false);
      criaStringCalculoUretal(
        UreterSelect,
        posicaoUreterSelect,
        tamanhoUreterInput
      );
    } else {
      setDisableUreterSelect(true);
      removeCalculoUretal();
      setUreterSelect("");
      setPosicaoUreterSelect("");
      setTamanhoUreterInput("");
    }
  }, [UreterCheckBox, UreterSelect, posicaoUreterSelect, tamanhoUreterInput]);

  const subExame = "Cálculos";
  const titulo_exame = "Rins e Vias Urinárias";

  useEffect(() => {
    if (Object.keys(frasesCalc).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesCalc
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesCalc
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesCalc]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 20px 15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Calculos" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Box gap="5px" display="flex" flexWrap="wrap">
            <Checkbox
              onChange={() =>
                setmultiplosCalculosRimDireitoCheckBox(
                  !multiplosCalculosRimDireitoCheckBox
                )
              }
            >
              Múltiplos calculos no Rim Direito, o maior mede
            </Checkbox>

            <Input
              isDisabled={DisableSelectDireito}
              value={tamanhoNoduloDireitoInput}
              w="60px"
              h="77x"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => settamanhoNoduloDireitoInput(e.target.value)}
              placeholder={"mm"}
            />
            <Select
              w="auto"
              isDisabled={DisableSelectDireito}
              onChange={(e) => {
                setPosicaoCalculosDireitoSelect(e.target.value);
              }}
              value={posicaoCalculosDireitoSelect}
            >
              <option value="" disabled selected>
                Posição
              </option>
              <option value="Intramural">Intramural</option>
              <option value="Subseroso">Subseroso </option>
              <option value="Submucoso">Submucoso</option>
            </Select>
          </Box>
          <Box gap="5px" display="flex" flexWrap="wrap">
            <Checkbox
              onChange={() =>
                setmultiplosCalculosRimEsquerdoCheckBox(
                  !multiplosCalculosRimEsquerdoCheckBox
                )
              }
            >
              Múltiplos calculos no Rim Esquerdo, o maior mede
            </Checkbox>

            <Input
              isDisabled={DisableSelectEsquerdo}
              value={tamanhoNoduloEsquerdoInput}
              w="60px"
              h="77x"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => settamanhoNoduloEsquerdoInput(e.target.value)}
              placeholder={"mm"}
            />
            <Select
              w="auto"
              isDisabled={DisableSelectEsquerdo}
              onChange={(e) => {
                setPosicaoCalculosEsquerdoSelect(e.target.value);
              }}
              value={posicaoCalculosEsquerdoSelect}
            >
              <option value="" disabled selected>
                Posição
              </option>
              <option value="Intramural">Intramural</option>
              <option value="Subseroso">Subseroso </option>
              <option value="Submucoso">Submucoso</option>
            </Select>
          </Box>
          <Box gap="5px" display="flex" flexWrap="wrap">
            <Checkbox onChange={() => setUreterCheckBox(!UreterCheckBox)}>
              Cálculo Uretal mede
            </Checkbox>

            <Input
              isDisabled={DisableUreterSelect}
              value={tamanhoUreterInput}
              w="60px"
              h="77x"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => setTamanhoUreterInput(e.target.value)}
              placeholder={"mm"}
            />
            <Select
              w="auto"
              isDisabled={DisableUreterSelect}
              onChange={(e) => {
                setPosicaoUreterSelect(e.target.value);
              }}
              value={posicaoUreterSelect}
            >
              <option value="" disabled selected>
                Posição
              </option>
              <option value="Intramural">Intramural</option>
              <option value="Subseroso">Subseroso </option>
              <option value="Submucoso">Submucoso</option>
            </Select>

            <Select
              w="auto"
              isDisabled={DisableUreterSelect}
              onChange={(e) => {
                setUreterSelect(e.target.value);
              }}
              value={UreterSelect}
            >
              <option value="" disabled selected>
                do Ureter
              </option>
              <option value="Direito">Direito</option>
              <option value="Esquerdo">Esquerdo </option>
            </Select>
          </Box>

          <Box borderBottom="1px"></Box>
          <Text fontWeight="semibold" fontSize="16px">
            Individualizar calculos
          </Text>
          <Stack>
            <>
              {numberArray.map((num, key) => {
                return <IndividualizarCalculos key={key} numCalculo={num} />;
              })}
            </>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Calculo;
