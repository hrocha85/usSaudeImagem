import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import PlusButton from "../images/button_plus.png";
import TituloNomeExame from "./titulo_nome_exame";

export default function Field_Observacoes({ exame }) {
  const titulo = `Observações ${exame.nomeExame} `;
  const button_plus = React.createElement("img", { src: PlusButton });
  var observacoes = JSON.parse(localStorage.getItem("observacoes")!);
  const altura = "100%";
  const largura = "100%";

  return (
    <Flex w="100%" h="327px" paddingStart="25px">
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
          {observacoes.map((e) => {
            let output;
            if (e.titulo_observacao == exame.nomeExame) {
              output = e.observacao.map((i, key) => {
                return (
                  <Box
                    key={key}
                    margin="10px"
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
                        textColor="black"
                      >
                        {i}
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
            return output;
          })}
        </Box>
      </Box>
    </Flex>
  );
}
/**
  * 
  * <Box
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
                    {i}
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
              </Box>;
  * 
  * 
  * 
  * {observacoes.map((e) => {
        let output;
        if (e.titulo_observacao == exame.nomeExame) {
          output = e.observacao.map((i, key) => {
            return (
              <Box
                key={key}
                margin="20px"
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
                    textColor="black"
                  >
                    {i}
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
        return output;
      })}
  * 
  * 
  */
