import {
  Box,
  Button,
  Center,
  Divider,
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
  Spacer,
  Text,
  Textarea,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GrSubtractCircle } from "react-icons/gr";
import { Format_Laudo } from "./function_format_laudo";
import TituloNomeExame from "./titulo_nome_exame";

export default function Field_Observacoes({ exame }) {
  const altura = "100%";
  const largura = "100%";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const get_format_laudo = JSON.parse(localStorage.getItem("format_laudo")!);
  const observacao: any[] = get_format_laudo.map((e) => {
    if (e.titulo_exame == exame.nomeExame) {
      return e.observacoes;
    }
  });

  let titulo = "Observações";
  if (exame && exame.nomeExame) {
    titulo = `Observações ${exame.nomeExame}`;
  }
  const observacoesLocalStorage = JSON.parse(localStorage.getItem("observacoes")!);

  const ExameObservacoes = observacoesLocalStorage.filter((e) => e.key === exame.key)

  const observacoes = ExameObservacoes[0]

  const [items, setItems] = useState<{ id: string; values: string[] }>({
    id: exame.nomeExame,
    values: [""],
  });

  const [currentOBS, setCurrentOBS] = useState<string>();

  const [editOBS, setEditOBS] = useState<string>();

  const [clickEditOBS, setclickEditOBS] = useState(false);

  const [allObs, setAllObs] = useState(false);

  const titulo_exame = `${exame.nomeExame}`;

  const checkObservacoes = useCallback(
    (observao_local_storage) => {
      const get_format_laudo = JSON.parse(
        localStorage.getItem("format_laudo")!
      );
      const observacao = get_format_laudo
        .filter((e) => e.titulo_exame == exame.nomeExame)
        .flatMap((e) => e.observacoes)
        .filter((observacao) => observacao);

      if (
        items.values.includes(observao_local_storage) ||
        observacao.includes(observao_local_storage)
      ) {
        return true;
      } else {
        return false;
      }
    },
    [exame.nomeExame, items, localStorage.getItem("format_laudo")]
  );

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
        {observacoes.observacao != null && observacoes.observacao != undefined
          ? observacoes.observacao.map((e) => {

            if (observacoes.nomeExame == exame.nomeExame) {
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
                        setCurrentOBS(e);
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
                        {e}
                      </Text>
                    </Box>
                  </Tooltip>

                  <Tooltip
                    label={
                      checkObservacoes(e)
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
                          checkObservacoes(e) ? (
                            <GrSubtractCircle size={30} />
                          ) : (
                            <AiOutlinePlusCircle size={30} />
                          )
                        }
                        variant="link"
                        marginEnd="5px"
                        textColor="blue"
                        onClick={() => {
                          if (checkObservacoes(e)) {
                            new Format_Laudo(
                              exame.nomeExame
                            ).Remove_Observacao(e);

                            setItems((prevItems) => ({
                              ...prevItems,
                              values: prevItems.values.map((value) =>
                                value !== e ? value : ""
                              ),
                            }));
                          } else {
                            setItems((prevItems) => {
                              if (prevItems.id === exame.nomeExame) {
                                const newValues = [...prevItems.values, e];
                                const updatedItem = Object.assign(
                                  {},
                                  prevItems,
                                  { values: newValues }
                                );
                                return updatedItem;
                              }
                              return prevItems;
                            });
                          }
                        }}
                      />
                    </Flex>
                  </Tooltip>
                </HStack>
              );

            }

          })
          : null}
      </Box>
    );
  };

  const onClick_Observacao_Editada = () => {
    if (checkObservacoes(currentOBS)) {
      setItems((prevItems) => {
        if (prevItems.id === exame.nomeExame) {
          const newValues = prevItems.values.filter(
            (value) => value !== editOBS
          );
          return {
            ...prevItems,
            values: newValues,
          };
        }
        return prevItems;
      });
    } else {
      setItems((prevItem) => ({
        id: prevItem.id,
        values: [...prevItem.values, editOBS!],
      }));

      updateLocalStorage(editOBS, currentOBS);
    }
  };

  const onClick_Inserir_Observacao = () => {
    if (checkObservacoes(currentOBS)) {
      new Format_Laudo(exame.nomeExame).Remove_Observacao(currentOBS);
      setItems((prevItems) => {
        if (prevItems.id === exame.nomeExame) {
          const newValues = prevItems.values.filter(
            (value) => value !== currentOBS!
          );
          return {
            ...prevItems,
            values: newValues,
          };
        }
        return prevItems;
      });
    } else {
      setItems((prevItem) => ({
        id: prevItem.id,
        values: [...prevItem.values, currentOBS!],
      }));
    }
  };

  const updateLocalStorage = (editOBS, currentOBS) => {
    const updatedObservacoes = observacoes.map((e) => {
      const updatedObservacao = e.observacao.map((e) => {
        if (e === currentOBS) {
          return editOBS;
        }
        return e;
      });
      return { ...e, observacao: updatedObservacao };
    });
    localStorage.setItem("observacoes", JSON.stringify(updatedObservacoes));
  };

  const Render_Button_add_all_obs = () => {
    const adicionarTodasObservacoes = () => {
      if (observacoes.observacao != null && observacoes.observacao != undefined) {
        observacoes.observacao.forEach((observacao) => {
          if (observacoes.nomeExame === exame.nomeExame) {
            setCurrentOBS(observacao);
            setItems((prevItem) => ({
              id: prevItem.id,
              values: [...prevItem.values, observacao!],
            }));
            setAllObs(true);
          }
        });
      }
    };

    const removeAllObs = () => {
      if (observacoes.observacao != null && observacoes.observacao != undefined) {
        observacoes.observacao.forEach((observacao) => {
          if (observacoes.nomeExame === exame.nomeExame) {
            setCurrentOBS(observacao);
            new Format_Laudo(exame.nomeExame).Remove_Observacao(observacao);
            setAllObs(false);
            setItems({ id: items.id, values: [""] });
          }
        });
      }
    };

    return (
      <>
        <Tooltip
          label={
            allObs ? "Remover todas observações" : "Inserir todas observações"
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
          <IconButton
            aria-label="Add Item"
            icon={
              allObs ? (
                <GrSubtractCircle size={30} />
              ) : (
                <AiOutlinePlusCircle size={30} />
              )
            }
            variant="link"
            marginEnd="5px"
            textColor="blue"
            marginLeft="auto"
            onClick={allObs ? removeAllObs : adicionarTodasObservacoes}
          />
        </Tooltip>
      </>
    );
  };

  const Render_Button_Add_or_Remove = () => {
    return (
      <>
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
      </>
    );
  };

  useEffect(() => {
    const get_format_laudo = JSON.parse(localStorage.getItem("format_laudo")!);
    const observacao = get_format_laudo
      .filter((e) => e.titulo_exame == exame.nomeExame)
      .flatMap((e) => e.observacoes)
      .filter((observacao) => observacao);

    setItems({
      id: exame.nomeExame,
      values: observacao.length > 1 ? observacao : [""],
    });
  }, [exame]);

  useEffect(() => {
    new Format_Laudo().Add_Observacao(items, titulo_exame);
  }, [items]);

  useEffect(() => {
    Render_Observacao_or_Text_Area();
    Render_Box_Observacoes();
  }, [clickEditOBS]);

  return (
    <>
      <Flex w="100%" marginStart="22px">
        <Box
          bg="#FAFAFA"
          w={largura}
          bgPosition="center"
          bgRepeat="no-repeat"
          borderRadius="10.85px"
          boxShadow="md"
          padding="24px 15px 20px 15px"
        >
          <HStack width="100%">
            <TituloNomeExame titulo={titulo} />
            <Spacer flex={1} />
            {Render_Button_add_all_obs()}
          </HStack>
          <Divider
            borderWidth="1px"
            borderColor="black"
            marginBottom="5px"
            marginTop="2px"
          />
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
              {Render_Button_Add_or_Remove()}

              {Render_Editar_or_Cancel()}
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
