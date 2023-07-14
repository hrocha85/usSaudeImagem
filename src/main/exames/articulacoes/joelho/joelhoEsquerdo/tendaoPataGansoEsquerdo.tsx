/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoPataGansoEsquerdo({ Disable }) {
  const altura = "100%";
  const largura = "100%";


  const [TendaoPataGansoEsquerdo, setTendaoPataGansoEsquerdo] = useState<any>([]);
  const [ConclusaoTendaoPataGansoEsquerdo, setConclusaoTendaoPataGansoEsquerdo] = useState<any>([]);

  const subExame = `Tendão "pata de ganso" joelho esquerdo`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(TendaoPataGansoEsquerdo).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        TendaoPataGansoEsquerdo,
        ConclusaoTendaoPataGansoEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        TendaoPataGansoEsquerdo,
        ConclusaoTendaoPataGansoEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [TendaoPataGansoEsquerdo]);


  const [disableAspectoNormal, setdisableAspectoNormal] = useState(false)
  const [disableLiquidoBolsaSinovial, setdisableLiquidoBolsaSinovial] = useState(false)
  const [disableTendinopatia, setdisableTendinopatia] = useState(false)

  const [AspectoNormalCheckbox, setAspectoNormalCheckbox] = useState(false);
  const [TendinopatiaCheckbox, setTendinopatiaCheckbox] = useState(false);
  const [LiquidoBolsaSinovialCheckbox, setLiquidoBolsaSinovialCheckbox] = useState(false);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringAspectoNormal = () => {
    var string = 'Inserção distal dos tendões que compõem a "pata de ganso" (sartório, grácil e semitendinoso) com aspecto conservado.';
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

  const [Normal, setNormal] = useState(false)

  useEffect(() => {
    Disable ? setNormal(true) : setNormal(false)
  }, [Disable])

  useEffect(() => {
    var string = 'Inserção distal dos tendões que compõem a "pata de ganso" (sartório, grácil e semitendinoso) com aspecto conservado.';
    Normal ? setAspectoNormalCheckbox(true) : setAspectoNormalCheckbox(false)
  }, [Normal])


  useEffect(() => {
    criaStringAspectoNormal()
  }, [AspectoNormalCheckbox])
  const criaStringLTendinopatia = () => {
    var string = 'Espessamento e alteração ecotextural dos tendões que compõem a "pata de ganso" (sartório, grácil e semitendinoso) adjacente à sua inserção distal, compatível com tendinopatia.';
    const conclusao = 'Tendinopatia da "pata de ganso".'
    if (TendinopatiaCheckbox) {
      setTendaoPataGansoEsquerdo((arr) => [...arr, string]);
      setConclusaoTendaoPataGansoEsquerdo((arr) => [...arr, conclusao]);
      setdisableLiquidoBolsaSinovial(true)
      setdisableAspectoNormal(true)
    } else {
      setdisableAspectoNormal(false)
      setdisableLiquidoBolsaSinovial(false)
      removeItemString(string);
      removeItemStringConclusao(conclusao);
    }
  };
  useEffect(() => {
    criaStringLTendinopatia()
  }, [TendinopatiaCheckbox])
  const criaStringLiquidoBolsaSinovial = () => {
    var string = 'Presença de líquido na topografia da bolsa sinovial dos tendões que compõem a "pata de ganso" (sartório, grácil e semitendinoso), compatível com bursite';
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
  const removeItemStringConclusao = (value) => {
    var index = ConclusaoTendaoPataGansoEsquerdo.indexOf(value);

    if (index > -1) {
      ConclusaoTendaoPataGansoEsquerdo.splice(index, 1);
      setConclusaoTendaoPataGansoEsquerdo((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value)
    }
  };


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
          isChecked={Normal}
          isDisabled={disableAspectoNormal}
          onChange={() => {
            setNormal(!Normal)
            setAspectoNormalCheckbox(!AspectoNormalCheckbox);
          }}
        >
          Aspecto Normal
        </Checkbox>

        <Checkbox
          isDisabled={disableTendinopatia}
          onChange={() => {
            setTendinopatiaCheckbox(!TendinopatiaCheckbox);
          }}
        >Tendinopatia ('Tendinite/Tendinopatia da pata de ganso')
        </Checkbox>

        <Checkbox
          isDisabled={disableLiquidoBolsaSinovial}
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
