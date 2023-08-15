import { Box, Checkbox, Flex, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Poplitea_Esquerda() {
  const altura = "100%";
  const largura = "100%";

  const [frasesPopliteaEsquerda, setFrasesPopliteaEsquerda] = useState<any>([]);

  const [FluxoAusenteCheckBox, setFluxoAusenteCheckBox] = useState(false);
  const [PosEstenoticoCheckBox, setPosEstenoticoCheckBox] = useState(false);
  const [EstenoseCheckBox, setEstenoseCheckBox] = useState(false);

  const criaStringFluxoAusente = () => {
    const string = "Poplítea esquerda fluxo ausente ";
    setFrasesPopliteaEsquerda((arr) => [...arr, string]);
  };

  const removeFluxoAusente = () => {
    frasesPopliteaEsquerda.map((e) => {
      if (e.includes("Poplítea esquerda fluxo ausente ")) {
        const index = frasesPopliteaEsquerda.indexOf(e);

        if (index > -1) {
          frasesPopliteaEsquerda.splice(index, 1);
          setFrasesPopliteaEsquerda((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringPosEstenotico = () => {
    const string = "Pós estenótico poplítea esquerda ";
    setFrasesPopliteaEsquerda((arr) => [...arr, string]);
  };

  const removePosEstenotico = () => {
    frasesPopliteaEsquerda.map((e) => {
      if (e.includes("Pós estenótico poplítea esquerda ")) {
        const index = frasesPopliteaEsquerda.indexOf(e);

        if (index > -1) {
          frasesPopliteaEsquerda.splice(index, 1);
          setFrasesPopliteaEsquerda((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringEstenose = () => {
    const string = "Estenose poplítea esquerda acima de 50% ";
    setFrasesPopliteaEsquerda((arr) => [...arr, string]);
  };

  const removeEstenose = () => {
    frasesPopliteaEsquerda.map((e) => {
      if (e.includes("Estenose poplítea esquerda acima de 50% ")) {
        const index = frasesPopliteaEsquerda.indexOf(e);

        if (index > -1) {
          frasesPopliteaEsquerda.splice(index, 1);
          setFrasesPopliteaEsquerda((arr) => [...arr]);
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

  const subExame = "Poplítea Esquerda";
  const titulo_exame = "Doppler Arterial de MMII";

  useEffect(() => {
    if (Object.keys(frasesPopliteaEsquerda).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesPopliteaEsquerda
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesPopliteaEsquerda
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesPopliteaEsquerda]);

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
      <TituloNomeExame titulo="Poplítea" />

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
export default Poplitea_Esquerda;
