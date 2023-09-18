
import { Box, Checkbox,useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Massas({ Disable }) {
  const altura = "100%";
  let largura = '';
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "98.5%": largura = "100%"

  const [FraseVagina, setFraseVagina] = useState<any>([]);


  const [NaoSinaisCheckbox, setNaoSinaisCheckbox] = useState(false);
  const [DisableNaoSinais, setDisableNaoSinais] = useState(false);

  const [SinaisCheckbox, setSinaisCheckbox] = useState(false);
  const [DisableSinais, setDisableSinais] = useState(false);
  const [Normal, setNormal] = useState(false);

  useEffect(() => {
    Disable ? setNormal(true) : setNormal(false);
  }, [Disable])

  useEffect(() => {
    if (Normal) {
      setNaoSinaisCheckbox(true)
    } else {
      setNaoSinaisCheckbox(false)
      removeItemString('Não há sinais de massas sólidas ou císticas, isoladas ou em comunicações com cavidade articular.')

    }
  }, [Normal])

  const removeItemString = (value) => {
    const index = FraseVagina.indexOf(value);

    if (index > -1) {
      FraseVagina.splice(index, 1);
      setFraseVagina((arr) => [...arr]);
    }
  };

  useEffect(() => {
    const string = 'Não há sinais de massas sólidas ou císticas, isoladas ou em comunicações com cavidade articular.'
    if (NaoSinaisCheckbox) {
      setDisableSinais(true)
      setFraseVagina((arr) => ([...arr, string]))
    } else {
      setDisableSinais(false)
      removeItemString(string)
    }
  }, [NaoSinaisCheckbox])
  useEffect(() => {
    const string = 'Há sinais de massas sólidas ou císticas, isoladas ou em comunicações com cavidade articular.'
    if (SinaisCheckbox) {
      setDisableNaoSinais(true)
      setFraseVagina((arr) => ([...arr, string]))
    } else {
      setDisableNaoSinais(false)
      removeItemString(string)
    }
  }, [SinaisCheckbox])

  const subExame = "Massas sólidas ou císticas";
  const titulo_exame = 'Região Inguinal'

  useEffect(() => {
    if (Object.keys(FraseVagina).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseVagina
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseVagina
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseVagina]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 20px 15px"
      mt={'1rem'}
    >
      <TituloNomeExame titulo="Massas sólidas ou císticas" />

      <Box gap="5px" display="flex" flexWrap="wrap" mt="10px">
        <Checkbox
          isChecked={Normal}
          disabled={DisableNaoSinais}
          onChange={() => {
            setNormal(!Normal)
            setNaoSinaisCheckbox(!NaoSinaisCheckbox);
          }}
        >
          Não há sinais
        </Checkbox>
        <Checkbox
          disabled={DisableSinais}
          onChange={() => {
            setSinaisCheckbox(!SinaisCheckbox);
          }}
        >
          Há sinais
        </Checkbox>

      </Box>
    </Box>
  );
}
export default Massas;
