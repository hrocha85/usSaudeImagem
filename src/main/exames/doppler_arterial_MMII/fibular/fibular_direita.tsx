import { Box, Checkbox, Flex, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Fibular_Direita() {
  const altura = "100%";
  const largura = "100%";

  const [frasesFibularDireita, setFrasesFibularDireita] = useState<any>([]);

  const [FluxoAusenteCheckBox, setFluxoAusenteCheckBox] = useState(false);
  const [PosEstenoticoCheckBox, setPosEstenoticoCheckBox] = useState(false);
  const [EstenoseCheckBox, setEstenoseCheckBox] = useState(false);

  const criaStringFluxoAusente = () => {
    var string = "Fibular direita fluxo ausente ";
    setFrasesFibularDireita((arr) => [...arr, string]);
  };

  const removeFluxoAusente = () => {
    frasesFibularDireita.map((e) => {
      if (e.includes("Fibular direita fluxo ausente ")) {
        var index = frasesFibularDireita.indexOf(e);

        if (index > -1) {
          frasesFibularDireita.splice(index, 1);
          setFrasesFibularDireita((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringPosEstenotico = () => {
    var string = "Pós estenótico fibular direita ";
    setFrasesFibularDireita((arr) => [...arr, string]);
  };

  const removePosEstenotico = () => {
    frasesFibularDireita.map((e) => {
      if (e.includes("Pós estenótico fibular direita ")) {
        var index = frasesFibularDireita.indexOf(e);

        if (index > -1) {
          frasesFibularDireita.splice(index, 1);
          setFrasesFibularDireita((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringEstenose = () => {
    var string = "Estenose fibular direita acima de 50% ";
    setFrasesFibularDireita((arr) => [...arr, string]);
  };

  const removeEstenose = () => {
    frasesFibularDireita.map((e) => {
      if (e.includes("Estenose fibular direita acima de 50% ")) {
        var index = frasesFibularDireita.indexOf(e);

        if (index > -1) {
          frasesFibularDireita.splice(index, 1);
          setFrasesFibularDireita((arr) => [...arr]);
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

  const subExame = "Fibular Direita";
  const titulo_exame = "Doppler Arterial de MMII";

  useEffect(() => {
    if (Object.keys(frasesFibularDireita).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesFibularDireita
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesFibularDireita
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesFibularDireita]);

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
export default Fibular_Direita;
