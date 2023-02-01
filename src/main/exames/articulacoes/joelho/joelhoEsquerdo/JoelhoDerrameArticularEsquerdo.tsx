/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { JoelhoEsquerdoNormalContext } from "../../../../../context/JoelhoEsquerdoNormalContext";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function JoelhoDerrameArticularEsquerdo() {
  const altura = "100%";
  const largura = "95%";

  const [JoelhoDerrameArticularEsquerdo, setJoelhoDerrameArticularEsquerdo] = useState<any>([]);

  const subExame = `Derrame articular no joelho esquerdo`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(JoelhoDerrameArticularEsquerdo).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        JoelhoDerrameArticularEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        JoelhoDerrameArticularEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [JoelhoDerrameArticularEsquerdo]);

  let { JoelhoEsquerdoLaudoNormal } = useContext(JoelhoEsquerdoNormalContext)
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
    var string;
    if (Presente !== "" && EspessamentoSinovialCheckbox) {
      string = `Preseça de ${Presente} derrame articular, associado a espessamento sinovial. `;
      setJoelhoDerrameArticularEsquerdo((arr) => [...arr, string]);
    } else if (Presente !== "") {
      string = `Preseça de ${Presente} derrame articular.`;
      setJoelhoDerrameArticularEsquerdo((arr) => [...arr, string]);

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


  useEffect(() => {
    JoelhoEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)
  }, [JoelhoEsquerdoLaudoNormal])

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
