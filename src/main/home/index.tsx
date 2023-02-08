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
import { useNavigate } from "react-router-dom";
import CardListaMedicos from "../component/card_paciente_home";
import Default_Backgound from "../component/default_backgound";
import ItemExamesHome from "../component/item_exames_home";
import LayoutExame from "../component/layoutExames";
import { Clear_Local_Storage } from "../component/remove_sub_exames_local_storage";
import BGImage from "../images/bg_img.png";
import Configuracao from "../images/gear.webp";

function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();

  var user = JSON.parse(localStorage.getItem("user")!);
  var clinica = JSON.parse(user.clinica);
  var medico = user.medico;

  const LogoutButton = () => {
    localStorage.removeItem("user");
    navigate("/Login");
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
      <Default_Backgound>
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
          <Stack alignItems="center" marginTop="3%">
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
              onClick={() => LogoutButton()}
              colorScheme="blue"
            >
              Sair
            </Button>
          </Tooltip>
        </Center>
      </Default_Backgound>
    );
  }
}

export default Home;
