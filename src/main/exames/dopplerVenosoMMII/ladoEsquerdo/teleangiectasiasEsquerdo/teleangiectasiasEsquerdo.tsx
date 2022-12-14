/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TeleangiectasiasEsquerdo() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [DisableSelect, setDisableSelect] =
    useState(true);

  const [NaFaceSelect, setNaFaceSelect] = useState("");
  const [NaFaceSelect2, setNaFaceSelect2] = useState("");
  const [NaFaceCheckBox, setNaFaceCheckBox] = useState(false);
  const [DisableNaFaceCheckBox, setDisableNaFaceCheckBox] = useState(false);

  const [DisableDifusasCheckBox, setDisableDifusasCheckBox] = useState(false);
  const [DifusasCheckBox, setDifusasCheckBox] = useState(true);

  const removeNaFace = () => {
    laudoPrin.map((e) => {
      if (e.includes("Presença de Teleangiectasias na Face")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringNaFace = (NaFaceSelect, NaFaceSelect2) => {
    removeNaFace();
    var string;
    if (NaFaceSelect !== "" && NaFaceSelect2 !== "") {
      string = `Presença de Teleangiectasias na Face ${NaFaceSelect} ${NaFaceSelect2} `;
      setLaudoPrin((arr) => [...arr, string]);
    } else {
      removeNaFace();
    }
  };

  const criaStringDifusas = () => {
    var string = "Teleangiectasias Difusas ";
    if (DifusasCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setDifusasCheckBox(false);
      setDisableNaFaceCheckBox(true)
    } else {
      setDisableNaFaceCheckBox(false)
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
    if (NaFaceCheckBox) {
      criaStringNaFace(
        NaFaceSelect,
        NaFaceSelect2
      );
      setDisableDifusasCheckBox(true)
      setDisableSelect(false)
    } else {
      setDisableDifusasCheckBox(false)
      setDisableSelect(true)
      removeNaFace();
      setNaFaceSelect("");
      setNaFaceSelect2("");
    }
  }, [
    NaFaceCheckBox,
    NaFaceSelect,
    NaFaceSelect2
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
      <TituloNomeExame titulo="Teleangiectasias" />
      <Stack>
        <Checkbox
          isDisabled={DisableDifusasCheckBox}
          onChange={() => {
            setDifusasCheckBox(true);
            criaStringDifusas();
          }}
        >
          Difusas
        </Checkbox>
      </Stack>
      <Box
        display='flex'
        flexWrap='wrap'>
        <Checkbox
          whiteSpace="nowrap"
          isDisabled={DisableNaFaceCheckBox}
          onChange={() =>
            setNaFaceCheckBox(!NaFaceCheckBox)
          }
        >
          Na Face
        </Checkbox>
        <Select
          w="120px"
          isDisabled={DisableSelect}
          onChange={(e) => {
            setNaFaceSelect(e.target.value);
          }}
          value={NaFaceSelect}
        >
          <option value="" disabled selected>
            Selecione
          </option>
          <option value="medial">medial</option>
          <option value="anterior">anterior</option>
          <option value="posterior">posterior</option>
          <option value="lateral">lateral</option>
        </Select>
        <Select
          w="140px"
          isDisabled={DisableSelect}
          onChange={(e) => {
            setNaFaceSelect2(e.target.value);
          }}
          value={NaFaceSelect2}
        >
          <option value="" disabled selected>
            selecione
          </option>
          <option value="da perna">da perna</option>
          <option value="da coxa">da coxa</option>
          <option value="do joelho">do joelho</option>
          <option value="do tornozelo">do tornozelo</option>
        </Select>

      </Box>
    </Box >
  );
}
export default TeleangiectasiasEsquerdo;
