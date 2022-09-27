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
  useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";
import { BiCamera } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi";
import FieldDefaultIcon from "../component/field_default_icon";

const Drs = ({ medico }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [enable, setEnable] = useState(true);

  const [focus, setFocus] = useState("unstyled");

  let drs: any[] = [];
  drs.push(medico);

  return (
    <Box
      bg="#FAFAFA"
      w="218px"
      h="100%"
      color="white"
      borderRadius="10.85px"
      boxShadow="md"
      onClick={onOpen}
    >
      <Box margin="10px">
        <Text
          color="#1A202C"
          fontSize="16px"
          paddingStart="8px"
          alignSelf="center"
        >
          {medico.nome}
        </Text>
      </Box>

      {drs.map((dr) => (
        <FieldDefaultIcon
          text={dr.clinica}
          textColor="#4A5568"
          icon={HiOutlineUser}
          clinica={drs}
          clinicas={null}
          onClickModal={false}
        />
      ))}
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
                value={medico.nome}
                isDisabled={enable}
                variant={focus}
                _placeholder={{ fontWeight: "bold", color: "black" }}
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
                srcSet={medico.foto}
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
                      {medico.crm}
                    </Text>
                  </Stack>

                  <Center></Center>
                </Grid>
              </Center>
            </ModalBody>
          </Container>

          <ModalFooter>
            {medico.assinatura ? (
              <Image
                width="400px"
                height="200px"
                srcSet={medico.assinatura}
                alt="Assinatura"
              />
            ) : null}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Drs;
