import { Box, Center, Checkbox } from "@chakra-ui/react";
import { useContext } from "react";
import { QuadrilEsquerdoNormalContext } from "../../../../../context/QuadrilEsquerdoNormalContext";

export function NormalEsquerdo() {
  const altura = "100%";
  const largura = "100%";

  let { setQuadrilEsquerdoLaudoNormal } = useContext(
    QuadrilEsquerdoNormalContext
  );

  const verificaChecked = (value) => {
    value.checked === true
      ? setQuadrilEsquerdoLaudoNormal(true)
      : setQuadrilEsquerdoLaudoNormal(false);
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
          Quadril Esquerdo normal
        </Checkbox>
      </Center>
    </Box>
  );
}
export default NormalEsquerdo;
