import {
  Box, Button, Flex, Icon, Image,
  Progress, Stack
} from "@chakra-ui/react";
import { FaRegFolderOpen } from "react-icons/fa";
import BoxTitleBackground from "../component/box_title_background";
import RectangularCard from "../component/card_observations";
import ItemObservation from "../component/item_obeservation";
import MainCard from "../component/main_card";
import BGImage from "../images/background_image.jpg";
import BGImg from "../images/fundoazul.svg";
import ImageHome from "../images/icon_home.png";

const Configuracoes = () => {
  return (
    <Box
      w="100%"
      h="100%"
      verticalAlign="center"
      alignSelf="center"
      alignItems="center"
      backgroundImage={BGImage}
      backgroundPosition="fixed"
      backgroundSize="cover"
      backgroundClip="padding-box"
      backgroundRepeat="no-repeat"
      paddingBottom="10px"
    >
      <Flex
        direction="row"
        justify="space-between"
        margin="20px 80px 100px 20px"
        align="center"
      >
        <BoxTitleBackground titulo="Configurações" />

        <Progress
          value={50}
          size="sm"
          w="259px"
          minW="259px"
          colorScheme="blue"
          backgroundColor="#C8C8C8"
          borderRadius="0.5rem"
        />

        <Button borderRadius="50%" backgroundColor="#E2E8F0" w="42" h="42">
          <Icon as={FaRegFolderOpen} />
        </Button>
      </Flex>

      <Flex h="100%" direction="row" justify="space-between" margin="20px">
        <MainCard titulo="Clínicas" icon={true} />
        <MainCard titulo="Doutor(a)" icon={false} />
        <MainCard titulo="Doutor(a)" icon={false} />
        <MainCard titulo="Doutor(a)" icon={false} />
      </Flex>

      <Stack h="100%" direction="row" justify="center">
        <RectangularCard
          titulo="Observações"
          altura="282px"
          item={<ItemObservation />}
        />
      </Stack>

      <Box margin="50px 0px 0px 30px">
        <Image src={ImageHome} />
      </Box>
    </Box>
  );
};

export default Configuracoes;
