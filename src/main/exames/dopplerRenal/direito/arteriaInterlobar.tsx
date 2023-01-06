/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function ArteriaInterlobarDireita() {
  const altura = "100%";
  const largura = "95%";

  const [frasesArterial, setFrasesArterial] = useState<any>([]);

  const [IRInterlobarInput, setIRInterlobarInput] = useState("");
  const [disableIRInterlobarInput, setdisableIRInterlobarInput] =
    useState(true);
  const [IRInterlobarCheckBox, setIRInterlobarCheckBox] = useState(false);

  //Funcoes IRInterlobar - Inicio
  const criaStringIRInterlobar = (medida) => {
    removeIRInterlobar();
    if (medida !== "") {
      var string = `IR da artéria interlobar no rim direito ${medida}`;
      setFrasesArterial((arr) => [...arr, string]);
    }
  };

  const removeIRInterlobar = () => {
    frasesArterial.map((e) => {
      if (e.includes("IR da artéria interlobar no rim direito")) {
        var index = frasesArterial.indexOf(e);

        if (index > -1) {
          frasesArterial.splice(index, 1);
          setFrasesArterial((arr) => [...arr]);
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

  const subExame = "Arteria Interlobar Direita";
  const titulo_exame = "Doppler Renal";

  useEffect(() => {
    if (Object.keys(frasesArterial).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesArterial
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesArterial
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesArterial]);

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
      <TituloNomeExame titulo="Arteria Interlobar Direita" />
      <Checkbox onChange={() => setIRInterlobarCheckBox(!IRInterlobarCheckBox)}>
        IR da artéria interlobar no rim direito
      </Checkbox>
      <HStack gap="5px" mb="5px">
        <Input
          isDisabled={disableIRInterlobarInput}
          value={IRInterlobarInput}
          w="45px"
          h="30px"
          padding="5px"
          maxLength={2}
          textAlign="center"
          onChange={(e) => {
            setIRInterlobarInput(e.target.value);
          }}
        />
      </HStack>
    </Box>
  );
}
export default ArteriaInterlobarDireita;
