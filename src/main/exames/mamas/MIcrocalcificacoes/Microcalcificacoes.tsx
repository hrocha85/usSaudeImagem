/* eslint-disable array-callback-return */

import { Box, Checkbox, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Microcalcificacoes() {
  const altura = "100%";
  const largura = "500px";

  const [FraseMicrocalcificacoes, setFraseMicrocalcificacoes] = useState<any>([]);
  const [PresencaMicrocalcificacoesCheckbox, setPresencaMicrocalcificacoesCheckbox] = useState(false);
  const [AusenciaMicrocalcificacoesCheckbox, setAusenciaMicrocalcificacoesCheckbox] = useState(false);
  const [RedondaCheckbox, setRedondaCheckbox] = useState(false);
  const [PuntiformesCheckbox, setPuntiformesCheckbox] = useState(false);
  const [AmorfasCheckbox, setAmorfasCheckbox] = useState(false);
  const [GrosseirasCheckbox, setGrosseirasCheckbox] = useState(false);
  const [HeterogeneasCheckbox, setHeterogeneasCheckbox] = useState(false);
  const [MicrocalcificacoesFinas, setMicrocalcificacoesFinas] = useState(false);
  const [FinasLinearesCheckbox, setFinasLinearesCheckbox] = useState(false);
  const [FinasLinearesSuspeitasCheckbox, setFinasLinearesSuspeitasCheckbox] = useState(false);
  const [DistribuicaoDifusaCheckbox, setDistribuicaoDifusaCheckbox] = useState(false);

  const removeItemString = (value) => {
    const index = FraseMicrocalcificacoes.indexOf(value);
    if (index > -1) {
      FraseMicrocalcificacoes.splice(index, 1);
      setFraseMicrocalcificacoes((arr) => [...arr]);
    }
  };

  useEffect(() => {
    const string = 'Áreas de densidade fibroglandular esparsas'
    PresencaMicrocalcificacoesCheckbox ? setFraseMicrocalcificacoes((arr) => [...arr, string]) : removeItemString(string)
  }, [PresencaMicrocalcificacoesCheckbox]);

  useEffect(() => {
    const string = 'Predominantemente adiposas'
    AusenciaMicrocalcificacoesCheckbox ? setFraseMicrocalcificacoes((arr) => [...arr, string]) : removeItemString(string)
  }, [AusenciaMicrocalcificacoesCheckbox]);

  useEffect(() => {
    const string = 'Heterogeneamente densas,o que pode obscurecer pequeno nódulos'
    RedondaCheckbox ? setFraseMicrocalcificacoes((arr) => [...arr, string]) : removeItemString(string)
  }, [RedondaCheckbox]);

  useEffect(() => {
    const string = 'Mamas densas, o que diminui a sensibilidade do método.'
    PuntiformesCheckbox ? setFraseMicrocalcificacoes((arr) => [...arr, string]) : removeItemString(string)
  }, [PuntiformesCheckbox]);

  useEffect(() => {
    const string = 'Mamas densas, o que diminui a sensibilidade do método.'
    AmorfasCheckbox ? setFraseMicrocalcificacoes((arr) => [...arr, string]) : removeItemString(string)
  }, [AmorfasCheckbox]);

  useEffect(() => {
    const string = 'Mamas densas, o que diminui a sensibilidade do método.'
    GrosseirasCheckbox ? setFraseMicrocalcificacoes((arr) => [...arr, string]) : removeItemString(string)
  }, [GrosseirasCheckbox]);

  useEffect(() => {
    const string = 'Mamas densas, o que diminui a sensibilidade do método.'
    HeterogeneasCheckbox ? setFraseMicrocalcificacoes((arr) => [...arr, string]) : removeItemString(string)
  }, [HeterogeneasCheckbox]);

  useEffect(() => {
    const string = 'Mamas densas, o que diminui a sensibilidade do método.'
    MicrocalcificacoesFinas ? setFraseMicrocalcificacoes((arr) => [...arr, string]) : removeItemString(string)
  }, [MicrocalcificacoesFinas]);

  useEffect(() => {
    const string = 'Mamas densas, o que diminui a sensibilidade do método.'
    FinasLinearesCheckbox ? setFraseMicrocalcificacoes((arr) => [...arr, string]) : removeItemString(string)
  }, [FinasLinearesCheckbox]);

  useEffect(() => {
    const string = 'Mamas densas, o que diminui a sensibilidade do método.'
    FinasLinearesSuspeitasCheckbox ? setFraseMicrocalcificacoes((arr) => [...arr, string]) : removeItemString(string)
  }, [FinasLinearesSuspeitasCheckbox]);

  useEffect(() => {
    const string = 'Mamas densas, o que diminui a sensibilidade do método.'
    DistribuicaoDifusaCheckbox ? setFraseMicrocalcificacoes((arr) => [...arr, string]) : removeItemString(string)
  }, [DistribuicaoDifusaCheckbox]);

  const subExame = "Microcalcificações";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(FraseMicrocalcificacoes).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseMicrocalcificacoes
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseMicrocalcificacoes
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseMicrocalcificacoes]);

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
      <TituloNomeExame titulo='Microcalcificações' />
      <Box gap="10px" display="flex" flexWrap="wrap" mb="10px">

        <Checkbox
          disabled={PresencaMicrocalcificacoesCheckbox}
          onChange={(e) => {
            setAusenciaMicrocalcificacoesCheckbox(
              !AusenciaMicrocalcificacoesCheckbox
            );
          }}
        >
          Ausência de microcalcificações
        </Checkbox>
        <Checkbox
          disabled={AusenciaMicrocalcificacoesCheckbox}
          onChange={(e) => {
            setPresencaMicrocalcificacoesCheckbox(!PresencaMicrocalcificacoesCheckbox);
          }}
        >
          Presença de microcalcificações
        </Checkbox>
        <Checkbox
          disabled={PuntiformesCheckbox}
          onChange={(e) => {
            setRedondaCheckbox(!RedondaCheckbox);
          }}
        >
          Redonda
        </Checkbox>
        <Checkbox
          disabled={RedondaCheckbox}
          onChange={(e) => {
            setPuntiformesCheckbox(!PuntiformesCheckbox);
          }}
        >
          Puntiformes
        </Checkbox>
        <Checkbox
          disabled={RedondaCheckbox}
          onChange={(e) => {
            setAmorfasCheckbox(!AmorfasCheckbox);
          }}
        >
          Amorfas
        </Checkbox>
        <Checkbox
          disabled={RedondaCheckbox}
          onChange={(e) => {
            setGrosseirasCheckbox(!GrosseirasCheckbox);
          }}
        >
          Grosseiras
        </Checkbox>
        <Checkbox
          disabled={RedondaCheckbox}
          onChange={(e) => {
            setHeterogeneasCheckbox(!HeterogeneasCheckbox);
          }}
        >
          Heterogêneas
        </Checkbox>
        <Checkbox
          disabled={RedondaCheckbox}
          onChange={(e) => {
            setMicrocalcificacoesFinas(!MicrocalcificacoesFinas);
          }}
        >
          Microcalcificações finas pleomórficas
        </Checkbox>
        <Checkbox
          disabled={RedondaCheckbox}
          onChange={(e) => {
            setFinasLinearesCheckbox(!FinasLinearesCheckbox);
          }}
        >
          Finas lineares ou ramificadas
        </Checkbox>
        <Checkbox
          disabled={RedondaCheckbox}
          onChange={(e) => {
            setFinasLinearesSuspeitasCheckbox(!FinasLinearesSuspeitasCheckbox);
          }}
        >
          Finas lineares ou ramificadas - SUSPEITAS
        </Checkbox>
        <Checkbox
          disabled={RedondaCheckbox}
          onChange={(e) => {
            setDistribuicaoDifusaCheckbox(!DistribuicaoDifusaCheckbox);
          }}
        >
          Distribuição difusa/ regional/ agrupada (&lt;2cm)
        </Checkbox>
      </Box>
    </Box>
  );
}

export default Microcalcificacoes;
