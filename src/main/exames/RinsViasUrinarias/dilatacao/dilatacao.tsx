/* eslint-disable array-callback-return */

import { Box, Checkbox, Select, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Dilatacao() {
  const altura = "100%";
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "60%": largura = "100%"

  const [FraseDilatacao, setFraseDilatacao] = useState<any>([]);
  const [ConclusaoDilatacao, setConclusaoDilatacao] = useState<any>([]);

  const [checkboxDilatacaoDireito, setCheckboxDilatacaoDireito] =
    useState(false);

  const [valueSelectDilatacaoDireito, setValueSelectDilatacaoDireito] =
    useState("");

  const [checkboxDilatacaoEsquerdo, setCheckboxDilatacaoEsquerdo] =
    useState(false);

  const [valueSelectDilatacaoEsquerdo, setValueSelectDilatacaoEsquerdo] =
    useState("");

  const criaStringDilatacaoDireito = () => {
    let string = 'Presença de dilatação pielo-calicial'
    let conclusao = 'Dilatação pielo-calicial'
    removeStringSelect(string)
    removeConclusaoSelect(conclusao)
    if (checkboxDilatacaoDireito) {
      if (valueSelectDilatacaoDireito !== "") {
        string = `${string} ${valueSelectDilatacaoDireito} no rim direito.`;
        conclusao = `${conclusao} ${valueSelectDilatacaoDireito} no rim direito.`;
        setFraseDilatacao((arr) => [...arr, string]);
        setConclusaoDilatacao((arr) => [...arr, conclusao]);
      }
    } else {
      setValueSelectDilatacaoDireito("");
    }
  };

  useEffect(() => {
    criaStringDilatacaoDireito();
  }, [valueSelectDilatacaoDireito, checkboxDilatacaoDireito]);

  const criaStringDilatacaoEsquerdo = () => {
    let string = 'Presença de dilatação pielo-calicial'
    let conclusao = 'Dilatação pielo-calicial'
    removeStringSelect(string)
    removeConclusaoSelect(conclusao)
    if (checkboxDilatacaoEsquerdo) {
      if (valueSelectDilatacaoEsquerdo !== "") {
        string = `${string} ${valueSelectDilatacaoEsquerdo} no rim Esquerdo.`;
        conclusao = `${conclusao} ${valueSelectDilatacaoEsquerdo} no rim Esquerdo.`;
        setFraseDilatacao((arr) => [...arr, string]);
        setConclusaoDilatacao((arr) => [...arr, conclusao]);
      }
    } else {
      setValueSelectDilatacaoEsquerdo("");
    }
  };

  useEffect(() => {
    criaStringDilatacaoEsquerdo();
  }, [valueSelectDilatacaoEsquerdo, checkboxDilatacaoEsquerdo]);

  const removeStringSelect = (value) => {
    FraseDilatacao.map((e) => {
      if (e.includes(value)) {
        const index = FraseDilatacao.indexOf(e);

        if (index > -1) {
          FraseDilatacao.splice(index, 1);
          setFraseDilatacao((arr) => [...arr]);
        }
      }
    });
  };
  const removeConclusaoSelect = (value) => {

    ConclusaoDilatacao.map((e) => {
      if (e.includes(value)) {
        const index = ConclusaoDilatacao.indexOf(e);

        if (index > -1) {
          ConclusaoDilatacao.splice(index, 1);
          setConclusaoDilatacao((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(value);
        }
      }
    });
  };

  const subExame = "Dilatação";
  const titulo_exame = "Rins e Vias Urinárias";

  useEffect(() => {
    if (Object.keys(FraseDilatacao).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseDilatacao,
        ConclusaoDilatacao
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseDilatacao,
        ConclusaoDilatacao
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseDilatacao]);

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
        <TituloNomeExame titulo="Dilatação" />

        <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setCheckboxDilatacaoDireito(!checkboxDilatacaoDireito);
              }}
            >
              Dilatação rim direito
            </Checkbox>
            <Select
              w="150px"
              isDisabled={!checkboxDilatacaoDireito}
              onChange={(e) => {
                setValueSelectDilatacaoDireito(e.target.value);
              }}
              value={valueSelectDilatacaoDireito}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="leve">leve</option>
              <option value="moderada">moderada</option>
              <option value="acentuada">acentuada</option>
            </Select>
          </Box>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setCheckboxDilatacaoEsquerdo(!checkboxDilatacaoEsquerdo);
              }}
            >
              Dilatação rim Esquerdo
            </Checkbox>
            <Select
              w="150px"
              isDisabled={!checkboxDilatacaoEsquerdo}
              onChange={(e) => {
                setValueSelectDilatacaoEsquerdo(e.target.value);
              }}
              value={valueSelectDilatacaoEsquerdo}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="leve">leve</option>
              <option value="moderada">moderada</option>
              <option value="acentuada">acentuada</option>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dilatacao;
