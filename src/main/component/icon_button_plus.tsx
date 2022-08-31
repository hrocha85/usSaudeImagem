import {
  Button, Center, Container, Divider, Grid,
  GridItem, Icon, IconButton, Image, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure
} from "@chakra-ui/react";
import React from "react";
import { BiCamera } from "react-icons/bi";
import PlusButton from "../images/button_plus.png";

const button = React.createElement("img", { src: PlusButton });

const IconButtonPlus = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="sdfs"
        icon={button}
        variant="link"
        h="22"
        w="22"
        size="xs"
        textColor="blue"
        onClick={onOpen}
      />
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <Divider orientation="horizontal" />
            <ModalCloseButton />

            <Grid w="100%" templateColumns="repeat(2, 1fr)" gap={1}>
              <GridItem justifyContent="center" colSpan={4}>
                <Text textAlign="center" fontWeight="bold">
                  Nome da Clínica
                </Text>
              </GridItem>
              <GridItem colEnd={6}>
                <Text>Editar</Text>
              </GridItem>
            </Grid>

            <Divider orientation="horizontal" />

            <Container centerContent h="100%" w="100%" backgroundColor="yellow">
              <ModalBody>
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
                <Center>
                  <Icon as={BiCamera} marginTop="2px" />
                </Center>
                <Center>
                  <Grid templateColumns="repeat(1, 1fr)">
                    <Text>Editar</Text>
                    <Text>Editar</Text>
                    <Text>Editar</Text>
                  </Grid>
                </Center>
              </ModalBody>
            </Container>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </>
  );
};

export default IconButtonPlus;
