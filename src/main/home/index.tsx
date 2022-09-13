import { Box, Center, Stack } from "@chakra-ui/react";
import CardListaMedicos from "../component/card_Lista_Medicos";
import ItemExamesHome from "../component/item_exames_home";
import LayoutExame from "../component/layoutExames";
import BGImage from "../images/bg_img.png";

function Home() {

  return (
    <Box
      w="100%"
      h="100%"
      // verticalAlign="center"
      // alignSelf="center"
      // alignItems="center"
      backgroundImage={BGImage}
      backgroundPosition="fixed"
      backgroundSize="cover"
      backgroundClip="padding-box"
      backgroundRepeat="no-repeat"
      paddingBottom="10px"
      alignItems="center"
    >
      <Center>
        <Stack>
          <LayoutExame
            item={<ItemExamesHome />}
          />
        </Stack>
      </Center>

      <Stack h="100%" alignItems="center" mt='50px' >
        <CardListaMedicos
          altura="356px"
        />
      </Stack>

    </Box>
  );
}

export default Home;