/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { NormalContext } from "../../../../context/NormalContext";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function HerniaSupraUmbilical({ Disable }) {
  const altura = "auto";
  const largura = "95%";

  const [frasesHerniaSup, setFrasesHerniaSup] = useState<any>([]);

  const [checkedHerniaUmbilicalCheckBox, setCheckedHerniaUmbilicalCheckBox] =
    useState(false);
  const [checkedAnelHerniacoCheckBox, setCheckedAnelHerniacoCheckBox] =
    useState(false);
  const [checkedSacoHerniacoCheckBox, setCheckedSacoHerniacoCheckBox] =
    useState(false);

  const [HerniaUmbilicalCheckbox, setCheckboxHerniaUmbilical] = useState(false);

  const [disableCheckboxHerniaco, setDisableCheckboxHerniaco] = useState(true);
  const [AnelHerniacoCheckbox, setAnelHerniacoCheckbox] = useState(false);
  const [disableCistoInput1, setDisableCistoInput1] = useState(true);
  const [medida1AnelHerniaco, setMedida1AnelHerniaco] = useState("");
  const [medida2AnelHerniaco, setMedida2AnelHerniaco] = useState("");

  const [SacoHerniacoCheckbox, setSacoHerniacoCheckbox] = useState(false);
  const [disableCistoInput2, setDisableCistoInput2] = useState(true);
  const [medida1SacoHerniaco, setMedida1SacoHerniaco] = useState("");
  const [medida2SacoHerniaco, setMedida2SacoHerniaco] = useState("");

  const [medida3Distancia, setMedida3Distancia] = useState("");



  useEffect(() => {
    if (HerniaUmbilicalCheckbox) {
      setDisableCheckboxHerniaco(false);

      setCheckedHerniaUmbilicalCheckBox(true);
    } else {
      setDisableCheckboxHerniaco(true);
      setDisableCistoInput1(true);
      setDisableCistoInput2(true);
      setCheckedHerniaUmbilicalCheckBox(false);
      setCheckedAnelHerniacoCheckBox(false);
      setCheckedSacoHerniacoCheckBox(false);
      removeAnelHerniaco();
      removeSacoHerniaco();
      setMedida1AnelHerniaco("");
      setMedida2AnelHerniaco("");
      setMedida1SacoHerniaco("");
      setMedida2SacoHerniaco("");
      setMedida3Distancia("");
    }
  }, [HerniaUmbilicalCheckbox]);

  useEffect(() => {
    if (AnelHerniacoCheckbox) {
      setDisableCistoInput1(false);
      setCheckedAnelHerniacoCheckBox(true);
    } else {
      setDisableCistoInput1(true);
      setCheckedAnelHerniacoCheckBox(false);
      removeAnelHerniaco();
      setMedida1AnelHerniaco("");
      setMedida2AnelHerniaco("");
    }
  }, [AnelHerniacoCheckbox]);

  useEffect(() => {
    if (SacoHerniacoCheckbox) {
      setDisableCistoInput2(false);
      setCheckedSacoHerniacoCheckBox(true);
    } else {
      setCheckedSacoHerniacoCheckBox(false);
      setDisableCistoInput2(true);
      removeSacoHerniaco();
      setMedida1SacoHerniaco("");
      setMedida2SacoHerniaco("");
    }
  }, [SacoHerniacoCheckbox]);

  const criaStringAnelHerniaco = (
    medida1AnelHerniaco,
    medida2AnelHerniaco,
    medida3Distancia
  ) => {
    removeAnelHerniaco();
    if (
      medida1AnelHerniaco !== "" &&
      medida2AnelHerniaco !== "" &&
      medida3Distancia != ""
    ) {
      let string = `Anel herniáco mede ${medida1AnelHerniaco}x${medida2AnelHerniaco}mm, 
            Distando ${medida3Distancia} mm da cicatriz umbilical`;
      setFrasesHerniaSup((arr) => [...arr, string]);
    }
  };
  const criaStringSacoHerniaco = (
    medida1SacoHerniaco,
    medida2SacoHerniaco,
    medida3Distancia
  ) => {
    removeSacoHerniaco();
    if (
      medida1SacoHerniaco !== "" &&
      medida2SacoHerniaco !== "" &&
      medida3Distancia != ""
    ) {
      let string = `Saco herniáco mede ${medida1SacoHerniaco}x${medida2SacoHerniaco}mm, 
            Distando ${medida3Distancia} mm da cicatriz umbilical`;
      setFrasesHerniaSup((arr) => [...arr, string]);
    }
  };

  const removeAnelHerniaco = () => {
    frasesHerniaSup.map((e) => {
      if (e.includes("Anel herniáco")) {
        let index = frasesHerniaSup.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesHerniaSup.splice(index, 1);
          setFrasesHerniaSup((arr) => [...arr]);
        }
      }
    });
  };
  const removeSacoHerniaco = () => {
    frasesHerniaSup.map((e) => {
      if (e.includes("Saco herniáco")) {
        let index = frasesHerniaSup.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesHerniaSup.splice(index, 1);
          setFrasesHerniaSup((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringAnelHerniaco(
      medida1AnelHerniaco,
      medida2AnelHerniaco,
      medida3Distancia
    );
  }, [medida1AnelHerniaco, medida2AnelHerniaco, medida3Distancia]);

  useEffect(() => {
    criaStringSacoHerniaco(
      medida1SacoHerniaco,
      medida2SacoHerniaco,
      medida3Distancia
    );
  }, [medida1SacoHerniaco, medida2SacoHerniaco, medida3Distancia]);

  const subExame = "Parede Abdominal - Hérnia Supra-Umbilical";
  const titulo_exame = "Partes Moles";

  useEffect(() => {
    if (Object.keys(frasesHerniaSup).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesHerniaSup
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesHerniaSup
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesHerniaSup]);
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
      <TituloNomeExame titulo="Hérnia supra umbilical" />

      <Box gap="15px" display="flex" flexWrap="wrap">
        <Stack>
          <HStack>
            <Checkbox
              isDisabled={Disable}
              isChecked={checkedHerniaUmbilicalCheckBox}
              onChange={(e) =>
                setCheckboxHerniaUmbilical(!HerniaUmbilicalCheckbox)
              }
              mr="30px"
            >
              Hérnia umbilical
            </Checkbox>
          </HStack>

          <HStack>
            <Checkbox
              isChecked={checkedAnelHerniacoCheckBox}
              isDisabled={disableCheckboxHerniaco}
              onChange={(e) => setAnelHerniacoCheckbox(!AnelHerniacoCheckbox)}
            >
              Anel herniáco
            </Checkbox>
            <Input
              isDisabled={disableCistoInput1}
              w="35px"
              h="30px"
              value={medida1AnelHerniaco}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida1AnelHerniaco(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableCistoInput1}
              w="35px"
              h="30px"
              value={medida2AnelHerniaco}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida2AnelHerniaco(e.target.value);
              }}
            />
            <Text>mm</Text>
          </HStack>

          <HStack>
            <Checkbox
              isChecked={checkedSacoHerniacoCheckBox}
              isDisabled={disableCheckboxHerniaco}
              onChange={(e) => setSacoHerniacoCheckbox(!SacoHerniacoCheckbox)}
            >
              Saco herniáco
            </Checkbox>
            <Input
              isDisabled={disableCistoInput2}
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
              isDisabled={disableCistoInput2}
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
          </HStack>
          <HStack>
            <Text>distando</Text>
            <Input
              isDisabled={disableCheckboxHerniaco}
              w="35px"
              h="30px"
              value={medida3Distancia}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida3Distancia(e.target.value);
              }}
            />
            <Text>mm da cicatriz umbilical</Text>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}
export default HerniaSupraUmbilical;
