import { Box, Checkbox } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function ViasBiliares() {
  const altura = "100%";
  const largura = "66%";

  let viasBiliaresDilatadas = document.querySelector(
    "#ViasBiliaresDilatadas"
  ) as HTMLInputElement;

  const [frasesVias, setFrasesVias] = useState<any>([]);

  const [defaultValueNormal, setDefaultValueNormal] = useState({
    defaultValueNormal: false,
  });
  const [checkValueNormal, setCheckvalueNormal] = useState({
    normal: false,
  });
  const [checkValueColedocoEcstasiado, setCheckvalueColedocoEcstasiado] =
    useState({
      ColedocoEcstasiado: false,
    });

  const criarString = (value, valueId?, valueInput?) => {
    //console.log("Valor cria string = ", value);
    //arr => [...arr] captura os dados que já estavam e os mantem no array
    setFrasesVias((arr) => [...arr, value]);
    //console.log("criaString = ", laudoPrin)
  };

  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    var index = frasesVias.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesVias.splice(index, 1);
      setFrasesVias((arr) => [...arr]);
    }
  };

  const verificaChecked = (value) => {
    switch (value.id) {
      case "ColedocoNormal":
        if (value.checked === true) {
          setDefaultValueNormal({ defaultValueNormal: true });
          setFrasesVias((arr) => [...arr, value.value]);
          setCheckvalueColedocoEcstasiado({
            ColedocoEcstasiado: true,
          });
        } else {
          setDefaultValueNormal({ defaultValueNormal: false });
          removeItemString(value.value);
          setCheckvalueColedocoEcstasiado({
            ColedocoEcstasiado: false,
          });
        }
        break;
      case "ColedocoEcasiado":
        if (value.checked === true) {
          setFrasesVias((arr) => [...arr, value.value]);
          setCheckvalueNormal({
            normal: true,
          });
        } else {
          removeItemString(value.value);
          setCheckvalueNormal({
            normal: false,
          });
        }
        break;
    }
  };

  const setValueFraseViasBiliares = (value) => {
    viasBiliaresDilatadas.checked === true
      ? setFrasesVias((arr) => [...arr, value.value])
      : removeItemString(value.value);
  };

  const subExame = "Vias Biliares";
  const titulo_exame = "Abdomen Superior";

  useEffect(() => {
    if (Object.keys(frasesVias).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesVias
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesVias
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesVias]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 24px 15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Vias Biliares" />

      <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
        <Checkbox
          isChecked={defaultValueNormal.defaultValueNormal}
          disabled={checkValueNormal.normal}
          value="Colédoco Normal "
          id="ColedocoNormal"
          onChange={(e) => {
            verificaChecked(e.target);
          }}
        >
          Colédoco Normal
        </Checkbox>
        <Checkbox
          disabled={checkValueColedocoEcstasiado.ColedocoEcstasiado}
          value="Colédoco Ectasiado "
          id="ColedocoEcasiado"
          onChange={(e) => {
            verificaChecked(e.target);
          }}
        >
          Colédoco Ectasiado
        </Checkbox>
        <Checkbox
          value="Vias Biliares Intra-Hepáticas Dilatadas"
          id="ViasBiliaresDilatadas"
          onChange={(e) => {
            setValueFraseViasBiliares(e.target);
          }}
        >
          Vias Biliares Intra-Hepáticas Dilatadas
        </Checkbox>
      </Box>
    </Box>
  );
}

export default ViasBiliares;
