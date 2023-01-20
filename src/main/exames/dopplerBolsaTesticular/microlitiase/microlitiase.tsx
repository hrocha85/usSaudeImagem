import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Microlitiase() {
  const altura = "100%";
  const largura = "95%";

  const [frasesMicrolitiase, setFrasesMicrolitiase] = useState<any>([]);

  const [posicaoMicrolitiaseSelect, setPosicaoMicrolitiaseSelect] =
    useState("");
  const [MicrolitiaseCheckBox, setMicrolitiaseCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringMicrolitiaseLivre = () => {
    removeStringMicrolitiaseLivre();

    if (MicrolitiaseCheckBox && posicaoMicrolitiaseSelect !== "") {
      var string = `Microlitíase no local: ${posicaoMicrolitiaseSelect}`;
      setFrasesMicrolitiase((arr) => [...arr, string]);
    }
  };

  const removeStringMicrolitiaseLivre = () => {
    frasesMicrolitiase.map((e) => {
      if (e.includes("Microlitíase no local")) {
        var index = frasesMicrolitiase.indexOf(e);

        if (index > -1) {
          frasesMicrolitiase.splice(index, 1);
          setFrasesMicrolitiase((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (MicrolitiaseCheckBox) {
      setDisableSelect(false);
      criaStringMicrolitiaseLivre();
    } else {
      setDisableSelect(true);
      removeStringMicrolitiaseLivre();
      setPosicaoMicrolitiaseSelect("");
    }
  }, [MicrolitiaseCheckBox, posicaoMicrolitiaseSelect]);

  const subExame = "Microlitíase";
  const titulo_exame = "Doppler de Bolsa Testicular";

  useEffect(() => {
    if (Object.keys(frasesMicrolitiase).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesMicrolitiase
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesMicrolitiase
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesMicrolitiase]);

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
                  <option value="ausente">ausente</option>
                  <option value="testículo direito">testículo direito</option>
                  <option value="testículo esquerdo">testículo esquerdo</option>
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
