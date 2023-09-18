import { Box, Checkbox, Flex, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Femoral_Comum_Esquerda() {
  const altura = "100%";
  const largura = "100%";

  const [frasesFemoralEsquerda, setFrasesFemoralEsquerda] = useState<any>([]);

  const [FluxoAusenteCheckBox, setFluxoAusenteCheckBox] = useState(false);
  const [PosEstenoticoCheckBox, setPosEstenoticoCheckBox] = useState(false);
  const [EstenoseCheckBox, setEstenoseCheckBox] = useState(false);

  const criaStringFluxoAusente = () => {
    const string = "Fluxo ausente femoral esquerda ";
    setFrasesFemoralEsquerda((arr) => [...arr, string]);
  };

  const removeFluxoAusente = () => {
    frasesFemoralEsquerda.map((e) => {
      if (e.includes("Fluxo ausente femoral esquerda ")) {
        const index = frasesFemoralEsquerda.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesFemoralEsquerda.splice(index, 1);
          setFrasesFemoralEsquerda((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringPosEstenotico = () => {
    const string = "Pós estenótico femoral esquerda ";
    setFrasesFemoralEsquerda((arr) => [...arr, string]);
  };

  const removePosEstenotico = () => {
    frasesFemoralEsquerda.map((e) => {
      if (e.includes("Pós estenótico femoral esquerda ")) {
        const index = frasesFemoralEsquerda.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesFemoralEsquerda.splice(index, 1);
          setFrasesFemoralEsquerda((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringEstenose = () => {
    const string = "Estenose femoral esquerda acima de 50% ";
    setFrasesFemoralEsquerda((arr) => [...arr, string]);
  };

  const removeEstenose = () => {
    frasesFemoralEsquerda.map((e) => {
      if (e.includes("Estenose femoral esquerda acima de 50% ")) {
        const index = frasesFemoralEsquerda.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesFemoralEsquerda.splice(index, 1);
          setFrasesFemoralEsquerda((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (FluxoAusenteCheckBox) {
      criaStringFluxoAusente();
    } else {
      removeFluxoAusente();
    }
  }, [FluxoAusenteCheckBox]);

  useEffect(() => {
    if (PosEstenoticoCheckBox) {
      criaStringPosEstenotico();
    } else {
      removePosEstenotico();
    }
  }, [PosEstenoticoCheckBox]);

  useEffect(() => {
    if (EstenoseCheckBox) {
      criaStringEstenose();
    } else {
      removeEstenose();
    }
  }, [EstenoseCheckBox]);

  const subExame = "Femoral Comum Esquerda";
  const titulo_exame = "Doppler Arterial de MMII";

  useEffect(() => {
    if (Object.keys(frasesFemoralEsquerda).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesFemoralEsquerda
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesFemoralEsquerda
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesFemoralEsquerda]);

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
      <TituloNomeExame titulo="Femoral Comum" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <HStack>
          <Flex flexWrap="wrap" gap="2">
            <Checkbox
              whiteSpace="nowrap"
              onChange={() => setFluxoAusenteCheckBox(!FluxoAusenteCheckBox)}
            >
              Flúxo Ausente
            </Checkbox>
            <Checkbox
              whiteSpace="nowrap"
              onChange={() => setPosEstenoticoCheckBox(!PosEstenoticoCheckBox)}
            >
              Pós Estenótico
            </Checkbox>
            <Checkbox
              whiteSpace="nowrap"
              onChange={() => setEstenoseCheckBox(!EstenoseCheckBox)}
            >
              Estenose Acima de 50%
            </Checkbox>
          </Flex>
        </HStack>
      </Box>
    </Box>
  );
}
export default Femoral_Comum_Esquerda;
