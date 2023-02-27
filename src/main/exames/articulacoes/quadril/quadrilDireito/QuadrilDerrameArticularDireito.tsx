/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function QuadrilDerrameArticularDireito({ Disable }) {
  const altura = "100%";
  const largura = "100%";

  const [QuadrilDerrameArticularDireito, setQuadrilDerrameArticularDireito] = useState<any>([]);
  const [ConclusaoQuadrilDerrameArticularDireito, setConclusaoQuadrilDerrameArticularDireito] = useState<any>([]);

  const subExame = `Derrame articular no Quadril direito`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(QuadrilDerrameArticularDireito).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        QuadrilDerrameArticularDireito,
        ConclusaoQuadrilDerrameArticularDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        QuadrilDerrameArticularDireito,
        ConclusaoQuadrilDerrameArticularDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [QuadrilDerrameArticularDireito]);


  const [disablePresente, setDisablePresente] = useState(false)
  const [disableAusente, setDisableAusente] = useState(false)

  const [disablePresenteInput, setdisablePresenteInput] = useState(true);
  const [PresenteCheckbox, setPresenteCheckbox] = useState(false);
  const [PresenteSelect, setPresenteSelect] = useState("");

  const [AusenteCheckbox, setAusenteCheckbox] = useState(true);
  const [EspessamentoSinovialCheckbox, setEspessamentoSinovialCheckbox] = useState(false);


  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringAusente = () => {
    var string = "Ausência de derrame articular.";
    if (AusenteCheckbox) {
      setQuadrilDerrameArticularDireito((arr) => [...arr, string]);
      setDisablePresente(true)
      setAusenteCheckbox(false);
    } else {
      setDisablePresente(false)
      removeItemString(string);
    }
  };

  const criaStringPresente = (Presente) => {
    removePresente();
    var conclusao = 'Derrame articular'
    var string;
    if (Presente !== "" && EspessamentoSinovialCheckbox) {
      string = `Presença de derrame articular ${Presente}, associado a espessamento sinovial. `;
      conclusao = `${conclusao} associado a sinovite`
      setQuadrilDerrameArticularDireito((arr) => [...arr, string]);
      setConclusaoQuadrilDerrameArticularDireito((arr) => [...arr, conclusao]);
    } else if (Presente !== "") {
      string = `Presença de derrame articular ${Presente}.`;
      conclusao = `${conclusao}.`
      setQuadrilDerrameArticularDireito((arr) => [...arr, string]);
      setConclusaoQuadrilDerrameArticularDireito((arr) => [...arr, conclusao]);

    }
  };

  const removePresente = () => {
    QuadrilDerrameArticularDireito.map((e) => {
      if (e.includes("Presença de derrame articular")) {
        var index = QuadrilDerrameArticularDireito.indexOf(e);

        if (index > -1) {
          QuadrilDerrameArticularDireito.splice(index, 1);
          setQuadrilDerrameArticularDireito((arr) => [...arr]);
        }
      }
    });
    ConclusaoQuadrilDerrameArticularDireito.map((e) => {
      if (e.includes("Derrame articular")) {
        var index = ConclusaoQuadrilDerrameArticularDireito.indexOf(e);

        if (index > -1) {
          ConclusaoQuadrilDerrameArticularDireito.splice(index, 1);
          setConclusaoQuadrilDerrameArticularDireito((arr) => [...arr]);
        }
      }
    });
  };

  const removeItemString = (value) => {
    var index = QuadrilDerrameArticularDireito.indexOf(value);

    if (index > -1) {
      QuadrilDerrameArticularDireito.splice(index, 1);
      setQuadrilDerrameArticularDireito((arr) => [...arr]);
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
      <TituloNomeExame titulo="Derrame Articular Direito" />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>

        <Checkbox
          isDisabled={Disable || disableAusente}
          onChange={() => {
            setAusenteCheckbox(true);
            criaStringAusente();
          }}
        >
          Ausente
        </Checkbox>
        <HStack>
          <Checkbox
            isDisabled={Disable || disablePresente}
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
export default QuadrilDerrameArticularDireito;
