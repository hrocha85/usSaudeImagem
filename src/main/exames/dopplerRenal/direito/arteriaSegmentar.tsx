/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function ArteriaSegmentarDireita() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [PVSSegmentarInput, setPVSSegmentarInput] = useState("");
  const [disablePVSSegmentarInput, setdisablePVSSegmentarInput] = useState(true);
  const [PVSSegmentarCheckBox, setPVSSegmentarCheckBox] = useState(false);

  const [AceleracaoInput, setAceleracaoInput] = useState("");
  const [disableAceleracaoInput, setdisableAceleracaoInput] = useState(true);
  const [AceleracaoCheckBox, setAceleracaoCheckBox] = useState(false);

  //Funcoes PVSSegmentar - Inicio
  const criaStringPVSSegmentar = (medida) => {
    removePVSSegmentar();
    if (medida !== "") {
      var string = `PVS Segmentar medindo ${medida} mm`;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removePVSSegmentar = () => {
    laudoPrin.map((e) => {
      if (e.includes("PVS Segmentar")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (PVSSegmentarCheckBox) {
      setdisablePVSSegmentarInput(false);
    } else {
      removePVSSegmentar();
      setdisablePVSSegmentarInput(true);
      setPVSSegmentarInput("");
    }
  }, [PVSSegmentarCheckBox]);

  useEffect(() => {
    criaStringPVSSegmentar(PVSSegmentarInput);
  }, [PVSSegmentarInput]);

  //Funcoes PVSSegmentar - Inicio
  const criaStringAceleracao = (AceleracaoInput) => {
    removeAceleracao();
    if (AceleracaoInput !== "") {
      var string = `Aceleração ${AceleracaoInput} cm/s²`;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeAceleracao = () => {
    laudoPrin.map((e) => {
      if (e.includes("Aceleração ")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (AceleracaoCheckBox) {
      setdisableAceleracaoInput(false);
    } else {
      removeAceleracao();
      setdisableAceleracaoInput(true);
      setAceleracaoInput("");
    }
  }, [AceleracaoCheckBox]);

  useEffect(() => {
    criaStringAceleracao(AceleracaoInput);
  }, [AceleracaoInput]);




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
      <TituloNomeExame titulo="Arteria Segmentar Direita" />
      <Checkbox onChange={() => setPVSSegmentarCheckBox(!PVSSegmentarCheckBox)}>
        PVS da artéria segmentar dir.
      </Checkbox>
      <HStack
        gap='5px'
        mb='5px'>
        <Input
          isDisabled={disablePVSSegmentarInput}
          value={PVSSegmentarInput}
          w="45px"
          h="30px"
          padding="5px"
          maxLength={2}
          textAlign="center"
          onChange={(e) => { setPVSSegmentarInput(e.target.value) }}
        />
        <Text>cm/s</Text>
      </HStack>
      <HStack
        gap='5px'
        mb='5px'>
        <Checkbox onChange={() => setAceleracaoCheckBox(!AceleracaoCheckBox)}>
          Aceleração
        </Checkbox>
        <Input
          isDisabled={disableAceleracaoInput}
          value={AceleracaoInput}
          w="45px"
          h="30px"
          padding="5px"
          maxLength={2}
          textAlign="center"
          onChange={(e) => { setAceleracaoInput(e.target.value) }}
        />
        <Text>cm/s²</Text>
      </HStack>
    </Box >
  );
}
export default ArteriaSegmentarDireita;
