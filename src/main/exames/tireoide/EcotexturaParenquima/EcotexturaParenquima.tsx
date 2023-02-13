/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { NormalContext } from "../../../../context/NormalContext";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function EcotexturaParenquima() {
  const altura = "100%";
  const largura = "66%";

  const [FrasesECO, setFrasesECO] = useState<any>([]);

  const { laudoNormal } = useContext(NormalContext);

  const [NormalCheckbox, setNormalCheckbox] = useState(false)
  const [InespecificaCheckbox, setInespecificaCheckbox] = useState(false)
  const [TireoiditeCheckbox, setTireoiditeCheckbox] = useState(false)

  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    var index = FrasesECO.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      FrasesECO.splice(index, 1);
      setFrasesECO((arr) => [...arr]);
    }
  };

  useEffect(() => {
    const string = 'ecotextura normal'
    NormalCheckbox ? setFrasesECO((arr) => [...arr, string]) : removeItemString(string)
  }, [NormalCheckbox])

  useEffect(() => {
    const string = 'Inespecifica'
    InespecificaCheckbox ? setFrasesECO((arr) => [...arr, string]) : removeItemString(string)
  }, [InespecificaCheckbox])

  useEffect(() => {
    const string = 'Tireoidite'
    TireoiditeCheckbox ? setFrasesECO((arr) => [...arr, string]) : removeItemString(string)
  }, [TireoiditeCheckbox])

  const subExame = "Ecotextura do Parênquima";
  const titulo_exame = "Tireóide";

  useEffect(() => {
    if (Object.keys(FrasesECO).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesECO
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesECO
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesECO]);

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
          onChange={() => {
            setNormalCheckbox(!NormalCheckbox)
          }}
        >
          Parênquima com ecotextura normal
        </Checkbox>
        <Checkbox
          onChange={() => {
            setInespecificaCheckbox(!InespecificaCheckbox)
          }}
        >
          Alteração textural difusa inespecifica
        </Checkbox>
        <Checkbox
          onChange={() => {
            setTireoiditeCheckbox(!TireoiditeCheckbox)
          }}
        >
          Alteração textural tipo tireoidite
        </Checkbox>
      </Box>
    </Box>
  );
}

export default EcotexturaParenquima;
