/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../context/LuadosContext";
import TituloNomeExame from "../../component/titulo_nome_exame";

function Aorta() {
  const altura = "100%";
  const largura = "66%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [CalibreInput, setCalibreInput] = useState("");
  const [disableCalibreInput, setdisableCalibreInput] = useState(true);
  const [CalibreCheckBox, setCalibreCheckBox] = useState(false);

  const [PVSInput, setPVSInput] = useState("");
  const [disablePVSInput, setdisablePVSInput] = useState(true);
  const [PVSCheckBox, setPVSCheckBox] = useState(false);


  //Funcoes Calibre - Inicio
  const criaStringCalibre = (medida) => {
    removeCalibre();
    if (medida !== "") {
      var string = `Calibre aorta medindo ${medida} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeCalibre = () => {
    laudoPrin.map((e) => {
      if (e.includes("Calibre aorta")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (CalibreCheckBox) {
      setdisableCalibreInput(false);
    } else {
      removeCalibre();
      setdisableCalibreInput(true);
      setCalibreInput("");
    }
  }, [CalibreCheckBox]);

  useEffect(() => {
    criaStringCalibre(CalibreInput);
  }, [CalibreInput]);
  const criaStringPVS = (medida) => {
    removePVS();
    if (medida !== "") {
      var string = `PVS da aorta medindo ${medida} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removePVS = () => {
    laudoPrin.map((e) => {
      if (e.includes("PVS da aorta")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (PVSCheckBox) {
      setdisablePVSInput(false);
    } else {
      removePVS();
      setdisablePVSInput(true);
      setPVSInput("");
    }
  }, [PVSCheckBox]);

  useEffect(() => {
    criaStringPVS(PVSInput);
  }, [PVSInput]);


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
      <TituloNomeExame titulo="Aorta" />
      <Box mb='5px' justifyContent="center" alignItems="center" display="flex"  >

        <Checkbox onChange={() => setCalibreCheckBox(!CalibreCheckBox)}>
          Calibre
        </Checkbox>
        <Input
          isDisabled={disableCalibreInput}
          value={CalibreInput}
          w="45px"
          h="30px"
          padding="5px"
          maxLength={2}
          textAlign="center"
          onChange={(e) => { setCalibreInput(e.target.value) }}
        />
        <Text>mm</Text>
      </Box>
      <Box justifyContent="center" alignItems="center" display="flex"  >
        <Checkbox onChange={() => setPVSCheckBox(!PVSCheckBox)}>
          PVS da Aorta
        </Checkbox>
        <Input
          isDisabled={disablePVSInput}
          value={PVSInput}
          w="45px"
          h="30px"
          padding="5px"
          maxLength={2}
          textAlign="center"
          onChange={(e) => { setPVSInput(e.target.value) }}
        />
        <Text>cm/s</Text>

      </Box>

    </Box >
  );
}
export default Aorta;
