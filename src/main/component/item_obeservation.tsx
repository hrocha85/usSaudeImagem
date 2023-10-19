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
  useDisclosure,
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
  const [inputObservacoes, setInputObservacoes] = useState<string>('');
  const [id, setId] = useState<number | null>();
  const [value, setValue] = useState("");
  const [clickSave, setClickSave] = useState(false);
  const [currentOBS, setCurrentOBS] = useState<string>();
  const [FinalList, setFinalList] = useState<string[]>([]);

  const [editOBS, setEditOBS] = useState<string>();

  const [clickEditOBS, setclickEditOBS] = useState(false);

  const [observacoesLista, setObservacoesLista] = useState(
    JSON.parse(localStorage.getItem("observacoes")!) || []
  );

  const observacoesLocalStorage = JSON.parse(
    localStorage.getItem("observacoes")!
  );

  const checkListaObservacao = () => {
    const arrayObservacoes = localStorage.getItem("observacoes")!;
    console.log('titulo', titulo)
    if (arrayObservacoes != null) {
      if (arrayObservacoes.includes(titulo!)) {
        console.log('aqui')
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
      key: id!,
      nomeExame: titulo!,
      observacao: inputObservacoes,
    };
    observacoes = observacoes.filter((e) => e.nomeExame !== "");
    observacoes.push(obs);
    localStorage.setItem("observacoes", JSON.stringify(observacoes));
  };

  const addNewObsercao = () => {
    const TodasObservacoes = JSON.parse(localStorage.getItem("observacoes")!) || [];
    console.log(id)
    const observacoes = TodasObservacoes.filter((e) => e.key === id)
    observacoes[0].observacao.push(inputObservacoes);
    const index = TodasObservacoes.indexOf(observacoes[0])
    if (index !== -1) {
      TodasObservacoes[index] = observacoes[0]
    }
    localStorage.setItem("observacoes", JSON.stringify(TodasObservacoes));
  };

  const updateListaObservacoes = (id, value) => {
    const observacoes = JSON.parse(localStorage.getItem("observacoes")!);
    if (!observacoes) return;

    const obs = observacoes.map((e) => {
      if (e.key == id) {
        e.observacao.push(value);
      }
      return e;
    });

    localStorage.setItem("observacoes", JSON.stringify(obs));
  };

  const ResetStates = () => {
    setId(null);
    setTitulo(null);
    setInputObservacoes('');
    setValue("");
    setClickSave(false);
  };

  const changeOBS = () => {
    const observacoes = JSON.parse(localStorage.getItem("observacoes")!);
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
    const observacoes = JSON.parse(localStorage.getItem("observacoes")!);
    if (!observacoes) return;

    observacoes.map((e) => {
      if (e.key == id) {
        e.observacao.map((i) => {
          console.log(i);
          if (i == observacao) {
            const index = e.observacao.indexOf(i);

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

    //Ajustar observacoes de configuracoes com a que aparece no exame


    let observacoes_localStorage: any[] = [];


    if (localStorage.getItem("observacoes") != null) {
      observacoes_localStorage = JSON.parse(
        localStorage.getItem("observacoes")!
      );
    } else {
      /*if (
        observacaofind &&
        observacaofind.observacao &&
        observacaofind.observacao.length > 1
      ) {
        observacoes_localStorage.push(observacaofind);
      }*/
    }
    return (
      <>
        {observacoes_localStorage != null
          ? observacoes_localStorage.map((e) => {

            if (e.key == id) {
              return e.observacao.map((item, key) => {
                return (
                  <HStack>
                    <Box
                      w="98%"
                      key={key}
                      margin="20px"
                      textAlign="left"
                    >
                      <HStack>
                        <Text w='80%'>{item}</Text>
                        <Box >
                          <IconButton
                            justifyContent="flex-end"
                            aria-label="Remove Item"
                            icon={<GrSubtractCircle size={30} />}
                            variant="link"
                            marginEnd="5px"
                            textColor="blue"
                            onClick={() => Apagar_Observacao(item)}
                          />
                        </Box>
                      </HStack>
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
      {observacoesLocalStorage.map((observacoes, key) => (
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
              setTitulo(observacoes.nomeExame);
              setId(observacoes.key);
              console.log('obs412', observacoes.key)
              console.log('obs412', observacoes)
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
              {observacoes.nomeExame}
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
                onClose();
                ResetStates();
              }}
            >
              Cancelar
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                setClickSave(true);
                setInputObservacoes(value);
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
