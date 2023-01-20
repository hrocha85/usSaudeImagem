import { Box, Checkbox, Flex, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Tibial_Anterior_Esquerda() {
  const altura = "100%";
  const largura = "100%";

  const [frasesTibialAEsquerda, setFrasesTibialAEsquerda] = useState<any>([]);

  const [FluxoAusenteCheckBox, setFluxoAusenteCheckBox] = useState(false);
  const [PosEstenoticoCheckBox, setPosEstenoticoCheckBox] = useState(false);
  const [EstenoseCheckBox, setEstenoseCheckBox] = useState(false);

  const criaStringFluxoAusente = () => {
    var string = "Tibial anterior esquerda fluxo ausente ";
    setFrasesTibialAEsquerda((arr) => [...arr, string]);
  };

  const removeFluxoAusente = () => {
    frasesTibialAEsquerda.map((e) => {
      if (e.includes("Tibial anterior esquerda fluxo ausente ")) {
        var index = frasesTibialAEsquerda.indexOf(e);

        if (index > -1) {
          frasesTibialAEsquerda.splice(index, 1);
          setFrasesTibialAEsquerda((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringPosEstenotico = () => {
    var string = "Pós estenótico tibial anterior esquerda ";
    setFrasesTibialAEsquerda((arr) => [...arr, string]);
  };

  const removePosEstenotico = () => {
    frasesTibialAEsquerda.map((e) => {
      if (e.includes("Pós estenótico tibial anterior esquerda ")) {
        var index = frasesTibialAEsquerda.indexOf(e);

        if (index > -1) {
          frasesTibialAEsquerda.splice(index, 1);
          setFrasesTibialAEsquerda((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringEstenose = () => {
    var string = "Estenose tibial anterior esquerda acima de 50% ";
    setFrasesTibialAEsquerda((arr) => [...arr, string]);
  };

  const removeEstenose = () => {
    frasesTibialAEsquerda.map((e) => {
      if (e.includes("Estenose tibial anterior esquerda acima de 50% ")) {
        var index = frasesTibialAEsquerda.indexOf(e);

        if (index > -1) {
          frasesTibialAEsquerda.splice(index, 1);
          setFrasesTibialAEsquerda((arr) => [...arr]);
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

  const subExame = "Tibial Anterior Esquerda";
  const titulo_exame = "Doppler Arterial de MMII";

  useEffect(() => {
    if (Object.keys(frasesTibialAEsquerda).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesTibialAEsquerda
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesTibialAEsquerda
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesTibialAEsquerda]);

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
      <TituloNomeExame titulo="Tibial Anterior" />

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
export default Tibial_Anterior_Esquerda;
