import { Box, Checkbox, Flex, HStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Femoral_Comum_Direita() {
  const altura = "100%";
  const largura = "100%";

  const [frasesFemoralDireita, setFrasesFemoralDireita] = useState<any>([]);

  const [FluxoAusenteCheckBox, setFluxoAusenteCheckBox] = useState(false);
  const [PosEstenoticoCheckBox, setPosEstenoticoCheckBox] = useState(false);
  const [EstenoseCheckBox, setEstenoseCheckBox] = useState(false);

  const criaStringFluxoAusente = () => {
    var string = "Fluxo ausente femoral direita ";
    setFrasesFemoralDireita((arr) => [...arr, string]);
  };

  const removeFluxoAusente = () => {
    frasesFemoralDireita.map((e) => {
      if (e.includes("Fluxo ausente femoral direita ")) {
        var index = frasesFemoralDireita.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesFemoralDireita.splice(index, 1);
          setFrasesFemoralDireita((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringPosEstenotico = () => {
    var string = "Pós estenótico femoral direita ";
    setFrasesFemoralDireita((arr) => [...arr, string]);
  };

  const removePosEstenotico = () => {
    frasesFemoralDireita.map((e) => {
      if (e.includes("Pós estenótico femoral direita ")) {
        var index = frasesFemoralDireita.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesFemoralDireita.splice(index, 1);
          setFrasesFemoralDireita((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringEstenose = () => {
    var string = "Estenose femoral direita acima de 50% ";
    setFrasesFemoralDireita((arr) => [...arr, string]);
  };

  const removeEstenose = () => {
    frasesFemoralDireita.map((e) => {
      if (e.includes("Estenose femoral direita acima de 50% ")) {
        var index = frasesFemoralDireita.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesFemoralDireita.splice(index, 1);
          setFrasesFemoralDireita((arr) => [...arr]);
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

  const subExame = "Femoral Comum Direita";
  const titulo_exame = "Doppler Arterial de MMII";

  useEffect(() => {
    if (Object.keys(frasesFemoralDireita).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesFemoralDireita
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesFemoralDireita
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesFemoralDireita]);

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
export default Femoral_Comum_Direita;
