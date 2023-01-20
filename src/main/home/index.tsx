import {
  Box,
  Button,
  Center,
  Grid,
  Image,
  Link,
  Stack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import CardListaMedicos from "../component/card_paciente_home";
import ItemExamesHome from "../component/item_exames_home";
import LayoutExame from "../component/layoutExames";
import { Clear_Local_Storage } from "../component/remove_sub_exames_local_storage";
import BGImage from "../images/bg_img.png";
import Configuracao from "../images/gear.webp";

function Home() {
  useEffect(() => {
    new Clear_Local_Storage().Clear_Sub_Exames_Local_Storage();
  }, []);

  return (
    <Box
      w="100%"
      h="100vh  "
      backgroundImage={BGImage}
      backgroundSize="cover"
      backgroundClip="padding-box"
      backgroundRepeat="no-repeat"
      paddingBottom="10px"
      paddingTop="5%"
      alignItems="center"
    >
      <Button position="absolute" right="1" variant="ghost">
        <Link href={"#/Home/Configuracoes"}>
          <Image
            srcSet={Configuracao}
            alt="Second Icon Plus"
            h="30px"
            w="30px"
          />
        </Link>
      </Button>
      <Center>
        <Stack alignItems="center" mt="5px" mb="5px">
          <CardListaMedicos altura="300px" />
        </Stack>
      </Center>

      <Center>
        <Grid>
          <LayoutExame item={<ItemExamesHome />} />
        </Grid>
      </Center>
    </Box>
  );
}

export default Home;
