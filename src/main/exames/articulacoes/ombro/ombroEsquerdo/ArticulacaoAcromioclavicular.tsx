/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { OmbroEsquerdoNormalContext } from "../../../../../context/OmbroEsquerdoNormalContext";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function ArticulacaoAcromioclavicularEsquerdo() {
  const altura = "100%";
  const largura = "100%";

  let { OmbroEsquerdoLaudoNormal } = useContext(OmbroEsquerdoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)



  const [fraseBolsaSubacromialSubdeltoidea, setFraseBolsaSubacromialSubdeltoidea] = useState<any>([]);

  const subExame = 'Articulação acromioclavicular ombro Esquerdo'
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(fraseBolsaSubacromialSubdeltoidea).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        fraseBolsaSubacromialSubdeltoidea
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        fraseBolsaSubacromialSubdeltoidea
      ).Format_Laudo_Create_Storage();
    }
  }, [fraseBolsaSubacromialSubdeltoidea]);


  const [disableNormal, setdisableNormal] = useState(false);
  const [disableOsteofitos, setdisableOsteofitos] = useState(false);

  const [NormalCheckbox, setNormalCheckbox] = useState(false);
  const [OsteofitosCheckbox, setOsteofitosCheckbox] = useState(false);


  const [DisableEspessamentoCapsulosinovial, setDisableEspessamentoCapsulosinovial] = useState(true);
  const [EspessamentoCapsulosinovialCheckbox, setEspessamentoCapsulosinovialCheckbox] = useState(false);

  const criaStringOsteofitos = () => {
    removeOsteofitos();
    var string = 'Presença de osteófitos marginais na articulação acromioclavicular '
    if (OsteofitosCheckbox) {
      if (EspessamentoCapsulosinovialCheckbox) {
        string = `${string} com espessamento Capsulosinovial`;
      }
      setFraseBolsaSubacromialSubdeltoidea((arr) => [...arr, string]);
    }
  }

  useEffect(() => {
    criaStringOsteofitos();
  }, [OsteofitosCheckbox, EspessamentoCapsulosinovialCheckbox]);


  const removeOsteofitos = () => {
    fraseBolsaSubacromialSubdeltoidea.map((e) => {
      if (e.includes("Presença de osteófitos marginais na articulação acromioclavicular")) {
        var index = fraseBolsaSubacromialSubdeltoidea.indexOf(e);

        if (index > -1) {
          fraseBolsaSubacromialSubdeltoidea.splice(index, 1);
          setFraseBolsaSubacromialSubdeltoidea((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringNormal = () => {
    var string = "Articulação acromioclavicular de aspecto preservado.";
    NormalCheckbox ? setFraseBolsaSubacromialSubdeltoidea((arr) => [...arr, string]) : removeItemString(string);

  };

  useEffect(() => {
    criaStringNormal()
  }, [NormalCheckbox])

  const removeItemString = (value) => {
    var index = fraseBolsaSubacromialSubdeltoidea.indexOf(value);
    if (index > -1) {
      fraseBolsaSubacromialSubdeltoidea.splice(index, 1);
      setFraseBolsaSubacromialSubdeltoidea((arr) => [...arr]);
    }
  };

  useEffect(() => {
    if (NormalCheckbox) {
      setdisableOsteofitos(true)
    } else {
      setdisableOsteofitos(false)
    }
  }, [NormalCheckbox])


  useEffect(() => {
    if (OsteofitosCheckbox) {
      setDisableEspessamentoCapsulosinovial(false)
      setdisableNormal(true)
    } else {
      removeOsteofitos();
      setDisableEspessamentoCapsulosinovial(true)
      setdisableNormal(false)
    }
  }, [OsteofitosCheckbox]);


  useEffect(() => {
    OmbroEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [OmbroEsquerdoLaudoNormal])

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
      <TituloNomeExame titulo="Articulação Acromioclavicular" />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>

        <Checkbox
          isDisabled={disableTudo || disableNormal}
          onChange={() => {
            setNormalCheckbox(!NormalCheckbox);
          }}
        >
          Normal
        </Checkbox>

        <Box display='flex' flexWrap='wrap' gap='10px'>
          <Checkbox
            isDisabled={disableTudo || disableOsteofitos}
            onChange={() => {
              setOsteofitosCheckbox(!OsteofitosCheckbox);
            }}
          >
            Osteofitos marginais
          </Checkbox>
          <Checkbox
            isDisabled={DisableEspessamentoCapsulosinovial}
            onChange={() => {
              setEspessamentoCapsulosinovialCheckbox(!EspessamentoCapsulosinovialCheckbox);
            }}
          >
            com espessamento de Capsulosinovial
          </Checkbox>
        </Box>

      </Stack >
    </Box >

  );
}
export default ArticulacaoAcromioclavicularEsquerdo;
