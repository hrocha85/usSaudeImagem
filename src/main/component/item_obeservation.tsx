import {
  Box,
  Button,
  Flex,
  GridItem,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  Tooltip,
  useDisclosure
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { GrSubtractCircle } from "react-icons/gr";
import Observacoes from "../../Data/Observacoes.json";

const ItemObservation = () => {
  const refText = useRef<HTMLTextAreaElement | null>(null);

  const {
    isOpen: isOpenObs,
    onOpen: onOpenObs,
    onClose: onCloseObs,
  } = useDisclosure();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [titulo, setTitulo] = useState<string | null>("");
  const [inputObservacoes, setInputObservacoes] = useState<string[]>([]);
  const [id, setId] = useState<number | null>();
  const [value, setValue] = useState("");
  const [clickSave, setClickSave] = useState(false);
  const [currentOBS, setCurrentOBS] = useState<string>();

  const [editOBS, setEditOBS] = useState<string>();

  const [clickEditOBS, setclickEditOBS] = useState(false);

  const [observacoesLista, setObservacoesLista] = useState(
    JSON.parse(localStorage.getItem("observacoes")!) || []
  );

  const observacoesLocalStorage = JSON.parse(
    localStorage.getItem("observacoes")!
  );

  const observacoes = [
    {
      id: 1,
      titulo_observacao: "Abdômen total",
      observacao: [""],
    },
    {
      id: 2,
      titulo_observacao: "Doppler Transvaginal",
      observacao: [""],
    },
    { id: 3, titulo_observacao: "Mamas", observacao: [""] },
    {
      id: 4,
      titulo_observacao: "Doppler Artrial do MMSS",
      observacao: [""],
    },
    {
      id: 5,
      titulo_observacao: "Abdômen Superior",
      observacao: [""],
    },
    {
      id: 6,
      titulo_observacao: "Transvaginal",
      observacao: [""],
    },
    {
      id: 7,
      titulo_observacao: "Doppler Renal",
      observacao: [""],
    },
    {
      id: 8,
      titulo_observacao: "Doppler Venoso de MMII",
      observacao: [""],
    },
    { id: 9, titulo_observacao: "Tireóide", observacao: [""] },
    {
      id: 10,
      titulo_observacao: "Doppler das Carótidas",
      observacao: [""],
    },
    {
      id: 11,
      titulo_observacao: "Doppler Hepático",
      observacao: [""],
    },
    {
      id: 12,
      titulo_observacao: "Doppler Arterial de MMII",
      observacao: [""],
    },
    {
      id: 13,
      titulo_observacao: "Tireóide 2",
      observacao: [""],
    },
    {
      id: 14,
      titulo_observacao: "Doppler das Carótidas 2",
      observacao: [""],
    },
    {
      id: 15,
      titulo_observacao: "Rins e Vias Urinárias",
      observacao: [""],
    },
    {
      id: 16,
      titulo_observacao: "Doppler Venoso de MMSS",
      observacao: [""],
    },
    {
      id: 17,
      titulo_observacao: "Doppler da Tireóide",
      observacao: [""],
    },
    {
      id: 18,
      titulo_observacao: "Partes Moles",
      observacao: [""],
    },
    { id: 19, titulo_observacao: "Testículo", observacao: [""] },
    {
      id: 20,
      titulo_observacao: "Doppler de Bolsa Testicular",
      observacao: [""],
    },
    {
      id: 21,
      titulo_observacao: "Doppler da Tireóide 2",
      observacao: [""],
    },
    { id: 22, titulo_observacao: "Pélvico", observacao: [""] },
    { id: 23, titulo_observacao: "Próstata", observacao: [""] },
    {
      id: 24,
      titulo_observacao: "Articulações",
      observacao: [""],
    },
  ];
  const observacoesJSON = Observacoes.observacoes;

  const checkListaObservacao = () => {
    var arrayObservacoes = localStorage.getItem("observacoes")!;
    if (arrayObservacoes != null) {
      if (!arrayObservacoes.includes(titulo!)) {
        addNewObsercao();
      } else {
        updateListaObservacoes(id, value);
      }
    } else {
      setListaObservacoes();
    }
    setClickSave(false);
  };

  const setListaObservacoes = () => {
    let observacoes = JSON.parse(localStorage.getItem("observacoes")!) || [];
    const obs = {
      id: id!,
      titulo_observacao: titulo!,
      observacao: inputObservacoes,
    };
    observacoes = observacoes.filter((e) => e.titulo_observacao !== "");
    observacoes.push(obs);
    localStorage.setItem("observacoes", JSON.stringify(observacoes));
  };

  const addNewObsercao = () => {
    let observacoes = JSON.parse(localStorage.getItem("observacoes")!) || [];
    const obs = {
      id: id!,
      titulo_observacao: titulo!,
      observacao: inputObservacoes,
    };
    observacoes = observacoes.filter((e) => e.titulo_observacao !== "");
    observacoes.push(obs);
    localStorage.setItem("observacoes", JSON.stringify(observacoes));
  };

  const updateListaObservacoes = (id, value) => {
    var observacoes = JSON.parse(localStorage.getItem("observacoes")!);
    if (!observacoes) return;

    var obs = observacoes.map((e) => {
      if (e.id == id) {
        e.observacao.push(value);
      }
      return e;
    });

    localStorage.setItem("observacoes", JSON.stringify(obs));
  };

  const ResetStates = () => {
    setId(null);
    setTitulo(null);
    setInputObservacoes([]);
    setValue("");
    setClickSave(false);
  };

  const changeOBS = () => {
    var observacoes = JSON.parse(localStorage.getItem("observacoes")!);
    if (!observacoes) return;

    observacoes.map((e) => {
      if (e.id == id) {
        e.observacao.map((i, index) => {
          if (i == currentOBS) {
            e.observacao.splice(index, 1, editOBS);
          }
        });
      }
    });

    localStorage.setItem("observacoes", JSON.stringify(observacoes));
    setObservacoesLista(observacoes);
    onCloseObs();
    setclickEditOBS(false);
  };

  const Render_Observacao_or_Text_Area = () => {
    return (
      <>
        {!clickEditOBS ? (
          <Text fontSize="x-large" wordBreak="break-word">
            {currentOBS}
          </Text>
        ) : (
          <Textarea
            borderColor="black"
            maxH="300px"
            h="200px"
            defaultValue={currentOBS}
            onChange={(e) => setEditOBS(e.target.value)}
          />
        )}
      </>
    );
  };

  const Apagar_Observacao = (observacao) => {
    var observacoes = JSON.parse(localStorage.getItem("observacoes")!);
    if (!observacoes) return;

    observacoes.map((e) => {
      if (e.id == id) {
        e.observacao.map((i) => {
          console.log(i);
          if (i == observacao) {
            var index = e.observacao.indexOf(i);

            if (index !== -1) {
              e.observacao.splice(index, 1);
            }
          }
        });
      }
    });

    localStorage.setItem("observacoes", JSON.stringify(observacoes));
    setObservacoesLista(observacoes);
  };

  const ItensObservacao = () => {
    return (
      <>
        {localStorage.getItem("observacoes") != null
          ? JSON.parse(localStorage.getItem("observacoes")!).map((e) => {
              if (e.id == id) {
                return e.observacao.map((item, key) => {
                  return (
                    <HStack>
                      <Box
                        w="98%"
                        key={key}
                        margin="20px"
                        marginBottom="10px"
                        marginTop="0px"
                        borderWidth="2px"
                        borderColor="#f0f2f6"
                        h="48px"
                        borderRadius="md"
                        onClick={() => {
                          onOpenObs();
                          setCurrentOBS(item);
                          setclickEditOBS(false);
                        }}
                      >
                        <Flex justify="space-between">
                          <Text
                            margin="10px"
                            fontWeight="medium"
                            textOverflow="ellipsis"
                            overflow="hidden"
                            whiteSpace="nowrap"
                            maxW="320px"
                          >
                            {item}
                          </Text>
                        </Flex>
                      </Box>
                      <Box>
                        <Tooltip
                          label="Remover Observação"
                          backgroundColor="white"
                          placement="top"
                          hasArrow
                          arrowSize={15}
                          textColor="black"
                          fontSize="20px"
                          margin="20px"
                          textAlign="center"
                        >
                          <Flex justify="end">
                            <IconButton
                              justifyContent="flex-end"
                              aria-label="Remove Item"
                              icon={<GrSubtractCircle size={30} />}
                              variant="link"
                              marginEnd="5px"
                              textColor="blue"
                              onClick={() => Apagar_Observacao(item)}
                            />
                          </Flex>
                        </Tooltip>
                      </Box>
                    </HStack>
                  );
                });
              }
            })
          : null}
      </>
    );
  };

  useEffect(() => {
    if (clickSave == true) {
      checkListaObservacao();
      ItensObservacao();
    }
  });

  useEffect(() => {
    setObservacoesLista(JSON.parse(localStorage.getItem("observacoes")!) || []);
  }, []);

  return (
    <>
      {observacoes.map((observacoes, key) => (
        <Flex key={key}>
          <GridItem
            key={key}
            w="100%"
            h="100%"
            _hover={{ borderColor: "#47AEFC" }}
            borderRadius="4px"
            marginBottom="8px"
            marginEnd="42px"
            marginStart="16px"
            bg="#FEFFFE"
            borderStyle="solid"
            borderWidth="2px"
            borderStartWidth="4px"
            borderStartColor="#47AFFC"
            onClick={() => {
              onOpen();
              setTitulo(observacoes.titulo_observacao);
              setId(observacoes.id);
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
              {observacoes.titulo_observacao}
            </Text>
          </GridItem>
        </Flex>
      ))}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent shadow="none">
          <ModalHeader>{titulo}</ModalHeader>
          <ModalCloseButton
            onClick={() => {
              ResetStates();
            }}
          />
          <ModalBody>
            <Textarea
              ref={refText}
              placeholder="Descrição automática nova"
              onChange={(e) => setValue(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              mr={3}
              onClick={() => {
                onClose(), ResetStates();
              }}
            >
              Cancelar
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                setClickSave(true);
                setInputObservacoes((prevObs) => [...prevObs, value]);
                refText.current!.value = "";
              }}
            >
              Salvar
            </Button>
          </ModalFooter>
          {ItensObservacao()}
        </ModalContent>
      </Modal>

      {/**Open observacao */}
      <Modal isOpen={isOpenObs} onClose={onCloseObs} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="x-large">Observação</ModalHeader>
          <ModalCloseButton size="lg" />
          <ModalBody maxW="98%">
            <Box padding="3%">{Render_Observacao_or_Text_Area()}</Box>
          </ModalBody>

          <ModalFooter>
            <Box width="100%">
              {clickEditOBS ? null : (
                <Button
                  marginBottom="2%"
                  fontSize="20px"
                  width="100%"
                  backgroundColor="#7FFFD4"
                  onClick={() => {
                    setclickEditOBS(true);
                  }}
                >
                  Editar Observação
                </Button>
              )}

              {clickEditOBS ? (
                <Button
                  marginBottom="2%"
                  fontSize="20px"
                  width="100%"
                  colorScheme="blue"
                  onClick={() => {
                    changeOBS();
                  }}
                >
                  Salvar
                </Button>
              ) : null}
              <Button
                marginBottom="2%"
                fontSize="20px"
                width="100%"
                colorScheme="red"
                onClick={() => {
                  if (clickEditOBS) {
                    onCloseObs();
                  } else {
                    Apagar_Observacao(currentOBS);
                    onCloseObs();
                  }
                }}
              >
                {clickEditOBS ? "Cancelar Edição" : "Apagar Observação"}
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ItemObservation;
