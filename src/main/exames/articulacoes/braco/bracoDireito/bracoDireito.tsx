/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { BracoDireitoNormalContext } from "../../../../../context/BracoDireitoNormalContext";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function BracoDireito() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  let { BracoDireitoLaudoNormal } = useContext(BracoDireitoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  const [RoturaTendaoCheckBox, setRoturaTendaoCheckBox] = useState(true);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringRoturaTendao = () => {
    var string = "Rotura do tendão do biceps direito";
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
    BracoDireitoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [BracoDireitoLaudoNormal])


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
export default BracoDireito;
