import { Box, Checkbox, Flex, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Tibial_Anterior_Direita() {
  const altura = "100%";
  const largura = "100%";

  const [frasesTibialADireita, setFrasesTibialADireita] = useState<any>([]);

  const [FluxoAusenteCheckBox, setFluxoAusenteCheckBox] = useState(false);
  const [PosEstenoticoCheckBox, setPosEstenoticoCheckBox] = useState(false);
  const [EstenoseCheckBox, setEstenoseCheckBox] = useState(false);

  const criaStringFluxoAusente = () => {
    var string = "Tibial anterior direita fluxo ausente ";
    setFrasesTibialADireita((arr) => [...arr, string]);
  };

  const removeFluxoAusente = () => {
    frasesTibialADireita.map((e) => {
      if (e.includes("Tibial anterior direita fluxo ausente ")) {
        var index = frasesTibialADireita.indexOf(e);

        if (index > -1) {
          frasesTibialADireita.splice(index, 1);
          setFrasesTibialADireita((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringPosEstenotico = () => {
    var string = "Pós estenótico tibial anterior direita ";
    setFrasesTibialADireita((arr) => [...arr, string]);
  };

  const removePosEstenotico = () => {
    frasesTibialADireita.map((e) => {
      if (e.includes("Pós estenótico tibial anterior direita ")) {
        var index = frasesTibialADireita.indexOf(e);

        if (index > -1) {
          frasesTibialADireita.splice(index, 1);
          setFrasesTibialADireita((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringEstenose = () => {
    var string = "Estenose tibial anterior direita acima de 50% ";
    setFrasesTibialADireita((arr) => [...arr, string]);
  };

  const removeEstenose = () => {
    frasesTibialADireita.map((e) => {
      if (e.includes("Estenose tibial anterior direita acima de 50% ")) {
        var index = frasesTibialADireita.indexOf(e);

        if (index > -1) {
          frasesTibialADireita.splice(index, 1);
          setFrasesTibialADireita((arr) => [...arr]);
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

  const subExame = "Tibial Anterior Direita";
  const titulo_exame = "Doppler Arterial de MMII";

  useEffect(() => {
    if (Object.keys(frasesTibialADireita).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesTibialADireita
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesTibialADireita
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesTibialADireita]);

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
export default Tibial_Anterior_Direita;
