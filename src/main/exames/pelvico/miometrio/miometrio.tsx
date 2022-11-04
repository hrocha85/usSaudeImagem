import {
  Box,
  Checkbox,
  HStack,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import IndividualizarNodulos from "./individualizar_nodulos";

function Miometrio() {
  const altura = "100%";
  const largura = "66%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  var numberArray = [1, 2, 3, 4, 5];

  const [tamanhoNoduloInput, settamanhoNoduloInput] = useState("");
  const [posicaoNodulosSelect, setPosicaoNodulosSelect] = useState("");
  const [localizacaoNodulosSelect, setlocalizacaoNodulosSelect] = useState("");

  const [multiplosNodulosCheckBox, setmultiplosNodulosCheckBox] =
    useState(false);

  const [miometrioSemNodulosCheckBox, setmiometrioSemNodulosCheckBox] =
    useState(true);

  const [DisableSelect, setDisableSelect] =
    useState(true);
  const [DisableCheckboxSemNodulos, setDisableCheckboxSemNodulos] =
    useState(false);



  const handleChangeNoduloInput = (event) => {
    settamanhoNoduloInput(event.target.value);
  };

  const criaStringMultiplosNodulos = (
    tamanhoNoduloInput,
    nodulosSelect,
    localizado
  ) => {
    removeMultiplosNodulos();

    if (tamanhoNoduloInput != "" && nodulosSelect != "" && localizado != "") {
      var string = `Múltiplos nódulos de mioma, o maior mede ${tamanhoNoduloInput}mm ${nodulosSelect} localizado ${localizado} `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeMultiplosNodulos = () => {
    laudoPrin.map((e) => {
      if (e.includes("mioma")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringMiometrioSemNodulos = () => {
    var string = "Miométrio heterogêneo sem nódulos ";
    if (miometrioSemNodulosCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setmiometrioSemNodulosCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    var index = laudoPrin.indexOf(value);

    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
  };

  useEffect(() => {
    if (multiplosNodulosCheckBox) {
      setDisableSelect(false)
      setDisableCheckboxSemNodulos(true)
      criaStringMultiplosNodulos(
        tamanhoNoduloInput,
        posicaoNodulosSelect,
        localizacaoNodulosSelect
      );
    } else {
      setDisableCheckboxSemNodulos(false)
      setDisableSelect(true)
      removeMultiplosNodulos();
      settamanhoNoduloInput("");
      setPosicaoNodulosSelect("");
      setlocalizacaoNodulosSelect("");
    }
  }, [
    multiplosNodulosCheckBox,
    posicaoNodulosSelect,
    tamanhoNoduloInput,
    localizacaoNodulosSelect,
  ]);

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
      <TituloNomeExame titulo="Miométrio" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Stack>
            <Checkbox
              isDisabled={DisableCheckboxSemNodulos}
              onChange={() => {
                setmiometrioSemNodulosCheckBox(true);
                criaStringMiometrioSemNodulos();
              }}
            >
              Miométrio heterogêneo sem nódulos
            </Checkbox>
            <Box>
              <HStack>
                <Checkbox
                  whiteSpace="nowrap"
                  isDisabled={!miometrioSemNodulosCheckBox}
                  onChange={() =>
                    setmultiplosNodulosCheckBox(!multiplosNodulosCheckBox)
                  }
                >
                  Múltiplos nódulos de mioma, o maior mede
                </Checkbox>

                <Input
                  isDisabled={DisableSelect}
                  value={tamanhoNoduloInput}
                  w="60px"
                  h="77x"
                  padding="5px"
                  maxLength={2}
                  textAlign="center"
                  onChange={handleChangeNoduloInput}
                  placeholder={"mm"}
                />
                <Select
                  w="auto"
                  isDisabled={DisableSelect}
                  onChange={(e) => {
                    setPosicaoNodulosSelect(e.target.value);
                  }}
                  value={posicaoNodulosSelect}
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
                  isDisabled={DisableSelect}
                  onChange={(e) => {
                    setlocalizacaoNodulosSelect(e.target.value);
                  }}
                  value={localizacaoNodulosSelect}
                >
                  <option value="" disabled selected>
                    Localizado
                  </option>
                  <option value="corporal anterior">Corporal anterior</option>
                  <option value="corporal posterior">Corporal posterior</option>
                  <option value="fúndica">Fúndica</option>
                  <option value="lateral direita">Lateral direita</option>
                  <option value="lateral esquerda">Lateral esquerda</option>
                  <option value="cervical">Cervical</option>
                </Select>
              </HStack>
            </Box>

            <Box borderBottom="1px"></Box>
            <Text fontWeight="semibold" fontSize="16px">
              Individualizar Nódulos
            </Text>
            <Stack>
              <>
                {numberArray.map((num, key) => {
                  return (
                    <IndividualizarNodulos
                      key={key}
                      numNodulo={num}
                      disable={!miometrioSemNodulosCheckBox}
                    />
                  );
                })}
              </>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Miometrio;