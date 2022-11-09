/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function ArteriaRenalDireita() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [PVSProximalInput, setPVSProximalInput] = useState("");
  const [disablePVSProximalInput, setdisablePVSProximalInput] = useState(true);
  const [PVSProximalValueCheckbox, setPVSProximalValueCheckbox] = useState(false);
  const [PVSProximalCheckBox, setPVSProximalCheckBox] = useState(false);

  const [PVSDistalInput, setPVSDistalInput] = useState("");
  const [disablePVSDistalInput, setdisablePVSDistalInput] = useState(true);
  const [PVSDistalCheckBox, setPVSDistalCheckBox] = useState(false);
  const [PVSDistalValueCheckBox, setPVSDistalValueCheckBox] = useState(false);

  //Funcoes PVSProximal - Inicio
  const criaStringPVSProximal = (medida, PVSProximalValueCheckbox?) => {
    removePVSProximal();
    if (medida !== "" && PVSProximalValueCheckbox === true) {
      setPVSProximalValueCheckbox(true)
      var string = `PVS (Proximal) da artéria renal direita medindo ${medida} mm, Não insonável `;
      setLaudoPrin((arr) => [...arr, string]);
    } else if (medida !== '' && PVSProximalValueCheckbox === false) {
      setPVSProximalValueCheckbox(false)
      string = `PVS (Proximal) da artéria renal direita medindo ${medida} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removePVSProximal = () => {
    laudoPrin.map((e) => {
      if (e.includes("PVS (Proximal) da artéria renal direita")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (PVSProximalCheckBox) {
      setdisablePVSProximalInput(false);
    } else {
      setPVSProximalValueCheckbox(false)
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
      setPVSDistalValueCheckBox(true)
      var string = `PVS (Distal) da artéria renal direita medindo ${medida} mm, Não insonável `;
      setLaudoPrin((arr) => [...arr, string]);
    } else if (medida !== '' && PVSDistalValueCheckBox === false) {
      setPVSDistalValueCheckBox(false)
      string = `PVS (Distal) da artéria renal direita medindo ${medida} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };
  const removePVSDistal = () => {
    laudoPrin.map((e) => {
      if (e.includes("PVS (Distal) da artéria renal direita ")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (PVSDistalCheckBox) {
      setdisablePVSDistalInput(false);
    } else {
      setPVSDistalValueCheckBox(false)
      removePVSDistal();
      setdisablePVSDistalInput(true);
      setPVSDistalInput("");
    }
  }, [PVSDistalCheckBox]);

  useEffect(() => {
    criaStringPVSDistal(PVSDistalInput, PVSDistalValueCheckBox);
  }, [PVSDistalInput, PVSDistalValueCheckBox]);


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
      <TituloNomeExame titulo="Arteria Renal Direita" />
      <Checkbox onChange={() => setPVSProximalCheckBox(!PVSProximalCheckBox)}>
        PVS da artéria renal dir. (proximal)
      </Checkbox>
      <HStack
        gap='5px'
        mb='5px'>
        <Input
          isDisabled={disablePVSProximalInput}
          value={PVSProximalInput}
          w="45px"
          h="30px"
          padding="5px"
          maxLength={2}
          textAlign="center"
          onChange={(e) => { setPVSProximalInput(e.target.value) }}
        />
        <Text>cm/s</Text>
        <Checkbox
          isChecked={PVSProximalValueCheckbox}
          isDisabled={disablePVSProximalInput}
          onChange={(e) => setPVSProximalValueCheckbox(!PVSProximalValueCheckbox)}>
          Não insonável
        </Checkbox>
      </HStack>

      <Checkbox onChange={() => setPVSDistalCheckBox(!PVSDistalCheckBox)}>
        PVS da artéria renal dir. (distal)
      </Checkbox>
      <HStack gap='5px'>
        <Input
          isDisabled={disablePVSDistalInput}
          value={PVSDistalInput}
          w="45px"
          h="30px"
          padding="5px"
          maxLength={2}
          textAlign="center"
          onChange={(e) => { setPVSDistalInput(e.target.value) }}
        />
        <Text>cm/s</Text>
        <Checkbox
          isChecked={PVSDistalValueCheckBox}
          isDisabled={disablePVSDistalInput}
          onChange={(e) => setPVSDistalValueCheckBox(!PVSDistalValueCheckBox)}>
          Não insonável
        </Checkbox>

      </HStack>

    </Box >
  );
}
export default ArteriaRenalDireita;
