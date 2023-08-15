/* eslint-disable array-callback-return */

import { Box, Button, Heading, Image, Tab, TabList, TabPanel, TabPanels, Table, Tabs, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useState } from "react";
import ObsBIRADS from "../../../images/ObsBIRADS.png";
import { Format_Laudo } from "../../../component/function_format_laudo";
import { TableContainer } from "@mui/material";

function Extra4() {
  const altura = "100%";
  const largura = "66%";
  const subExame = "Sugestão de Referência";
  const titulo_exame = "Mamas";
  const [imageAdded, setImageAdded] = useState(false);

  const AddImageFormatLaudo = () => {
    new Format_Laudo(
      titulo_exame,
      subExame,
      undefined,
      undefined,
      undefined,
      ObsBIRADS
    ).Format_Laudo_Create_Storage();
    setImageAdded(true);
  };

  const RemoveImageFormatLaudo = () => {
    new Format_Laudo(
      titulo_exame,
      subExame,
      undefined,
      undefined,
      undefined,
      ObsBIRADS
    ).Remove_Image();
    setImageAdded(false);
  };

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 10px 15px"
      mt="20px"
    >
      <Heading as="h3" size="md" mb={4}>
        Tabela 1.Categorias do BI-RADS, recomendações e risco de câncer
      </Heading>
      <TableContainer>
        <Table variant="striped" size="md" bg={'gray.300'}>
          <Thead>
            <Tr bg={'#306eee'}>
              <Th border="1px solid white" textAlign="center" fontSize={'md'} color={'white'}>CATEGORIA</Th>
              <Th border="1px solid white" textAlign="center" fontSize={'md'} color={'white'}>IPRESSÃO DIAGNÓSTICA</Th>
              <Th border="1px solid white" textAlign="center" fontSize={'md'} color={'white'}>RECOMENDAÇÃO</Th>
              <Th textAlign="center" fontSize={'md'} color={'white'}>RISCO DE CÂNCER (%)</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td border="1px solid white" textAlign="center" fontWeight={'bold'}>0</Td>
              <Td border="1px solid white">Exame inconclusivo</Td>
              <Td border="1px solid white">Complementar o estudo</Td>
              <Td border="1px solid white" textAlign="center">Exame Incompleto</Td>
            </Tr>
            <Tr>
              <Td border="1px solid white" textAlign="center" fontWeight={'bold'}>1</Td>
              <Td border="1px solid white">Normal</Td>
              <Td border="1px solid white">Exame de rotina anual</Td>
              <Td border="1px solid white" textAlign="center">0</Td>
            </Tr>
            <Tr>
              <Td border="1px solid white" textAlign="center" fontWeight={'bold'}>2</Td>
              <Td border="1px solid white">Achado benigno</Td>
              <Td border="1px solid white">Exame de rotina anual</Td>
              <Td border="1px solid white" textAlign="center">0</Td>
            </Tr>
            <Tr>
              <Td border="1px solid white" textAlign="center" fontWeight={'bold'}>3</Td>
              <Td border="1px solid white">Achado provavelvemte benigno</Td>
              <Td border="1px solid white">Realizar controle precoce (em 6,12,24 e 36 meses)</Td>
              <Td border="1px solid white" textAlign="center">&le; 2</Td>
            </Tr>
            <Tr>
              <Td border="1px solid white" textAlign="center" fontWeight={'bold'}>4</Td>
              <Td border="1px solid white">Achado suspeito</Td>
              <Td border="1px solid white">Prosseguir investigação: realizar biópsia</Td>
              <Td border="1px solid white" textAlign="center">3 - 94</Td>
            </Tr>
            <Tr>
              <Td border="1px solid white" textAlign="center" fontWeight={'bold'}>5</Td>
              <Td border="1px solid white">Achado altamente suspeito</Td>
              <Td border="1px solid white">Prosseguir investigação: realizar biópsia</Td>
              <Td border="1px solid white" textAlign="center">&ge; 95</Td>
            </Tr>
            <Tr>
              <Td border="1px solid white" textAlign="center" fontWeight={'bold'}>6</Td>
              <Td border="1px solid white" >Achado investigativo previamente e com resultado positivo(câncer)</Td>
              <Td border="1px solid white">Tratamento adequado</Td>
              <Td border="1px solid white" textAlign="center">100</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Button
        marginTop="10px"
        color={imageAdded ? "red" : "#394BEE"}
        fontSize="16px"
        fontWeight="semibold"
        alignItems="center"
        padding="5px"
        backgroundColor="#E3E5F8"
        onClick={imageAdded ? RemoveImageFormatLaudo : AddImageFormatLaudo}
        _hover={{ backgroundColor: "#47AEFC8E" }}
      >
        {imageAdded ? "Remover Imagem do Laudo" : "Adicionar Imagem ao Laudo"}
      </Button>
    </Box>
  );
}

export default Extra4;
