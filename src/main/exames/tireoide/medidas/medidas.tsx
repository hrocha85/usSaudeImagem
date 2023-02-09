import { Box, Checkbox, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Medidas() {
  const altura = "100%";
  const largura = "66%";

  const [FrasesMedidas, setFrasesMedidas] = useState<any>([]);

  const [LoboDireitoCheckbox, setLoboDireitoCheckbox] = useState(false)
  const [LoboEsquerdoCheckbox, setLoboEsquerdoCheckbox] = useState(false)
  const [IstmoCheckbox, setIstmoCheckbox] = useState(false)

  const [ValueInput1LoboDireito, setValueInput1LoboDireito] = useState('')
  const [ValueInput2LoboDireito, setValueInput2LoboDireito] = useState('')
  const [ValueInput3LoboDireito, setValueInput3LoboDireito] = useState('')

  const [ValueInput1LoboEsquerdo, setValueInput1LoboEsquerdo] = useState('')
  const [ValueInput2LoboEsquerdo, setValueInput2LoboEsquerdo] = useState('')
  const [ValueInput3LoboEsquerdo, setValueInput3LoboEsquerdo] = useState('')

  const [ValueInput1Istmo, setValueInput1Istmo] = useState('')
  const [ValueInput2Istmo, setValueInput2Istmo] = useState('')
  const [ValueInput3Istmo, setValueInput3Istmo] = useState('')

  const criaStringLoboDireito = () => {
    var string = 'Lobo Direito Falta'
    removeFraseLoboDireito()
    var medida1cm = new Convert_Medida(ValueInput1LoboDireito).Convert_Medida()
    var medida2cm = new Convert_Medida(ValueInput2LoboDireito).Convert_Medida()
    var medida3cm = new Convert_Medida(ValueInput3LoboDireito).Convert_Medida()
    if (ValueInput1LoboDireito != '' && ValueInput2LoboDireito != '' && ValueInput3LoboDireito != '') {
      string = `${string} ${medida1cm} x ${medida2cm} x ${medida3cm} cm`
      setFrasesMedidas((arr) => [...arr, string]);
    }
  }


  const removeFraseLoboDireito = () => {
    FrasesMedidas.map((e) => {
      if (e.includes("Lobo Direito Falta")) {
        var index = FrasesMedidas.indexOf(e);
        if (index > -1) {
          FrasesMedidas.splice(index, 1);
          setFrasesMedidas((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {

  })

  const subExame = "Medidas";
  const titulo_exame = "Tireóide";

  useEffect(() => {
    if (Object.keys(FrasesMedidas).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesMedidas
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesMedidas
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesMedidas]);

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
        <TituloNomeExame titulo="Medidas" />

        <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
          <Box w="200px">
            <Checkbox
              id="LoboDireito"
              onChange={() => {
                setLoboDireitoCheckbox(!LoboDireitoCheckbox)
              }}
            >
              Lobo Direito
            </Checkbox>
            <Box>
              <Input
                onChange={(e) => {
                  setValueInput1LoboDireito(e.target.value)
                }}
                w="25%"
                placeholder="0"
              />
              x
              <Input
                onChange={(e) => {
                  setValueInput2LoboDireito(e.target.value)
                }}
                w="25%"
                placeholder="0"
              />
              x
              <Input
                onChange={(e) => {
                  setValueInput3LoboDireito(e.target.value)
                }}
                w="25%"
                placeholder="0"
              />
              mm
            </Box>
          </Box>
          <Box w="200px">
            <Checkbox
              id="LoboEsquerdo"
              onChange={(e) => {
                setLoboEsquerdoCheckbox(!LoboEsquerdoCheckbox)
              }}
            >
              Lobo Esquerdo
            </Checkbox>
            <Box>
              <Input
                onChange={(e) => {
                  setValueInput1LoboEsquerdo(e.target.value)
                }}
                w="25%"
                placeholder="0"
              />
              x
              <Input
                onChange={(e) => {
                  setValueInput2LoboEsquerdo(e.target.value)
                }}
                w="25%"
                placeholder="0"
              />
              x
              <Input
                onChange={(e) => {
                  setValueInput3LoboEsquerdo(e.target.value)
                }}

                w="25%"
                placeholder="0"
              />
              mm
            </Box>
          </Box>
          <Box w="200px">
            <Checkbox
              id="Istmo"
              onChange={(e) => {
                setIstmoCheckbox(!IstmoCheckbox)
              }}
            >
              Istmo
            </Checkbox>
            <Box>
              <Input
                onChange={(e) => {
                  setValueInput1Istmo(e.target.value)
                }}
                w="25%"
                placeholder="0"
              />
              x
              <Input
                onChange={(e) => {
                  setValueInput2Istmo(e.target.value)
                }}
                w="25%"
                placeholder="0"
              />
              x
              <Input
                onChange={(e) => {
                  setValueInput3Istmo(e.target.value)
                }}
                w="25%"
                placeholder="0"
              />
              mm
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Medidas;
