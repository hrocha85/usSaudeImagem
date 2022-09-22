import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Grid,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiCamera } from "react-icons/bi";
import SignatureCanvas from "react-signature-canvas";
import Avatar from "../images/Avatar.png";

const ModalDrs = () => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  const [enable, setEnable] = useState(true);

  const [focus, setFocus] = useState("unstyled");

  const [nome, setDoutor] = useState("Nome do Doutor(a)");

  const [endereco, setEndereco] = useState("");

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} colorScheme="blackAlpha">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <Divider orientation="horizontal" marginTop="10px" />
          <ModalCloseButton
            onClick={() => {
              setFocus("unstyled");
              setEnable(true);
            }}
          />

          <Stack direction="row" justify="center" margin="10px">
            <Box sx={{ flexGrow: 1 }}>
              <Input
                textAlign="center"
                paddingStart="60px"
                fontWeight="bold"
                fontSize="20px"
                placeholder={nome}
                isDisabled={enable}
                variant={focus}
                value={nome}
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
                onClick={() => {
                  setEnable(false);
                  setFocus("filled");
                }}
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
                srcSet={Avatar}
                alt="Image DR"
              />
              <Center>
                <Icon as={BiCamera} marginTop="2px" color="#4658fc" />
              </Center>
              <Center>
                <Grid templateColumns="repeat(1, 1fr)" justifyItems="center">
                  <Text size="16">CRM/UF</Text>

                  <Stack direction="row" justify="center">
                    <Text fontWeight="bold" size="20px">
                      00000000-0/BR
                    </Text>
                  </Stack>

                  <Center>
                    <Text textColor="#4759FC" size="16px">
                      Salvar
                    </Text>
                  </Center>
                </Grid>
              </Center>
            </ModalBody>
          </Container>

          <ModalFooter>
            <SignatureCanvas
              backgroundColor="#F7FAFC"
              penColor="black"
              canvasProps={{
                width: 400,
                height: 200,
                className: "sigCanvas",
              }}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalDrs;
