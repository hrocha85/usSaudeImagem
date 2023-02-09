/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { QuadrilEsquerdoNormalContext } from "../../../../../context/QuadrilEsquerdoNormalContext";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function QuadrilDerrameArticularEsquerdo() {
  const altura = "100%";
  const largura = "100%";

  const [QuadrilDerrameArticularEsquerdo, setQuadrilDerrameArticularEsquerdo] = useState<any>([]);

  const subExame = `Derrame articular no Quadril Esquerdo`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(QuadrilDerrameArticularEsquerdo).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        QuadrilDerrameArticularEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        QuadrilDerrameArticularEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [QuadrilDerrameArticularEsquerdo]);

  let { QuadrilEsquerdoLaudoNormal } = useContext(QuadrilEsquerdoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)
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
    var string;
    if (Presente !== "" && EspessamentoSinovialCheckbox) {
      string = `Presença de derrame articular ${Presente}, associado a espessamento sinovial. `;
      setQuadrilDerrameArticularEsquerdo((arr) => [...arr, string]);
    } else if (Presente !== "") {
      string = `Presença de derrame articular ${Presente}.`;
      setQuadrilDerrameArticularEsquerdo((arr) => [...arr, string]);

    }
  };

  const removePresente = () => {
    QuadrilDerrameArticularEsquerdo.map((e) => {
      if (e.includes("Presença de derrame articular")) {
        var index = QuadrilDerrameArticularEsquerdo.indexOf(e);

        if (index > -1) {
          QuadrilDerrameArticularEsquerdo.splice(index, 1);
          setQuadrilDerrameArticularEsquerdo((arr) => [...arr]);
        }
      }
    });
  };

  const removeItemString = (value) => {
    var index = QuadrilDerrameArticularEsquerdo.indexOf(value);

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


  useEffect(() => {
    QuadrilEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)
  }, [QuadrilEsquerdoLaudoNormal])

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
          isDisabled={disableTudo || disableAusente}
          onChange={() => {
            setAusenteCheckbox(true);
            criaStringAusente();
          }}
        >
          Ausente
        </Checkbox>
        <HStack>
          <Checkbox
            isDisabled={disableTudo || disablePresente}
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
