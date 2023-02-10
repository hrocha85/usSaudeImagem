import { Box, Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PlusButton from "../images/button_plus.png";
import { Format_Laudo } from "./function_format_laudo";
import TituloNomeExame from "./titulo_nome_exame";

export default function Field_Observacoes({ exame }) {
  const altura = "100%";
  const largura = "100%";

  const titulo = `Observações ${exame.nomeExame} `;
  const button_plus = React.createElement("img", { src: PlusButton });
  var observacoes = JSON.parse(localStorage.getItem("observacoes")!);

  const [arrayObservacoes, setArrayObservacoes] = useState<any>([]);

  const subExame = titulo;
  const titulo_exame = `${exame.nomeExame}`;

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
          {observacoes != null || observacoes != undefined
            ? observacoes.map((e) => {
                let output;
                if (e.titulo_observacao == exame.nomeExame) {
                  output = e.observacao.map((i, key) => {
                    return (
                      <Tooltip
                        label="Inserir Observação"
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
                          key={key}
                          margin="10px"
                          marginTop="0px"
                          borderWidth="2px"
                          borderColor="#f0f2f6"
                          h="48px"
                          borderRadius="md"
                          _hover={{ borderColor: "#47AEFC", cursor: "pointer" }}
                          onClick={() =>
                            setArrayObservacoes((arr) => [...arr, i])
                          }
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
                              aria-label="Botao"
                              icon={button_plus}
                              variant="link"
                              h="10"
                              w="10"
                              marginEnd="5px"
                              size="xs"
                              textColor="blue"
                              onClick={() =>
                                setArrayObservacoes((arr) => [...arr, i])
                              }
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
