import {
  Box,
  Button,
  Center,
  Flex,
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
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GrSubtractCircle } from "react-icons/gr";
import PlusButton from "../images/button_plus.png";
import { Format_Laudo } from "./function_format_laudo";
import TituloNomeExame from "./titulo_nome_exame";

export default function Field_Observacoes({ exame }) {
  const altura = "100%";
  const largura = "100%";
  const { isOpen, onOpen, onClose } = useDisclosure();

  const titulo = `Observações ${exame.nomeExame} `;
  const button_plus = React.createElement("img", { src: PlusButton });
  var observacoes = JSON.parse(localStorage.getItem("observacoes")!);

  const [arrayObservacoes, setArrayObservacoes] = useState<any>([]);

  const [currentOBS, setCurrentOBS] = useState<string>();

  const subExame = titulo;
  const titulo_exame = `${exame.nomeExame}`;

  const checkObservacoes = (observao_local_storage) => {
    if (Object.keys(arrayObservacoes).length >= 1) {
      return arrayObservacoes.includes(observao_local_storage);
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (Object.keys(arrayObservacoes).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        arrayObservacoes
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        arrayObservacoes
      ).Format_Laudo_Create_Storage();
    }
  }, [arrayObservacoes]);

  return (
    <>
      <Flex w="100%" h="327px" paddingStart="20px">
        <Box
          bg="#FAFAFA"
          w={largura}
          h={altura}
          bgPosition="center"
          bgRepeat="no-repeat"
          borderRadius="10.85px"
          boxShadow="md"
          padding="24px 15px 20px 15px"
          overflow="auto"
        >
          <TituloNomeExame titulo={titulo} />

          <Box>
            {observacoes != null && observacoes != undefined
              ? observacoes.map((e) => {
                  let output;
                  if (e.titulo_observacao == exame.nomeExame) {
                    output = e.observacao.map((i, key) => {
                      return (
                        <HStack
                          isInline={true}
                          alignItems="center"
                          justify="space-between"
                        >
                          <Tooltip
                            label="Abrir Observação"
                            backgroundColor="white"
                            placement="top"
                            hasArrow
                            arrowSize={15}
                            textColor="black"
                            fontSize="20px"
                            margin="20px"
                            textAlign="center"
                          >
                            <Box
                              w="88%"
                              maxW="88%"
                              borderWidth="2px"
                              borderColor="#f0f2f6"
                              h="48px"
                              borderRadius="md"
                              _hover={{
                                borderColor: "#47AEFC",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                onOpen();
                                setCurrentOBS(i);
                              }}
                            >
                              <Text
                                margin="10px"
                                fontWeight="medium"
                                textOverflow="ellipsis"
                                overflow="hidden"
                                whiteSpace="nowrap"
                                textColor="black"
                                fontSize="18px"
                              >
                                {i}
                              </Text>
                            </Box>
                          </Tooltip>

                          <Tooltip
                            label={
                              checkObservacoes(i)
                                ? "Remover Observação"
                                : "Inserir Observação"
                            }
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
                                aria-label="Add Item"
                                icon={
                                  checkObservacoes(i) ? (
                                    <GrSubtractCircle size={30} />
                                  ) : (
                                    <AiOutlinePlusCircle size={30} />
                                  )
                                }
                                variant="link"
                                marginEnd="5px"
                                textColor="blue"
                                onClick={() => {
                                  if (checkObservacoes(i)) {
                                    const index = arrayObservacoes.indexOf(i);
                                    if (index > -1) {
                                      arrayObservacoes.splice(index, 1);
                                      setArrayObservacoes((arr) => [...arr]);
                                    }
                                  } else {
                                    setArrayObservacoes((arr) => [...arr, i]);
                                  }
                                }}
                              />
                            </Flex>
                          </Tooltip>
                        </HStack>
                      );
                    });
                  }
                  return output;
                })
              : null}
          </Box>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="x-large">Observação</ModalHeader>
          <ModalCloseButton size="lg" />
          <ModalBody maxW="98%">
            <Box padding="3%">
              <Center>
                <Text fontSize="x-large" wordBreak="break-word">
                  {currentOBS}
                </Text>
              </Center>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Box width="100%">
              <Button
                fontSize="20px"
                colorScheme={checkObservacoes(currentOBS) ? "red" : "blue"}
                width="100%"
                onClick={() => {
                  {
                    if (checkObservacoes(currentOBS)) {
                      const index = arrayObservacoes.indexOf(currentOBS);
                      if (index > -1) {
                        arrayObservacoes.splice(index, 1);
                        setArrayObservacoes((arr) => [...arr]);
                      }
                    } else {
                      setArrayObservacoes((arr) => [...arr, currentOBS]);
                    }
                  }
                  onClose();
                }}
              >
                {checkObservacoes(currentOBS)
                  ? "Remover Observação"
                  : "Inserir Observação"}
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
