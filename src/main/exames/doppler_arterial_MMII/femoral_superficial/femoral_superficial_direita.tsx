import { Box, Checkbox, Flex, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Femoral_Superficial_Direita() {
  const altura = "100%";
  const largura = "100%";

  const [frasesFemoralSuperficialDireita, setFrasesFemoralSuperficialDireita] =
    useState<any>([]);

  const [FluxoAusenteCheckBox, setFluxoAusenteCheckBox] = useState(false);
  const [PosEstenoticoCheckBox, setPosEstenoticoCheckBox] = useState(false);
  const [EstenoseCheckBox, setEstenoseCheckBox] = useState(false);

  const criaStringFluxoAusente = () => {
    var string = "Fluxo ausente femoral superficial direita ";
    setFrasesFemoralSuperficialDireita((arr) => [...arr, string]);
  };

  const removeFluxoAusente = () => {
    frasesFemoralSuperficialDireita.map((e) => {
      if (e.includes("Fluxo ausente femoral superficial direita ")) {
        var index = frasesFemoralSuperficialDireita.indexOf(e);

        if (index > -1) {
          frasesFemoralSuperficialDireita.splice(index, 1);
          setFrasesFemoralSuperficialDireita((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringPosEstenotico = () => {
    var string = "Pós estenótico femoral superficial direita ";
    setFrasesFemoralSuperficialDireita((arr) => [...arr, string]);
  };

  const removePosEstenotico = () => {
    frasesFemoralSuperficialDireita.map((e) => {
      if (e.includes("Pós estenótico femoral superficial direita ")) {
        var index = frasesFemoralSuperficialDireita.indexOf(e);

        if (index > -1) {
          frasesFemoralSuperficialDireita.splice(index, 1);
          setFrasesFemoralSuperficialDireita((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringEstenose = () => {
    var string = "Estenose femoral superficial direita acima de 50% ";
    setFrasesFemoralSuperficialDireita((arr) => [...arr, string]);
  };

  const removeEstenose = () => {
    frasesFemoralSuperficialDireita.map((e) => {
      if (e.includes("Estenose femoral superficial direita acima de 50% ")) {
        var index = frasesFemoralSuperficialDireita.indexOf(e);

        if (index > -1) {
          frasesFemoralSuperficialDireita.splice(index, 1);
          setFrasesFemoralSuperficialDireita((arr) => [...arr]);
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

  const subExame = "Femoral Superficial Direita";
  const titulo_exame = "Doppler Arterial de MMII";

  useEffect(() => {
    if (Object.keys(frasesFemoralSuperficialDireita).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesFemoralSuperficialDireita
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesFemoralSuperficialDireita
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesFemoralSuperficialDireita]);

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
      <TituloNomeExame titulo="Femoral Superficial" />

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
export default Femoral_Superficial_Direita;
