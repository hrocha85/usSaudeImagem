/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function BolsaSubacromial_SubdeltoideaEsquerdo({ Disable }) {
  const altura = "100%";
  const largura = "100%";


  const [fraseBolsaSubacromialSubdeltoidea, setFraseBolsaSubacromialSubdeltoidea] = useState<any>([]);
  const [ConclusaoBolsaSubacromialSubdeltoidea, setConclusaoBolsaSubacromialSubdeltoidea] = useState<any>([]);

  const subExame = 'Ombro- Bolsa Subacromial-subdeltoidea Esquerdo'
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(fraseBolsaSubacromialSubdeltoidea).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        fraseBolsaSubacromialSubdeltoidea,
        ConclusaoBolsaSubacromialSubdeltoidea
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        fraseBolsaSubacromialSubdeltoidea,
        ConclusaoBolsaSubacromialSubdeltoidea
      ).Format_Laudo_Create_Storage();
    }
  }, [fraseBolsaSubacromialSubdeltoidea]);


  const [disableLiquidoSelect, setdisableLiquidoSelect] = useState(true);
  const [SelectLiquido, setSelectLiquido] = useState("");

  const [disableSemLiquido, setdisableSemLiquido] = useState(false);
  const [disableLiquido, setdisableLiquido] = useState(false);

  const [SemLiquidoCheckbox, setSemLiquidoCheckbox] = useState(false);
  const [LiquidoCheckbox, setLiquidoCheckbox] = useState(false);


  const [DisableEspessamentoSinovia, setDisableEspessamentoSinovia] = useState(true);
  const [EspessamentoSinoviaCheckbox, setEspessamentoSinoviaCheckbox] = useState(false);

  const criaStringLiquido = (selectLiquido) => {
    removeLiquido();
    var string;
    const conclusao = 'Líquido na bolsa subacromial-subdeltoidea.'
    if (selectLiquido !== '' && EspessamentoSinoviaCheckbox) {
      string = `Presença de líquido em pequena quantidade na bolsa ${selectLiquido}, com espessamento sinovial associado.`;
      setFraseBolsaSubacromialSubdeltoidea((arr) => [...arr, string]);
      setConclusaoBolsaSubacromialSubdeltoidea((arr) => [...arr, conclusao]);
    } else if (selectLiquido !== '') {
      string = `Presença de líquido em pequena quantidade na bolsa ${selectLiquido} `;
      setFraseBolsaSubacromialSubdeltoidea((arr) => [...arr, string]);
      setConclusaoBolsaSubacromialSubdeltoidea((arr) => [...arr, conclusao]);
    }
  };

  const removeLiquido = () => {
    fraseBolsaSubacromialSubdeltoidea.map((e) => {
      if (e.includes("Presença de líquido em pequena quantidade na bolsa")) {
        var index = fraseBolsaSubacromialSubdeltoidea.indexOf(e);

        if (index > -1) {
          fraseBolsaSubacromialSubdeltoidea.splice(index, 1);
          setFraseBolsaSubacromialSubdeltoidea((arr) => [...arr]);
        }
      }
    });
    ConclusaoBolsaSubacromialSubdeltoidea.map((e) => {
      if (e.includes("Líquido na bolsa subacromial-subdeltoidea.")) {
        var index = ConclusaoBolsaSubacromialSubdeltoidea.indexOf(e);

        if (index > -1) {
          ConclusaoBolsaSubacromialSubdeltoidea.splice(index, 1);
          setConclusaoBolsaSubacromialSubdeltoidea((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select("Líquido na bolsa subacromial-subdeltoidea.")
        }
      }
    });
  };

  const criaStringSemLiquido = () => {
    var string = "Ausência de líquido na bolsa subacromial-subdeltoidea.";
    SemLiquidoCheckbox ? setFraseBolsaSubacromialSubdeltoidea((arr) => [...arr, string]) : removeItemString(string);
  };

  const [Normal, setNormal] = useState(false)

  useEffect(() => {
    Disable ? setNormal(true) : setNormal(false)
  }, [Disable])

  useEffect(() => {
    var string = "Ausência de líquido na bolsa subacromial-subdeltoidea.";
    Normal ? setSemLiquidoCheckbox(!SemLiquidoCheckbox) : removeItemString(string)
  }, [Normal])

  useEffect(() => {
    criaStringSemLiquido()
  }, [SemLiquidoCheckbox])

  const removeItemString = (value) => {
    var index = fraseBolsaSubacromialSubdeltoidea.indexOf(value);
    if (index > -1) {
      fraseBolsaSubacromialSubdeltoidea.splice(index, 1);
      setFraseBolsaSubacromialSubdeltoidea((arr) => [...arr]);
    }
  };

  useEffect(() => {
    if (SemLiquidoCheckbox) {
      setdisableLiquido(true)
    } else {
      setdisableLiquido(false)
    }
  }, [SemLiquidoCheckbox])


  useEffect(() => {
    if (LiquidoCheckbox) {
      setdisableLiquidoSelect(false);
      setDisableEspessamentoSinovia(false)
      setdisableSemLiquido(true)
    } else {
      removeLiquido();
      setSelectLiquido('')
      setDisableEspessamentoSinovia(true)
      setdisableLiquidoSelect(true);
      setdisableSemLiquido(false)
    }
  }, [LiquidoCheckbox]);

  useEffect(() => {
    criaStringLiquido(SelectLiquido);
  }, [SelectLiquido, EspessamentoSinoviaCheckbox]);

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
      <TituloNomeExame titulo="Bolsa Subacromial-subdeltoidea" />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>

        <Checkbox
          isChecked={Normal}
          isDisabled={disableSemLiquido}
          onChange={() => {
            setNormal(!Normal)
            setSemLiquidoCheckbox(!SemLiquidoCheckbox);
          }}
        >
          Sem líquido
        </Checkbox>

        <Box display='flex' flexWrap='wrap' gap='10px'>
          <Checkbox
            isDisabled={disableLiquido}
            onChange={() => {
              setLiquidoCheckbox(!LiquidoCheckbox);
            }}
          >
            Liquido
          </Checkbox>
          <Text alignSelf='center'>quantidade:</Text>
          <Select
            w='150px'
            isDisabled={disableLiquidoSelect}
            value={SelectLiquido}
            onChange={(e) => {
              setSelectLiquido(e.target.value);
            }}
          >
            <option value="">Não citar volume</option>
            <option value="pequena">pequena</option>
            <option value="moderada">moderada</option>
            <option value="acentuada">acentuada</option>
          </Select>

          <Checkbox
            isDisabled={DisableEspessamentoSinovia}
            onChange={() => {
              setEspessamentoSinoviaCheckbox(!EspessamentoSinoviaCheckbox);
            }}
          >
            com espessamento de sinóvia
          </Checkbox>
        </Box>

      </Stack >
    </Box >

  );
}
export default BolsaSubacromial_SubdeltoideaEsquerdo;
