import { Box, Stack } from "@chakra-ui/react";
import ItemExamesHome from "../component/item_exames_home";
import LayoutExame from "../component/layoutExames";
import BGImage from "../images/bg_img.png";


function Home() {

  const ListaExame = {
    exames: [
      {
        key: 1,
        nomeExame: "Abdomen total",
      },
      {
        key: 2,
        nomeExame: "Abdomen Superior",
      }
    ]
  }


  return (
    <Box
      w="100%"
      h="700px"
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
      {/* <Box>
        {ListaExame.exames.map(exame => {
          return (
            <Link to={exame.key.toString()}>
              {exame.nomeExame}
            </Link>
          )
        })}
      </Box> */}

      <Stack h="100%" direction="row" justify="center">
        <LayoutExame
          item={<ItemExamesHome />}
        />
      </Stack>
    </Box>
  );
}

export default Home;