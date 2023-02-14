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
  Textarea,
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

  let titulo = "Observações";
  if (exame && exame.nomeExame) {
    titulo = `Observações ${exame.nomeExame}`;
  }
  const button_plus = React.createElement("img", { src: PlusButton });
  var observacoes = JSON.parse(localStorage.getItem("observacoes")!);

  const [arrayObservacoes, setArrayObservacoes] = useState<any>([]);

  const [currentOBS, setCurrentOBS] = useState<string>();

  const [editOBS, setEditOBS] = useState<string>();

  const [clickEditOBS, setclickEditOBS] = useState(false);

  useEffect(() => {
    console.log('nome exame', exame.nomeExame)
  }, [])

  const subExame = titulo;
  const titulo_exame = `${exame.nomeExame}`;

  const checkObservacoes = (observao_local_storage) => {
    if (Object.keys(arrayObservacoes).length >= 1) {
      return arrayObservacoes.includes(observao_local_storage);
    } else {
      return false;
    }
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

  const Render_Editar_or_Cancel = () => {
    return checkObservacoes(currentOBS) ? null : (
      <Button
        fontSize="20px"
        backgroundColor={!clickEditOBS ? "#7FFFD4" : "red"}
        width="100%"
        textColor="black"
        onClick={() => {
          !clickEditOBS ? setclickEditOBS(true) : setclickEditOBS(false);
        }}
      >
        {!clickEditOBS ? "Editar Observação" : "Cancelar Edição"}
      </Button>
    );
  };

  const Render_Box_Observacoes = () => {
    return (
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
                          setclickEditOBS(false);
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
    );
  };

  const onClick_Observacao_Editada = () => {
    if (checkObservacoes(currentOBS)) {
      const index = arrayObservacoes.indexOf(editOBS);
      if (index > -1) {
        arrayObservacoes.splice(index, 1);
        setArrayObservacoes((arr) => [...arr]);
      }
    } else {
      setArrayObservacoes((arr) => [...arr, editOBS]);
      updateLocalStorage(editOBS, currentOBS);
    }
  };

  const onClick_Inserir_Observacao = () => {
    if (checkObservacoes(currentOBS)) {
      const index = arrayObservacoes.indexOf(currentOBS);
      if (index > -1) {
        arrayObservacoes.splice(index, 1);
        setArrayObservacoes((arr) => [...arr]);
      }
    } else {
      setArrayObservacoes((arr) => [...arr, currentOBS]);
    }
  };

  const updateLocalStorage = (editOBS, currentOBS) => {
    const updatedObservacoes = observacoes.map((e) => {
      const updatedObservacao = e.observacao.map((i) => {
        if (i === currentOBS) {
          return editOBS;
        }
        return i;
      });
      return { ...e, observacao: updatedObservacao };
    });
    localStorage.setItem("observacoes", JSON.stringify(updatedObservacoes));
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

  useEffect(() => {
    Render_Observacao_or_Text_Area();
    Render_Box_Observacoes();
  }, [clickEditOBS]);

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
          {Render_Box_Observacoes()}
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="x-large">Observação</ModalHeader>
          <ModalCloseButton size="lg" />
          <ModalBody maxW="98%">
            <Box padding="3%">
              <Center>{Render_Observacao_or_Text_Area()}</Center>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Box width="100%">
              <Button
                marginBottom="2%"
                fontSize="20px"
                colorScheme={checkObservacoes(currentOBS) ? "red" : "blue"}
                width="100%"
                onClick={() => {
                  if (editOBS != "" && editOBS != undefined) {
                    onClick_Observacao_Editada();
                  } else {
                    onClick_Inserir_Observacao();
                  }
                  onClose();
                }}
              >
                {checkObservacoes(currentOBS)
                  ? "Remover Observação"
                  : "Inserir Observação"}
              </Button>
              {Render_Editar_or_Cancel()}
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
