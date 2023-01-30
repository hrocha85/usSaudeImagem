/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { JoelhoEsquerdoNormalContext } from "../../../../../context/JoelhoEsquerdoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";
import { Format_Laudo } from "../../../../component/function_format_laudo";

function TendaoPataGansoEsquerdo() {
  const altura = "100%";
  const largura = "95%";


  const [TendaoPataGansoEsquerdo, setTendaoPataGansoEsquerdo] = useState<any>([]);

  const subExame = `Tendão "pata de ganso" joelho Esquerdo`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(TendaoPataGansoEsquerdo).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        TendaoPataGansoEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        TendaoPataGansoEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [TendaoPataGansoEsquerdo]);


  let { JoelhoEsquerdoLaudoNormal } = useContext(JoelhoEsquerdoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)
  const [disableAspectoNormal, setdisableAspectoNormal] = useState(false)
  const [disableLiquidoBolsaSinovial, setdisableLiquidoBolsaSinovial] = useState(false)
  const [disableTendinopatia, setdisableTendinopatia] = useState(false)

  const [AspectoNormalCheckbox, setAspectoNormalCheckbox] = useState(false);
  const [TendinopatiaCheckbox, setTendinopatiaCheckbox] = useState(false);
  const [LiquidoBolsaSinovialCheckbox, setLiquidoBolsaSinovialCheckbox] = useState(false);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringAspectoNormal = () => {
    var string = "TendaoQuadriceps Esquerdo com AspectoNormal";
    if (AspectoNormalCheckbox) {
      setTendaoPataGansoEsquerdo((arr) => [...arr, string]);
      setdisableLiquidoBolsaSinovial(true)
      setdisableTendinopatia(true)
    } else {
      setdisableTendinopatia(false)
      setdisableLiquidoBolsaSinovial(false)
      removeItemString(string);
    }
  };
  useEffect(() => {
    criaStringAspectoNormal()
  }, [AspectoNormalCheckbox])
  const criaStringLTendinopatia = () => {
    var string = "TendaoQuadriceps Esquerdo com LTendinopatia";
    if (TendinopatiaCheckbox) {
      setTendaoPataGansoEsquerdo((arr) => [...arr, string]);
      setdisableLiquidoBolsaSinovial(true)
      setdisableAspectoNormal(true)

    } else {
      setdisableAspectoNormal(false)
      setdisableLiquidoBolsaSinovial(false)
      removeItemString(string);
    }
  };
  useEffect(() => {
    criaStringLTendinopatia()
  }, [TendinopatiaCheckbox])
  const criaStringLiquidoBolsaSinovial = () => {
    var string = "TendaoQuadriceps Esquerdo com LiquidoBolsaSinovial";
    if (LiquidoBolsaSinovialCheckbox) {
      setTendaoPataGansoEsquerdo((arr) => [...arr, string]);
      setdisableTendinopatia(true)
      setdisableAspectoNormal(true)

    } else {
      setdisableAspectoNormal(false)
      setdisableTendinopatia(false)
      removeItemString(string);
    }
  };
  useEffect(() => {
    criaStringLiquidoBolsaSinovial()
  }, [LiquidoBolsaSinovialCheckbox])

  const removeItemString = (value) => {
    var index = TendaoPataGansoEsquerdo.indexOf(value);

    if (index > -1) {
      TendaoPataGansoEsquerdo.splice(index, 1);
      setTendaoPataGansoEsquerdo((arr) => [...arr]);
    }
  };

  useEffect(() => {
    JoelhoEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [JoelhoEsquerdoLaudoNormal])

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
          }}
        >
          Aspecto Normal
        </Checkbox>

        <Checkbox
          isDisabled={disableTudo || disableTendinopatia}
          onChange={() => {
            setTendinopatiaCheckbox(!TendinopatiaCheckbox);
          }}
        >Tendinopatia ('Tendinite/Tendinopatia da pata de ganso')
        </Checkbox>

        <Checkbox
          isDisabled={disableTudo || disableLiquidoBolsaSinovial}
          onChange={() => {
            setLiquidoBolsaSinovialCheckbox(!LiquidoBolsaSinovialCheckbox);
          }}
        >Liquido na bolsa sinovial ('Bursite da pata de ganso')
        </Checkbox>

      </Stack>
    </Box>

  );
}
export default TendaoPataGansoEsquerdo;
