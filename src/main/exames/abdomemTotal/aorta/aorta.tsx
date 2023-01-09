import { Box, Text, Checkbox, Select, Input } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { LaudosContext } from "../../../../context/LuadosContext";
import { NormalContext } from "../../../../context/NormalContext";
import { Format_Laudo } from "../../../component/function_format_laudo";

function Aorta() {
  const altura = "100%";
  const largura = "66%";

  let selectLocalizacao = document.querySelector(
    "#SelectLocalizacao"
  ) as HTMLInputElement;
  let inputCalibreMaximo = document.querySelector(
    "#InputCalibreMaximo"
  ) as HTMLInputElement;
  let inputExtensao = document.querySelector(
    "#InputExtensao"
  ) as HTMLInputElement;

  const { laudoNormal } = useContext(NormalContext);
  const [valueFraseAneurisma, setValueFraseAneurisma] = useState("");

  const [valueLocalizacaoAneurmisma, setValueLocalizacaoAneurmisma] =
    useState("");
  const [valueInputCalibreMax, setValueInputCalibreMax] = useState("");

  const [defaultValueNormal, setDefaultValueNormal] = useState({
    defaultValueNormal: false,
  });

  const [checkValueNormal, setCheckValueNormal] = useState({
    normal: false,
  });

  const [checkValueNaoVisibilizada, setCheckValueNaoVisibilizada] = useState({
    NaoVisibilizada: false,
  });
  const [checkValueAteromatosa, setCheckValueAteromatosa] = useState({
    ateromatosa: false,
  });

  const [checkValueAneurisma, setCheckvalueAneurisma] = useState({
    aneurisma: false,
    selectLocalizacao: true,
    inputCalibreMaximo: true,
    inputExtensao: true,
  });

  const [frasesAorta, setFrasesAorta] = useState<any>([]);

  const subExame = "Aorta";
  const titulo_exame = "Abdomen total";

  useEffect(() => {
    if (Object.keys(frasesAorta).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesAorta
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesAorta
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesAorta]);

  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    var index = frasesAorta.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesAorta.splice(index, 1);
      setFrasesAorta((arr) => [...arr]);
    }
    inputExtensao.value = "";
    selectLocalizacao.value = "";
    inputCalibreMaximo.value = "";
  };

  const removeStringAneurisma = () => {
    setCheckvalueAneurisma({
      aneurisma: false,
      selectLocalizacao: true,
      inputCalibreMaximo: true,
      inputExtensao: true,
    });
    const index = frasesAorta.indexOf(valueFraseAneurisma);
    if (index > -1) {
      frasesAorta.splice(index, 1);
      setFrasesAorta((arr) => [...arr]);
    }
  };

  const criaStringInputCisto = (value) => {
    const string =
      "Aneurisma Localizado no " +
      valueLocalizacaoAneurmisma +
      "com calibre de " +
      valueInputCalibreMax +
      " mm com extensão de " +
      value.value;
    setValueFraseAneurisma(string);
    setFrasesAorta((arr) => [...arr, string]);
  };

  const criarString = (value, valueId?, valueInput?) => {
    //console.log("Valor cria string = ", value);
    //arr => [...arr] captura os dados que já estavam e os mantem no array
    setFrasesAorta((arr) => [...arr, value]);
    //console.log("criaString = ", laudoPrin)
  };
  useEffect(() => {
    if (laudoNormal === true) {
      setDefaultValueNormal({ defaultValueNormal: true });
      criarString("Aorta Normal ");
      setCheckValueNaoVisibilizada({
        NaoVisibilizada: true,
      });
      setCheckValueAteromatosa({
        ateromatosa: true,
      });
      setCheckvalueAneurisma({
        aneurisma: true,
        selectLocalizacao: true,
        inputCalibreMaximo: true,
        inputExtensao: true,
      });
    } else {
      setDefaultValueNormal({ defaultValueNormal: false });
      //   removeNormal()
      setCheckValueNaoVisibilizada({
        NaoVisibilizada: false,
      });
      setCheckValueAteromatosa({
        ateromatosa: false,
      });
      setCheckvalueAneurisma({
        aneurisma: false,
        selectLocalizacao: true,
        inputCalibreMaximo: true,
        inputExtensao: true,
      });
    }
  }, [laudoNormal]);

  const verificaChecked = (value) => {
    switch (value.id) {
      case "AortaNormal":
        if (value.checked === true) {
          setDefaultValueNormal({ defaultValueNormal: true });
          setFrasesAorta((arr) => [...arr, value.value]);
          setCheckValueNaoVisibilizada({
            NaoVisibilizada: true,
          });
          setCheckValueAteromatosa({
            ateromatosa: true,
          });
          setCheckvalueAneurisma({
            aneurisma: true,
            selectLocalizacao: true,
            inputCalibreMaximo: true,
            inputExtensao: true,
          });
        } else {
          setDefaultValueNormal({ defaultValueNormal: false });
          removeItemString(value.value);
          setCheckValueNaoVisibilizada({
            NaoVisibilizada: false,
          });
          setCheckValueAteromatosa({
            ateromatosa: false,
          });
          setCheckvalueAneurisma({
            aneurisma: false,
            selectLocalizacao: true,
            inputCalibreMaximo: true,
            inputExtensao: true,
          });
        }
        break;
      case "NaoVisibilizada":
        if (value.checked === true) {
          setFrasesAorta((arr) => [...arr, value.value]);
          setCheckValueNormal({
            normal: true,
          });
          setCheckValueAteromatosa({
            ateromatosa: true,
          });
          setCheckvalueAneurisma({
            aneurisma: true,
            selectLocalizacao: true,
            inputCalibreMaximo: true,
            inputExtensao: true,
          });
        } else {
          removeItemString(value.value);
          setCheckValueNormal({
            normal: false,
          });
          setCheckValueAteromatosa({
            ateromatosa: false,
          });
          setCheckvalueAneurisma({
            aneurisma: false,
            selectLocalizacao: true,
            inputCalibreMaximo: true,
            inputExtensao: true,
          });
        }
        break;
      case "Ateromatosa":
        if (value.checked === true) {
          setFrasesAorta((arr) => [...arr, value.value]);
          setCheckValueNormal({
            normal: true,
          });
          setCheckValueNaoVisibilizada({
            NaoVisibilizada: true,
          });
          setCheckvalueAneurisma({
            aneurisma: true,
            selectLocalizacao: true,
            inputCalibreMaximo: true,
            inputExtensao: true,
          });
        } else {
          removeItemString(value.value);
          setCheckValueNormal({
            normal: false,
          });
          setCheckValueNaoVisibilizada({
            NaoVisibilizada: false,
          });
          setCheckvalueAneurisma({
            aneurisma: false,
            selectLocalizacao: true,
            inputCalibreMaximo: true,
            inputExtensao: true,
          });
        }
        break;
      case "Aneurisma":
        if (value.checked === true) {
          setCheckvalueAneurisma({
            aneurisma: false,
            selectLocalizacao: false,
            inputCalibreMaximo: false,
            inputExtensao: false,
          });
          setCheckValueNormal({
            normal: true,
          });
          setCheckValueNaoVisibilizada({
            NaoVisibilizada: true,
          });
          setCheckValueAteromatosa({
            ateromatosa: true,
          });
        } else {
          setCheckValueNormal({
            normal: false,
          });
          setCheckValueNaoVisibilizada({
            NaoVisibilizada: false,
          });
          setCheckValueAteromatosa({
            ateromatosa: false,
          });
          removeStringAneurisma();
          removeItemString("Ateromatosa");
          removeItemString("Aorta Normal ");
          removeItemString("Nao Visibilizada");
        }
        break;

      case "InputCalibreMaximo":
        setValueInputCalibreMax(value.value);
        break;
      case "SelectLocalizacao":
        setValueLocalizacaoAneurmisma(value.value);
        break;
      case "InputExtensao":
        criaStringInputCisto(value);
        break;
    }
  };

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
      <Box borderBottom="1px">
        <TituloNomeExame titulo="Aorta" />

        <Box gap="30px" display="flex" flexWrap="wrap" mb="20px">
          <Checkbox
            isChecked={defaultValueNormal.defaultValueNormal}
            value="Aorta Normal  "
            disabled={checkValueNormal.normal}
            id="AortaNormal"
            onChange={(e) => {
              verificaChecked(e.target);
            }}
          >
            Normal
          </Checkbox>
          <Checkbox
            disabled={checkValueNaoVisibilizada.NaoVisibilizada}
            value="Nao Visibilizada"
            onChange={(e) => {
              verificaChecked(e.target);
            }}
            id="NaoVisibilizada"
          >
            Não Visibilizado
          </Checkbox>
          <Checkbox
            value="Ateromatosa"
            disabled={checkValueAteromatosa.ateromatosa}
            onChange={(e) => {
              verificaChecked(e.target);
            }}
            id="Ateromatosa"
          >
            Ateromatosa
          </Checkbox>
          <Checkbox
            value=""
            disabled={checkValueAneurisma.aneurisma}
            onChange={(e) => {
              verificaChecked(e.target);
            }}
            id="Aneurisma"
          >
            Aneurisma
          </Checkbox>
        </Box>
      </Box>
      {/* ------------------------------------------------------------------------------------------------------------ */}

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Box>
          <Text>Localização:</Text>
          <Select
            disabled={checkValueAneurisma.selectLocalizacao}
            onChange={(e) => {
              verificaChecked(e.target);
            }}
            id="SelectLocalizacao"
          >
            <option value="" disabled selected>
              Localização
            </option>
            <option value="supra-renal">Supra-renal</option>
            <option value="tercoProximal">terço proximal</option>
            <option value="tercoMedio">Terço médio</option>
            <option value="tercoDistal">Terço distal</option>
            <option value="bifurcacao">Bifurcação</option>
            <option value="infraRenal">Infra-renal</option>
          </Select>
        </Box>

        <Box w="200px">
          <Text>Calire máximo:</Text>
          <Input
            disabled={checkValueAneurisma.inputCalibreMaximo}
            id="InputCalibreMaximo"
            onBlur={(e) => {
              verificaChecked(e.target);
            }}
            w="100%"
            placeholder="mm"
          />
        </Box>

        <Box w="200px">
          <Text>Extensão:</Text>
          <Input
            disabled={checkValueAneurisma.inputExtensao}
            id="InputExtensao"
            onBlur={(e) => {
              verificaChecked(e.target);
            }}
            w="100%"
            placeholder="mm"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Aorta;
