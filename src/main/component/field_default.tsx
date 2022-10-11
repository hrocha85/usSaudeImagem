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
} from "@chakra-ui/react";
import PropsTypes from "prop-types";
import { useEffect, useState } from "react";
import Observacoes from "../../Data/Observacoes.json";

const FieldDefault = ({ observacao, textColor }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [descricao, setDescricao] = useState("");
  const [localStorageObservacoes, setLocalStorageObservacoes] = useState(
    JSON.parse(localStorage.getItem("observacoes")!)
  );
  const observacoes = Observacoes.observacoes;

  const addObservacao = () => {
    observacao.observacao.push(descricao)
    const obs = {
      id: observacao.id,
      titulo_observacao: observacao.titulo_observacao,
      observacao: observacao.observacao,
    };

    observacoes.push(obs);
    observacoes.map((e) => {
      if (e.id == 0) {
        observacoes.shift();
      }
    });
    localStorage.setItem("observacoes", JSON.stringify(observacoes));
  };

  

  return (
    <>
      <Flex>
        <GridItem
          w="100%"
          h="100%"
          borderRadius="4px"
          marginBottom="8px"
          marginEnd="42px"
          marginStart="16px"
          bg="#FEFFFE"
          borderStyle="solid"
          borderWidth="2px"
          borderStartWidth="4px"
          borderStartColor="#47AFFC"
          onClick={onOpen}
        >
          <Text
            textColor={textColor}
            textStyle="solid"
            fontSize="12px"
            fontWeight="medium"
            verticalAlign="center"
            paddingTop="4.5"
            paddingStart="12px"
          >
            {observacao.titulo_observacao}
          </Text>
        </GridItem>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{observacao.titulo_observacao}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              placeholder="Descrição automática nova"
              onChange={(e) => setDescricao(e.target.value)}
            />

            {localStorageObservacoes != null
              ? observacoes.map((e) => {
                console.log('e',e)
                  return (
                    <Box
                      w="400px"
                      h="40px"
                      borderColor={"#e3e8f1"}
                      borderWidth="1px"
                      borderRadius="md"
                      marginTop="5px"
                    >
                      
                    </Box>
                  );
                })
              : null}
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                addObservacao();
                //onClose();
              }}
            >
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

FieldDefault.protoTypes = {
  text: PropsTypes.string,
  textColor: PropsTypes.string,
};

FieldDefault.defaultProps = {
  text: "Título",
  textColor: "FFFFFF",
};

export default FieldDefault;
