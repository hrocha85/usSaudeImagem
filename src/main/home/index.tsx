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
  useMediaQuery
  //useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardPaciente from "../component/card_paciente_home";
//import Default_Backgound from "../component/default_backgound";
import ItemExamesHome from "../component/item_exames_home";
import LayoutExame from "../component/layoutExames";
import { Clear_Local_Storage } from "../component/remove_sub_exames_local_storage";
import Configuracao from "../images/gear.webp";
import FooterUpbase from "../component/FooterUpbase";

//import Swal from "sweetalert2";
//import withReactContent from "sweetalert2-react-content";

function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();
  //const MySwal = withReactContent(Swal);

  let flex = "";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? flex = "flex-end" : flex = "space-between"


  const exames = [
    {
      key: 1,
      nomeExame: "Abdômen total",
      observacao: [
        "Exame prejudicado devido grande presença de gases intestinais.",
        "Estaremos à disposição para a discussão do presente caso.",
        "Exames anteriores não disponíveis para estudo comparativo.",
        "JUP – Junção Uretero Piélica.",
        "Achados negativos na ultrassonografia não excluem a necessidade de prosseguir a investigação na presença de dados clínicos positivos.",
      ],
    },
    // {
    //   key: 2,
    //   nomeExame: "Doppler Transvaginal",
    // },
    {
      key: 3,
      nomeExame: "Mamas",
      observacao: [
        "Conviria controle ecográfico periódico, a critério clínico.",
        "Estaremos à disposição para a discussão do presente caso.",
        "Achados negativos na ultrassonografia não excluem a necessidade de prosseguir a investigação na presença de dados clínicos positivos.",
        "A critério clínico, tendo-se em conta o aspecto liposubstituido do tecido mamário (normal para a pós-menopausa), estaria indicado para melhor avaliação, estudo radiológico digital bilateral (mamografia digital).",
        "Exames anteriores não disponíveis para estudo comparativo.",
      ],
    },
    // {
    //   key: 4,
    //   nomeExame: "Doppler Artrial do MMSS",
    // },
    {
      key: 5,
      nomeExame: "Abdomen Superior",
      observacao: []
    },
    {
      key: 6,
      nomeExame: "Transvaginal",
      observacao: []
    },
    // {
    //   key: 7,
    //   nomeExame: "Doppler Renal",
    // },
    // {
    //   key: 7,
    //   nomeExame: "Doppler Venoso de MMII",
    // },
    {
      key: 8,
      nomeExame: "Tireóide",
      observacao: []
    },
    // {
    //   key: 9,
    //   nomeExame: "Doppler das Carótidas",
    // },
    // {
    //   key: 11,
    //   nomeExame: "Doppler Hepático",
    // },
    // {
    //   key: 10,
    //   nomeExame: "Doppler Arterial de MMII",
    // },
    // {
    //   key: 13,
    //   nomeExame: "Tireóide 2",
    // },
    // {
    //   key: 14,
    //   nomeExame: "Doppler das Carótidas 2",
    // },
    {
      key: 11,
      nomeExame: "Rins e Vias Urinárias",
      observacao: []
    },
    // {
    //   key: 16,
    //   nomeExame: "Dopper Venoso de MMSS",
    // },
    // {
    //   key: 12,
    //   nomeExame: "Doppler da Tireóide",
    // },
    {
      key: 13,
      nomeExame: "Partes Moles",
      observacao: []
    },
    {
      key: 14,
      nomeExame: "Testículo",
      observacao: [
        "Conviria controle ecográfico periódico, a critério clínico.",
        "Estaremos à disposição para a discussão do presente caso.",
        "Achados negativos na ultrassonografia não excluem a necessidade de prosseguir a investigação na presença de dados clínicos positivos.",
      ],
    },
    // {
    //   key: 15,
    //   nomeExame: "Doppler de Bolsa Testicular",
    // },
    // {
    //   key: 21,
    //   nomeExame: "Doppler da Tireóide 2",
    // },
    {
      key: 16,
      nomeExame: "Pélvico",
      observacao: []
    },
    {
      key: 17,
      nomeExame: "Próstata",
      observacao: [
        "Exame restrito para avaliação do volume prostático, devendo ser correlacionado com os dados clínicos e exames laboratoriais específicos para pesquisa de neoplasia.",
        "Exames anteriores não disponíveis para estudo comparativo.",
        "Estaremos à disposição para a discussão do presente caso.",
        "Achados negativos na ultrassonografia não excluem a necessidade de prosseguir a investigação na presença de dados clínicos positivos.",
      ],
    },
    {
      key: 18,
      nomeExame: "Articulações",
      observacao: []
    },
    {
      key: 19,
      nomeExame: "Região Inguinal",
      observacao: [
        "Exames anteriores não disponíveis para estudo comparativo.",
        "Estaremos à disposição para a discussão do presente caso.",
        "Achados negativos na ultrassonografia não excluem a necessidade de prosseguir a	investigação na presença de dados clínicos positivos.",
      ],
    },
    {
      key: 20,
      nomeExame: "Axila",
      observacao: [
        "Exames anteriores não disponíveis para estudo comparativo.",
        "Estaremos à disposição para a discussão do presente caso.",
        "Achados negativos na ultrassonografia não excluem a necessidade de prosseguir a	investigação na presença de dados clínicos positivos.",
      ],
    },
    {
      key: 21,
      nomeExame: "Torax",
      observacao: [
        "Exames anteriores não disponíveis para estudo comparativo.",
        "Estaremos à disposição para a discussão do presente caso.",
        "Achados negativos na ultrassonografia não excluem a necessidade de prosseguir a	investigação na presença de dados clínicos positivos.",
      ],
    },
    {
      key: 22,
      nomeExame: "Parede Abdominal",
      observacao: [
        "Exames anteriores não disponíveis para estudo comparativo.",
        "Estaremos à disposição para a discussão do presente caso.",
        "Achados negativos na ultrassonografia não excluem a necessidade de prosseguir a	investigação na presença de dados clínicos positivos.",
      ],
    },
    // {
    //   key: 20,
    //   nomeExame: "Doppler Testículo",
    //   observacao: [
    //     "Conviria controle ecográfico periódico, a critério clínico.",
    //     "Estaremos à disposição para a discussão do presente caso.",
    //     "Achados negativos na ultrassonografia não excluem a necessidade de prosseguir a investigação na presença de dados clínicos positivos.",
    //   ],
    // },
  ];

  const user = JSON.parse(localStorage.getItem("user")!);
  const clinica = JSON.parse(user.clinica);
  const userData = JSON.parse(localStorage.getItem('userData')!);
  const medico = user.medico;


  useEffect(() => {
    const existingObservacoes = localStorage.getItem("observacoes");
    if (!existingObservacoes) {
      localStorage.setItem("observacoes", JSON.stringify(exames));
    }
  }, [])

  const LogoutButton = () => {
    localStorage.removeItem("user");
    navigate("/LoginFree");
  };

  useEffect(() => {
    new Clear_Local_Storage().Clear_Sub_Exames_Local_Storage();
  }, []);

  useEffect(() => {
    setIsMounted(true);
    // MySwal.fire("Exames Doppler Desabilitados");

    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    const totalSize = JSON.stringify(localStorage).length;
    const locals = totalSize / 1024 / 1024;
    console.log(`USO DO LOCALSTORAGE: ${locals.toFixed(2)} MB`);
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

      <>
        <Box overflowX="hidden" minHeight="100vh" bgGradient="linear(to-b, blue.100, #fff)">

        <Flex mt={3} justifyContent="space-between" alignItems="center">
        <Text textColor={'black'} fontSize={"20px"} fontWeight={700} pl={4}>
            Bem-vindo, Usuario Logado
          </Text>
    <Flex justifyContent="flex-end">
        <Link href="#/Home/Configuracoes" pr={4}>
            <Tooltip
                label="Configurações gerais"

                backgroundColor="white"
                placement="bottom"
                hasArrow
                arrowSize={15}
                textColor="black"
                fontSize="20px"
                margin="20px"
                textAlign="center"
              >
                <Button variant="solid" fontSize="20px" onClick={LogoutButton} colorScheme="blue" mr={3}>
                  Sair
                </Button>
              </Tooltip>
            </Flex>
          </Flex>
          <Text w="100%" fontSize="32px" fontWeight="thin" mt={1} textAlign="center">
            Emissão dos Laudos
          </Text>
          <Center>
            <CardPaciente />
          </Center>

          <Text textAlign="center" mt="5px" mb="5px" fontSize={23} fontWeight="thin">
            Selecione um laudo para iniciar
          </Text>

          <Center>
            <LayoutExame item={<ItemExamesHome />} />
          </Center>
          <Center>
            <Box
              justifyContent="center"
              gap="10px"
              display="flex"
              flexWrap="wrap"
              borderWidth="2px"
              margin="10px 0px 5px 0px"
              borderRadius="md"
              borderColor="gray"
              boxShadow="xl"
              p={2}
            >
              <HStack textAlign="center">
                <Text fontWeight="semibold" fontSize="xl">
                  Médico:
                </Text>
                <Text fontSize="xl">{medico.nome}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="semibold" fontSize="xl">
                  CRM:
                </Text>
                <Text fontSize="xl">{medico.crm}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="semibold" fontSize="xl">
                  Clínica:
                </Text>
                <Text fontSize="xl">{clinica.nomeClinica}</Text>
              </HStack>
            </Box>
          </Center>
        </Box>
        {/* <Box >
          <FooterUpbase />
        </Box> */}
      </>
    );
  }
}

export default Home;
