import { Box, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Idade({ Disable }) {
  const altura = "100%";
  const largura = "66%";

  const [frasesIdade, setFrasesIdade] = useState<any>([]);

  const [checkValueAdulto, setCheckvalueAdulto] = useState({
    normal: false,
  });
  const [checkValueMenor14Anos, setCheckvalueMenor14Anos] = useState({
    Menor14Anos: false,
  });

  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    var index = frasesIdade.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesIdade.splice(index, 1);
      setFrasesIdade((arr) => [...arr]);
    }
  };

  const verificaChecked = (value) => {
    switch (value.id) {
      case "Adulto":
        if (value.checked === true) {
          setFrasesIdade((arr) => [...arr, value.value]);
          setCheckvalueMenor14Anos({
            Menor14Anos: true,
          });
        } else {
          removeItemString(value.value);
          setCheckvalueMenor14Anos({
            Menor14Anos: false,
          });
        }
        break;
      case "Menor14Anos":
        if (value.checked === true) {
          setFrasesIdade((arr) => [...arr, value.value]);
          setCheckvalueAdulto({
            normal: true,
          });
        } else {
          removeItemString(value.value);
          setCheckvalueAdulto({
            normal: false,
          });
        }
        break;
    }
  };
  const subExame = "Idade";
  const titulo_exame = "Doppler da Tireóide";

  useEffect(() => {
    if (Object.keys(frasesIdade).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesIdade
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesIdade
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesIdade]);

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
      <TituloNomeExame titulo="Idade" />

      <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
        <Checkbox
          isDisabled={Disable}
          disabled={checkValueAdulto.normal}
          value="Adulto "
          id="Adulto"
          onChange={(e) => {
            verificaChecked(e.target);
          }}
        >
          Adulto
        </Checkbox>
        <Checkbox
          isDisabled={Disable}
          disabled={checkValueMenor14Anos.Menor14Anos}
          value="Menor de 14 anos "
          id="Menor14Anos"
          onChange={(e) => {
            verificaChecked(e.target);
          }}
        >
          Menor de 14 anos
        </Checkbox>
      </Box>
    </Box>
  );
}

export default Idade;
