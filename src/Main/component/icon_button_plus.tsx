import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Grid,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { clickOptions } from "@testing-library/user-event/dist/click";
import React, { MutableRefObject, useRef, useState } from "react";
import { BiCamera } from "react-icons/bi";
import infoClinicas from "../../Data/Clinicas.json";
import PlusButton from "../images/button_plus.png";
import Clinic from "../images/clinic.jpg";

const button = React.createElement("img", { src: PlusButton });
export const minhasClinicas = infoClinicas.clinicas;

const IconButtonPlus = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [nome, setClinica] = useState("");

  const [enable, setEnable] = useState(true);

  const [focus, setFocus] = useState("unstyled");

  const [endereco, setEndereco] = useState("");

  const [cep, setCep] = useState("");

  const [telefone, setTelefone] = useState("");

  const [clin, setClin] = useState(true);

  const AddClinica = () => {
    const obj = {
      nomeClinica: nome,
      enderecoRuaNumero: endereco,
      cidade: "santos",
      uf: "sp",
      cep: cep,
      foto: "hehehr",
      teleFone: telefone,
    };

    minhasClinicas.push(obj);
    localStorage.setItem("minhasClinicas", JSON.stringify(minhasClinicas));
    props.setAtualizar(!props.atualizar);
    onClose();
  };

  const ResetDados = () => {
    setClinica("");
    setEndereco("");
  };

  const inputFile = useRef<HTMLInputElement | null>(null);

  const openFiles = () => {
    inputFile.current?.click();
  };

  return (
    <>
      <Tooltip
        label="Adicionar Clínica"
        backgroundColor="white"
        placement="top"
        defaultIsOpen={false}
        hasArrow
        arrowSize={15}
      >
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
      </Tooltip>

      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <Divider orientation="horizontal" marginTop="10px" />
            <ModalCloseButton
              onClick={() => {
                setFocus("unstyled");
                setEnable(true);
                ResetDados();
              }}
            />

            <Stack direction="row" justify="center" margin="10px">
              <Box sx={{ flexGrow: 1 }}>
                <Input
                  textAlign="center"
                  paddingStart="60px"
                  fontWeight="bold"
                  fontSize="20px"
                  placeholder="Nome"
                  isDisabled={enable}
                  onChange={(e) => setClinica(e.target.value)}
                  variant={focus}
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
                  srcSet={Clinic}
                  alt="Dan Abramov"
                />
                <Center>
                  <input
                    type="file"
                    id="file"
                    ref={inputFile}
                    style={{ display: "none" }}
                  />

                  <Icon
                    as={BiCamera}
                    marginTop="2px"
                    color="#4658fc"
                    onClick={openFiles}
                  />
                </Center>
                <Center>
                  <Grid templateColumns="repeat(1, 1fr)" justifyItems="center">
                    <Center paddingTop={"5px"}>
                      <Input
                        placeholder="(11) 00000-000"
                        variant={"unstyled"}
                        width={"120px"}
                        textAlign={"center"}
                        onChange={(e) => setTelefone(e.target.value)}
                      ></Input>
                    </Center>

                    <Center paddingTop={"5px"}>
                      <InputGroup variant={"unstyled"} width={"122px"}>
                        <InputLeftAddon
                          children="CEP"
                          paddingEnd={"5px"}
                          fontWeight={"bold"}
                        />
                        <Input
                          placeholder="13000-000"
                          textAlign={"center"}
                          onChange={(e) => setCep(e.target.value)}
                        />
                      </InputGroup>
                    </Center>

                    <Center>
                      <Text textColor="#4759FC" size="16px">
                        Editar
                      </Text>
                    </Center>
                    <Button
                      onClick={() => {
                        AddClinica();
                        ResetDados();
                      }}
                    >
                      Salvar
                    </Button>
                  </Grid>
                </Center>
              </ModalBody>
            </Container>

            <ModalFooter>
              <Textarea
                placeholder="Endereço"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </>
  );
};

export default IconButtonPlus;
