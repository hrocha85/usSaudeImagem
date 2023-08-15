
import { Box, Checkbox, HStack, Input, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function CalcificacoesPatologicas({ Disable }) {
  const altura = "100%";
  const largura = "350px";

  const [FraseVagina, setFraseVagina] = useState<any>([]);


  const [AusenciaCheckbox, setAusenciaCheckbox] = useState(false);
  const [DisableAusencia, setDisableAusencia] = useState(false);

  const [PresenteCheckbox, setPresenteCheckbox] = useState(false);
  const [DisablePresente, setDisablePresente] = useState(false);

  const [Normal, setNormal] = useState(false);

  useEffect(() => {
    Disable ? setNormal(true) : setNormal(false);
  }, [Disable])

  useEffect(() => {
    if (Normal) {
      setAusenciaCheckbox(true)

    } else {
      setAusenciaCheckbox(false)
      removeItemString('Ausência de calcificações patológicas')

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
    const string = 'Ausência de calcificações patológicas'
    if (AusenciaCheckbox) {
      setDisablePresente(true)
      setFraseVagina((arr) => ([...arr, string]))
    } else {
      setDisablePresente(false)
      removeItemString(string)
    }
  }, [AusenciaCheckbox])
  useEffect(() => {
    const string = 'Presença de calcificações patológicas'
    if (PresenteCheckbox) {
      setDisableAusencia(true)
      setFraseVagina((arr) => ([...arr, string]))
    } else {
      setDisableAusencia(false)
      removeItemString(string)
    }
  }, [PresenteCheckbox])

  const subExame = "Calcificações patológicas";
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
    >
      <TituloNomeExame titulo="Calcificações patológicas" />

      <Box gap="5px" display="flex" flexWrap="wrap" mt="10px">
        <Checkbox
          isChecked={Normal}
          disabled={DisableAusencia}
          onChange={() => {
            setNormal(!Normal)
            setAusenciaCheckbox(!AusenciaCheckbox);
          }}
        >
          Ausência
        </Checkbox>
        <Checkbox
          disabled={DisablePresente}
          onChange={() => {
            setPresenteCheckbox(!PresenteCheckbox);
          }}
        >
          Presença de calcificações patológicas
        </Checkbox>

      </Box>
    </Box>
  );
}
export default CalcificacoesPatologicas;
