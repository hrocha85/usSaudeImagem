import { Box, HStack, Image, Progress, Button, Icon } from "@chakra-ui/react";
import MainCard from "../component/main_card";
import RectangularCard from "../component/card_observations";
import ImageHome from "../images/icon_home.png";
import BGImage from "../images/background_image.jpg";
import BoxTitleBackground from "../component/box_title_background";
import ItemObservation from "../component/item_obeservation";
import { FaRegFolderOpen } from "react-icons/fa";

const Configuracoes = () => {
  return (
    <Box
      w="100%"
      h="100%"
      verticalAlign="center"
      alignSelf="center"
      backgroundImage={BGImage}
      backgroundPosition="fixed"
      backgroundSize="cover"
      backgroundClip="padding-box"
      backgroundRepeat="no-repeat"
      paddingBottom="10px"
    >
      <HStack
        justifyItems="center"
        paddingStart="37px"
        align="stretch"
        alignItems="center"
        spacing="170px"
      >
        <BoxTitleBackground titulo="Configurações" />

        <Progress
          value={50}
          size="sm"
          w="259px"
          colorScheme="blue"
          backgroundColor="#C8C8C8"
          borderRadius="0.5rem"
        />

        <Button borderRadius="50%" backgroundColor="#E2E8F0" w="42" h="42">
          <Icon as={FaRegFolderOpen} />
        </Button>
      </HStack>

      <HStack
        spacing="20px"
        paddingStart="37px"
        paddingTop="147px"
        align="center"
      >
        <MainCard titulo="Clínicas" icon={true} />
        <MainCard titulo="Doutor(a)" icon={false} />
        <MainCard titulo="Doutor(a)" icon={false} />
        <MainCard titulo="Doutor(a)" icon={false} />
      </HStack>

      <RectangularCard
        titulo="Observações"
        altura="282px"
        item={<ItemObservation />}
      />

      <Box margin="30px">
        <Image src={ImageHome} />
      </Box>
    </Box>
  );
};

export default Configuracoes;
