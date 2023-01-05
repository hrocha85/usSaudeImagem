import { Box, Checkbox, Flex, HStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Poplitea_Direita() {
  const altura = "100%";
  const largura = "100%";

  const [frasesPopliteaDireita, setFrasesPopliteaDireita] = useState<any>([]);

  const [FluxoAusenteCheckBox, setFluxoAusenteCheckBox] = useState(false);
  const [PosEstenoticoCheckBox, setPosEstenoticoCheckBox] = useState(false);
  const [EstenoseCheckBox, setEstenoseCheckBox] = useState(false);

  const criaStringFluxoAusente = () => {
    var string = "Poplítea direita fluxo ausente ";
    setFrasesPopliteaDireita((arr) => [...arr, string]);
  };

  const removeFluxoAusente = () => {
    frasesPopliteaDireita.map((e) => {
      if (e.includes("Poplítea direita fluxo ausente ")) {
        var index = frasesPopliteaDireita.indexOf(e);

        if (index > -1) {
          frasesPopliteaDireita.splice(index, 1);
          setFrasesPopliteaDireita((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringPosEstenotico = () => {
    var string = "Pós estenótico poplítea direita ";
    setFrasesPopliteaDireita((arr) => [...arr, string]);
  };

  const removePosEstenotico = () => {
    frasesPopliteaDireita.map((e) => {
      if (e.includes("Pós estenótico poplítea direita ")) {
        var index = frasesPopliteaDireita.indexOf(e);

        if (index > -1) {
          frasesPopliteaDireita.splice(index, 1);
          setFrasesPopliteaDireita((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringEstenose = () => {
    var string = "Estenose poplítea direita acima de 50% ";
    setFrasesPopliteaDireita((arr) => [...arr, string]);
  };

  const removeEstenose = () => {
    frasesPopliteaDireita.map((e) => {
      if (e.includes("Estenose poplítea direita acima de 50% ")) {
        var index = frasesPopliteaDireita.indexOf(e);

        if (index > -1) {
          frasesPopliteaDireita.splice(index, 1);
          setFrasesPopliteaDireita((arr) => [...arr]);
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

  const subExame = "Poplítea Direita";
  const titulo_exame = "Doppler Arterial de MMII";

  useEffect(() => {
    if (Object.keys(frasesPopliteaDireita).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesPopliteaDireita
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesPopliteaDireita
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesPopliteaDireita]);

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
export default Poplitea_Direita;
