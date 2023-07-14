import { Box, Center, Checkbox } from "@chakra-ui/react";
import { useContext } from "react";
import { JoelhoDireitoNormalContext } from "../../../../../context/JoelhoDireitoNormalContext";

export function NormalDireito() {
  const altura = "100%";
  const largura = "100%";

  let { setJoelhoDireitoLaudoNormal } = useContext(JoelhoDireitoNormalContext);

  const verificaChecked = (value) => {
    value.checked === true
      ? setJoelhoDireitoLaudoNormal(true)
      : setJoelhoDireitoLaudoNormal(false);
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
          Joelho direito normal
        </Checkbox>
      </Center>
    </Box>
  );
}
export default NormalDireito;
