/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { JoelhoDireitoNormalContext } from "../../../../../context/JoelhoDireitoNormalContext";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function JoelhoDerrameArticularDireito() {
  const altura = "100%";
  const largura = "95%";

  const [JoelhoDerrameArticularDireito, setJoelhoDerrameArticularDireito] = useState<any>([]);

  const subExame = `Derrame articular no joelho direito`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(JoelhoDerrameArticularDireito).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        JoelhoDerrameArticularDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        JoelhoDerrameArticularDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [JoelhoDerrameArticularDireito]);

  let { JoelhoDireitoLaudoNormal } = useContext(JoelhoDireitoNormalContext)
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
    var string = "FALTA";
    if (AusenteCheckbox) {
      setJoelhoDerrameArticularDireito((arr) => [...arr, string]);
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
      string = `FALTA ${Presente} com espassamento sinovial. `;
      setJoelhoDerrameArticularDireito((arr) => [...arr, string]);
    } else if (Presente !== "") {
      string = `FALTA ${Presente} `;
      setJoelhoDerrameArticularDireito((arr) => [...arr, string]);

    }
  };

  const removePresente = () => {
    JoelhoDerrameArticularDireito.map((e) => {
      if (e.includes("FALTA")) {
        var index = JoelhoDerrameArticularDireito.indexOf(e);

        if (index > -1) {
          JoelhoDerrameArticularDireito.splice(index, 1);
          setJoelhoDerrameArticularDireito((arr) => [...arr]);
        }
      }
    });
  };

  const removeItemString = (value) => {
    var index = JoelhoDerrameArticularDireito.indexOf(value);

    if (index > -1) {
      JoelhoDerrameArticularDireito.splice(index, 1);
      setJoelhoDerrameArticularDireito((arr) => [...arr]);
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
    JoelhoDireitoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)
  }, [JoelhoDireitoLaudoNormal])

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
            <option value="leve">leve</option>
            <option value="leve">leve</option>
            <option value="acentuada">acentuada</option>
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
export default JoelhoDerrameArticularDireito;
