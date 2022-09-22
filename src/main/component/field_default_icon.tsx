import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Icon,
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
  useDisclosure,
  useOutsideClick,
} from "@chakra-ui/react";
import PropsTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { BiCamera } from "react-icons/bi";
import { minhasClinicas } from "./icon_button_plus";

const FieldDefaultIcon = ({ text, textColor, icon, clinica, clinicas }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [focus, setFocus] = useState("unstyled");

  const [focusEdit, setFocusEdit] = useState("unstyled");

  const [selectedFile, setSelectedFile] = useState();

  const [defaultUserImage, setDefaultUserImage] = useState(clinica.foto);

  const inputFile = useRef<HTMLInputElement | null>(null);

  const [nome, setClinica] = useState(clinica.nomeClinica);

  const [endereco, setEndereco] = useState(clinica.endereco);

  const [cep, setCep] = useState(clinica.cep);

  const [telefone, setTelefone] = useState(clinica.teleFone);

  const [InputNomeClinica, setInputNomeClinica] = useState(false);

  const [InputTelefone, setInputTelefone] = useState(false);

  const [InputCEP, setInputCEP] = useState(false);

  const [disable, setDisable] = useState(true);

  const [disableNome, setDisableNome] = useState(true);

  const refTelefone = useRef<HTMLInputElement | null>(null);

  useOutsideClick({
    ref: refTelefone,
    handler: () => setInputTelefone(false),
  });

  const refCEP = useRef<HTMLInputElement | null>(null);
  useOutsideClick({
    ref: refCEP,
    handler: () => setInputCEP(false),
  });

  const refNomeClinica = useRef<HTMLInputElement | null>(null);
  useOutsideClick({
    ref: refNomeClinica,
    handler: () => setInputNomeClinica(false),
  });

  useEffect(() => {
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      setDefaultUserImage(objectURL);
      return () => URL.revokeObjectURL(objectURL);
    }
  }, [selectedFile]);

  const openFiles = () => {
    inputFile.current?.click();
  };

  function onChangeFile(event) {
    event.stopPropagation();
    event.preventDefault();
    var file = event.target.files[0];
    setSelectedFile(file);
  }

  function ResetStates() {
    setFocusEdit("unstyled");
    setDisable(true);
    setDisableNome(true);
  }

  function UpdateLocalStorage(nomeCLinicaP) {
    var cln = clinicas;
    clinica.nomeClinica = nomeCLinicaP;
    localStorage.setItem("minhasClinicas", JSON.stringify(clinica));
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <Divider orientation="horizontal" marginTop="10px" />
          <ModalCloseButton onClick={() => ResetStates()} />

          <Stack direction="row" justify="center" margin="10px">
            {InputNomeClinica ? (
              <Input
                ref={refNomeClinica}
                w="360px"
                margin="5px"
                textAlign="center"
                alignContent="center"
                paddingRight="40px"
                marginStart="75px"
                fontSize="20px"
                defaultValue={nome}
                _placeholder={{ fontWeight: "bold", color: "black" }}
                fontWeight="bold"
                variant={"filled"}
                onClick={() => {}}
                onChange={(e) => setClinica(e.target.value)}
              ></Input>
            ) : (
              <Input
                ref={refNomeClinica}
                w="360px"
                margin="5px"
                marginStart="100px"
                alignContent="center"
                paddingRight="40px"
                fontSize="20px"
                textAlign={"center"}
                defaultValue={nome}
                _placeholder={{ fontWeight: "bold", color: "black" }}
                onChange={(e) => setClinica(e.target.value)}
                variant={"unstyled"}
                onClick={() => {}}
                isDisabled={disableNome}
              ></Input>
            )}

            <Box sx={{ alignSelf: "flex-end" }}>
              <Button
                color="#4759FC"
                fontSize="16px"
                fontWeight="bold"
                backgroundColor="transparent"
                alignItems="center"
                padding="5px"
                onClick={() => {
                  setFocus("filled");
                  setInputNomeClinica(true);
                  setDisableNome(false);
                }}
              >
                Editar
              </Button>
            </Box>
          </Stack>

          <Divider orientation="horizontal" />

          <Container centerContent h="100%" w="100%" marginTop="5px">
            <ModalBody>
              <Center>
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  srcSet={defaultUserImage}
                  alt="Image Clinica"
                />
              </Center>
              <Center>
                <input
                  type="file"
                  id="file"
                  ref={inputFile}
                  style={{ display: "none" }}
                  //onChange={onChangeFile.bind(this)}
                />

                <Icon
                  as={BiCamera}
                  margin="10px"
                  color="#4658fc"
                  onClick={openFiles}
                />
              </Center>
              <Center>
                <Grid templateColumns="repeat(1, 1fr)" justifyItems="center">
                  <Center paddingTop={"5px"}>
                    <InputGroup variant={"unstyled"} width={"160px"}>
                      <InputLeftAddon
                        children="TEL:"
                        paddingEnd={"5px"}
                        fontWeight={"bold"}
                      />
                      <Input
                        size="sm"
                        placeholder="(11) 0000-0000"
                        textAlign={"center"}
                        value={telefone}
                        isDisabled={disable}
                        variant={focusEdit}
                      />
                    </InputGroup>
                  </Center>

                  <Center paddingTop={"5px"}>
                    <InputGroup variant={"unstyled"} width={"165px"}>
                      <InputLeftAddon
                        children="CEP:"
                        paddingEnd={"5px"}
                        fontWeight={"bold"}
                      />
                      <Input
                        size="sm"
                        placeholder="13000-000"
                        textAlign={"center"}
                        value={cep}
                        isDisabled={disable}
                        variant={focusEdit}
                      />
                    </InputGroup>
                  </Center>

                  <Center>
                    <Button
                      color="#4759FC"
                      fontSize="16px"
                      fontWeight="bold"
                      backgroundColor="transparent"
                      alignItems="center"
                      onClick={() => {
                        setFocusEdit("filled");
                        setDisable(false);
                      }}
                    >
                      Editar
                    </Button>
                  </Center>
                </Grid>
              </Center>
            </ModalBody>
          </Container>

          <ModalFooter>
            <Textarea
              placeholder="Endereço"
              value={clinica.enderecoRuaNumero}
              isDisabled={disable}
            />
          </ModalFooter>
          <Button
            textColor="white"
            backgroundColor="#0e63fe"
            margin="10px"
            onClick={() => {
              UpdateLocalStorage(nome);
              ResetStates();
              onClose();
            }}
          >
            Salvar
          </Button>
        </ModalContent>
      </Modal>

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
          borderColor="#e2e8f0"
          onClick={onOpen}
        >
          <Stack direction="row" alignItems="center">
            <IconContext.Provider value={{ color: "#4A5568" }}>
              <Icon
                as={icon}
                w={5}
                h={4}
                alignSelf="center"
                marginStart="15px"
              />
            </IconContext.Provider>

            <Text
              alignSelf="center"
              textColor={textColor}
              textStyle="solid"
              fontSize="12px"
              fontWeight="medium"
              paddingTop="4.5"
            >
              {text}
            </Text>
          </Stack>
        </GridItem>
      </Flex>
    </>
  );
};

FieldDefaultIcon.protoTypes = {
  text: PropsTypes.string,
  textColor: PropsTypes.string,
  icon: PropsTypes.any,
};

FieldDefaultIcon.defaultProps = {
  text: "Título",
  textColor: "FFFFFF",
  icon: null,
};

export default FieldDefaultIcon;
