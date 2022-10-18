import {
  Box,
  Button,
  Flex,
  GridItem,
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
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Observacoes from "../../Data/Observacoes.json";
import PlusButton from "../images/button_plus.png";

const ItemObservation = () => {
  const button_plus = React.createElement("img", { src: PlusButton });
  const refText = useRef<HTMLTextAreaElement | null>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [titulo, setTitulo] = useState<string | null>("");
  const [inputObservacoes, setInputObservacoes] = useState<string[]>([]);
  const [id, setId] = useState<number | null>();
  const [value, setValue] = useState("");
  const [clickSave, setClickSave] = useState(false);

  const observacoes = [
    {
      id: 1,
      titulo_observacao: "Abdomen Total",
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
      titulo_observacao: "Abdomen Superior",
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
        updateListaObservacoes();
      }
    } else {
      setListaObservacoes();
    }
    setClickSave(false);
  };

  const setListaObservacoes = () => {
    const obs = {
      id: id!,
      titulo_observacao: titulo!,
      observacao: inputObservacoes,
    };
    observacoesJSON.push(obs);
    observacoesJSON.map((e) => {
      if (e.titulo_observacao == "") {
        observacoesJSON.shift();
      }
    });
    localStorage.setItem("observacoes", JSON.stringify(observacoesJSON));
  };

  const addNewObsercao = () => {
    const obs = {
      id: id!,
      titulo_observacao: titulo!,
      observacao: inputObservacoes,
    };
    observacoesJSON.push(obs);
    observacoesJSON.map((e) => {
      if (e.titulo_observacao == "") {
        observacoesJSON.shift();
      }
    });
    localStorage.setItem("observacoes", JSON.stringify(observacoesJSON));
  };

  const updateListaObservacoes = () => {
    observacoesJSON.map((e) => {
      if (e.id == id) {
        e.observacao.push(value);
        localStorage.setItem("observacoes", JSON.stringify(observacoesJSON));
      }
    });
  };

  const ResetStates = () => {
    setId(null);
    setTitulo(null);
    setInputObservacoes([]);
    setValue("");
    setClickSave(false);
  };

  const ItensObservacao = () => {
    return (
      <>
        {observacoesJSON.map((e) => {
          if (e.id == id) {
            return e.observacao.map((item, key) => {
              return (
                <Box
                  key={key}
                  margin="20px"
                  marginBottom="10px"
                  marginTop="0px"
                  borderWidth="2px"
                  borderColor="#f0f2f6"
                  h="48px"
                  borderRadius="md"
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
                    <IconButton
                      justifyContent="flex-end"
                      aria-label="Botao"
                      icon={button_plus}
                      variant="link"
                      h="5"
                      w="5"
                      marginEnd="5px"
                      size="xs"
                      textColor="blue"
                    />
                  </Flex>
                </Box>
              );
            });
          }
        })}
      </>
    );
  };

  useEffect(() => {
    if (clickSave == true) {
      checkListaObservacao();
      ItensObservacao();
    }
  });

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
              textColor={"black"}
              textStyle="solid"
              fontSize="12px"
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
            <Button mr={3} onClick={onClose}>
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
          <ItensObservacao />
        </ModalContent>
      </Modal>
    </>
  );
};

export default ItemObservation;
