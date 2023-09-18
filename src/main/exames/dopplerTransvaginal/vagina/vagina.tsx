
import { Box, Checkbox, HStack, Input, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Vagina() {
  const altura = "100%";
  const largura = "300px";

  const [FraseVagina, setFraseVagina] = useState<any>([]);


  const [NormalCheckbox, setNormalCheckbox] = useState(false);
  const [DisableNormal, setDisableNormal] = useState(false);

  const [LesoesAparentesCheckbox, setLesoesAparentesCheckbox] = useState(false);
  const [DisableLesoesAparentes, setDisableLesoesAparentes] = useState(false);

  const removeItemString = (value) => {
    const index = FraseVagina.indexOf(value);

    if (index > -1) {
      FraseVagina.splice(index, 1);
      setFraseVagina((arr) => [...arr]);
    }
  };

  useEffect(() => {
    const string = 'Vagina normal'
    if (NormalCheckbox) {
      setDisableLesoesAparentes(true)
      setFraseVagina((arr) => ([...arr, string]))
    } else {
      setDisableLesoesAparentes(false)
      removeItemString(string)
    }
  }, [NormalCheckbox])
  useEffect(() => {
    const string = 'Vagina Com lesões aparentes'
    if (LesoesAparentesCheckbox) {
      setDisableNormal(true)
      setFraseVagina((arr) => ([...arr, string]))
    } else {
      setDisableNormal(false)
      removeItemString(string)
    }
  }, [LesoesAparentesCheckbox])

  const subExame = "Vagina";
  const titulo_exame = "Doppler Transvaginal";

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
      mt="15px"
    >
      <TituloNomeExame titulo="Vagina" />

      <Box gap="5px" display="flex" flexWrap="wrap" mt="20px">
        <Checkbox
          disabled={DisableNormal}
          onChange={() => {
            setNormalCheckbox(!NormalCheckbox);
          }}
        >
          Normal
        </Checkbox>
        <Checkbox
          disabled={DisableLesoesAparentes}
          onChange={() => {
            setLesoesAparentesCheckbox(!LesoesAparentesCheckbox);
          }}
        >
          Com lesões aparentes
        </Checkbox>

      </Box>
    </Box>
  );
}
export default Vagina;
