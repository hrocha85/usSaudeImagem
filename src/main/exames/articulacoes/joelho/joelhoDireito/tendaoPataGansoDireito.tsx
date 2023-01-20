/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { JoelhoDireitoNormalContext } from "../../../../../context/JoelhoDireitoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoPataGansoDireito() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  let { JoelhoDireitoLaudoNormal } = useContext(JoelhoDireitoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)
  const [disableAspectoNormal, setdisableAspectoNormal] = useState(false)
  const [disableLiquidoBolsaSinovial, setdisableLiquidoBolsaSinovial] = useState(false)
  const [disableLTendinopatia, setdisableLTendinopatia] = useState(false)

  const [AspectoNormalCheckbox, setAspectoNormalCheckbox] = useState(true);
  const [LTendinopatiaCheckbox, setLTendinopatiaCheckbox] = useState(true);
  const [LiquidoBolsaSinovialCheckbox, setLiquidoBolsaSinovialCheckbox] = useState(true);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringAspectoNormal = () => {
    var string = "TendaoQuadriceps direito com AspectoNormal";
    if (AspectoNormalCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setdisableLiquidoBolsaSinovial(true)
      setdisableLTendinopatia(true)
      setAspectoNormalCheckbox(false);
    } else {
      setdisableLTendinopatia(false)
      setdisableLiquidoBolsaSinovial(false)
      removeItemString(string);
    }
  };
  const criaStringLTendinopatia = () => {
    var string = "TendaoQuadriceps direito com LTendinopatia";
    if (LTendinopatiaCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setdisableLiquidoBolsaSinovial(true)
      setdisableAspectoNormal(true)
      setLTendinopatiaCheckbox(false);
    } else {
      setdisableAspectoNormal(false)
      setdisableLiquidoBolsaSinovial(false)
      removeItemString(string);
    }
  };
  const criaStringLiquidoBolsaSinovial = () => {
    var string = "TendaoQuadriceps direito com LiquidoBolsaSinovial";
    if (LTendinopatiaCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setdisableLTendinopatia(true)
      setdisableAspectoNormal(true)
      setLTendinopatiaCheckbox(false);
    } else {
      setdisableAspectoNormal(false)
      setdisableLTendinopatia(false)
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
    JoelhoDireitoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [JoelhoDireitoLaudoNormal])

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

      <TituloNomeExame titulo='Tendão da "pata de ganso"' />
      <TituloNomeExame titulo='(sartório. grácil. semitendinoso)' />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>
        <Checkbox
          isDisabled={disableTudo || disableAspectoNormal}
          onChange={() => {
            setAspectoNormalCheckbox(!AspectoNormalCheckbox);
            criaStringAspectoNormal();
          }}
        >
          Aspecto Normal
        </Checkbox>

        <Checkbox
          isDisabled={disableTudo || disableLTendinopatia}
          onChange={() => {
            setLTendinopatiaCheckbox(!LTendinopatiaCheckbox);
            criaStringLTendinopatia();
          }}
        >Tendinopatia ('Tendinite/Tendinopatia da pata de ganso')
        </Checkbox>

        <Checkbox
          isDisabled={disableTudo || disableLiquidoBolsaSinovial}
          onChange={() => {
            setLiquidoBolsaSinovialCheckbox(!LiquidoBolsaSinovialCheckbox);
            criaStringLiquidoBolsaSinovial();
          }}
        >Liquido na bolsa sinovial ('Bursite da pata de ganso')
        </Checkbox>

      </Stack>
    </Box>

  );
}
export default TendaoPataGansoDireito;
