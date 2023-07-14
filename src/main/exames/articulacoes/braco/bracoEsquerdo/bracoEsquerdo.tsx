/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function BracoEsquerdo() {
  const altura = "100%";
  const largura = "100%";

  const [frasesBracoEsquerdo, setFrasesBracoEsquerdo] = useState<any>([]);

  const [disableTudo, setDisableTudo] = useState(false);

  const [RoturaTendaoCheckBox, setRoturaTendaoCheckBox] = useState(true);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringRoturaTendao = () => {
    var string = "Rotura do tendão do biceps Esquerdo";
    if (RoturaTendaoCheckBox) {
      setFrasesBracoEsquerdo((arr) => [...arr, string]);
      setRoturaTendaoCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    var index = frasesBracoEsquerdo.indexOf(value);

    if (index > -1) {
      frasesBracoEsquerdo.splice(index, 1);
      setFrasesBracoEsquerdo((arr) => [...arr]);
    }
  };


  const subExame = "Braço Esquerdo";
  const titulo_exame = "Articulações";

  useEffect(() => {
    if (Object.keys(frasesBracoEsquerdo).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesBracoEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesBracoEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesBracoEsquerdo]);

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
export default BracoEsquerdo;
