/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, Text, HStack, Input, Select, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Hematoma() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [tamanhoHematomaInput, settamanhoHematomaInput] = useState("");
  const [tamanho2HematomaInput, settamanho2HematomaInput] = useState("");
  const [posicaoHematomaSelect, setPosicaoHematomaSelect] = useState("");
  const [HematomaCheckBox, setHematomaCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringHematoma = () => {
    removeStringHematoma();
    if (
      HematomaCheckBox &&
      posicaoHematomaSelect !== "" &&
      tamanhoHematomaInput !== "" &&
      tamanho2HematomaInput !== ""
    ) {
      var string = `Hematoma lado ${posicaoHematomaSelect} medindo ${tamanhoHematomaInput}x${tamanho2HematomaInput} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeStringHematoma = () => {
    laudoPrin.map((e) => {
      if (e.includes("Hematoma")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (HematomaCheckBox) {
      setDisableSelect(false)
      criaStringHematoma();
    } else {
      setDisableSelect(true)
      removeStringHematoma();
      setPosicaoHematomaSelect("");
      settamanhoHematomaInput("");
      settamanho2HematomaInput("");
    }
  }, [HematomaCheckBox, tamanhoHematomaInput, posicaoHematomaSelect, tamanho2HematomaInput]);

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
      <TituloNomeExame titulo="Hematoma" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Box>
          <HStack>
            <Checkbox
              whiteSpace="nowrap"
              onChange={() => {
                setHematomaCheckBox(!HematomaCheckBox);
              }}
            >
              Hematoma
            </Checkbox>
            <Select
              w="auto"
              isDisabled={DisableSelect}
              onChange={(e) => {
                setPosicaoHematomaSelect(e.target.value);
              }}
              value={posicaoHematomaSelect}
            >
              <option value="" disabled selected>
                Posição
              </option>
              <option value="ausente">Ausente</option>
              <option value="testículo direito">testículo direito</option>
              <option value="testículo esquerdo">testículo esquerdo</option>
            </Select>
            <Input
              isDisabled={DisableSelect}
              w="60px"
              h="77x"
              padding="5px"
              maxLength={2}
              textAlign="center"
              placeholder={"mm"}
              value={tamanhoHematomaInput}
              onChange={(e) => settamanhoHematomaInput(e.target.value)}
            />
            <Text>x</Text>
            <Input
              isDisabled={DisableSelect}
              w="60px"
              h="77x"
              padding="5px"
              maxLength={2}
              textAlign="center"
              placeholder={"mm"}
              value={tamanho2HematomaInput}
              onChange={(e) => settamanho2HematomaInput(e.target.value)}
            />
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
export default Hematoma;
