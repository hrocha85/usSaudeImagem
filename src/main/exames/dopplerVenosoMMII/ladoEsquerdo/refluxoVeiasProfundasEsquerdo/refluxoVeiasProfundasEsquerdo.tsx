import { Box, Checkbox, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function RefluxoVeiasProfundasEsquerdo() {
  const altura = "100%";
  const largura = "95%";

  const [frasesReflluxoVE, setFrasesRefluxoVE] = useState<any>([]);

  const [FemoralComumCheckbox, setFemoralComumCheckbox] = useState(false);
  const [FemoralSuperficialCheckbox, setFemoralSuperficialCheckbox] =
    useState(false);
  const [FemoralProfundaCheckbox, setFemoralProfundaCheckbox] = useState(false);

  const [TibialAnteriorCheckbox, setTibialAnteriorCheckbox] = useState(false);
  const [TibialPosteriorCheckbox, setTibialPosteriorCheckbox] = useState(false);
  const [FibularCheckbox, setFibularCheckbox] = useState(false);
  const [PopliteaCheckbox, setPopliteaCheckbox] = useState(false);

  const criaString = (string) => {
    setFrasesRefluxoVE((arr) => [...arr, string]);
  };

  const removeString = (string) => {
    frasesReflluxoVE.map((e) => {
      if (e == string) {
        const index = frasesReflluxoVE.indexOf(e);
        if (index > -1) {
          frasesReflluxoVE.splice(index, 1);
          setFrasesRefluxoVE((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    const string =
      "As veias profundas avaliadas conservam compressibilidade normal e apresentam fluxo de padrão monofásico ao estudo com Doppler, variável com a respiração.";

    if (FemoralComumCheckbox) {
      criaString(string);
    } else {
      removeString(string);
    }
  }, [FemoralComumCheckbox]);

  useEffect(() => {
    const string =
      "As manobras compressivas e respiratórias demonstraram refluxo significativo acometendo a veia femoral superficial à esquerda.";

    if (FemoralSuperficialCheckbox) {
      criaString(string);
    } else {
      removeString(string);
    }
  }, [FemoralSuperficialCheckbox]);

  useEffect(() => {
    const string =
      "As manobras compressivas e respiratórias demonstraram refluxo significativo acometendo a veia femoral profunda à esquerda.";

    if (FemoralProfundaCheckbox) {
      criaString(string);
    } else {
      removeString(string);
    }
  }, [FemoralProfundaCheckbox]);

  useEffect(() => {
    const string =
      "As manobras compressivas e respiratórias demonstraram refluxo significativo acometendo as veias tibiais anteriores à esquerda.";

    if (TibialAnteriorCheckbox) {
      criaString(string);
    } else {
      removeString(string);
    }
  }, [TibialAnteriorCheckbox]);

  useEffect(() => {
    const string =
      "As manobras compressivas e respiratórias demonstraram refluxo significativo acometendo as veias tibiais posteriores à esquerda. Insuficiência valvular profunda à esquerda.";

    if (TibialPosteriorCheckbox) {
      criaString(string);
    } else {
      removeString(string);
    }
  }, [TibialPosteriorCheckbox]);

  useEffect(() => {
    const string =
      "As manobras compressivas e respiratórias demonstraram refluxo significativo acometendo as veias fibulares à esquerda.";

    if (FibularCheckbox) {
      criaString(string);
    } else {
      removeString(string);
    }
  }, [FibularCheckbox]);

  useEffect(() => {
    const string =
      "As manobras compressivas e respiratórias demonstraram refluxo significativo acometendo a veia poplítea à esquerda.";

    if (PopliteaCheckbox) {
      criaString(string);
    } else {
      removeString(string);
    }
  }, [PopliteaCheckbox]);

  const subExame = "Refluxo Veias Profundas Esquerdo";
  const titulo_exame = "Doppler Venoso de MMII";

  useEffect(() => {
    if (Object.keys(frasesReflluxoVE).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesReflluxoVE
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesReflluxoVE
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesReflluxoVE]);

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
      <TituloNomeExame titulo="Refluxo Veias Profundas" />

      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
        <Checkbox
          value="Femoral comum"
          onChange={(e) => {
            setFemoralComumCheckbox(!FemoralComumCheckbox);
          }}
        >
          Femoral Comum
        </Checkbox>

        <Checkbox
          value="Femoral Superficial"
          onChange={(e) => {
            setFemoralSuperficialCheckbox(!FemoralSuperficialCheckbox);
          }}
        >
          Femoral Superficial
        </Checkbox>

        <Checkbox
          value="Femoral Profunda"
          onChange={(e) => {
            setFemoralProfundaCheckbox(!FemoralProfundaCheckbox);
          }}
        >
          Femoral Profunda
        </Checkbox>

        <Checkbox
          value="Tibial Anterior"
          onChange={(e) => {
            setTibialAnteriorCheckbox(!TibialAnteriorCheckbox);
          }}
        >
          Tibial Anterior
        </Checkbox>

        <Checkbox
          onChange={() => {
            setTibialPosteriorCheckbox(!TibialPosteriorCheckbox);
          }}
        >
          Tibial Posterir
        </Checkbox>

        <Checkbox
          onChange={() => {
            setFibularCheckbox(!FibularCheckbox);
          }}
        >
          Fibular
        </Checkbox>

        <Checkbox
          onChange={() => {
            setPopliteaCheckbox(!PopliteaCheckbox);
          }}
        >
          Poplítea
        </Checkbox>
      </Grid>
    </Box>
  );
}
export default RefluxoVeiasProfundasEsquerdo;
