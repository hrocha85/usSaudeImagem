import { Box, Checkbox } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { NormalContext } from "../../../../context/NormalContext";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function EcotexturaParenquima({ Disable }) {
  const altura = "100%";
  const largura = "66%";

  const [frasesECO, setFrasesECO] = useState<any>([]);

  const { laudoNormal } = useContext(NormalContext);

  const [defaultValueNormal, setDefaultValueNormal] = useState({
    defaultValueNormal: false,
  });

  const [checkValueNormal, setCheckvalueNormal] = useState({
    normal: false,
  });
  const [checkValueHeterogenea, setCheckvalueHeterogenea] = useState({
    Heterogenea: false,
  });

  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    var index = frasesECO.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesECO.splice(index, 1);
      setFrasesECO((arr) => [...arr]);
    }
  };

  const removeNormal = () => {
    setFrasesECO((arr) => []);
  };

  useEffect(() => {
    if (laudoNormal === true) {
      setDefaultValueNormal({ defaultValueNormal: true });
      setFrasesECO((arr) => [...arr, "Tireoide Normal "]);
      console.log(frasesECO);
    } else {
      setDefaultValueNormal({ defaultValueNormal: false });
      removeNormal();
    }
  }, [laudoNormal]);

  const verificaChecked = (value) => {
    switch (value.id) {
      case "Normal":
        if (value.checked === true) {
          setDefaultValueNormal({ defaultValueNormal: true });
          setFrasesECO((arr) => [...arr, value.value]);
          setCheckvalueHeterogenea({
            Heterogenea: true,
          });
        } else {
          setDefaultValueNormal({ defaultValueNormal: false });
          removeItemString(value.value);
          setCheckvalueHeterogenea({
            Heterogenea: false,
          });
        }
        break;
      case "Heterogenea":
        if (value.checked === true) {
          setFrasesECO((arr) => [...arr, value.value]);
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

  const subExame = "Ecotextura do Parênquima";
  const titulo_exame = "Doppler da Tireóide";

  useEffect(() => {
    if (Object.keys(frasesECO).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesECO
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesECO
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesECO]);

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
      <TituloNomeExame titulo="Ecotextura do Parênquima" />

      <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
        <Checkbox
          isChecked={defaultValueNormal.defaultValueNormal}
          disabled={checkValueNormal.normal || Disable}
          value="Normal "
          id="Normal"
          onChange={(e) => {
            verificaChecked(e.target);
          }}
        >
          Normal
        </Checkbox>
        <Checkbox
          disabled={checkValueHeterogenea.Heterogenea || Disable}
          value="Heterogênea "
          id="Heterogenea"
          onChange={(e) => {
            verificaChecked(e.target);
          }}
        >
          Heterogênea
        </Checkbox>
      </Box>
    </Box>
  );
}

export default EcotexturaParenquima;
