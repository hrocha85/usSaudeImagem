/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function ViasBiliares() {
  const altura = "100%";
  const largura = "66%";

  const [FrasesVias, setFrasesVias] = useState<any>([]);
  const [ConclusaoVias, setConclusaoVias] = useState<any>([]);

  const [NormalCheckbox, setNormalCheckbox] = useState(false)
  const [EctasiadoCheckbox, setEctasiadoCheckbox] = useState(false)
  const [ViasBiliaresCheckbox, setViasBiliaresCheckbox] = useState(false)

  const [DisableViasBiliaresCheckbox, setDisableViasBiliaresCheckbox] = useState(true)

  useEffect(() => {
    let stringNormal = 'extra-hepáticas sem dilatações.'
    const conclusao = 'Dilatação de vias biliares intra-hepáticas.'
    const stringViasBiliares = 'Presença de sinais de dilatação de vias biliares intra-hepáticas.'
    console.log('aqui')
    removeItemSelect('extra-hepáticas sem dilatações.')
    removeItemConclusao(conclusao)
    if (NormalCheckbox) {
      if (ViasBiliaresCheckbox) {
        stringNormal = `Intra e ${stringNormal}`
        setFrasesVias((arr) => [...arr, stringViasBiliares])
        setConclusaoVias((arr) => [...arr, conclusao])
      } else {
        removeItemSelect('extra-hepáticas sem dilatações.')
        removeItemSelect(stringViasBiliares)
        removeItemConclusao(conclusao)
      }
      removeItemSelect('extra-hepáticas sem dilatações.')
      setFrasesVias((arr) => [...arr, stringNormal])
    } else {
      removeItemSelect('extra-hepáticas sem dilatações.')
    }
  }, [NormalCheckbox, ViasBiliaresCheckbox])

  useEffect(() => {
    let stringEctasiado = 'Colédoco ectasiado.'
    const conclusaoEctasiado = 'Colédoco ectasiado.'
    const conclusao = 'Dilatação de vias biliares intra-hepáticas.'
    const stringViasBiliares = 'Presença de sinais de dilatação de vias biliares intra-hepáticas.'

    removeItemSelect('Colédoco ectasiado.')
    removeItemConclusao(conclusao)
    if (EctasiadoCheckbox) {
      if (ViasBiliaresCheckbox) {
        setConclusaoVias((arr) => [...arr, conclusao])
        setFrasesVias((arr) => [...arr, stringViasBiliares])
      } else {
        removeItemSelect('Colédoco ectasiado.')
        removeItemSelect(stringViasBiliares)
        removeItemConclusao(conclusao)
      }
      setConclusaoVias((arr) => [...arr, conclusaoEctasiado])
      setFrasesVias((arr) => [...arr, stringEctasiado])
    } else {
      removeItemConclusao(conclusao)
      removeItemConclusao(conclusaoEctasiado)
      removeItemSelect('Colédoco ectasiado.')
    }
  }, [EctasiadoCheckbox, ViasBiliaresCheckbox])

  useEffect(() => {
    NormalCheckbox || EctasiadoCheckbox ? setDisableViasBiliaresCheckbox(false) : setDisableViasBiliaresCheckbox(true)
  }, [EctasiadoCheckbox, NormalCheckbox])

  const removeItemSelect = (value) => {
    FrasesVias.map((e) => {
      if (e.includes(value)) {
        var index = FrasesVias.indexOf(e);
        if (index > -1) {
          FrasesVias.splice(index, 1);
          setFrasesVias((arr) => [...arr]);
        }
      }
    });
  }
  const removeItemConclusao = (value) => {
    var index = ConclusaoVias.indexOf(value);
    if (index > -1) {
      ConclusaoVias.splice(index, 1);
      setConclusaoVias((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };
  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    var index = FrasesVias.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      FrasesVias.splice(index, 1);
      setFrasesVias((arr) => [...arr]);
    }
  };

  const subExame = "Vias Biliares";
  const titulo_exame = "Abdomen Superior";

  useEffect(() => {
    if (Object.keys(FrasesVias).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesVias,
        ConclusaoVias
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesVias,
        ConclusaoVias
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesVias]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 24px 15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Vias Biliares" />

      <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
        <Checkbox
          isDisabled={EctasiadoCheckbox}
          onChange={(e) => setNormalCheckbox(!NormalCheckbox)}
        >
          Colédoco Normal
        </Checkbox>
        <Checkbox
          isDisabled={NormalCheckbox}
          onChange={(e) => setEctasiadoCheckbox(!EctasiadoCheckbox)}
        >
          Colédoco Ectasiado
        </Checkbox>
        <Checkbox
          isDisabled={DisableViasBiliaresCheckbox}
          onChange={(e) => setViasBiliaresCheckbox(!ViasBiliaresCheckbox)}
        >
          Vias Biliares Intra-Hepáticas Dilatadas
        </Checkbox>
      </Box>
    </Box>
  );
}

export default ViasBiliares;
