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
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { TabExamesContext } from "../../context/TabExameContext";
import AbdomemTotal from "../exames/abdomemTotal";
import AbdomemSuperior from "../exames/abdomenSuperior";
import Articulacoes from "../exames/articulacoes";
import DopplerBolsaTesticular from "../exames/dopplerBolsaTesticular";
import DopplerCarotidas from "../exames/dopplerCarotidas";
import DopplerCarotidas2 from "../exames/dopplerCarotidas2";
import DopplerRenal from "../exames/dopplerRenal";
import DopplerTireoide from "../exames/dopplerTireoide";
import DopplerTireoide2 from "../exames/dopplerTireoide2";
import DopplerTransvaginal from "../exames/dopplerTransvaginal";
import DopplerVenosoMMII from "../exames/dopplerVenosoMMII";
import Doppler_Arterial_MMII from "../exames/doppler_arterial_MMII";
import Mamas from "../exames/mamas";
import PartesMoles from "../exames/partesMoles";
import Pelvico from "../exames/pelvico";
import Prostata from "../exames/prostata";
import RinseViasUrinarias from "../exames/RinsViasUrinarias";
import Testiculo from "../exames/testiculo";
import Tireoide from "../exames/tireoide";
import Tireoide2 from "../exames/tireoide2";
import Transvaginal from "../exames/transvaginal";
import Exames from "../folha_laudos/Laudos";
import BGImage from "../images/bg_img.png";
import Sidebar from "../menu/sideBar";
import Conclusoes from "./conclusoes";
import Field_Observacoes from "./field_observacoes";

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
  const toast = useToast();

  const exames = [
    {
      key: 1,
      nomeExame: "Abdomen total",
      link: `#/Home/${1}`,
    },
    {
      key: 2,
      nomeExame: "Doppler Transvaginal",
      link: `#/Home/${2}`,
    },
    {
      key: 3,
      nomeExame: "Mamas",
      link: `#/Home/${3}`,
    },
    {
      key: 4,
      nomeExame: "Doppler Artrial do MMSS",
      link: `#/Home/${4}`,
    },
    {
      key: 5,
      nomeExame: "Abdomen Superior",
      link: `#/Home/${5}`,
    },
    {
      key: 6,
      nomeExame: "Transvaginal",
      link: `#/Home/${6}`,
    },
    {
      key: 7,
      nomeExame: "Doppler Renal",
      link: `#/Home/${7}`,
    },
    {
      key: 8,
      nomeExame: "Doppler Venoso de MMII",
      link: `#/Home/${8}`,
    },
    {
      key: 9,
      nomeExame: "Tireóide",
      link: `#/Home/${9}`,
    },
    {
      key: 10,
      nomeExame: "Doppler das Carótidas",
      link: `#/Home/${10}`,
    },
    {
      key: 11,
      nomeExame: "Doppler Hepático",
      link: `#/Home/${11}`,
    },
    {
      key: 12,
      nomeExame: "Doppler Arterial de MMII",
      link: `#/Home/${12}`,
    },
    {
      key: 13,
      nomeExame: "Tireóide 2",
      link: `#/Home/${13}`,
    },
    {
      key: 14,
      nomeExame: "Doppler das Carótidas 2",
      link: `#/Home/${14}`,
    },
    {
      key: 15,
      nomeExame: "Rins e Vias Urinárias",
      link: `#/Home/${15}`,
    },
    /*{
      key: 16,
      nomeExame: "Dopper Venoso de MMSS",
      link: `#/Home/${16}`,
    },*/
    {
      key: 17,
      nomeExame: "Doppler da Tireóide",
      link: `#/Home/${17}`,
    },
    {
      key: 18,
      nomeExame: "Partes Moles",
      link: `#/Home/${18}`,
    },
    {
      key: 19,
      nomeExame: "Testículo",
      link: `#/Home/${19}`,
    },
    {
      key: 20,
      nomeExame: "Doppler de Bolsa Testicular",
      link: `#/Home/${20}`,
    },
    {
      key: 21,
      nomeExame: "Doppler da Tireóide 2",
      link: `#/Home/${21}`,
    },
    {
      key: 22,
      nomeExame: "Pélvico",
      link: `#/Home/${22}`,
    },
    {
      key: 23,
      nomeExame: "Próstata",
      link: `#/Home/${23}`,
    },
    {
      key: 24,
      nomeExame: "Articulações",
      link: `#/Home/${24}`,
    },
    /*{
      key: 25,
      nomeExame: "Reg. Inguinal",
      link: `#/Home/${25}`,
    },*/
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
  };

  const RemoveTabExame = () => {
    if (Object.keys(tabExames).length == 2) {
      SairExames();
    } else {
      tabExames.map((i) => {
        if (i.key == currentExame!.key) {
          var index = tabExames.indexOf(i);
          if (index > -1) {
            tabExames.splice(index, 1);
            setTabExames((arr) => [...arr]);
          }
        }
      });

      var array = JSON.parse(localStorage.getItem("format_laudo")!);
      array.map((i, key) => {
        if (i.titulo_exame == currentExame!.nomeExame) {
          array.splice(key, 1);
        }
      });

      handleSliderChange(currentHandleSlider);
      localStorage.setItem("format_laudo", JSON.stringify(array));

      onCloseRemoveExameModal();
    }
  };

  const SairExames = () => {
    window.location.href = "/Home#/Home";
    setTabExames([{}]);
  };

  const AddNewExame = (exame) => {
    var array = JSON.parse(localStorage.getItem("format_laudo")!);

    const obj = {
      titulo_exame: exame,
      subExames: [{ subExameNome: "", frases: [] }],
    };
    array.push(obj);

    localStorage.setItem("format_laudo", JSON.stringify(array));
  };

  useEffect(() => {
    setIsMounted(true);
    tabExames.map((e) =>
      e.nomeExame != undefined ? setCurrentExame(e) : null
    );

    return () => {
      setIsMounted(false);
    };
  }, []);

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
        backgroundImage={BGImage}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        alignItems="center"
        backgroundClip="padding-box"
      >
        <Sidebar />
        <Exames />
        <Tabs
          size="lg"
          variant="soft-rounded"
          index={tabIndex}
          onChange={handleTabsChange}
        >
          <TabList paddingStart="20px">
            <Flex direction="row" flexWrap="wrap" gap="5px" maxW="65%">
              {tabExames.map((e, key) => {
                if (e.nomeExame != undefined) {
                  return (
                    <Stack direction="row" key={key}>
                      <Tab
                        whiteSpace="nowrap"
                        key={key}
                        textColor="black"
                        _selected={{ color: "white", bg: "blue.500" }}
                        onClick={() => setCurrentExame(e)}
                      >
                        {e.nomeExame}
                        <Tooltip
                          label={`Fechar ${e.nomeExame}`}
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
              if (e.key > 0) {
                return (
                  <TabPanel key={key} maxW="98%">
                    {
                      {
                        1: <AbdomemTotal />,
                        2: <DopplerTransvaginal />,
                        3: <Mamas />,
                        4: <Doppler_Arterial_MMII />,
                        5: <AbdomemSuperior />,
                        6: <Transvaginal />,
                        7: <DopplerRenal />,
                        8: <DopplerVenosoMMII />,
                        9: <Tireoide />,
                        10: <DopplerCarotidas />,
                        12: <Doppler_Arterial_MMII />,
                        13: <Tireoide2 />,
                        14: <DopplerCarotidas2 />,
                        15: <RinseViasUrinarias />,
                        17: <DopplerTireoide />,
                        18: <PartesMoles />,
                        19: <Testiculo />,
                        20: <DopplerBolsaTesticular />,
                        21: <DopplerTireoide2 />,
                        22: <Pelvico />,
                        23: <Prostata />,
                        24: <Articulacoes />,
                      }[e.key]
                    }
                  </TabPanel>
                );
              }
            })}
          </TabPanels>
        </Tabs>
        <Flex maxW="54%" paddingBottom="3%" h="auto" gap={2}>
          <Field_Observacoes exame={currentExame} />

          <Conclusoes />
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
                marginEnd='0.5%'

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
                      setTabExames((tabExames) => [...tabExames, exame]);
                      onClose();
                      AddNewExame(exame.nomeExame);
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
                      {exame.nomeExame}
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
              {Object.keys(tabExames).length == 2
                ? "Sair de exames ?"
                : "Deseja fechar o exame ?"}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontSize="20px">
                {Object.keys(tabExames).length == 2
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
                variant="ghost"
                fontSize="20px"
                onClick={() => RemoveTabExame()}
              >
                {Object.keys(tabExames).length == 2 ? "Sair" : "Fechar"}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    );
  }
}
