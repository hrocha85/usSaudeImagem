/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Flex, HStack, Input, Radio, RadioGroup, Select, Spacer, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Convert_Medida } from "../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Bexiga({ Disable }) {
  const altura = "100%";
  const largura = "66%";

  const [FraseBexiga, setFraseBexiga] = useState<any>([]);

  const [StringParedes, setStringParedes] = useState("");

  const [CheiaCheckbox, setCheiaCheckbox] = useState(false)
  const [DisableCheia, setDisableCheia] = useState(false)
  const [VaziaCheckbox, setVaziaCheckbox] = useState(false)
  const [DisableVazia, setDisableVazia] = useState(false)
  const [NaoVisibilizadaCheckbox, setNaoVisibilizadaCheckbox] = useState(false)
  const [DisableNaoVisibilizada, setDisableNaoVisibilizada] = useState(false)

  const [NormoEspessasCheckbox, setNormoEspessasCheckbox] = useState(false)
  const [DisableNormoEspessadas, setDisableNormoEspessadas] = useState(false)
  const [EspessadasCheckbox, setEspessadasCheckbox] = useState(false)
  const [DisableEspessadas, setDisableEspessadas] = useState(false)
  const [DisableParedes, setDisableParedes] = useState(true)

  const removeItemString = (value) => {
    var index = FraseBexiga.indexOf(value);
    if (index > -1) {
      FraseBexiga.splice(index, 1);
      setFraseBexiga((arr) => [...arr]);
    }
  };


  useEffect(() => {
    var string = `${StringParedes} de paredes normo-espessas.`
    if (NormoEspessasCheckbox) {
      setFraseBexiga((arr) => [...arr, string]);
      setDisableEspessadas(true)
    } else {
      setDisableEspessadas(false)
      removeItemString(string)
    }
  }, [NormoEspessasCheckbox])

  useEffect(() => {
    var string = `${StringParedes} de paredes espessadas.`
    if (EspessadasCheckbox) {
      setFraseBexiga((arr) => [...arr, string]);
      setDisableNormoEspessadas(true)
    } else {
      setDisableNormoEspessadas(false)
      removeItemString(string)
    }
  }, [EspessadasCheckbox])


  useEffect(() => {
    if (CheiaCheckbox || VaziaCheckbox || NaoVisibilizadaCheckbox) {
      setDisableParedes(false)
    } else {
      setDisableParedes(true)
    }

  }, [CheiaCheckbox, VaziaCheckbox, NaoVisibilizadaCheckbox])
  useEffect(() => {
    if (CheiaCheckbox) {
      setDisableVazia(true)
      setDisableNaoVisibilizada(true)
    } else {
      setDisableVazia(false)
      setDisableNaoVisibilizada(false)
    }
  }, [CheiaCheckbox])

  useEffect(() => {
    if (VaziaCheckbox) {
      setDisableCheia(true)
      setDisableNaoVisibilizada(true)
    } else {
      setDisableCheia(false)
      setDisableNaoVisibilizada(false)
    }
  }, [VaziaCheckbox])

  useEffect(() => {
    if (NaoVisibilizadaCheckbox) {

      setDisableCheia(true)
      setDisableVazia(true)
    } else {
      setDisableCheia(false)
      setDisableVazia(false)
    }
  }, [NaoVisibilizadaCheckbox])


  const subExame = "Bexiga";
  const titulo_exame = "Pélvico";

  useEffect(() => {
    if (Object.keys(FraseBexiga).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseBexiga,
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseBexiga,
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseBexiga]);

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
      <TituloNomeExame titulo="Bexiga" />
      <Box gap='25px' display='flex' flexWrap='wrap'>
        <Checkbox
          disabled={DisableCheia}
          onChange={() => {
            setStringParedes('Cheia,')
            setCheiaCheckbox(!CheiaCheckbox)
          }}
        >
          Cheia
        </Checkbox>
        <Checkbox
          disabled={DisableVazia}
          onChange={() => {
            setStringParedes('Vazia,')
            setVaziaCheckbox(!VaziaCheckbox)
          }}
        >
          Vazia
        </Checkbox>
        <Checkbox
          disabled={DisableNaoVisibilizada}
          onChange={() => {
            setStringParedes('Não visibilizada,')
            setNaoVisibilizadaCheckbox(!NaoVisibilizadaCheckbox)
          }}
        >
          Não visibilizada
        </Checkbox>
      </Box >
      <Box gap='25px' display='flex' flexWrap='wrap'>
        <Checkbox
          disabled={DisableParedes || DisableNormoEspessadas}
          onChange={() => setNormoEspessasCheckbox(!NormoEspessasCheckbox)}
        >
          Paredes normo-espessas
        </Checkbox>
        <Checkbox
          disabled={DisableParedes || DisableEspessadas}
          onChange={() => setEspessadasCheckbox(!EspessadasCheckbox)}
        >
          Paredes espessadas
        </Checkbox>
      </Box>
    </Box >
  );
}

export default Bexiga