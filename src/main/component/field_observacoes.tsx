import { Box, Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PlusButton from "../images/button_plus.png";
import { Format_Laudo } from "./function_format_laudo";
import TituloNomeExame from "./titulo_nome_exame";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GrSubtractCircle } from "react-icons/gr";

export default function Field_Observacoes({ exame }) {
  const altura = "100%";
  const largura = "100%";

  const titulo = `Observações ${exame.nomeExame} `;
  const button_plus = React.createElement("img", { src: PlusButton });
  var observacoes = JSON.parse(localStorage.getItem("observacoes")!);

  const [arrayObservacoes, setArrayObservacoes] = useState<any>([]);

  const [remove_or_not, setRemove_or_not] = useState(false);

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
                      <Tooltip
                        label={
                          checkObservacoes(i)
                            ? "Remover Observação"
                            : "Adicionar Observação"
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
                        <Box
                          margin="10px"
                          marginTop="0px"
                          borderWidth="2px"
                          borderColor="#f0f2f6"
                          h="48px"
                          borderRadius="md"
                          _hover={{
                            borderColor: "#47AEFC",
                            cursor: "pointer",
                          }}
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
                        >
                          <Flex justify="space-between">
                            <Text
                              margin="10px"
                              fontWeight="medium"
                              textOverflow="ellipsis"
                              overflow="hidden"
                              whiteSpace="nowrap"
                              maxW="320px"
                              textColor="black"
                            >
                              {i}
                            </Text>
                            <IconButton
                              justifyContent="flex-end"
                              aria-label="Add Item"
                              icon={
                                checkObservacoes(i) ? (
                                  <GrSubtractCircle size={25} />
                                ) : (
                                  <AiOutlinePlusCircle size={25} />
                                )
                              }
                              variant="link"
                              marginEnd="5px"
                              textColor="blue"
                            />
                          </Flex>
                        </Box>
                      </Tooltip>
                    );
                  });
                }
                return output;
              })
            : null}
        </Box>
      </Box>
    </Flex>
  );
}
