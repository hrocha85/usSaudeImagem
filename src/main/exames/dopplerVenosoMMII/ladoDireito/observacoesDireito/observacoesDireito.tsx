/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Select, Stack, Text, Textarea, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function ObservacoesDireito() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [DisableEdemaSelect, setDisableEdemaSelect] =
    useState(true);
  const [DisableLinfedemaSelect, setDisableLinfedemaSelect] =
    useState(true);
  const [DisableSegmentoNaoAvaliadoSelect, setDisableSegmentoNaoAvaliadoSelect] =
    useState(true);
  const [DisableOutrasObservacoesTextArea, setDisableOutrasObservacoesTextArea] =
    useState(true);

  const [EdemaSelect, setEdemaSelect] = useState("");
  const [LocalizacaoFinalEdemaSelect, setLocalizacaoFinalEdemaSelect] = useState("");
  const [EdemaCheckbox, setEdemaCheckbox] = useState(false);

  const [LinfedemaSelect, setLinfedemaSelect] = useState("");
  const [LocalizacaoFinalLinfedemaSelect, setLocalizacaoFinalLinfedemaSelect] = useState("");
  const [LinfedemaCheckbox, setLinfedemaCheckbox] = useState(false);

  const [SegmentoNaoAvaliadoSelect, setSegmentoNaoAvaliadoSelect] = useState("");
  const [SegmentoNaoAvaliadoCheckbox, setSegmentoNaoAvaliadoCheckbox] = useState(false);

  const [CistoBakerCheckbox, setCistoBakerCheckbox] = useState(true);

  const [OutrasObservacoesCheckbox, setOutrasObservacoesCheckbox] = useState(false);
  const [OutrasObservacoesValueText, setOutrasObservacoesValueText] = useState("");

  const [DorsalHorizontalCheckbox, setDorsalHorizontalCheckbox] = useState(true);

  const removeEdema = () => {
    laudoPrin.map((e) => {
      if (e.includes("Edema")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringEdema = (EdemaSelect, localizado,) => {
    removeEdema();
    var string;

    if (EdemaSelect !== "" && localizado !== "") {
      string = `Edema ${EdemaSelect} na ${localizado}`;
      setLaudoPrin((arr) => [...arr, string]);
    } else {
      removeEdema();
    }
  };
  const removeLinfedema = () => {
    laudoPrin.map((e) => {
      if (e.includes("Linfedema")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringLinfedema = (LinfedemaSelect, localizado,) => {
    removeLinfedema();
    var string;

    if (LinfedemaSelect !== "" && localizado !== "") {
      string = `Linfedema ${LinfedemaSelect} na ${localizado}`;
      setLaudoPrin((arr) => [...arr, string]);
    } else {
      removeLinfedema();
    }
  };

  const removeSegmentoNaoAvaliado = () => {
    laudoPrin.map((e) => {
      if (e.includes("Segmento não avaliado")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringSegmentoNaoAvaliado = (SegmentoNaoAvaliadoSelect,) => {
    removeSegmentoNaoAvaliado();
    var string;
    if (SegmentoNaoAvaliadoSelect !== "") {
      string = `Segmento não avaliado ${SegmentoNaoAvaliadoSelect}`;
      setLaudoPrin((arr) => [...arr, string]);
    } else {
      removeSegmentoNaoAvaliado();
    }
  };

  const criaStringCistoBaker = () => {
    var string = "Cisto de Baker ";
    if (CistoBakerCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setCistoBakerCheckbox(false);
    } else {
      removeItemString(string);
    }
  };

  const criaStringDorsalHorizontal = () => {
    var string = "Exame realizado em decúmbito dorsal horizontal";
    if (DorsalHorizontalCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setDorsalHorizontalCheckbox(false);
    } else {
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    var index = laudoPrin.indexOf(value);

    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
  };

  useEffect(() => {
    if (EdemaCheckbox) {
      criaStringEdema(
        EdemaSelect,
        LocalizacaoFinalEdemaSelect,
      );
      setDisableEdemaSelect(false)
    } else {
      setDisableEdemaSelect(true)
      removeEdema();
      setEdemaSelect("");
      setLocalizacaoFinalEdemaSelect("");
    }
  }, [
    EdemaCheckbox,
    EdemaSelect,
    LocalizacaoFinalEdemaSelect,
  ]);

  useEffect(() => {
    if (LinfedemaCheckbox) {
      criaStringLinfedema(
        LinfedemaSelect,
        LocalizacaoFinalLinfedemaSelect,
      );

      setDisableLinfedemaSelect(false)
    } else {

      setDisableLinfedemaSelect(true)
      removeLinfedema();
      setLinfedemaSelect("");
      setLocalizacaoFinalLinfedemaSelect("");
    }
  }, [
    LinfedemaCheckbox,
    LinfedemaSelect,
    LocalizacaoFinalLinfedemaSelect,
  ]);

  useEffect(() => {
    if (SegmentoNaoAvaliadoCheckbox) {
      criaStringSegmentoNaoAvaliado(
        SegmentoNaoAvaliadoSelect,
      );
      setDisableSegmentoNaoAvaliadoSelect(false)
    } else {
      setDisableSegmentoNaoAvaliadoSelect(true)
      removeSegmentoNaoAvaliado();
      setSegmentoNaoAvaliadoSelect("");
    }
  }, [
    SegmentoNaoAvaliadoCheckbox,
    SegmentoNaoAvaliadoSelect
  ]);
  const criaStringOutrasObservacoes = () => {
    removeOutrasObservacoes()
    var string = `Outras observações: ${OutrasObservacoesValueText}`
    if (OutrasObservacoesValueText !== "") {
      setLaudoPrin((arr) => [...arr, string]);
    }
  }
  const removeOutrasObservacoes = () => {
    laudoPrin.map((e) => {
      if (e.includes("Outras observações:")) {
        var index = laudoPrin.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };
  useEffect(() => {
    if (OutrasObservacoesCheckbox) {
      setDisableOutrasObservacoesTextArea(false)
      criaStringOutrasObservacoes()
    } else {
      removeOutrasObservacoes()
      setDisableOutrasObservacoesTextArea(true)
      setOutrasObservacoesValueText("");
    }
  }, [OutrasObservacoesCheckbox, OutrasObservacoesValueText])

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
      <TituloNomeExame titulo="Observações" />
      <Box gap="10px" display="flex" flexWrap="wrap" >
        <Box>
          <Checkbox
            onChange={() => {
              setCistoBakerCheckbox(true);
              criaStringCistoBaker();
            }}
          >
            Cisto de Baker
          </Checkbox>
        </Box>
        <Box
          display='flex'
          flexWrap='wrap'>
          <Checkbox
            whiteSpace="nowrap"
            onChange={() =>
              setEdemaCheckbox(!EdemaCheckbox)
            }
          >
            Edema
          </Checkbox>

          <Select
            w="130px"
            isDisabled={DisableEdemaSelect}
            onChange={(e) => {
              setEdemaSelect(e.target.value);
            }}
            value={EdemaSelect}
          >
            <option value="" disabled selected>
              Posição inicial
            </option>
            <option value="leve">leve</option>
            <option value="moderado">moderado</option>
            <option value="acentuado">acentuado</option>
          </Select>
          <Select
            w="130px"
            isDisabled={DisableEdemaSelect}
            onChange={(e) => {
              setLocalizacaoFinalEdemaSelect(e.target.value);
            }}
            value={LocalizacaoFinalEdemaSelect}
          >
            <option value="" disabled selected>
              até
            </option>
            <option value="perna">perna</option>
            <option value="coxa">coxa</option>
            <option value="coxa e perna">coxa e perna</option>
          </Select>
        </Box>
        <Box
          display='flex'
          flexWrap='wrap'>
          <Checkbox
            whiteSpace="nowrap"
            onChange={() =>
              setLinfedemaCheckbox(!LinfedemaCheckbox)
            }
          >
            Linfedema
          </Checkbox>

          <Select
            w="130px"
            isDisabled={DisableLinfedemaSelect}
            onChange={(e) => {
              setLinfedemaSelect(e.target.value);
            }}
            value={LinfedemaSelect}
          >
            <option value="" disabled selected>
              Posição inicial
            </option>
            <option value="leve">leve</option>
            <option value="moderado">moderado</option>
            <option value="acentuado">acentuado</option>
          </Select>
          <Select
            w="130px"
            isDisabled={DisableLinfedemaSelect}
            onChange={(e) => {
              setLocalizacaoFinalLinfedemaSelect(e.target.value);
            }}
            value={LocalizacaoFinalLinfedemaSelect}
          >
            <option value="" disabled selected>
              até
            </option>
            <option value="perna">perna</option>
            <option value="coxa">coxa</option>
            <option value="coxa e perna">coxa e perna</option>
          </Select>
        </Box>
        <Box>
          <Checkbox
            onChange={() => {
              setDorsalHorizontalCheckbox(true);
              criaStringDorsalHorizontal();
            }}
          >
            Exame realizado em decúmbito dorsal horizontal
          </Checkbox>
        </Box>
        <Box
          display='flex'
          flexWrap='wrap'>
          <Checkbox
            onChange={() =>
              setSegmentoNaoAvaliadoCheckbox(!SegmentoNaoAvaliadoCheckbox)
            }
          >
            Segmento não avaliado devido à presença de curativo oclusivo
          </Checkbox>

          <Select
            w="130px"
            isDisabled={DisableSegmentoNaoAvaliadoSelect}
            onChange={(e) => {
              setSegmentoNaoAvaliadoSelect(e.target.value);
            }}
            value={SegmentoNaoAvaliadoSelect}
          >
            <option value="" disabled selected>
              Posição inicial
            </option>
            <option value="Terço inferior da perna">Terço inferior da perna</option>
            <option value="Terço médio da perna">Terço médio da perna</option>
            <option value="Terço superior da perna">Terço superior da perna</option>
            <option value="Terços médio e inferior da perna">Terços médio e inferior da perna</option>
            <option value="Segmento da perna">Segmento da perna</option>
          </Select>
        </Box>
        <Box
          display='flex'
          flexWrap='wrap'>
          <Checkbox
            onChange={() =>
              setOutrasObservacoesCheckbox(!OutrasObservacoesCheckbox)
            }
          >
            Outras Observações
          </Checkbox>
          <Textarea
            isDisabled={DisableOutrasObservacoesTextArea}
            placeholder="Outras Observções"
            value={OutrasObservacoesValueText}
            onChange={(e) => setOutrasObservacoesValueText(e.target.value)}
          />
        </Box>
      </Box >
    </Box >
  );
}
export default ObservacoesDireito;
