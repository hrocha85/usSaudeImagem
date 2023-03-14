/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Axila_direita() {
  const altura = "100%";
  const largura = "400px";

  const [frasesAxilas, setFrasesAxilas] = useState<any>([]);

  const [CheckboxAxilasLinfadenomegalia, setCheckboxAxilasLinfadenomegalia] = useState(false);

  const [disableSelectAxilasLinfadenomegalia, setDisableSelectAxilasLinfadenomegalia,] = useState(true);

  const [valueSelectAxilasLinfadenomegalia, setValueSelectAxilasLinfadenomegalia,] = useState("");

  const [CheckboxAxilaAcessoria, setCheckboxAxilaAcessoria] = useState(false);

  const [disableSelectAxilaAcessoria, setDisableSelectAxilaAcessoria,] = useState(true);

  const [valueSelectAxilaAcessoria, setValueSelectAxilaAcessoria] = useState("");


  const [CheckboxPeleTecido, setCheckboxPeleTecido] = useState(false);

  const [disableSelectPeleTecido, setDisableSelectPeleTecido,] = useState(true);

  const [valueSelectPeleTecido, setValueSelectPeleTecido] = useState("");

  const [CheckboxTecidoFibrograndular, setCheckboxTecidoFibrograndular] = useState(false);



  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    var index = frasesAxilas.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesAxilas.splice(index, 1);
      setFrasesAxilas((arr) => [...arr]);
    }
  };



  useEffect(() => {
    const string = `Presença de tecido figbroglandular em regiao axilar.`
    CheckboxTecidoFibrograndular ? setFrasesAxilas((arr) => [...arr, string]) : removeItemString(string)
  }, [CheckboxTecidoFibrograndular]);

  const criaStringPeleTecido = () => {
    removeFrasePeleTecido();
    if (CheckboxPeleTecido) {
      setDisableSelectPeleTecido(false);
      if (valueSelectPeleTecido !== "") {
        let string = `Pele e tecido subcutâneo de espessura  ${valueSelectPeleTecido}`;
        setFrasesAxilas((arr) => [...arr, string]);
      }
    } else {
      setDisableSelectPeleTecido(true);
      setValueSelectPeleTecido("");
    }
  };
  const removeFrasePeleTecido = () => {
    frasesAxilas.map((e) => {
      if (e.includes("Pele e tecido subcutâneo de espessura ")) {
        let index = frasesAxilas.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesAxilas.splice(index, 1);
          setFrasesAxilas((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringPeleTecido();
  }, [valueSelectPeleTecido, CheckboxPeleTecido]);

  const criaStringAxilasLinfadenomegalia = () => {
    removeFraseAxilasLinfadenomegalia();
    if (CheckboxAxilasLinfadenomegalia) {
      setDisableSelectAxilasLinfadenomegalia(false);
      if (valueSelectAxilasLinfadenomegalia !== "") {
        let string = `Linfadenomegalia ${valueSelectAxilasLinfadenomegalia}`;
        setFrasesAxilas((arr) => [...arr, string]);
      }
    } else {
      setDisableSelectAxilasLinfadenomegalia(true);
      setValueSelectAxilasLinfadenomegalia("");
    }
  };
  const removeFraseAxilasLinfadenomegalia = () => {
    frasesAxilas.map((e) => {
      if (e.includes("Linfadenomegalia")) {
        let index = frasesAxilas.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesAxilas.splice(index, 1);
          setFrasesAxilas((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringAxilasLinfadenomegalia();
  }, [valueSelectAxilasLinfadenomegalia, CheckboxAxilasLinfadenomegalia]);

  const criaStringAxilaAcessoria = () => {
    removeFraseAxilaAcessoria();
    if (CheckboxAxilaAcessoria) {
      console.log(valueSelectAxilaAcessoria);
      setDisableSelectAxilaAcessoria(false);
      if (valueSelectAxilaAcessoria !== "") {
        let string = `axila acessória  ${valueSelectAxilaAcessoria}`;
        setFrasesAxilas((arr) => [...arr, string]);
      }
    } else {
      setDisableSelectAxilaAcessoria(true);
      setValueSelectAxilaAcessoria("");
    }
  };
  const removeFraseAxilaAcessoria = () => {
    frasesAxilas.map((e) => {
      if (e.includes("axila acessória ")) {
        let index = frasesAxilas.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesAxilas.splice(index, 1);
          setFrasesAxilas((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringAxilaAcessoria();
  }, [valueSelectAxilaAcessoria, CheckboxAxilaAcessoria]);

  const subExame = "Axila Direita";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(frasesAxilas).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesAxilas
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesAxilas
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesAxilas]);

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
      mt="20px"
    >
      <Box mb="20px">
        <TituloNomeExame titulo="Axila Direita" />

        <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setCheckboxPeleTecido(
                  !CheckboxPeleTecido
                );
              }}
            >
              Pele e tecido subcultâneo
            </Checkbox>
            <Select
              w="150px"
              isDisabled={disableSelectPeleTecido}
              onChange={(e) => {
                setValueSelectPeleTecido(e.target.value);
              }}
              value={valueSelectPeleTecido}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="conservada">Conservada</option>
              <option value="????">????</option>
              <option value="????">????</option>

            </Select>
          </Box>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setCheckboxTecidoFibrograndular(
                  !CheckboxTecidoFibrograndular
                );
              }}
            >
              Tecido fibrograndular
            </Checkbox>
          </Box>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setCheckboxAxilasLinfadenomegalia(
                  !CheckboxAxilasLinfadenomegalia
                );
              }}
            >
              Linfadenomegalia
            </Checkbox>
            <Select
              w="150px"
              isDisabled={disableSelectAxilasLinfadenomegalia}
              onChange={(e) => {
                setValueSelectAxilasLinfadenomegalia(e.target.value);
              }}
              value={valueSelectAxilasLinfadenomegalia}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="na axila direita">axila direita</option>
              <option value="na axila direita">axila direita</option>
              <option value="bilateral">bilateral</option>
            </Select>
          </Box>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setCheckboxAxilaAcessoria(!CheckboxAxilaAcessoria);
              }}
            >
              Axila Acessório
            </Checkbox>
            <Select
              w="150px"
              isDisabled={disableSelectAxilaAcessoria}
              onChange={(e) => {
                setValueSelectAxilaAcessoria(e.target.value);
              }}
              value={valueSelectAxilaAcessoria}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="na axila direita">axila direita</option>
              <option value="na axila direita">axila direita</option>
              <option value="bilateral">bilateral</option>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Axila_direita;
