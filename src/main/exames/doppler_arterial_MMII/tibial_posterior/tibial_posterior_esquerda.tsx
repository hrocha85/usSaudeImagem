import { Box, Checkbox, Flex, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Tibial_Posterior_Esquerda() {
  const altura = "100%";
  const largura = "100%";

  const [frasesTibialPEsquerda, setFrasesTibialPEsquerda] = useState<any>([]);

  const [FluxoAusenteCheckBox, setFluxoAusenteCheckBox] = useState(false);
  const [PosEstenoticoCheckBox, setPosEstenoticoCheckBox] = useState(false);
  const [EstenoseCheckBox, setEstenoseCheckBox] = useState(false);

  const criaStringFluxoAusente = () => {
    var string = "Tibial posterior esquerda fluxo ausente ";
    setFrasesTibialPEsquerda((arr) => [...arr, string]);
  };

  const removeFluxoAusente = () => {
    frasesTibialPEsquerda.map((e) => {
      if (e.includes("Tibial posterior esquerda fluxo ausente ")) {
        var index = frasesTibialPEsquerda.indexOf(e);

        if (index > -1) {
          frasesTibialPEsquerda.splice(index, 1);
          setFrasesTibialPEsquerda((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringPosEstenotico = () => {
    var string = "Pós estenótico tibial posterior esquerda ";
    setFrasesTibialPEsquerda((arr) => [...arr, string]);
  };

  const removePosEstenotico = () => {
    frasesTibialPEsquerda.map((e) => {
      if (e.includes("Pós estenótico tibial posterior esquerda ")) {
        var index = frasesTibialPEsquerda.indexOf(e);

        if (index > -1) {
          frasesTibialPEsquerda.splice(index, 1);
          setFrasesTibialPEsquerda((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringEstenose = () => {
    var string = "Estenose tibial posterior esquerda acima de 50% ";
    setFrasesTibialPEsquerda((arr) => [...arr, string]);
  };

  const removeEstenose = () => {
    frasesTibialPEsquerda.map((e) => {
      if (e.includes("Estenose tibial posterior esquerda acima de 50% ")) {
        var index = frasesTibialPEsquerda.indexOf(e);

        if (index > -1) {
          frasesTibialPEsquerda.splice(index, 1);
          setFrasesTibialPEsquerda((arr) => [...arr]);
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

  const subExame = "Tibial Posterior Esquerda";
  const titulo_exame = "Doppler Arterial de MMII";

  useEffect(() => {
    if (Object.keys(frasesTibialPEsquerda).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesTibialPEsquerda
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesTibialPEsquerda
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesTibialPEsquerda]);

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
      <TituloNomeExame titulo="Tibial Posterior" />

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
export default Tibial_Posterior_Esquerda;
