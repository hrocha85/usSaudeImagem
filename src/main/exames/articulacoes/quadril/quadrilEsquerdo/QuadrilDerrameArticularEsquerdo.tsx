/* eslint-disable array-callback-return */

import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function QuadrilDerrameArticularEsquerdo({ Disable }) {
  const altura = "100%";
  const largura = "100%";

  const [QuadrilDerrameArticularEsquerdo, setQuadrilDerrameArticularEsquerdo] = useState<any>([]);
  const [ConclusaoQuadrilDerrameArticularEsquerdo, setConclusaoQuadrilDerrameArticularEsquerdo] = useState<any>([]);

  const subExame = `Quadril- Derrame articular no Quadril Esquerdo`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(QuadrilDerrameArticularEsquerdo).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        QuadrilDerrameArticularEsquerdo,
        ConclusaoQuadrilDerrameArticularEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        QuadrilDerrameArticularEsquerdo,
        ConclusaoQuadrilDerrameArticularEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [QuadrilDerrameArticularEsquerdo]);

  const [disablePresente, setDisablePresente] = useState(false)
  const [disableAusente, setDisableAusente] = useState(false)

  const [disablePresenteInput, setdisablePresenteInput] = useState(true);
  const [PresenteCheckbox, setPresenteCheckbox] = useState(false);
  const [PresenteSelect, setPresenteSelect] = useState("");

  const [AusenteCheckbox, setAusenteCheckbox] = useState(true);
  const [EspessamentoSinovialCheckbox, setEspessamentoSinovialCheckbox] = useState(false);


  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringAusente = () => {
    const string = "Ausência de derrame articular.";
    if (AusenteCheckbox) {
      setQuadrilDerrameArticularEsquerdo((arr) => [...arr, string]);
      setDisablePresente(true)
      setAusenteCheckbox(false);
    } else {
      setDisablePresente(false)
      removeItemString(string);
    }
  };

  const criaStringPresente = (Presente) => {
    removePresente();
    let conclusao = 'Derrame articular'
    let string;
    if (Presente !== "" && EspessamentoSinovialCheckbox) {
      string = `Presença de derrame articular ${Presente}, associado a espessamento sinovial. `;
      conclusao = `${conclusao} associado a sinovite`
      setQuadrilDerrameArticularEsquerdo((arr) => [...arr, string]);
      setConclusaoQuadrilDerrameArticularEsquerdo((arr) => [...arr, conclusao]);
    } else if (Presente !== "") {
      string = `Presença de derrame articular ${Presente}.`;
      conclusao = `${conclusao}.`
      setQuadrilDerrameArticularEsquerdo((arr) => [...arr, string]);
      setConclusaoQuadrilDerrameArticularEsquerdo((arr) => [...arr, conclusao]);

    }
  };

  const removePresente = () => {
    QuadrilDerrameArticularEsquerdo.map((e) => {
      if (e.includes("Presença de derrame articular")) {
        const index = QuadrilDerrameArticularEsquerdo.indexOf(e);

        if (index > -1) {
          QuadrilDerrameArticularEsquerdo.splice(index, 1);
          setQuadrilDerrameArticularEsquerdo((arr) => [...arr]);
        }
      }
    });
    ConclusaoQuadrilDerrameArticularEsquerdo.map((e) => {
      if (e.includes("Derrame articular")) {
        const index = ConclusaoQuadrilDerrameArticularEsquerdo.indexOf(e);

        if (index > -1) {
          ConclusaoQuadrilDerrameArticularEsquerdo.splice(index, 1);
          setConclusaoQuadrilDerrameArticularEsquerdo((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(`Derrame articular`)
        }
      }
    });
  };

  const removeItemString = (value) => {
    const index = QuadrilDerrameArticularEsquerdo.indexOf(value);

    if (index > -1) {
      QuadrilDerrameArticularEsquerdo.splice(index, 1);
      setQuadrilDerrameArticularEsquerdo((arr) => [...arr]);
    }
  };

  useEffect(() => {
    if (PresenteCheckbox) {
      setdisablePresenteInput(false);
      setDisableAusente(true)
    } else {
      removePresente();
      setDisableAusente(false)
      setdisablePresenteInput(true);
    }
  }, [PresenteCheckbox]);


  useEffect(() => {
    criaStringPresente(PresenteSelect);
  }, [PresenteSelect, EspessamentoSinovialCheckbox]);


  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Derrame Articular Esquerdo" />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>

        <Checkbox
          isDisabled={disableAusente}
          onChange={() => {
            setAusenteCheckbox(true);
            criaStringAusente();
          }}
        >
          Ausente
        </Checkbox>
        <HStack>
          <Checkbox
            isDisabled={disablePresente}
            onChange={() => setPresenteCheckbox(!PresenteCheckbox)}>
            Presente
          </Checkbox>
          <Select
            w='110px'
            isDisabled={disablePresenteInput}
            onChange={(e) => {
              setPresenteSelect(e.target.value);
            }}
          >
            <option value="discreto">Discreto</option>
            <option value="moderado">Moderado</option>
            <option value="volumoso">Volumoso</option>
          </Select>
          <Checkbox
            isDisabled={disablePresenteInput}
            onChange={() => setEspessamentoSinovialCheckbox(!EspessamentoSinovialCheckbox)}>
            com espessamento sinovial
          </Checkbox>
        </HStack>
      </Stack>
    </Box>

  );
}
export default QuadrilDerrameArticularEsquerdo;
