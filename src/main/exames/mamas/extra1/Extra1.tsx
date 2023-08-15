/* eslint-disable array-callback-return */

import { Box, Checkbox, Select, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Extra1() {
  const altura = "100%";
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "57.5%": largura = "100%"

  const [FraseExtra1, setFraseExtra1] = useState<any>([]);

  const [DensidadeFibroglandularEsparsas, setDensidadeFibroglandularEsparsas] = useState(false);

  const [AdiposasCheckbox, setAdiposasCheckbox] = useState(false);

  const [HeterogeneamenteDensasCheckbox, setHeterogeneamenteDensasCheckbox] = useState(false);
  const [MamasDensasCheckbox, setMamasDensasCheckbox] = useState(false);

  const removeItemString = (value) => {
    const index = FraseExtra1.indexOf(value);
    if (index > -1) {
      FraseExtra1.splice(index, 1);
      setFraseExtra1((arr) => [...arr]);
    }
  };

  useEffect(() => {
    const string = 'Áreas de densidade fibroglandular esparsas'
    DensidadeFibroglandularEsparsas ? setFraseExtra1((arr) => [...arr, string]) : removeItemString(string)
  }, [DensidadeFibroglandularEsparsas]);

  useEffect(() => {
    const string = 'Predominantemente adiposas'
    AdiposasCheckbox ? setFraseExtra1((arr) => [...arr, string]) : removeItemString(string)
  }, [AdiposasCheckbox]);

  useEffect(() => {
    const string = 'Heterogeneamente densas,o que pode obscurecer pequeno nódulos'
    HeterogeneamenteDensasCheckbox ? setFraseExtra1((arr) => [...arr, string]) : removeItemString(string)
  }, [HeterogeneamenteDensasCheckbox]);

  useEffect(() => {
    const string = 'Mamas densas, o que diminui a sensibilidade do método.'
    MamasDensasCheckbox ? setFraseExtra1((arr) => [...arr, string]) : removeItemString(string)
  }, [MamasDensasCheckbox]);

  const subExame = "Extra";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(FraseExtra1).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseExtra1
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseExtra1
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseExtra1]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 10px 15px"
      mt='20px'
    >
      <Box gap="10px" display="flex" flexWrap="wrap" mb="10px">
        <Checkbox
          disabled={DensidadeFibroglandularEsparsas}
          onChange={(e) => {
            setAdiposasCheckbox(
              !AdiposasCheckbox
            );
          }}
        >
          Predominantemente adiposas
        </Checkbox>
        <Checkbox
          disabled={AdiposasCheckbox}
          onChange={(e) => {
            setDensidadeFibroglandularEsparsas(!DensidadeFibroglandularEsparsas);
          }}
        >
          Densidade fibroglandular esparsas
        </Checkbox>
        <Checkbox
          disabled={MamasDensasCheckbox}
          onChange={(e) => {
            setHeterogeneamenteDensasCheckbox(!HeterogeneamenteDensasCheckbox);
          }}
        >
          Heterogeneamente densas
        </Checkbox>
        <Checkbox
          disabled={HeterogeneamenteDensasCheckbox}
          onChange={(e) => {
            setMamasDensasCheckbox(!MamasDensasCheckbox);
          }}
        >
          Mamas densas
        </Checkbox>
      </Box>
    </Box>
  );
}

export default Extra1;
