import FieldDefault from "./field_default";
import {
  Flex,
  GridItem,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Textarea,
  Box,
  Container,
  Wrap,
  Grid,
} from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { click } from "@testing-library/user-event/dist/click";

const ItemObservation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [descricao, setDescricao] = useState("");
  const [titulo_observacao, settitulo_observacao] = useState("");
  const observacoes = [
    { id: 1, titulo_observacao: "Abdomen Total", observacao: [] },
    { id: 2, titulo_observacao: "Doppler Transvaginal", observacao: [] },
    { id: 3, titulo_observacao: "Mamas", observacao: [] },
    { id: 4, titulo_observacao: "Doppler Artrial do MMSS", observacao: [] },
    { id: 5, titulo_observacao: "Abdomen Superior", observacao: [] },
    { id: 6, titulo_observacao: "Transvaginal", observacao: [] },
    { id: 7, titulo_observacao: "Doppler Renal", observacao: [] },
    { id: 8, titulo_observacao: "Doppler Venoso de MMII", observacao: [] },
    { id: 9, titulo_observacao: "Tireóide", observacao: [] },
    { id: 10, titulo_observacao: "Doppler das Carótidas", observacao: [] },
    { id: 11, titulo_observacao: "Doppler Hepático", observacao: [] },
    { id: 12, titulo_observacao: "Doppler Arterial de MMII", observacao: [] },
    { id: 13, titulo_observacao: "Tireóide 2", observacao: [] },
    { id: 14, titulo_observacao: "Doppler das Carótidas 2", observacao: [] },
    { id: 15, titulo_observacao: "Rins e Vias Urinárias", observacao: [] },
    { id: 16, titulo_observacao: "Doppler Venoso de MMSS", observacao: [] },
    { id: 17, titulo_observacao: "Doppler da Tireóide", observacao: [] },
    { id: 18, titulo_observacao: "Partes Moles", observacao: [] },
    { id: 19, titulo_observacao: "Testículo", observacao: [] },
    {
      id: 20,
      titulo_observacao: "Doppler de Bolsa Testicular",
      observacao: [],
    },
    { id: 21, titulo_observacao: "Doppler da Tireóide 2", observacao: [] },
    { id: 22, titulo_observacao: "Pélvico", observacao: [] },
    { id: 23, titulo_observacao: "Próstata", observacao: [] },
    { id: 24, titulo_observacao: "Articulações", observacao: [] },
  ];
  return (
    <Flex w="100%" h="auto">
      <Box
        paddingBottom="16px"
        bg="#FAFAFA"
        w="100%"
        h="100%"
        m="20px"
        color="white"
        borderRadius="10.85px"
        boxShadow="dark-lg"
      >
        <p>
          <Text
            color="black"
            fontSize="16px"
            paddingStart="8px"
            paddingTop="16px"
            marginBottom="16px"
          >
            Observações
          </Text>
        </p>
        <Grid
          templateColumns="repeat(4,1fr)"
          templateRows="repeat(6, 1fr)"
          gap={1}
        >
          
          {observacoes.map((obs, key) => {
                return (
                  <>
                    <FieldDefault
                      key={key}
                      observacao={obs}
                      textColor={"#1A202C"}
                    />
                  </>
                );
              })}
          
        </Grid>
      </Box>
    </Flex>
  );
};

export default ItemObservation;
/**
 * 
 *  {observacoes.map((obs, key) => {
                return (
                  <>
                    <FieldDefault
                      key={key}
                      observacao={obs}
                      textColor={"#1A202C"}
                    />
                  </>
                );
              })}
 * 
 */