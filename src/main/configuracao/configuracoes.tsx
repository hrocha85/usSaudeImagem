import { Box, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import MainCard from "../component/mainCard";
import CardObservation from "../component/cardObservations";
import ImageHome from "../images/icon_x5F_home_1_.png";
import BGImage from "../images/bgImage.jpg";

const Configuracoes = () => {
  return (
    <Box
      w="100%"
      h="100%"
      verticalAlign="center"
      alignSelf="center"
      backgroundImage={BGImage}
      backgroundPosition="center"
      backgroundSize="100%"
      backgroundClip="padding-box"
      backgroundRepeat="no-repeat"
      paddingBottom="10px"
    >
      <Spacer />
      <Box>
       
        <Text textColor="black" fontWeight="bold" fontSize="20px">
          Configurações
        </Text>
      </Box>

      <HStack
        spacing="20px"
        paddingStart="37px"
        paddingTop="147px"
        align="center"
      >
        <MainCard titulo="Clínicas" />
        <MainCard titulo="Doutor(a)" />
        <MainCard titulo="Doutor(a)" />
        <MainCard titulo="Doutor(a)" />
      </HStack>

      <CardObservation />
      <Box margin="30px">
        <Image src={ImageHome} />
      </Box>
    </Box>
  );
};

export default Configuracoes;
