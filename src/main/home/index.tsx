import { Box, Center, Stack, Button, Image, Link } from "@chakra-ui/react";
import CardListaMedicos from "../component/card_Lista_Medicos";
import ItemExamesHome from "../component/item_exames_home";
import LayoutExame from "../component/layoutExames";
import BGImage from "../images/bg_img.png";
import Configuracao from "../images/gear.webp";

function Home() {

  return (
    <Box
      w="100%"
      h="100%"
      backgroundImage={BGImage}
      backgroundPosition="fixed"
      backgroundSize="cover"
      backgroundClip="padding-box"
      backgroundRepeat="no-repeat"
      paddingBottom="10px"
      alignItems="center"
    >
      <Box>
        <Button position="absolute" right="1" variant="ghost" >
          <Link
            href={`#/Home/Configuracoes`}>
            <Image
              srcSet={Configuracao}
              alt="Second Icon Plus"
              h="30px"
              w="30px"
            />
          </Link>
        </Button>
      </Box>
      <Center>
        <Stack>
          <LayoutExame
            item={<ItemExamesHome />}
          />
        </Stack>
      </Center>

      <Stack h="100%" alignItems="center" mt='30px' mb='40px' >
        <CardListaMedicos
          altura="300px"
        />
      </Stack>

    </Box>
  );
}

export default Home;