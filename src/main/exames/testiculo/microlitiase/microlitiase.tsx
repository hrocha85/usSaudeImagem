import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Microlitiase() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [posicaoMicrolitiaseSelect, setPosicaoMicrolitiaseSelect] = useState("");
  const [MicrolitiaseCheckBox, setMicrolitiaseCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringMicrolitiaseLivre = () => {
    removeStringMicrolitiaseLivre();

    if (MicrolitiaseCheckBox && posicaoMicrolitiaseSelect !== "") {
      var string = `Microlitíase no local: ${posicaoMicrolitiaseSelect}`;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeStringMicrolitiaseLivre = () => {
    laudoPrin.map((e) => {
      if (e.includes("Microlitíase no local")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (MicrolitiaseCheckBox) {
      setDisableSelect(false)
      criaStringMicrolitiaseLivre();
    } else {
      setDisableSelect(true)
      removeStringMicrolitiaseLivre();
      setPosicaoMicrolitiaseSelect("");
    }
  }, [MicrolitiaseCheckBox, posicaoMicrolitiaseSelect]);

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
