import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  CloseButton,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Tooltip,
  useDisclosure,
  useToast,
  useMediaQuery,
  HStack,
  VStack
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { TabExamesContext } from "../../context/TabExameContext";
import RinseViasUrinarias from "../exames/RinsViasUrinarias";
import AbdomemTotal from "../exames/abdomemTotal";
import AbdomemSuperior from "../exames/abdomenSuperior";
import Articulacoes from "../exames/articulacoes";
import Axila from "../exames/axila";
import DopplerTransvaginal from "../exames/dopplerTransvaginal";
import Mamas from "../exames/mamas";
import ParedeAbdominal from "../exames/paredeAbdominal";
import PartesMoles from "../exames/partesMoles";
import Pelvico from "../exames/pelvico";
import Prostata from "../exames/prostata";
import Regiao_Inguinal from "../exames/regiao_inguinal";
import Testiculo from "../exames/testiculo";
import Tireoide from "../exames/tireoide";
import Torax from "../exames/torax";
import Transvaginal from "../exames/transvaginal";
import Exames from "../folha_laudos/Laudos";
import BGImage from "../images/bg_img.png";
import Sidebar from "../menu/sideBar";
import Conclusoes from "./conclusoes";
import Field_Observacoes from "./field_observacoes";
import FooterUpbase from "./FooterUpbase";
import api from "../../api";

export default function Box_Default_With_Sidebar() {
  const {
    isOpen: isOpenRemoveExameModal,
    onOpen: onOpenRemoveExameModal,
    onClose: onCloseRemoveExameModal,
  } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { tabExames, setTabExames } = useContext(TabExamesContext);
  const [tabIndex, setTabIndex] = useState(0);
  const [currentExame, setCurrentExame] = useState<any>();
  const [currentHandleSlider, setCurrentHandleSlider] = useState<any>();
  const [isMounted, setIsMounted] = useState(false);
  const [cleanConclusoes, setCleanConclusoes] = useState(false);

  const toast = useToast();

  let maxLargura = "58%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? maxLargura = "58%" : maxLargura = "94%"
  const [exames, setExames] = useState<any>([])

  useEffect(() => {
    const ExamesBD = async () => {
      try {
        const response = await api.get('/exame');
        setExames(response.data)
      } catch (error) {
        console.error('Error', error);
        throw error;
      }
    }

    ExamesBD()
  }, [])
  const Examess = [
    {
      key: 1,
      titulo_exame: "Abdômen total",
      link: `#/Exames/${1}`,
      observacao: [
        "Exame prejudicado devido grande presença de gases intestinais.",
        "Estaremos à disposição para a discussão do presente caso.",
        "Exames anteriores não disponíveis para estudo comparativo.",
        "JUP – Junção Uretero Piélica.",
        "Achados negativos na ultrassonografia não excluem a necessidade de prosseguir a investigação na presença de dados clínicos positivos."
      ],
    },

    {
      key: 3,
      titulo_exame: "Mamas",
      link: `#/Exames/${3}`,
      observacao: [
        "Conviria controle ecográfico periódico, a critério clínico.",
        "Estaremos à disposição para a discussão do presente caso.",
        "Achados negativos na ultrassonografia não excluem a necessidade de prosseguir a investigação na presença de dados clínicos positivos.",
        "A critério clínico, tendo-se em conta o aspecto liposubstituido do tecido mamário (normal para a pós-menopausa), estaria indicado para melhor avaliação, estudo radiológico digital bilateral (mamografia digital).",
        "Exames anteriores não disponíveis para estudo comparativo.",
      ],
    },

    {
      key: 5,
      titulo_exame: "Abdomen Superior",
      link: `#/Exames/${5}`,
    },
    {
      key: 6,
      titulo_exame: "Transvaginal",
      link: `#/Exames/${6}`,
    },

    {
      key: 8,
      titulo_exame: "Tireóide",
      link: `#/Exames/${8}`,
    },

    {
      key: 11,
      titulo_exame: "Rins e Vias Urinárias",
      link: `#/Exames/${11}`,
    },

    {
      key: 13,
      titulo_exame: "Partes Moles",
      link: `#/Exames/${13}`,
    },
    {
      key: 14,
      titulo_exame: "Testículo",
      link: `#/Exames/${14}`,
      observacao: [
        "Conviria controle ecográfico periódico, a critério clínico.",
        "Estaremos à disposição para a discussão do presente caso.",
        "Achados negativos na ultrassonografia não excluem a necessidade de prosseguir a investigação na presença de dados clínicos positivos.",
      ],
    },

    {
      key: 16,
      titulo_exame: "Pélvico",
      link: `#/Exames/${16}`,
    },
    {
      key: 17,
      titulo_exame: "Próstata",
      link: `#/Exames/${17}`,
      observacao: [
        "Exame restrito para avaliação do volume prostático, devendo ser correlacionado com os dados clínicos e exames laboratoriais específicos para pesquisa de neoplasia.",
        "Exames anteriores não disponíveis para estudo comparativo.",
        "Estaremos à disposição para a discussão do presente caso.",
        "Achados negativos na ultrassonografia não excluem a necessidade de prosseguir a investigação na presença de dados clínicos positivos.",
      ],
    },
    {
      key: 18,
      titulo_exame: "Articulações",
      link: `#/Exames/${18}`,
    },
    {
      key: 19,
      titulo_exame: "Região Inguinal",
      link: `#/Exames/${19}`,
      observacao: [
        "Exames anteriores não disponíveis para estudo comparativo.",
        "Estaremos à disposição para a discussão do presente caso.",
        "Achados negativos na ultrassonografia não excluem a necessidade de prosseguir a	investigação na presença de dados clínicos positivos.",
      ],
    },
    {
      key: 20,
      titulo_exame: "Axila",
      link: `#/Exames/${20}`,
      observacao: [
        "Exames anteriores não disponíveis para estudo comparativo.",
        "Estaremos à disposição para a discussão do presente caso.",
        "Achados negativos na ultrassonografia não excluem a necessidade de prosseguir a investigação na presença de dados clínicos positivos."
      ],
    },
    {
      key: 21,
      titulo_exame: "Torax",
      link: `#/Exames/${21}`,
      observacao: [
        "Exames anteriores não disponíveis para estudo comparativo.",
        "Estaremos à disposição para a discussão do presente caso.",
        "Achados negativos na ultrassonografia não excluem a necessidade de prosseguir a investigação na presença de dados clínicos positivos."
      ],
    },
    {
      key: 22,
      titulo_exame: "Parede Abdominal",
      link: `#/Exames/${22}`,
      observacao: [
        "Exames anteriores não disponíveis para estudo comparativo.",
        "Estaremos à disposição para a discussão do presente caso.",
        "Achados negativos na ultrassonografia não excluem a necessidade de prosseguir a investigação na presença de dados clínicos positivos."
      ],
    },
    // {
    //   key: 20,
    //   titulo_exame: "Doppler Testículo",
    //   link: `#/Home/${20}`,
    //   observacao: [
    //     "Conviria controle ecográfico periódico, a critério clínico.",
    //     "Estaremos à disposição para a discussão do presente caso.",
    //     "Achados negativos na ultrassonografia não excluem a necessidade de prosseguir a investigação na presença de dados clínicos positivos.",
    //   ],
    // },

  ];


  const handleSliderChange = (event) => {
    if (event == 1 && Object.keys(tabExames).length >= 2) {
      setTabIndex(0);
    } else {
      setTabIndex(event - 2);
    }
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
    setCleanConclusoes(true);
  };

  const RemoveTabExame = () => {
    if (Object.keys(tabExames).length == 1) {
      SairExames();
    } else {
      tabExames.map((i) => {
        if (i.key == currentExame!.key) {
          const index = tabExames.indexOf(i);
          if (index > -1) {
            tabExames.splice(index, 1);
            setTabExames((arr) => [...arr]);
          }
        }
      });

      const array = JSON.parse(localStorage.getItem("format_laudo")!);
      array.map((i, key) => {
        if (i.titulo_exame == currentExame!.titulo_exame) {
          array.splice(key, 1);
        }
      });

      handleSliderChange(currentHandleSlider);
      localStorage.setItem("format_laudo", JSON.stringify(array));

      onCloseRemoveExameModal();
    }
  };

  const SairExames = () => {
    window.location.href = "#/Home";
    setTabExames([{}]);
  };

  const AddNewExame = (exame) => {
    const existingFormatLaudo = localStorage.getItem("format_laudo");

    const newFormatLaudo = {
      titulo_exame: exame.titulo_exame,
      subExames: [{ subExameNome: "", frases: [] }],
      conclusoes: [""],
      observacoes: [""],
    };

    // if (exame.observacao != null) {
    //   const existingObservacoes = localStorage.getItem("observacoes");

    //   const newObservacao = {
    //     id: exame.key,
    //     titulo_observacao: exame.titulo_exame,
    //     observacao: exame.observacao!,
    //   };

    //   if (existingObservacoes !== null) {
    //     const parsedObservacoes = JSON.parse(existingObservacoes);
    //     const existingObservacaoIndex = parsedObservacoes.findIndex(
    //       (obs) => obs.titulo_observacao === exame.titulo_exame
    //     );
    //     if (existingObservacaoIndex !== -1) {
    //       parsedObservacoes[existingObservacaoIndex].observacao =
    //         exame.observacao!;
    //     } else {
    //       parsedObservacoes.push(newObservacao);
    //     }
    //     localStorage.setItem("observacoes", JSON.stringify(parsedObservacoes));
    //   } else {
    //     localStorage.setItem("observacoes", JSON.stringify([newObservacao]));
    //   }
    // }

    if (existingFormatLaudo !== null) {
      const parsedFormatLaudo = JSON.parse(existingFormatLaudo);
      const mergedFormatLaudo = [...parsedFormatLaudo, newFormatLaudo];
      localStorage.setItem("format_laudo", JSON.stringify(mergedFormatLaudo));
    } else {
      localStorage.setItem("format_laudo", JSON.stringify([newFormatLaudo]));
    }
  };

  const RenderConclusoes = ({ clean, setCleanConclusoes }) => {
    return <Conclusoes exame={currentExame} clean={clean} />;
  };




  useEffect(() => {
    const exame = tabExames.find((e) => e.titulo_exame !== undefined);
    console.log('EXAME', exame)
    if (exame !== undefined) {
      console.log('tabExames', tabExames)
      setCurrentExame(exame);
      setIsMounted(true);
    }
    return () => {
      setIsMounted(false);
    };
  }, []);

  // useEffect(() => {
  //   const exame = tabExames.find((e) => e.titulo_exame !== undefined);
  //   if (exame !== undefined) {
  //     setCurrentExame(exame);
  //     setIsMounted(true);
  //   }
  //   return () => {
  //     setIsMounted(false);
  //   };
  // }, []);

  if (!isMounted) {
    return (
      <Center>
        <Box marginTop="20%">
          <Stack>
            <Text textAlign="center" fontSize="xx-large">
              CARREGANDO EXAME
            </Text>
            <Center>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
          </Stack>
        </Box>
      </Center>
    );
  } else {
    return (
      <Box
        w="100%"
        h="100%"
        minH="100vh"
        bgGradient='linear(to-r, blue.100, #fff)'
        // backgroundImage={BGImage}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        alignItems="center"
        backgroundClip="padding-box"
      >
        <Sidebar />
        {isLargerThan600 ?
          <Exames /> : <Box display={'none'}><Exames /></Box>
        }
        <Tabs
          size="lg"
          variant="soft-rounded"
          index={tabIndex}
          onChange={handleTabsChange}
          onClick={() => {
            setCleanConclusoes(true);
          }}
        >
          <TabList paddingStart="20px">
            <Flex direction="row" flexWrap="wrap" gap="5px" maxW="65%">
              {tabExames.map((e, key) => {
                if (e.titulo_exame != undefined) {
                  return (
                    <Stack direction="row" key={key}>
                      <Tab
                        whiteSpace="nowrap"
                        key={key}
                        textColor="black"
                        _selected={{ color: "white", bg: "blue.500" }}
                        onClick={() => setCurrentExame(e)}
                      >
                        {e.titulo_exame}
                        <Tooltip
                          label={`Fechar ${e.titulo_exame}`}
                          backgroundColor="white"
                          placement="top"
                          hasArrow
                          arrowSize={15}
                          textColor="black"
                          fontSize="20px"
                          margin="20px"
                          textAlign="center"
                        >
                          <CloseButton
                            onClick={() => {
                              setCurrentExame(e);
                              setCurrentHandleSlider(key);
                              onOpenRemoveExameModal();
                            }}
                          />
                        </Tooltip>
                      </Tab>
                    </Stack>
                  );
                }
              })}
              <Tooltip
                label="Adicionar Exame"
                backgroundColor="white"
                placement="top"
                hasArrow
                arrowSize={15}
                textColor="black"
                fontSize="20px"
                margin="20px"
                textAlign="center"
                alignContent="flex-end"
              >
                <IconButton
                  size="sm"
                  aria-label="Check"
                  icon={<AddIcon />}
                  onClick={() => {
                    onOpen();
                  }}
                />
              </Tooltip>
            </Flex>
          </TabList>
          <TabPanels>
            {tabExames.map((e, key) => {
              if (e.id > 0) {
                return (
                  <TabPanel key={key} maxW="98%" pt={'2.6%'} ml={'0.8%'}>
                    {
                      {
                        1: <ParedeAbdominal />,
                        2: <AbdomemSuperior />,
                        3: <AbdomemTotal />,
                        4: <Prostata />,
                        5: <Articulacoes />,
                        6: <Regiao_Inguinal />,
                        7: <Axila />,
                        8: <Torax />,
                        9: <Mamas />,
                        10: <Tireoide />,
                        11: <Transvaginal />,
                        12: <RinseViasUrinarias />,
                        13: <PartesMoles />,
                        14: <Pelvico />,
                        15: <Testiculo />,
                        16: <DopplerTransvaginal />,

                      }[e.id]
                    }
                  </TabPanel>
                );
              }
            })}
          </TabPanels>
        </Tabs>
        <Flex
          gap={1}
          alignItems="start"
          justifyItems="center"
          flexWrap="wrap"
          w={"97%"}
          paddingBottom="3%"
          marginStart="5px"
        >
          <Flex flex={1} flexDirection="column" maxW={maxLargura} >
            <Field_Observacoes exame={currentExame} key={tabIndex} />
          </Flex>

          {/*<Flex flex={1} flexDirection="column">
            {RenderConclusoes({ clean: cleanConclusoes, setCleanConclusoes })}
          </Flex>*/}
        </Flex>

        {/** Modal Add Exame */}

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent minWidth="50%">
            <ModalHeader margin="5px"></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Grid
                templateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(3, 1fr)",
                  "repeat(4, 1fr)",
                  "repeat(5, 1fr)",
                ]}
                gap={4}
                marginBottom="20px"
                marginEnd="0.5%"
              >
                {exames.map((exame, key) => (
                  <GridItem
                    key={key}
                    borderRadius="4px"
                    bg="#FEFFFE"
                    borderStyle="solid"
                    borderWidth="2px"
                    borderStartWidth="4px"
                    borderStartColor="#47AFFC"
                    _hover={{ borderColor: "#47AEFC" }}
                    onClick={() => {
                      setTabExames((tabExames) => {
                        const found = tabExames.find(
                          (obj) =>
                            obj.titulo_exame === exame.titulo_exame &&
                            obj.titulo_exame === exame.titulo_exame
                        );
                        if (!found) {
                          AddNewExame(exame);
                          onClose();
                          return [...tabExames, exame];
                        }
                        toast({
                          duration: 2000,
                          title: `Exame já existe !`,
                          position: "top",
                          isClosable: true,
                          status: "error",
                        });
                        return tabExames;
                      });
                    }}
                  >
                    <Text
                      textColor="black"
                      textStyle="solid"
                      fontSize="17px"
                      fontWeight="medium"
                      verticalAlign="center"
                      paddingTop="4.5"
                      paddingStart="12px"
                    >
                      {exame.titulo_exame}
                    </Text>
                  </GridItem>
                ))}
              </Grid>
            </ModalBody>
          </ModalContent>
        </Modal>

        {/*Modal Sair Exame */}
        <Modal
          isOpen={isOpenRemoveExameModal}
          onClose={onCloseRemoveExameModal}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {Object.keys(tabExames).length == 1
                ? "Sair de exames ?"
                : "Deseja fechar o exame ?"}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontSize="20px">
                {Object.keys(tabExames).length == 1
                  ? "Deseja realmente sair ?"
                  : "Fechar exame ?"}
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={onCloseRemoveExameModal}
                fontSize="20px"
              >
                Cancelar
              </Button>
              <Button
                background="#A0A0A0"
                variant="ghost"
                fontSize="20px"
                onClick={() => RemoveTabExame()}
              >
                {Object.keys(tabExames).length == 1 ? "Sair" : "Fechar"}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <VStack w={'60vw'}>
          {isLargerThan600 ?
            <Box display={'none'}><Exames /></Box> : <Box display={'block'}><Exames /></Box>
          }
        </VStack>
      </Box>
    );
  }
}
