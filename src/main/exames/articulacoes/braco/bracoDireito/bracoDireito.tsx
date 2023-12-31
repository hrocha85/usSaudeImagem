/* eslint-disable array-callback-return */

import { Box, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function BracoDireito() {
  const altura = "100%";
  const largura = "100%";

  const [frasesBracoDireito, setFrasesBracoDireito] = useState<any>([]);

  const [disableTudo, setDisableTudo] = useState(false);

  const [RoturaTendaoCheckBox, setRoturaTendaoCheckBox] = useState(true);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringRoturaTendao = () => {
    const string = "Rotura do tendão do biceps direito";
    if (RoturaTendaoCheckBox) {
      setFrasesBracoDireito((arr) => [...arr, string]);
      setRoturaTendaoCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    const index = frasesBracoDireito.indexOf(value);

    if (index > -1) {
      frasesBracoDireito.splice(index, 1);
      setFrasesBracoDireito((arr) => [...arr]);
    }
  };

  const subExame = "Braço Direito";
  const titulo_exame = "Articulações";

  useEffect(() => {
    if (Object.keys(frasesBracoDireito).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesBracoDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesBracoDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesBracoDireito]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Braço" />

      <Box columnGap="10px" display="flex" flexWrap="wrap">
        <Checkbox
          isDisabled={disableTudo}
          onChange={() => {
            setRoturaTendaoCheckBox(true);
            criaStringRoturaTendao();
          }}
        >
          Rotura do tendão do biceps
        </Checkbox>
      </Box>
    </Box>
  );
}
export default BracoDireito;
