import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Link,
  Spinner,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CardListaMedicos from "../component/card_paciente_home";
import ItemExamesHome from "../component/item_exames_home";
import LayoutExame from "../component/layoutExames";
import { Clear_Local_Storage } from "../component/remove_sub_exames_local_storage";
import BGImage from "../images/bg_img.png";
import Configuracao from "../images/gear.webp";

function Home() {
  const [isMounted, setIsMounted] = useState(false);

  var user = JSON.parse(localStorage.getItem("user")!);
  var clinica = JSON.parse(user.clinica);
  var medico = user.medico;

  const Logout = () => {
    window.location.href = "/Login";
    localStorage.removeItem("user");
  };

  useEffect(() => {
    new Clear_Local_Storage().Clear_Sub_Exames_Local_Storage();
  }, []);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  if (!isMounted) {
    return (
      <Center>
        <Box marginTop="20%">
          <Center>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Center>
        </Box>
      </Center>
    );
  } else {
    return (
      <Flex
        flex="1"
        h="100%"
        w="100%"
        minH="100vh"
        flexDirection="column"
        backgroundImage={BGImage}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        alignItems="center"
        backgroundClip="padding-box"
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
          <Stack alignItems="center" mt="1%" mb="5px">
            <CardListaMedicos altura="300px" />
          </Stack>
        </Center>

        <Center marginTop="1%">
          <LayoutExame item={<ItemExamesHome />} />
        </Center>
        <Center marginTop="1%">
          <HStack
            borderWidth="2px"
            padding="20px"
            borderRadius="md"
            borderColor="grey"
            boxShadow="xl"
          >
            <Text fontWeight="semibold" fontSize="xl">
              Médico:
            </Text>
            <Text fontSize="xl">{medico.nome}</Text>
            <Text fontWeight="semibold" fontSize="xl">
              CRM:
            </Text>
            <Text fontSize="xl">{medico.crm}</Text>
            <Text fontWeight="semibold" fontSize="xl">
              Clínica:
            </Text>
            <Text fontSize="xl">{clinica.nomeClinica}</Text>
          </HStack>
        </Center>
        <Center marginTop="20px" paddingBottom="1%">
          <Tooltip
            label="Voltar para Login"
            backgroundColor="white"
            placement="bottom"
            hasArrow
            arrowSize={15}
            textColor="black"
            fontSize="20px"
            margin="20px"
            textAlign="center"
          >
            <Button
              variant="solid"
              fontSize="20px"
              onClick={() => Logout()}
              colorScheme="blue"
            >
              Sair
            </Button>
          </Tooltip>
        </Center>
      </Flex>
    );
  }
}

export default Home;
