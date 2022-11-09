/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function ArteriaInterlobarEsquerda() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [IRInterlobarInput, setIRInterlobarInput] = useState("");
  const [disableIRInterlobarInput, setdisableIRInterlobarInput] = useState(true);
  const [IRInterlobarCheckBox, setIRInterlobarCheckBox] = useState(false);

  //Funcoes IRInterlobar - Inicio
  const criaStringIRInterlobar = (medida) => {
    removeIRInterlobar();
    if (medida !== "") {
      var string = `IR da artéria interlobar no rim esquerdo ${medida}`;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeIRInterlobar = () => {
    laudoPrin.map((e) => {
      if (e.includes("IR da artéria interlobar no rim esquerdo")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (IRInterlobarCheckBox) {
      setdisableIRInterlobarInput(false);
    } else {
      removeIRInterlobar();
      setdisableIRInterlobarInput(true);
      setIRInterlobarInput("");
    }
  }, [IRInterlobarCheckBox]);

  useEffect(() => {
    criaStringIRInterlobar(IRInterlobarInput);
  }, [IRInterlobarInput]);




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
      <TituloNomeExame titulo="Arteria Interlobar Esquerda" />
      <Checkbox onChange={() => setIRInterlobarCheckBox(!IRInterlobarCheckBox)}>
        IR da artéria interlobar no rim esquerdo
      </Checkbox>
      <HStack
        gap='5px'
        mb='5px'>
        <Input
          isDisabled={disableIRInterlobarInput}
          value={IRInterlobarInput}
          w="45px"
          h="30px"
          padding="5px"
          maxLength={2}
          textAlign="center"
          onChange={(e) => { setIRInterlobarInput(e.target.value) }}
        />
      </HStack>
    </Box >
  );
}
export default ArteriaInterlobarEsquerda;
