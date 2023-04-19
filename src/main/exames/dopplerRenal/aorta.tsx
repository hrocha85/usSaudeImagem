/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../component/function_format_laudo";
import TituloNomeExame from "../../component/titulo_nome_exame";

function Aorta() {
  const altura = "100%";
  const largura = "66%";

  const [frasesAorta, setFrasesAorta] = useState<any>([]);

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
      setFrasesAorta((arr) => [...arr, string]);
    }
  };

  const removeCalibre = () => {
    frasesAorta.map((e) => {
      if (e.includes("Calibre aorta")) {
        var index = frasesAorta.indexOf(e);

        if (index > -1) {
          frasesAorta.splice(index, 1);
          setFrasesAorta((arr) => [...arr]);
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
      setFrasesAorta((arr) => [...arr, string]);
    }
  };

  const removePVS = () => {
    frasesAorta.map((e) => {
      if (e.includes("PVS da aorta")) {
        var index = frasesAorta.indexOf(e);

        if (index > -1) {
          frasesAorta.splice(index, 1);
          setFrasesAorta((arr) => [...arr]);
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

  const subExame = "Aorta";
  const titulo_exame = "Doppler Renal";

  useEffect(() => {
    if (Object.keys(frasesAorta).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesAorta
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesAorta
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesAorta]);

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
      <Box mb="5px" justifyContent="center" alignItems="center" display="flex">
        <Checkbox onChange={() => setCalibreCheckBox(!CalibreCheckBox)}>
          Calibre
        </Checkbox>
        <Input
          isDisabled={disableCalibreInput}
          value={CalibreInput}
          w="45px"
          h="30px"
          padding="5px"
          
          textAlign="center"
          onChange={(e) => {
            setCalibreInput(e.target.value);
          }}
        />
        <Text>mm</Text>
      </Box>
      <Box justifyContent="center" alignItems="center" display="flex">
        <Checkbox onChange={() => setPVSCheckBox(!PVSCheckBox)}>
          PVS da Aorta
        </Checkbox>
        <Input
          isDisabled={disablePVSInput}
          value={PVSInput}
          w="45px"
          h="30px"
          padding="5px"
          
          textAlign="center"
          onChange={(e) => {
            setPVSInput(e.target.value);
          }}
        />
        <Text>cm/s</Text>
      </Box>
    </Box>
  );
}
export default Aorta;
