import { Box, Center, Checkbox } from "@chakra-ui/react";
import { useContext } from "react";
import { MaoDireitoNormalContext } from "../../../../../context/MaoDireitoNormalContext";

export function NormalDireito() {
  const altura = "100%";
  const largura = "100%";

  const { setMaoDireitoLaudoNormal } = useContext(MaoDireitoNormalContext);

  const verificaChecked = (value) => {
    value.checked === true
      ? setMaoDireitoLaudoNormal(true)
      : setMaoDireitoLaudoNormal(false);
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
          Mao direita normal
        </Checkbox>
      </Center>
    </Box>
  );
}
export default NormalDireito;
