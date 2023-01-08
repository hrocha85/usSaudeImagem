/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TromboflebiteEsquerdo() {
  const altura = "100%";
  const largura = "95%";

  const [frasesTrombo, setFrasesTrombo] = useState<any>([]);

  const [posicaoTromboflebiteMagmaSelect, setPosicaoTromboflebiteMagmaSelect] =
    useState("");
  const [TromboflebiteMagmaCheckBox, setTromboflebiteMagmaCheckBox] =
    useState(false);
  const [DisableSelectMagma, setDisableSelectMagma] = useState(true);

  const [posicaoTromboflebiteParvaSelect, setPosicaoTromboflebiteParvaSelect] =
    useState("");
  const [TromboflebiteParvaCheckBox, setTromboflebiteParvaCheckBox] =
    useState(false);
  const [DisableSelectParva, setDisableSelectParva] = useState(true);

  const criaStringTromboflebiteMagma = () => {
    removeStringTromboflebiteMagma();
    if (posicaoTromboflebiteMagmaSelect !== "") {
      var string = `Tromboflebite Magma ${posicaoTromboflebiteMagmaSelect}`;
      setFrasesTrombo((arr) => [...arr, string]);
    }
  };

  const removeStringTromboflebiteMagma = () => {
    frasesTrombo.map((e) => {
      if (e.includes("Tromboflebite Magma")) {
        var index = frasesTrombo.indexOf(e);

        if (index > -1) {
          frasesTrombo.splice(index, 1);
          setFrasesTrombo((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (TromboflebiteMagmaCheckBox) {
      setDisableSelectMagma(false);
      criaStringTromboflebiteMagma();
    } else {
      setDisableSelectMagma(true);
      removeStringTromboflebiteMagma();
      setPosicaoTromboflebiteMagmaSelect("");
    }
  }, [TromboflebiteMagmaCheckBox, posicaoTromboflebiteMagmaSelect]);

  const criaStringTromboflebiteParva = () => {
    removeStringTromboflebiteParva();
    if (posicaoTromboflebiteParvaSelect !== "") {
      var string = `Tromboflebite Parva ${posicaoTromboflebiteParvaSelect}`;
      setFrasesTrombo((arr) => [...arr, string]);
    }
  };

  const removeStringTromboflebiteParva = () => {
    frasesTrombo.map((e) => {
      if (e.includes("Tromboflebite Parva")) {
        var index = frasesTrombo.indexOf(e);

        if (index > -1) {
          frasesTrombo.splice(index, 1);
          setFrasesTrombo((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (TromboflebiteParvaCheckBox) {
      setDisableSelectParva(false);
      criaStringTromboflebiteParva();
    } else {
      setDisableSelectParva(true);
      removeStringTromboflebiteParva();
      setPosicaoTromboflebiteParvaSelect("");
    }
  }, [TromboflebiteParvaCheckBox, posicaoTromboflebiteParvaSelect]);

  const subExame = "Tromboflebite Esquerda";
  const titulo_exame = "Doppler Venoso de MMII";

  useEffect(() => {
    if (Object.keys(frasesTrombo).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesTrombo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesTrombo
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesTrombo]);

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
      <TituloNomeExame titulo="Tromboflebite" />

      <Box gap="10px" display="flex" flexWrap="wrap">
        <HStack>
          <Checkbox
            whiteSpace="nowrap"
            onChange={() => {
              setTromboflebiteMagmaCheckBox(!TromboflebiteMagmaCheckBox);
            }}
          >
            Na veia safena magna
          </Checkbox>
          <Select
            isDisabled={DisableSelectMagma}
            w="auto"
            onChange={(e) => {
              setPosicaoTromboflebiteMagmaSelect(e.target.value);
            }}
            value={posicaoTromboflebiteMagmaSelect}
          >
            <option value="" disabled selected>
              Posição
            </option>
            <option value="em todo o trajeto">em todo o trajeto</option>
            <option value="na coxa e na perna">na coxa e na perna</option>
            <option value="na coxa">na coxa</option>
            <option value="na perna">na perna</option>
          </Select>
        </HStack>

        <HStack>
          <Checkbox
            whiteSpace="nowrap"
            onChange={() => {
              setTromboflebiteParvaCheckBox(!TromboflebiteParvaCheckBox);
            }}
          >
            Na veia safena parva
          </Checkbox>
          <Select
            isDisabled={DisableSelectParva}
            w="auto"
            onChange={(e) => {
              setPosicaoTromboflebiteParvaSelect(e.target.value);
            }}
            value={posicaoTromboflebiteParvaSelect}
          >
            <option value="" disabled selected>
              Posição
            </option>
            <option value="em todo o trajeto">em todo o trajeto</option>
            <option value="na coxa e na perna">na coxa e na perna</option>
            <option value="na coxa">na coxa</option>
            <option value="na perna">na perna</option>
          </Select>
        </HStack>
      </Box>
    </Box>
  );
}
export default TromboflebiteEsquerdo;
