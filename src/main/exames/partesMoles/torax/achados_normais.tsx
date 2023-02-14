import { Box, Checkbox, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

export default function Achados_Normais({ Disable }) {
  const altura = "100%";
  const largura = "66%";

  const [frasesAchadosNormais, setFrasesAchadosNormais] = useState<any>([]);

  const [Pele_Tecido_NormaisCheckbox, setPele_Tecido_NormaisCheckBox] =
    useState(false);
  const [
    Planos_Musculates_NormaisCheckbox,
    setPlanos_Musculares_NormaisCheckBox,
  ] = useState(false);
  const [
    Ausencia_Nodulos_Colecoes_NormaisCheckbox,
    setAusencia_Nodulos_Colecoes_NormaisCheckBox,
  ] = useState(false);
  const [
    Ausencia_Herniacoes_NormaisCheckbox,
    setAusencia_Herniacoes_NormaisCheckBox,
  ] = useState(false);
  const [
    Ausencia_Diastase_NormaisCheckbox,
    setAusencia_Diastase_NormaisCheckBox,
  ] = useState(false);

  const criaString_Pele_Tecido_Normais = () => {
    removePele_Tecido_Normais();

    let string = `Pele e tecido adiposo subcutâneo de aspecto ecográfico preservado.`;
    setFrasesAchadosNormais((arr) => [...arr, string]);
  };

  const removePele_Tecido_Normais = () => {
    frasesAchadosNormais.map((e) => {
      if (
        e.includes(
          "Pele e tecido adiposo subcutâneo de aspecto ecográfico preservado."
        )
      ) {
        let index = frasesAchadosNormais.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesAchadosNormais.splice(index, 1);
          setFrasesAchadosNormais((arr) => [...arr]);
        }
      }
    });
  };

  const criaString_Plano_Musculates_Normais = () => {
    removePlanos_Muculates_Normais();

    let string = `Planos musculares de aspecto preservado.`;
    setFrasesAchadosNormais((arr) => [...arr, string]);
  };

  const removePlanos_Muculates_Normais = () => {
    frasesAchadosNormais.map((e) => {
      if (e.includes("Planos musculares de aspecto preservado.")) {
        let index = frasesAchadosNormais.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesAchadosNormais.splice(index, 1);
          setFrasesAchadosNormais((arr) => [...arr]);
        }
      }
    });
  };

  const criaString_Ausencia_Nodulos_Colecoes_Normais = () => {
    removeAusencia_Nodulos_Colescoes_Normais();

    let string = `Ausência de nódulos, massas ou coleções.`;
    setFrasesAchadosNormais((arr) => [...arr, string]);
  };

  const removeAusencia_Nodulos_Colescoes_Normais = () => {
    frasesAchadosNormais.map((e) => {
      if (e.includes("Ausência de nódulos, massas ou coleções.")) {
        let index = frasesAchadosNormais.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesAchadosNormais.splice(index, 1);
          setFrasesAchadosNormais((arr) => [...arr]);
        }
      }
    });
  };

  const criaString_Ausencia_Herniacoes_Normais = () => {
    removeAusencia_Herniacoes_Normais();
    let string = `Ausência de herniações na região examinada.`;
    setFrasesAchadosNormais((arr) => [...arr, string]);
  };

  const removeAusencia_Herniacoes_Normais = () => {
    frasesAchadosNormais.map((e) => {
      if (e.includes("Ausência de herniações na região examinada.")) {
        let index = frasesAchadosNormais.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesAchadosNormais.splice(index, 1);
          setFrasesAchadosNormais((arr) => [...arr]);
        }
      }
    });
  };

  const criaString_Ausencia_Diastase_Normais = () => {
    removeAusencia_Diastase_Normais();
    let string = `Não há diástase do músculo reto abdominal.`;
    setFrasesAchadosNormais((arr) => [...arr, string]);
  };

  const removeAusencia_Diastase_Normais = () => {
    frasesAchadosNormais.map((e) => {
      if (e.includes("Não há diástase do músculo reto abdominal.")) {
        let index = frasesAchadosNormais.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesAchadosNormais.splice(index, 1);
          setFrasesAchadosNormais((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (Pele_Tecido_NormaisCheckbox) {
      criaString_Pele_Tecido_Normais();
    } else {
      removePele_Tecido_Normais();
    }
  }, [Pele_Tecido_NormaisCheckbox]);

  useEffect(() => {
    if (Planos_Musculates_NormaisCheckbox) {
      criaString_Plano_Musculates_Normais();
    } else {
      removePlanos_Muculates_Normais();
    }
  }, [Planos_Musculates_NormaisCheckbox]);

  useEffect(() => {
    if (Ausencia_Nodulos_Colecoes_NormaisCheckbox) {
      criaString_Ausencia_Nodulos_Colecoes_Normais();
    } else {
      removeAusencia_Nodulos_Colescoes_Normais();
    }
  }, [Ausencia_Nodulos_Colecoes_NormaisCheckbox]);

  useEffect(() => {
    if (Ausencia_Herniacoes_NormaisCheckbox) {
      criaString_Ausencia_Herniacoes_Normais();
    } else {
      removeAusencia_Herniacoes_Normais();
    }
  }, [Ausencia_Herniacoes_NormaisCheckbox]);

  useEffect(() => {
    if (Ausencia_Diastase_NormaisCheckbox) {
      criaString_Ausencia_Diastase_Normais();
    } else {
      removeAusencia_Diastase_Normais();
    }
  }, [Ausencia_Diastase_NormaisCheckbox]);

  const subExame = "Achados Normais";
  const titulo_exame = "Partes Moles";

  useEffect(() => {
    if (Object.keys(frasesAchadosNormais).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesAchadosNormais
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesAchadosNormais
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesAchadosNormais]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px 15px 20px 15px"
      mt="10px"
    >
      <TituloNomeExame titulo="Achados Normais" />

      <Box gap="15px" display="flex" flexWrap="wrap" flexDirection="column">
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <Checkbox
            isDisabled={Disable}
            onChange={() =>
              setPele_Tecido_NormaisCheckBox(!Pele_Tecido_NormaisCheckbox)
            }
          >
            Pele e tecido subcutâneo normais
          </Checkbox>
          <Checkbox
            isDisabled={Disable}
            onChange={() =>
              setPlanos_Musculares_NormaisCheckBox(
                !Planos_Musculates_NormaisCheckbox
              )
            }
          >
            Planos Musculares
          </Checkbox>
          <Checkbox
            isDisabled={Disable}
            onChange={() =>
              setAusencia_Nodulos_Colecoes_NormaisCheckBox(
                !Ausencia_Nodulos_Colecoes_NormaisCheckbox
              )
            }
          >
            Ausência de nódulos, massas ou coleções
          </Checkbox>
          <Checkbox
            isDisabled={Disable}
            onChange={() =>
              setAusencia_Herniacoes_NormaisCheckBox(
                !Ausencia_Herniacoes_NormaisCheckbox
              )
            }
          >
            Ausência de herniações
          </Checkbox>
          <Checkbox
            isDisabled={Disable}
            onChange={() =>
              setAusencia_Diastase_NormaisCheckBox(
                !Ausencia_Diastase_NormaisCheckbox
              )
            }
          >
            Ausência de diástase do músculo reto abdominal
          </Checkbox>
        </Grid>
      </Box>
    </Box>
  );
}
