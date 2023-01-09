import { Box, Checkbox, Flex, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Femoral_Profunda_Esquerda() {
  const altura = "100%";
  const largura = "100%";

  const [frasesFemoralProfundaEsquerda, setFrasesFemoralProfundaEsquerda] =
    useState<any>([]);

  const [FluxoAusenteCheckBox, setFluxoAusenteCheckBox] = useState(false);
  const [PosEstenoticoCheckBox, setPosEstenoticoCheckBox] = useState(false);
  const [EstenoseCheckBox, setEstenoseCheckBox] = useState(false);

  const criaStringFluxoAusente = () => {
    var string = "Fluxo ausente femoral profunda esquerda ";
    setFrasesFemoralProfundaEsquerda((arr) => [...arr, string]);
  };

  const removeFluxoAusente = () => {
    frasesFemoralProfundaEsquerda.map((e) => {
      if (e.includes("Fluxo ausente femoral profunda esquerda ")) {
        var index = frasesFemoralProfundaEsquerda.indexOf(e);

        if (index > -1) {
          frasesFemoralProfundaEsquerda.splice(index, 1);
          setFrasesFemoralProfundaEsquerda((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringPosEstenotico = () => {
    var string = "Pós estenótico femoral profunda esquerda ";
    setFrasesFemoralProfundaEsquerda((arr) => [...arr, string]);
  };

  const removePosEstenotico = () => {
    frasesFemoralProfundaEsquerda.map((e) => {
      if (e.includes("Pós estenótico femoral profunda esquerda ")) {
        var index = frasesFemoralProfundaEsquerda.indexOf(e);

        if (index > -1) {
          frasesFemoralProfundaEsquerda.splice(index, 1);
          setFrasesFemoralProfundaEsquerda((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringEstenose = () => {
    var string = "Estenose femoral profunda esquerda acima de 50% ";
    setFrasesFemoralProfundaEsquerda((arr) => [...arr, string]);
  };

  const removeEstenose = () => {
    frasesFemoralProfundaEsquerda.map((e) => {
      if (e.includes("Estenose femoral profunda esquerda acima de 50% ")) {
        var index = frasesFemoralProfundaEsquerda.indexOf(e);

        if (index > -1) {
          frasesFemoralProfundaEsquerda.splice(index, 1);
          setFrasesFemoralProfundaEsquerda((arr) => [...arr]);
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

  const subExame = "Femoral Profunda Esquerda";
  const titulo_exame = "Doppler Arterial de MMII";

  useEffect(() => {
    if (Object.keys(frasesFemoralProfundaEsquerda).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesFemoralProfundaEsquerda
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesFemoralProfundaEsquerda
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesFemoralProfundaEsquerda]);

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
      <TituloNomeExame titulo="Femoral Profunda" />

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
export default Femoral_Profunda_Esquerda;
