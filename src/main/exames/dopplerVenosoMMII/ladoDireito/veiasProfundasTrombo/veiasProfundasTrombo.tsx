import { Box, Checkbox, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function VeiasProfundasTromboDireito() {
  const altura = "100%";
  const largura = "95%";

  const [frasesVeiasTrombo, setFrasesVeiasTrombo] = useState<any>([]);

  const [FemoralComumCheckbox, setFemoralComumCheckbox] = useState(false);
  const [FemoralSuperficialCheckbox, setFemoralSuperficialCheckbox] =
    useState(false);
  const [FemoralProfundaCheckbox, setFemoralProfundaCheckbox] = useState(false);

  const [TibialAnteriorCheckbox, setTibialAnteriorCheckbox] = useState(false);
  const [TibialPosteriorCheckbox, setTibialPosteriorCheckbox] = useState(false);
  const [FibularCheckbox, setFibularCheckbox] = useState(false);
  const [PopliteaCheckbox, setPopliteaCheckbox] = useState(false);
  const [GastrocnemiasCheckbox, setGastrocnemiasCheckbox] = useState(false);
  const [SolearesCheckbox, setSolearesCheckbox] = useState(false);

  const criaString = (string) => {
    setFrasesVeiasTrombo((arr) => [...arr, string]);
  };

  const removeString = (string) => {
    frasesVeiasTrombo.map((e) => {
      if (e == string) {
        const index = frasesVeiasTrombo.indexOf(e);
        if (index > -1) {
          frasesVeiasTrombo.splice(index, 1);
          setFrasesVeiasTrombo((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    const string =
      "Presença de material não compressível intraluminal visível na veia femoral comum à direita.";
    if (FemoralComumCheckbox) {
      criaString(string);
    } else {
      removeString(string);
    }
  }, [FemoralComumCheckbox]);

  useEffect(() => {
    const string =
      "Presença de material não compressível intraluminal visível na veia femoral superficial à direita.";

    if (FemoralSuperficialCheckbox) {
      criaString(string);
    } else {
      removeString(string);
    }
  }, [FemoralSuperficialCheckbox]);

  useEffect(() => {
    const string =
      "Presença de material não compressível intraluminal visível na veia femoral profunda à direita.";
    if (FemoralProfundaCheckbox) {
      criaString(string);
    } else {
      removeString(string);
    }
  }, [FemoralProfundaCheckbox]);

  useEffect(() => {
    const string =
      "Presença de material não compressível intraluminal visível nas veias tibiais anteriores à direita.";

    if (TibialAnteriorCheckbox) {
      criaString(string);
    } else {
      removeString(string);
    }
  }, [TibialAnteriorCheckbox]);

  useEffect(() => {
    const string =
      "Presença de material não compressível intraluminal visível nas veias tibiais posteriores à direita.";
    if (TibialPosteriorCheckbox) {
      criaString(string);
    } else {
      removeString(string);
    }
  }, [TibialPosteriorCheckbox]);

  useEffect(() => {
    const string =
      "Presença de material não compressível intraluminal visível nas veias fibulares à direita.";

    if (FibularCheckbox) {
      criaString(string);
    } else {
      removeString(string);
    }
  }, [FibularCheckbox]);

  useEffect(() => {
    const string =
      "Presença de material não compressível intraluminal visível na veia poplítea à direita.";
    if (PopliteaCheckbox) {
      criaString(string);
    } else {
      removeString(string);
    }
  }, [PopliteaCheckbox]);

  useEffect(() => {
    const string =
      "Presença de material não compressível intraluminal visível nas veias gastrocnêmias à direita.";
    if (GastrocnemiasCheckbox) {
      criaString(string);
    } else {
      removeString(string);
    }
  }, [GastrocnemiasCheckbox]);

  useEffect(() => {
    const string =
      "Presença de material não compressível intraluminal visível nas veias soleares à direita.";
    if (SolearesCheckbox) {
      criaString(string);
    } else {
      removeString(string);
    }
  }, [SolearesCheckbox]);

  const subExame = "Veias Profundas com Trombo Direito";
  const titulo_exame = "Doppler Venoso de MMII";

  useEffect(() => {
    if (Object.keys(frasesVeiasTrombo).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesVeiasTrombo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesVeiasTrombo
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesVeiasTrombo]);

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
      <TituloNomeExame titulo="Veias Profundas com Trombo" />

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
        <Checkbox
          onChange={() => {
            setGastrocnemiasCheckbox(!GastrocnemiasCheckbox);
          }}
        >
          Gastrocnêmias
        </Checkbox>
        <Checkbox
          onChange={() => {
            setSolearesCheckbox(!SolearesCheckbox);
          }}
        >
          Soleares
        </Checkbox>
      </Grid>
    </Box>
  );
}
export default VeiasProfundasTromboDireito;
