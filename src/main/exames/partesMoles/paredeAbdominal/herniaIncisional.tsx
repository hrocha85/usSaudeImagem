/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { NormalContext } from "../../../../context/NormalContext";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function HerniaIncisional() {
  const altura = 'auto';
  const largura = "95%";

  const [frasesHerniaInc, setFrasesHerniaInc] = useState<any>([]);

  const { laudoNormal } = useContext(NormalContext);
  const [HerniaIncisional, setHerniaIncisional] = useState("");
  const [HerniaIncisionalCheckbox, setCheckboxHerniaIncisional] =
    useState(false);
  const [disableSelectHerniaIncisional, setDisableSelectHerniaIncisional] =
    useState(true);

  const [disableHerniaIncisional, setDisableHerniaIncisional] = useState(true);

  const [LocalSelect, setLocalSelect] = useState("");
  const [TercoSelect, setTercoSelect] = useState("");
  const [medida1Nodulo, setMedida1Nodulo] = useState("");
  const [medida2Nodulo, setMedida2Nodulo] = useState("");

  useEffect(() => {
    laudoNormal
      ? setDisableHerniaIncisional(true)
      : setDisableHerniaIncisional(false);
  });

  useEffect(() => {
    HerniaIncisionalCheckbox
      ? setDisableSelectHerniaIncisional(false)
      : setDisableSelectHerniaIncisional(true);
    removeHerniaIncisional();
    setHerniaIncisional("");
    setLocalSelect("");
    setTercoSelect("");
    setMedida1Nodulo("");
    setMedida2Nodulo("");
  }, [HerniaIncisionalCheckbox]);

  const criaStringHerniaIncisional = (local, plano, medida1, medida2) => {
    removeHerniaIncisional();
    if (local !== "" && plano !== "" && medida1 !== "" && medida2 !== "") {
      let string = `Hérnia incisional ${local},  no plano ${plano},
      medindo ${medida1} x ${medida2} mm`;
      setFrasesHerniaInc((arr) => [...arr, string]);
    }
  };

  const removeHerniaIncisional = () => {
    frasesHerniaInc.map((e) => {
      if (e.includes("Hérnia incisional ")) {
        let index = frasesHerniaInc.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesHerniaInc.splice(index, 1);
          setFrasesHerniaInc((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringHerniaIncisional(
      LocalSelect,
      TercoSelect,
      medida1Nodulo,
      medida2Nodulo
    );
  }, [LocalSelect, TercoSelect, medida1Nodulo, medida2Nodulo]);

  const subExame = "Parede Abdominal - Hérnia Incisional";
  const titulo_exame = "Partes Moles";

  useEffect(() => {
    if (Object.keys(frasesHerniaInc).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesHerniaInc
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesHerniaInc
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesHerniaInc]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px 15px 20px 15px"
      mt="10px"
    >
      <Text>Parede Abdominal</Text>
      <TituloNomeExame titulo="Hérnia incisional" />

      <Box gap="15px" display="flex" flexWrap="wrap">
        <Stack w="100%">
          <Checkbox
            isDisabled={disableHerniaIncisional}
            onChange={(e) =>
              setCheckboxHerniaIncisional(!HerniaIncisionalCheckbox)
            }
            mr="30px"
          >
            Hérnia incisional
          </Checkbox>

          <Box display="flex" flexWrap="wrap">
            <Text w="80px">Local</Text>
            <Select
              isDisabled={disableSelectHerniaIncisional}
              w="200px"
              value={LocalSelect}
              onChange={(e) => {
                setLocalSelect(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Local
              </option>
              <option value="no hipogástrio">no hipogástrio</option>
              <option value="no hipocôndrio direito">
                no hipocôndrio direito
              </option>
              <option value="no hipocôndrio esquerdo">
                no hipocôndrio esquerdo
              </option>
              <option value="na região lombar direita">
                na região lombar direita
              </option>
              <option value="na região lombar esquerda">
                na região lombar esquerda
              </option>
              <option value="no flanco direito">no flanco direito</option>
              <option value="no flanco esquerdo">no flanco esquerdo</option>
              <option value="na fossa ilíaca direita">
                na fossa ilíaca direita
              </option>
              <option value="no fossa ilíaca esquerda">
                no fossa ilíaca esquerda
              </option>
            </Select>
          </Box>
          <Box display="flex">
            <Text w="80px">no terço</Text>
            <Select
              isDisabled={disableSelectHerniaIncisional}
              w="200px"
              value={TercoSelect}
              onChange={(e) => {
                setTercoSelect(e.target.value);
              }}
            >
              <option value="" disabled selected>
                no plano
              </option>
              <option value="direito">direito</option>
              <option value="medio">medio</option>
              <option value="esquerdo">esquerdo</option>
              <option value="superior">superior</option>
              <option value="inferior">inferior</option>
            </Select>
          </Box>
          <Box display="flex">
            <Text>Medindo</Text>
            <Input
              isDisabled={disableSelectHerniaIncisional}
              w="35px"
              h="30px"
              value={medida1Nodulo}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida1Nodulo(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableSelectHerniaIncisional}
              w="35px"
              h="30px"
              value={medida2Nodulo}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida2Nodulo(e.target.value);
              }}
            />
            <Text>mm</Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
export default HerniaIncisional;
