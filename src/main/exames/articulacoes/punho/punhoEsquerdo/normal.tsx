import { Box, Center, Checkbox } from "@chakra-ui/react";
import { useContext } from "react";
import { PunhoEsquerdoNormalContext } from "../../../../../context/PunhoEsquerdoNormalContext";

export function NormalEsquerdo() {
  const altura = "100%";
  const largura = "100%";

  let { setPunhoEsquerdoLaudoNormal } = useContext(PunhoEsquerdoNormalContext);

  const verificaChecked = (value) => {
    value.checked === true
      ? setPunhoEsquerdoLaudoNormal(true)
      : setPunhoEsquerdoLaudoNormal(false);
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
          Punho Esquerdo normal
        </Checkbox>
      </Center>
    </Box>
  );
}
export default NormalEsquerdo;
