/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { NormalContext } from "../../../../context/NormalContext";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function ParedeAbdominalNormal() {
  const altura = "100%";
  const largura = "225px";

  const [frasesNormal, setFrasesNormal] = useState<any>([]);

  let { laudoNormal, setLaudoNormal } = useContext(NormalContext);

  const verificaChecked = (value) => {
    if (value.checked === true) {
      setLaudoNormal(true);
      setFrasesNormal((arr) => [...arr, "Parede abdominal íntegra."]);
    } else {
      removeItemString();
      setLaudoNormal(false);
    }
  };
  const removeItemString = () => {
    // console.log("valor remove = ", value);
    var index = frasesNormal.indexOf("Parede abdominal íntegra.");
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesNormal.splice(index, 1);
      setFrasesNormal((arr) => [...arr]);
    }
  };

  const subExame = "Parede Abdominal ";
  const titulo_exame = "Partes Moles";

  useEffect(() => {
    if (Object.keys(frasesNormal).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesNormal
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesNormal
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesNormal]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px 15px 20px 15px"
      mt="10px"
    >
      <TituloNomeExame titulo="Parede Abdominal" />

      <Box gap="15px" display="flex" flexWrap="wrap">
        <Box w="100%">
          <Checkbox
            id="normal"
            onChange={(e) => {
              verificaChecked(e.target);
            }}
            mr="30px"
          >
            Normal
          </Checkbox>
        </Box>
      </Box>
    </Box>
  );
}
export default ParedeAbdominalNormal;
