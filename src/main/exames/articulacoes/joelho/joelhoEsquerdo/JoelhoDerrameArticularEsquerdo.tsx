/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { JoelhoEsquerdoNormalContext } from "../../../../../context/JoelhoEsquerdoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function JoelhoDerrameArticularEsquerdo() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  let { JoelhoEsquerdoLaudoNormal } = useContext(JoelhoEsquerdoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)
  const [disablePresente, setDisablePresente] = useState(false)
  const [disableAusente, setDisableAusente] = useState(false)

  const [disablePresenteInput, setdisablePresenteInput] = useState(true);
  const [PresenteCheckbox, setPresenteCheckbox] = useState(false);
  const [PresenteSelect, setPresenteSelect] = useState("");

  const [AusenteCheckbox, setAusenteCheckbox] = useState(true);
  const [EspessamentoSinovialCheckbox, setEspessamentoSinovialCheckbox] = useState(true);


  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringAusente = () => {
    var string = "FALTA";
    if (AusenteCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
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
      setLaudoPrin((arr) => [...arr, string]);
    } else if (Presente !== "") {
      string = `FALTA ${Presente} `;
      setLaudoPrin((arr) => [...arr, string]);

    }
  };

  const removePresente = () => {
    laudoPrin.map((e) => {
      if (e.includes("FALTA")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  const removeItemString = (value) => {
    var index = laudoPrin.indexOf(value);

    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
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
      <TituloNomeExame titulo="Derrame Articular esquerdo" />

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
export default JoelhoDerrameArticularEsquerdo;