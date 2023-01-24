/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { NormalContext } from "../../../../context/NormalContext";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Hernia_Epigastrica() {
  const altura = "100%";
  const largura = "100%";

  const { laudoNormal } = useContext(NormalContext);
  const [frasesHerniaEpigastrica, setFrasesHerniaEpigastrica] = useState<any>(
    []
  );

  const [checkedSacoHerniacoCheckBox, setCheckedSacoHerniacoCheckBox] =
    useState(false);

  const [disableHerniaEpigastrica, setDisableHerniaEpigastrica] =
    useState(false);
  const [disableInputs, setDisableInputs] = useState(true);

  const [disableCheckboxHerniaco, setDisableCheckboxHerniaco] = useState(true);
  const [medidaColo, setMedidaColo] = useState("");
  const [medidaXifoide, setMedidaXifoide] = useState("");

  const [SacoHerniacoCheckbox, setSacoHerniacoCheckbox] = useState(false);
  const [medida1SacoHerniaco, setMedida1SacoHerniaco] = useState("");
  const [medida2SacoHerniaco, setMedida2SacoHerniaco] = useState("");

  const criaStringHerniaUmbilical = (
    medida1SacoHerniaco,
    medida2SacoHerniaco
  ) => {
    removeHerniaUmbilical();
    if (medida1SacoHerniaco !== "" && medida2SacoHerniaco !== "") {
      let string = `Na região epigástrica, em topografia mediana, observa-se um saco herniário contendo tecido adiposo, medindo ${medida1SacoHerniaco} x ${medida2SacoHerniaco} cm, com colo de ${medidaColo} cm. A borda superior do colo herniário situa-se a ${medidaXifoide} cm do apêndice xifoide.`;
      setFrasesHerniaEpigastrica((arr) => [...arr, string]);
    }
  };

  const removeHerniaUmbilical = () => {
    frasesHerniaEpigastrica.map((e) => {
      if (e.includes("Na região epigástrica, em topografia mediana, ")) {
        let index = frasesHerniaEpigastrica.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesHerniaEpigastrica.splice(index, 1);
          setFrasesHerniaEpigastrica((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    laudoNormal
      ? setDisableHerniaEpigastrica(true)
      : setDisableHerniaEpigastrica(false);
  });

  useEffect(() => {
    laudoNormal
      ? setDisableCheckboxHerniaco(true)
      : setDisableCheckboxHerniaco(false);
  });

  useEffect(() => {
    if (SacoHerniacoCheckbox) {
      setDisableInputs(false);
      setCheckedSacoHerniacoCheckBox(true);
    } else {
      setCheckedSacoHerniacoCheckBox(false);
      setDisableInputs(true);
      removeHerniaUmbilical();
      setMedida1SacoHerniaco("");
      setMedida2SacoHerniaco("");
      setMedidaColo("");
      setMedidaXifoide("");
    }
  }, [SacoHerniacoCheckbox]);

  useEffect(() => {
    criaStringHerniaUmbilical(medida1SacoHerniaco, medida2SacoHerniaco);
  }, [medidaColo, medida1SacoHerniaco, medida2SacoHerniaco, medidaXifoide]);

  const subExame = "Parede Abdominal - Hérnia Epigástrica";
  const titulo_exame = "Partes Moles";

  useEffect(() => {
    if (Object.keys(frasesHerniaEpigastrica).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesHerniaEpigastrica
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesHerniaEpigastrica
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesHerniaEpigastrica]);

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
      <TituloNomeExame titulo="Hérnia Epigástrica" />

      <Box gap="15px" display="flex" flexWrap="wrap">
        <Stack>
          <HStack>
            <Checkbox
              isDisabled={disableCheckboxHerniaco}
              isChecked={checkedSacoHerniacoCheckBox}
              onChange={(e) => setSacoHerniacoCheckbox(!SacoHerniacoCheckbox)}
            >
              Saco herniáco
            </Checkbox>
            <Input
              isDisabled={disableInputs}
              w="35px"
              h="30px"
              value={medida1SacoHerniaco}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida1SacoHerniaco(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableInputs}
              w="35px"
              h="30px"
              value={medida2SacoHerniaco}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida2SacoHerniaco(e.target.value);
              }}
            />
            <Text>mm</Text>
            <Text>Colo:</Text>

            <Input
              isDisabled={disableInputs}
              value={medidaColo}
              w="35px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedidaColo(e.target.value);
              }}
            />
          </HStack>
          <HStack>
            <Text>mm</Text>
            <Text whiteSpace="nowrap">com limite superior a</Text>
            <Input
              isDisabled={disableInputs}
              value={medidaXifoide}
              w="35px"
              h="30px"
              marginEnd="10px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedidaXifoide(e.target.value);
              }}
            />
            <Text>mm</Text>
            <Text whiteSpace="nowrap">do apêndice xifoide</Text>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Hernia_Epigastrica;
