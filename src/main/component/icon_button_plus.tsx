import {
  Button,
  Center,
  Container,
  Divider,
  Grid,
  GridItem,
  Icon,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  Stack,
  Textarea,
  Flex,
  Wrap,
  Box,
  WrapItem,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiCamera } from "react-icons/bi";
import PlusButton from "../images/button_plus.png";

const button = React.createElement("img", { src: PlusButton });

const IconButtonPlus = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [name, setName] = useState("Nome da clínica");

  const [enable, setEnable] = useState(true);
  
  const [focus, setFocus] = useState('unstyled');
  
  const [autoFocus, setAutoFocus] = useState(false);

  

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
            <Divider orientation="horizontal" marginTop="5px" />
            <ModalCloseButton onClick={() => setFocus('unstyled')}/>

            <Stack direction="row" justify="center" margin="10px">
              <Box sx={{ flexGrow: 1 }}>
                <Input
                  textAlign="center"
                  paddingStart="60px"
                  fontWeight="bold"
                  fontSize="20px"
                  placeholder={name}
                  isDisabled={enable}
                  onChange={(e) => setName(e.target.value)}
                  variant={focus}
                  autoFocus={autoFocus}
                ></Input>
              </Box>

              <Box sx={{ alignSelf: "flex-end" }}>
                <Button
                  color="#4759FC"
                  paddingEnd="5px"
                  fontSize="16px"
                  fontWeight="bold"
                  backgroundColor="transparent"
                  alignItems="center"
                  onClick={() => { setEnable(false); setFocus('filled'); setAutoFocus(true)}}
                >
                  Editar
                </Button>
              </Box>
            </Stack>

            <Divider orientation="horizontal" />

            <Container centerContent h="100%" w="100%" marginTop="5px">
              <ModalBody>
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
                <Center>
                  <Icon as={BiCamera} marginTop="2px" color="#4658fc" />
                </Center>
                <Center>
                  <Grid templateColumns="repeat(1, 1fr)" justifyItems="center">
                    <Text size="16">(11)0000-000</Text>

                    <Stack direction="row" justify="center">
                      <Text fontWeight="bold" size="20px">
                        CEP:
                      </Text>
                      <Text size="20px">13020-000</Text>
                    </Stack>

                    <Center>
                      <Text textColor="#4759FC" size="16px">
                        Editar
                      </Text>
                    </Center>
                  </Grid>
                </Center>
              </ModalBody>
            </Container>

            <ModalFooter>
              <Textarea placeholder="Endereço" />
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </>
  );
};

export default IconButtonPlus;
/**
 *
 * <Text textColor="#4759FC" size="16px">
                Editar
              </Text>
 *
 *
 */
