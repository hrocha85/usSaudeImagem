/* eslint-disable array-callback-return */

import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoPataGansoDireito({ Disable }) {
  const altura = "100%";
  const largura = "100%";


  const [TendaoPataGansoDireito, setTendaoPataGansoDireito] = useState<any>([]);
  const [ConclusaoTendaoPataGansoDireito, setConclusaoTendaoPataGansoDireito] = useState<any>([]);

  const subExame = `Tendão "pata de ganso" joelho direito`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(TendaoPataGansoDireito).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        TendaoPataGansoDireito,
        ConclusaoTendaoPataGansoDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        TendaoPataGansoDireito,
        ConclusaoTendaoPataGansoDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [TendaoPataGansoDireito]);

  const [disableAspectoNormal, setdisableAspectoNormal] = useState(false)
  const [disableLiquidoBolsaSinovial, setdisableLiquidoBolsaSinovial] = useState(false)
  const [disableTendinopatia, setdisableTendinopatia] = useState(false)

  const [AspectoNormalCheckbox, setAspectoNormalCheckbox] = useState(false);
  const [TendinopatiaCheckbox, setTendinopatiaCheckbox] = useState(false);
  const [LiquidoBolsaSinovialCheckbox, setLiquidoBolsaSinovialCheckbox] = useState(false);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringAspectoNormal = () => {
    const string = 'Inserção distal dos tendões que compõem a "pata de ganso" (sartório, grácil e semitendinoso) com aspecto conservado.';
    if (AspectoNormalCheckbox) {
      setTendaoPataGansoDireito((arr) => [...arr, string]);
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
    const string = 'Inserção distal dos tendões que compõem a "pata de ganso" (sartório, grácil e semitendinoso) com aspecto conservado.';
    Normal ? setAspectoNormalCheckbox(true) : setAspectoNormalCheckbox(false)
  }, [Normal])

  useEffect(() => {
    criaStringAspectoNormal()
  }, [AspectoNormalCheckbox])

  const criaStringLTendinopatia = () => {
    const string = 'Espessamento e alteração ecotextural dos tendões que compõem a "pata de ganso" (sartório, grácil e semitendinoso) adjacente à sua inserção distal, compatível com tendinopatia.';
    const conclusao = 'Tendinopatia da "pata de ganso".'
    if (TendinopatiaCheckbox) {
      setTendaoPataGansoDireito((arr) => [...arr, string]);
      setConclusaoTendaoPataGansoDireito((arr) => [...arr, conclusao]);
      setdisableLiquidoBolsaSinovial(true)
      setdisableAspectoNormal(true)

    } else {
      setdisableAspectoNormal(false)
      setdisableLiquidoBolsaSinovial(false)
      removeItemString(string);
      removeItemStringConclusao(conclusao)
    }
  };
  useEffect(() => {
    criaStringLTendinopatia()
  }, [TendinopatiaCheckbox])
  const criaStringLiquidoBolsaSinovial = () => {
    const string = 'Presença de líquido na topografia da bolsa sinovial dos tendões que compõem a "pata de ganso" (sartório, grácil e semitendinoso), compatível com bursite';
    if (LiquidoBolsaSinovialCheckbox) {
      setTendaoPataGansoDireito((arr) => [...arr, string]);
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
    const index = TendaoPataGansoDireito.indexOf(value);

    if (index > -1) {
      TendaoPataGansoDireito.splice(index, 1);
      setTendaoPataGansoDireito((arr) => [...arr]);
    }
  };
  const removeItemStringConclusao = (value) => {
    const index = ConclusaoTendaoPataGansoDireito.indexOf(value);

    if (index > -1) {
      ConclusaoTendaoPataGansoDireito.splice(index, 1);
      setConclusaoTendaoPataGansoDireito((arr) => [...arr]);
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
export default TendaoPataGansoDireito;
