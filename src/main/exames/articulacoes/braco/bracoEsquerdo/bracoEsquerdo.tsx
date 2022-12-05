/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { BracoEsquerdoNormalContext } from "../../../../../context/BracoEsquerdoNormalContext";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function BracoEsquerdo() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  let { BracoEsquerdoLaudoNormal } = useContext(BracoEsquerdoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  const [RoturaTendaoCheckBox, setRoturaTendaoCheckBox] = useState(true);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringRoturaTendao = () => {
    var string = "Rotura do tendão do biceps Esquerdo";
    if (RoturaTendaoCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setRoturaTendaoCheckBox(false);
    } else {
      removeItemString(string);
    }
  };



  const removeItemString = (value) => {
    var index = laudoPrin.indexOf(value);

    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
  };

  useEffect(() => {
    BracoEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [BracoEsquerdoLaudoNormal])


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

      <Box columnGap='10px' display="flex" flexWrap="wrap">

        <Checkbox isDisabled={disableTudo}
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
