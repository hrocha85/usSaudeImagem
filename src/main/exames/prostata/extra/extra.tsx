
import { Box, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

function Utero() {
  const altura = "100%";
  const largura = "40%";

  const [frasesExtras, setFrasesExtras] = useState<any>([]);

  const [ContornosIrregularesCheckBox, setContornosIrregularesCheckBox] =
    useState(true);
  const [ProstataEcotexturaCheckBox, setProstataEcotexturaCheckBox] =
    useState(true);
  const [BexigaEsforcoCheckBox, setBexigaEsforcoCheckBox] = useState(true);

  //Funcoes DIU Posicionado - Inicio
  const criaStringContornosIrregulares = () => {
    const string = "Contornos prostáticos irregulares";
    if (ContornosIrregularesCheckBox) {
      setFrasesExtras((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };

  const criaStringProstataEcotextura = () => {
    const string = "Próstata com ecotextura heterogênea";
    if (ProstataEcotexturaCheckBox) {
      setFrasesExtras((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };

  const criaStringBexigaEsforco = () => {
    const string = "Bexiga com esforço";
    if (BexigaEsforcoCheckBox) {
      setFrasesExtras((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    const index = frasesExtras.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesExtras.splice(index, 1);
      setFrasesExtras((arr) => [...arr]);
    }
  };

  const subExame = "Extras";
  const titulo_exame = "Próstata";

  useEffect(() => {
    if (Object.keys(frasesExtras).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesExtras
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesExtras
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesExtras]);

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
      <Box gap="30px">
        <Box>
          <Checkbox
            onChange={() => {
              criaStringContornosIrregulares();
              setContornosIrregularesCheckBox(!ContornosIrregularesCheckBox);
            }}
          >
            Contornos Prostáticos irregulares
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            onChange={() => {
              criaStringProstataEcotextura();
              setProstataEcotexturaCheckBox(!ProstataEcotexturaCheckBox);
            }}
          >
            Próstata com ecotextura heterogênea
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            onChange={() => {
              criaStringBexigaEsforco();
              setBexigaEsforcoCheckBox(!BexigaEsforcoCheckBox);
            }}
          >
            Bexiga de esforço
          </Checkbox>
        </Box>
      </Box>
    </Box>
  );
}
export default Utero;
