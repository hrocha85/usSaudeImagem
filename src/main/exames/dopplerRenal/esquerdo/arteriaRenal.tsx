/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function ArteriaRenalEsquerda() {
  const altura = "100%";
  const largura = "95%";

  const [frasesArteriaR, setFrasesArteriaR] = useState<any>([]);

  const [PVSProximalInput, setPVSProximalInput] = useState("");
  const [disablePVSProximalInput, setdisablePVSProximalInput] = useState(true);
  const [PVSProximalValueCheckbox, setPVSProximalValueCheckbox] =
    useState(false);
  const [PVSProximalCheckBox, setPVSProximalCheckBox] = useState(false);

  const [PVSDistalInput, setPVSDistalInput] = useState("");
  const [disablePVSDistalInput, setdisablePVSDistalInput] = useState(true);
  const [PVSDistalCheckBox, setPVSDistalCheckBox] = useState(false);
  const [PVSDistalValueCheckBox, setPVSDistalValueCheckBox] = useState(false);

  //Funcoes PVSProximal - Inicio
  const criaStringPVSProximal = (medida, PVSProximalValueCheckbox?) => {
    removePVSProximal();
    if (medida !== "" && PVSProximalValueCheckbox === true) {
      setPVSProximalValueCheckbox(true);
      var string = `PVS (Proximal) da artéria renal esquerda medindo ${medida} mm, Não insonável `;
      setFrasesArteriaR((arr) => [...arr, string]);
    } else if (medida !== "" && PVSProximalValueCheckbox === false) {
      setPVSProximalValueCheckbox(false);
      string = `PVS (Proximal) da artéria renal esquerda medindo ${medida} mm `;
      setFrasesArteriaR((arr) => [...arr, string]);
    }
  };

  const removePVSProximal = () => {
    frasesArteriaR.map((e) => {
      if (e.includes("PVS (Proximal) da artéria renal esquerda")) {
        var index = frasesArteriaR.indexOf(e);

        if (index > -1) {
          frasesArteriaR.splice(index, 1);
          setFrasesArteriaR((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (PVSProximalCheckBox) {
      setdisablePVSProximalInput(false);
    } else {
      setPVSProximalValueCheckbox(false);
      removePVSProximal();
      setdisablePVSProximalInput(true);
      setPVSProximalInput("");
    }
  }, [PVSProximalCheckBox]);

  useEffect(() => {
    criaStringPVSProximal(PVSProximalInput, PVSProximalValueCheckbox);
  }, [PVSProximalInput, PVSProximalValueCheckbox]);

  const criaStringPVSDistal = (medida, PVSDistalValueCheckBox?) => {
    removePVSDistal();
    if (medida !== "" && PVSDistalValueCheckBox === true) {
      setPVSDistalValueCheckBox(true);
      var string = `PVS (Distal) da artéria renal esquerda medindo ${medida} mm, Não insonável `;
      setFrasesArteriaR((arr) => [...arr, string]);
    } else if (medida !== "" && PVSDistalValueCheckBox === false) {
      setPVSDistalValueCheckBox(false);
      string = `PVS (Distal) da artéria renal esquerda medindo ${medida} mm `;
      setFrasesArteriaR((arr) => [...arr, string]);
    }
  };
  const removePVSDistal = () => {
    frasesArteriaR.map((e) => {
      if (e.includes("PVS (Distal) da artéria renal esquerda ")) {
        var index = frasesArteriaR.indexOf(e);

        if (index > -1) {
          frasesArteriaR.splice(index, 1);
          setFrasesArteriaR((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (PVSDistalCheckBox) {
      setdisablePVSDistalInput(false);
    } else {
      setPVSDistalValueCheckBox(false);
      removePVSDistal();
      setdisablePVSDistalInput(true);
      setPVSDistalInput("");
    }
  }, [PVSDistalCheckBox]);

  useEffect(() => {
    criaStringPVSDistal(PVSDistalInput, PVSDistalValueCheckBox);
  }, [PVSDistalInput, PVSDistalValueCheckBox]);

  const subExame = "Arteria Renal Esquerda";
  const titulo_exame = "Doppler Renal";

  useEffect(() => {
    if (Object.keys(frasesArteriaR).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesArteriaR
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesArteriaR
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesArteriaR]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Arteria Renal Esquerda" />
      <Checkbox onChange={() => setPVSProximalCheckBox(!PVSProximalCheckBox)}>
        PVS da artéria renal esq. (proximal)
      </Checkbox>
      <HStack gap="5px" mb="5px">
        <Input
          isDisabled={disablePVSProximalInput}
          value={PVSProximalInput}
          w="45px"
          h="30px"
          padding="5px"
          maxLength={2}
          textAlign="center"
          onChange={(e) => {
            setPVSProximalInput(e.target.value);
          }}
        />
        <Text>cm/s</Text>
        <Checkbox
          isChecked={PVSProximalValueCheckbox}
          isDisabled={disablePVSProximalInput}
          onChange={(e) =>
            setPVSProximalValueCheckbox(!PVSProximalValueCheckbox)
          }
        >
          Não insonável
        </Checkbox>
      </HStack>

      <Checkbox onChange={() => setPVSDistalCheckBox(!PVSDistalCheckBox)}>
        PVS da artéria renal esq. (distal)
      </Checkbox>
      <HStack gap="5px">
        <Input
          isDisabled={disablePVSDistalInput}
          value={PVSDistalInput}
          w="45px"
          h="30px"
          padding="5px"
          maxLength={2}
          textAlign="center"
          onChange={(e) => {
            setPVSDistalInput(e.target.value);
          }}
        />
        <Text>cm/s</Text>
        <Checkbox
          isChecked={PVSDistalValueCheckBox}
          isDisabled={disablePVSDistalInput}
          onChange={(e) => setPVSDistalValueCheckBox(!PVSDistalValueCheckBox)}
        >
          Não insonável
        </Checkbox>
      </HStack>
    </Box>
  );
}
export default ArteriaRenalEsquerda;
