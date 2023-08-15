import { Box, Checkbox, Flex, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Fibular_Esquerda() {
  const altura = "100%";
  const largura = "100%";

  const [frasesFibularEsquerda, setFrasesFibularEsquerda] = useState<any>([]);

  const [FluxoAusenteCheckBox, setFluxoAusenteCheckBox] = useState(false);
  const [PosEstenoticoCheckBox, setPosEstenoticoCheckBox] = useState(false);
  const [EstenoseCheckBox, setEstenoseCheckBox] = useState(false);

  const criaStringFluxoAusente = () => {
    const string = "Fibular esquerda fluxo ausente ";
    setFrasesFibularEsquerda((arr) => [...arr, string]);
  };

  const removeFluxoAusente = () => {
    frasesFibularEsquerda.map((e) => {
      if (e.includes("Fibular esquerda fluxo ausente ")) {
        const index = frasesFibularEsquerda.indexOf(e);

        if (index > -1) {
          frasesFibularEsquerda.splice(index, 1);
          setFrasesFibularEsquerda((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringPosEstenotico = () => {
    const string = "Pós estenótico fibular esquerda ";
    setFrasesFibularEsquerda((arr) => [...arr, string]);
  };

  const removePosEstenotico = () => {
    frasesFibularEsquerda.map((e) => {
      if (e.includes("Pós estenótico fibular esquerda ")) {
        const index = frasesFibularEsquerda.indexOf(e);

        if (index > -1) {
          frasesFibularEsquerda.splice(index, 1);
          setFrasesFibularEsquerda((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringEstenose = () => {
    const string = "Estenose fibular esquerda acima de 50% ";
    setFrasesFibularEsquerda((arr) => [...arr, string]);
  };

  const removeEstenose = () => {
    frasesFibularEsquerda.map((e) => {
      if (e.includes("Estenose fibular esquerda acima de 50% ")) {
        const index = frasesFibularEsquerda.indexOf(e);

        if (index > -1) {
          frasesFibularEsquerda.splice(index, 1);
          setFrasesFibularEsquerda((arr) => [...arr]);
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

  const subExame = "Fibular Esquerda";
  const titulo_exame = "Doppler Arterial de MMII";

  useEffect(() => {
    if (Object.keys(frasesFibularEsquerda).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesFibularEsquerda
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesFibularEsquerda
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesFibularEsquerda]);

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
      <TituloNomeExame titulo="Fibular" />

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
export default Fibular_Esquerda;
