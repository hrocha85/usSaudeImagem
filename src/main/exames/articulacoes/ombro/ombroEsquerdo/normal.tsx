import { Box, Center, Checkbox, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { OmbroEsquerdoNormalContext } from "../../../../../context/OmbroEsquerdoNormalContext";

export function NormalEsquerdo() {
  const altura = "100%";
  const largura = "100%";

  const { setOmbroEsquerdoLaudoNormal } = useContext(OmbroEsquerdoNormalContext);

  const verificaChecked = (value) => {
    value.checked === true
      ? setOmbroEsquerdoLaudoNormal(true)
      : setOmbroEsquerdoLaudoNormal(false);
  };

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
      marginBottom="10px"
    >
      <Center>
        <Checkbox
          id="tudoNormal"
          onChange={(e) => {
            verificaChecked(e.target);
          }}
        >
          Ombro esquerdo normal
        </Checkbox>
      </Center>
    </Box>
  );
}

export default NormalEsquerdo;

