/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import {
  Box,
  Checkbox,
  HStack,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Esquerda() {
  const altura = "100%";
  const largura = "95%";

  const [frasesRegiaoIgn, setFrasesRegiaIgn] = useState<any>([]);

  const [NormalCheckbox, setCheckboxNormal] = useState(false);
  const [disableNormal, setDisableNormal] = useState(false);

  const [tamanhoHerniaInput, setTamanhoHerniaInput] = useState("");
  const [disableSelectInput, setDisableSelectInput] = useState(true);

  const [disableHernia, setDisableHernia] = useState(false);
  const [HerniaSelect, setHerniaSelect] = useState("");
  const [HerniaCheckBox, setHerniaCheckBox] = useState(false);
  const [HerniaChecked, setHerniaChecked] = useState(false);

  const criaStringNormal = () => {
    let string = `Região inguinal direita Normal`;
    setFrasesRegiaIgn((arr) => [...arr, string]);
  };
  const removeNormal = () => {
    frasesRegiaoIgn.map((e) => {
      if (e.includes("Região inguinal esquerda Normal")) {
        let index = frasesRegiaoIgn.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesRegiaoIgn.splice(index, 1);
          setFrasesRegiaIgn((arr) => [...arr]);
        }
      }
    });
  };
  const criaStringHernia = (tamanhoHerniaInput) => {
    removeStringHernia();
    if (HerniaCheckBox && HerniaSelect !== "" && tamanhoHerniaInput !== "") {
      var string = `Hérnia esquerda ${HerniaSelect} com espessura de ${tamanhoHerniaInput} mm`;

      setFrasesRegiaIgn((arr) => [...arr, string]);
    }
  };

  const removeStringHernia = () => {
    frasesRegiaoIgn.map((e) => {
      if (e.includes("Hérnia esquerda")) {
        var index = frasesRegiaoIgn.indexOf(e);

        if (index > -1) {
          frasesRegiaoIgn.splice(index, 1);
          setFrasesRegiaIgn((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (NormalCheckbox) {
      removeStringHernia();
      setHerniaSelect("");
      setHerniaChecked(false);
      criaStringNormal();
      setDisableHernia(true);
    } else {
      setDisableHernia(false);
      removeNormal();
    }
  }, [NormalCheckbox]);

  useEffect(() => {
    if (HerniaCheckBox) {
      criaStringHernia(tamanhoHerniaInput);
      setHerniaChecked(true);
      setDisableNormal(true);
      setDisableSelectInput(false);
    } else {
      setDisableSelectInput(true);
      setDisableNormal(false);
      setHerniaChecked(false);
      removeStringHernia();
      setHerniaSelect("");
      setTamanhoHerniaInput("");
    }
  }, [HerniaCheckBox, HerniaSelect, tamanhoHerniaInput]);

  const subExame = "Região Inguinal Direita";
  const titulo_exame = "Partes Moles";

  useEffect(() => {
    if (Object.keys(frasesRegiaoIgn).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesRegiaoIgn
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesRegiaoIgn
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesRegiaoIgn]);

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
      backgroundColor='red'
    >
      <TituloNomeExame titulo="Região Inguinal esquerda" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Stack>
            <Box>
              <Checkbox
                isDisabled={disableNormal}
                onChange={() => {
                  setCheckboxNormal(!NormalCheckbox);
                }}
              >
                Normal
              </Checkbox>
              <HStack>
                <Checkbox
                  isChecked={HerniaChecked}
                  isDisabled={disableHernia}
                  whiteSpace="nowrap"
                  onChange={() => {
                    setHerniaCheckBox(!HerniaCheckBox);
                  }}
                >
                  Hérnia
                </Checkbox>
                <Select
                  isDisabled={disableSelectInput}
                  w="auto"
                  onChange={(e) => {
                    setHerniaSelect(e.target.value);
                  }}
                  value={HerniaSelect}
                >
                  <option value="" disabled selected>
                    Posição
                  </option>
                  <option value="inguinal">Inguinal</option>
                  <option value="inguino-escrotal">Inguino-escrotal</option>
                </Select>
              </HStack>
              <HStack mt="5px">
                <Text>Espessura do conteúdo</Text>
                <Input
                  isDisabled={disableSelectInput}
                  w="60px"
                  h="77x"
                  padding="5px"
                  maxLength={2}
                  textAlign="center"
                  placeholder={"mm"}
                  value={tamanhoHerniaInput}
                  onChange={(e) => {
                    setTamanhoHerniaInput(e.target.value);
                  }}
                />
                <Text>mm</Text>
              </HStack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Esquerda;
