import { Box, Center, Checkbox } from "@chakra-ui/react";
import { useContext } from "react";
import { QuadrilDireitoNormalContext } from "../../../../../context/QuadrilDireitoNormalContext";

export function NormalDireito() {
  const altura = "100%";
  const largura = "100%";

  const { setQuadrilDireitoLaudoNormal } = useContext(
    QuadrilDireitoNormalContext
  );

  const verificaChecked = (value) => {
    value.checked === true
      ? setQuadrilDireitoLaudoNormal(true)
      : setQuadrilDireitoLaudoNormal(false);
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
          Quadril direito normal
        </Checkbox>
      </Center>
    </Box>
  );
}
export default NormalDireito;
