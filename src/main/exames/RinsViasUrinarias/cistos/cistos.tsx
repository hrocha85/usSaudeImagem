/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import IndividualizarCistos from "./individualizar_cistos";

function Cisto() {
  const altura = "100%";
  const largura = "66%";

  const [frasesCistos, setFrasesCistos] = useState<any>([]);

  var numberArray = [1, 2, 3, 4];

  const [tamanhoNoduloDireitoInput, settamanhoNoduloDireitoInput] =
    useState("");
  const [posicaoCistosDireitoSelect, setPosicaoCistosDireitoSelect] =
    useState("");

  const [
    multiplosCistosRimDireitoCheckBox,
    setmultiplosCistosRimDireitoCheckBox,
  ] = useState(false);

  const [DisableSelectDireito, setDisableSelectDireito] = useState(true);

  const [tamanhoNoduloEsquerdoInput, settamanhoNoduloEsquerdoInput] =
    useState("");
  const [posicaoCistosEsquerdoSelect, setPosicaoCistosEsquerdoSelect] =
    useState("");

  const [
    multiplosCistosRimEsquerdoCheckBox,
    setmultiplosCistosRimEsquerdoCheckBox,
  ] = useState(false);

  const [DisableSelectEsquerdo, setDisableSelectEsquerdo] = useState(true);

  const [RimPolicisticoCheckBox, setRimPolicisticoCheckBox] = useState(false);
  const [DisableRimPolicisticoSelect, setDisableRimPolicisticoSelect] =
    useState(true);
  const [RimPolicisticoSelect, setRimPolicisticoSelect] = useState("");

  const criaStringMultiplosCistosRimDireito = (
    tamanhoNoduloDireitoInput,
    localizado
  ) => {
    removeMultiplosCistosRimDireito();

    if (tamanhoNoduloDireitoInput !== "" && localizado !== "") {
      var string = `Múltiplos Cistos no rim direito, o maior mede ${tamanhoNoduloDireitoInput}mm  localizado ${localizado} `;
      setFrasesCistos((arr) => [...arr, string]);
    }
  };

  const removeMultiplosCistosRimDireito = () => {
    frasesCistos.map((e) => {
      if (e.includes("Múltiplos Cistos no rim direito")) {
        var index = frasesCistos.indexOf(e);

        if (index > -1) {
          frasesCistos.splice(index, 1);
          setFrasesCistos((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosCistosRimDireitoCheckBox) {
      setDisableSelectDireito(false);
      criaStringMultiplosCistosRimDireito(
        tamanhoNoduloDireitoInput,
        posicaoCistosDireitoSelect
      );
    } else {
      setDisableSelectDireito(true);
      removeMultiplosCistosRimDireito();
      settamanhoNoduloDireitoInput("");
      setPosicaoCistosDireitoSelect("");
    }
  }, [
    multiplosCistosRimDireitoCheckBox,
    posicaoCistosDireitoSelect,
    tamanhoNoduloDireitoInput,
  ]);
  const criaStringMultiplosCistosRimEsquerdo = (
    tamanhoNoduloEsquerdoInput,
    localizado
  ) => {
    removeMultiplosCistosRimEsquerdo();

    if (tamanhoNoduloEsquerdoInput !== "" && localizado !== "") {
      var string = `Múltiplos Cistos no rim Esquerdo, o maior mede ${tamanhoNoduloEsquerdoInput}mm  localizado ${localizado} `;
      setFrasesCistos((arr) => [...arr, string]);
    }
  };

  const removeMultiplosCistosRimEsquerdo = () => {
    frasesCistos.map((e) => {
      if (e.includes("Múltiplos Cistos no rim Esquerdo")) {
        var index = frasesCistos.indexOf(e);

        if (index > -1) {
          frasesCistos.splice(index, 1);
          setFrasesCistos((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosCistosRimEsquerdoCheckBox) {
      setDisableSelectEsquerdo(false);
      criaStringMultiplosCistosRimEsquerdo(
        tamanhoNoduloEsquerdoInput,
        posicaoCistosEsquerdoSelect
      );
    } else {
      setDisableSelectEsquerdo(true);
      removeMultiplosCistosRimEsquerdo();
      settamanhoNoduloEsquerdoInput("");
      setPosicaoCistosEsquerdoSelect("");
    }
  }, [
    multiplosCistosRimEsquerdoCheckBox,
    posicaoCistosEsquerdoSelect,
    tamanhoNoduloEsquerdoInput,
  ]);

  const criaStringRimPolicistico = (RimPolicisticoSelect) => {
    removeRimPolicistico();
    if (RimPolicisticoSelect !== "") {
      var string = `${RimPolicisticoSelect} policístico`;
      setFrasesCistos((arr) => [...arr, string]);
    }
  };

  const removeRimPolicistico = () => {
    frasesCistos.map((e) => {
      if (e.includes("policístico")) {
        var index = frasesCistos.indexOf(e);

        if (index > -1) {
          frasesCistos.splice(index, 1);
          setFrasesCistos((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (RimPolicisticoCheckBox) {
      setDisableRimPolicisticoSelect(false);
      criaStringRimPolicistico(RimPolicisticoSelect);
    } else {
      setDisableRimPolicisticoSelect(true);
      removeRimPolicistico();
      setRimPolicisticoSelect("");
    }
  }, [RimPolicisticoCheckBox, RimPolicisticoSelect]);

  const subExame = "Cistos";
  const titulo_exame = "Rins e Vias Urinárias";

  useEffect(() => {
    if (Object.keys(frasesCistos).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesCistos
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesCistos
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesCistos]);

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
      <TituloNomeExame titulo="Cistos" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Box gap="5px" display="flex" flexWrap="wrap">
            <Checkbox
              onChange={() =>
                setmultiplosCistosRimDireitoCheckBox(
                  !multiplosCistosRimDireitoCheckBox
                )
              }
            >
              Múltiplos Cistos no Rim Direito, o maior mede
            </Checkbox>

            <Input
              isDisabled={DisableSelectDireito}
              value={tamanhoNoduloDireitoInput}
              w="60px"
              h="77x"
              padding="5px"
              textAlign="center"
              onChange={(e) => settamanhoNoduloDireitoInput(e.target.value)}
              placeholder={"mm"}
            />
            <Select
              w="auto"
              isDisabled={DisableSelectDireito}
              onChange={(e) => {
                setPosicaoCistosDireitoSelect(e.target.value);
              }}
              value={posicaoCistosDireitoSelect}
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
                setmultiplosCistosRimEsquerdoCheckBox(
                  !multiplosCistosRimEsquerdoCheckBox
                )
              }
            >
              Múltiplos Cistos no Rim Esquerdo, o maior mede
            </Checkbox>

            <Input
              isDisabled={DisableSelectEsquerdo}
              value={tamanhoNoduloEsquerdoInput}
              w="60px"
              h="77x"
              padding="5px"
              textAlign="center"
              onChange={(e) => settamanhoNoduloEsquerdoInput(e.target.value)}
              placeholder={"mm"}
            />
            <Select
              w="auto"
              isDisabled={DisableSelectEsquerdo}
              onChange={(e) => {
                setPosicaoCistosEsquerdoSelect(e.target.value);
              }}
              value={posicaoCistosEsquerdoSelect}
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
                setRimPolicisticoCheckBox(!RimPolicisticoCheckBox)
              }
            >
              Rim Policístico
            </Checkbox>

            <Select
              w="auto"
              isDisabled={DisableRimPolicisticoSelect}
              onChange={(e) => {
                setRimPolicisticoSelect(e.target.value);
              }}
              value={RimPolicisticoSelect}
            >
              <option value="" disabled selected>
                Rim
              </option>
              <option value="Rim Direito">Direito</option>
              <option value="Rim Esquerdo">Esquerdo </option>
            </Select>
          </Box>

          <Box borderBottom="1px"></Box>
          <Text fontWeight="semibold" fontSize="16px">
            Individualizar Cistos
          </Text>
          <Stack>
            <>
              {numberArray.map((num, key) => {
                return <IndividualizarCistos key={key} numCisto={num} />;
              })}
            </>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Cisto;
