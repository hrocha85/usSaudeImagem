/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function JoelhoDerrameArticularEsquerdo({ Disable }) {
  const altura = "100%";
  const largura = "100%";

  const [JoelhoDerrameArticularEsquerdo, setJoelhoDerrameArticularEsquerdo] = useState<any>([]);
  const [ConclusaoJoelhoDerrameArticularEsquerdo, setConclusaoJoelhoDerrameArticularEsquerdo] = useState<any>([]);

  const subExame = `Derrame articular no joelho esquerdo`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(JoelhoDerrameArticularEsquerdo).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        JoelhoDerrameArticularEsquerdo,
        ConclusaoJoelhoDerrameArticularEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        JoelhoDerrameArticularEsquerdo,
        ConclusaoJoelhoDerrameArticularEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [JoelhoDerrameArticularEsquerdo]);

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
      setJoelhoDerrameArticularEsquerdo((arr) => [...arr, string]);
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
      string = `Preseça de ${Presente} derrame articular, associado a espessamento sinovial. `;
      conclusao = `${conclusao} associado a sinovite.`
      setJoelhoDerrameArticularEsquerdo((arr) => [...arr, string]);
      setConclusaoJoelhoDerrameArticularEsquerdo((arr) => [...arr, conclusao]);
    } else if (Presente !== "") {
      string = `Preseça de ${Presente} derrame articular.`;
      conclusao = `${conclusao}.`
      setJoelhoDerrameArticularEsquerdo((arr) => [...arr, string]);
      setConclusaoJoelhoDerrameArticularEsquerdo((arr) => [...arr, conclusao]);

    }
  };

  const removePresente = () => {
    JoelhoDerrameArticularEsquerdo.map((e) => {
      if (e.includes("Preseça de")) {
        var index = JoelhoDerrameArticularEsquerdo.indexOf(e);

        if (index > -1) {
          JoelhoDerrameArticularEsquerdo.splice(index, 1);
          setJoelhoDerrameArticularEsquerdo((arr) => [...arr]);
        }
      }
    });
    ConclusaoJoelhoDerrameArticularEsquerdo.map((e) => {
      if (e.includes("Derrame articular")) {
        var index = ConclusaoJoelhoDerrameArticularEsquerdo.indexOf(e);

        if (index > -1) {
          ConclusaoJoelhoDerrameArticularEsquerdo.splice(index, 1);
          setConclusaoJoelhoDerrameArticularEsquerdo((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(`Derrame articular`)
        }
      }
    });
  };

  const removeItemString = (value) => {
    var index = JoelhoDerrameArticularEsquerdo.indexOf(value);

    if (index > -1) {
      JoelhoDerrameArticularEsquerdo.splice(index, 1);
      setJoelhoDerrameArticularEsquerdo((arr) => [...arr]);
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
            <option value="">Não graduar</option>
            <option value="pequeno">pequeno</option>
            <option value="moderado">moderado</option>
            <option value="volumoso">volumoso</option>
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
export default JoelhoDerrameArticularEsquerdo;
