import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Microlitiase() {
  const altura = "100%";
  const largura = "90%";

  const [FrasesMicrolitiase, setFrasesMicrolitiase] = useState<any>([]);
  const [ConclusaoMicrolitiase, setConclusaoMicrolitiase] = useState<any>([]);

  const [posicaoMicrolitiaseSelect, setPosicaoMicrolitiaseSelect] =
    useState("");
  const [MicrolitiaseCheckBox, setMicrolitiaseCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringMicrolitiaseLivre = () => {
    var string = 'posicionado normalmente, com ecotextura homogênea, exceto por pequenos focos hiperecogênicos, desprovidos de sombra acústica posterior, distribuídos esparsamente, medindo de 0,1 a 0,3 cm, sugerindo microlitíase.'
    removeStringMicrolitiaseLivre(string);
    var conclusao = 'Microlitíase testicular'
    removeItemConclusao(conclusao)
    if (MicrolitiaseCheckBox && posicaoMicrolitiaseSelect !== "") {
      if (posicaoMicrolitiaseSelect === 'bilateral') {
        string = `Testículo direito e esquerdo ${string}`;
      } else {
        string = `Testículo ${posicaoMicrolitiaseSelect} ${string}`;
      }
      conclusao = `${conclusao} ${posicaoMicrolitiaseSelect}.`
      setFrasesMicrolitiase((arr) => [...arr, string]);
      setConclusaoMicrolitiase((arr) => [...arr, conclusao]);
    }
  };

  const removeStringMicrolitiaseLivre = (value) => {
    FrasesMicrolitiase.map((e) => {
      if (e.includes(value)) {
        var index = FrasesMicrolitiase.indexOf(e);

        if (index > -1) {
          FrasesMicrolitiase.splice(index, 1);
          setFrasesMicrolitiase((arr) => [...arr]);
        }
      }
    });
  };
  const removeItemConclusao = (value) => {
    ConclusaoMicrolitiase.map((e) => {
      if (e.includes(value)) {
        var index = ConclusaoMicrolitiase.indexOf(e);

        if (index > -1) {
          ConclusaoMicrolitiase.splice(index, 1);
          setConclusaoMicrolitiase((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(value)
        }
      }
    });
  };
  useEffect(() => {
    criaStringMicrolitiaseLivre();
    if (MicrolitiaseCheckBox) {
      setDisableSelect(false);
    } else {
      setDisableSelect(true);
      setPosicaoMicrolitiaseSelect("");
    }
  }, [MicrolitiaseCheckBox, posicaoMicrolitiaseSelect]);

  const subExame = "Microlitíase";
  const titulo_exame = "Testículo";


  useEffect(() => {
    if (Object.keys(FrasesMicrolitiase).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesMicrolitiase,
        ConclusaoMicrolitiase
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesMicrolitiase,
        ConclusaoMicrolitiase
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesMicrolitiase]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 20px 15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Microlitíase" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Stack>
            <Box>
              <HStack>
                <Checkbox
                  whiteSpace="nowrap"
                  onChange={() => {
                    setMicrolitiaseCheckBox(!MicrolitiaseCheckBox);
                  }}
                >
                  Microlitiase no local
                </Checkbox>
                <Select
                  isDisabled={DisableSelect}
                  w="auto"
                  onChange={(e) => {
                    setPosicaoMicrolitiaseSelect(e.target.value);
                  }}
                  value={posicaoMicrolitiaseSelect}
                >
                  <option value="" disabled selected>
                    Posição
                  </option>
                  <option value="">ausente</option>
                  <option value="direito">testículo direito</option>
                  <option value="esquerdo">testículo esquerdo</option>
                  <option value="bilateral">bilateral</option>
                </Select>
              </HStack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Microlitiase;
