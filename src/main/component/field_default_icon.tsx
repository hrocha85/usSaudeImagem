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

const FieldDefaultIcon = ({
  text,
  textColor,
  icon,
  clinica,
  clinicas,
  onClickModal,
  id,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [focus, setFocus] = useState("unstyled");

  const [focusEdit, setFocusEdit] = useState("unstyled");

  const [selectedFile, setSelectedFile] = useState();

  const [defaultUserImage, setDefaultUserImage] = useState(clinica.foto);

  const inputFile = useRef<HTMLInputElement | null>(null);

  const [nome, setNomeClinica] = useState(clinica.nomeClinica);

  const [updateNome, setUpdateNome] = useState("");

  const [endereco, setEndereco] = useState(clinica.enderecoRuaNumero);

  const [cep, setCep] = useState(clinica.cep);

  const [telefone, setTelefone] = useState(clinica.teleFone);

  const [InputNomeClinica, setInputNomeClinica] = useState(false);

  const [InputTelefone, setInputTelefone] = useState(false);

  const [InputCEP, setInputCEP] = useState(false);

  const [disable, setDisable] = useState(true);

  const [disableNome, setDisableNome] = useState(true);

  const refTelefone = useRef<HTMLInputElement | null>(null);

  const refCEP = useRef<HTMLInputElement | null>(null);

  const refNomeClinica = useRef<HTMLInputElement | null>(null);

  const openFiles = () => {
    inputFile.current?.click();
  };

  const onChangeFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    var file = event.target.files[0];
    setSelectedFile(file);
  };

  const ResetStates = () => {
    setFocusEdit("unstyled");
    setDisable(true);
    setDisableNome(true);
  };

  const UpdateLocalStorage = (
    nomeUpdate,
    telefoneUpdate,
    cepUpdate,
    enderecoUpdate
  ) => {
    if (nomeUpdate != null) {
      var array = JSON.parse(localStorage.getItem("minhasClinicas")!);
      var item = array[id];
      minhasClinicas[id].nomeClinica = nomeUpdate;

      item.nomeClinica = nomeUpdate;
      localStorage.setItem("minhasClinicas", JSON.stringify(array));
      setNomeClinica(nomeUpdate);
    }

    if (cepUpdate != null) {
      var array = JSON.parse(localStorage.getItem("minhasClinicas")!);
      var item = array[id];
      minhasClinicas[id].cep = cepUpdate;

      item.cep = cepUpdate;
      localStorage.setItem("minhasClinicas", JSON.stringify(array));
      setCep(cepUpdate);
    }
    if (telefoneUpdate != null) {
      var array = JSON.parse(localStorage.getItem("minhasClinicas")!);
      var item = array[id];
      minhasClinicas[id].teleFone = telefoneUpdate;

      item.teleFone = telefoneUpdate;
      localStorage.setItem("minhasClinicas", JSON.stringify(array));
      setTelefone(telefoneUpdate);
    }
    if (enderecoUpdate != null) {
      var array = JSON.parse(localStorage.getItem("minhasClinicas")!);
      var item = array[id];
      minhasClinicas[id].enderecoRuaNumero = enderecoUpdate;

      item.enderecoRuaNumero = enderecoUpdate;
      localStorage.setItem("minhasClinicas", JSON.stringify(array));
      setEndereco(enderecoUpdate);
    }
  };

  useEffect(() => {
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      setDefaultUserImage(objectURL);
      return () => URL.revokeObjectURL(objectURL);
    }
  }, [selectedFile]);

  useOutsideClick({
    ref: refNomeClinica,
    handler: () => setInputNomeClinica(false),
  });

  useOutsideClick({
    ref: refCEP,
    handler: () => setInputCEP(false),
  });

  useOutsideClick({
    ref: refTelefone,
    handler: () => setInputTelefone(false),
  });

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
                fontSize="20px"
                defaultValue={nome}
                _placeholder={{ fontWeight: "bold", color: "black" }}
                fontWeight="bold"
                variant={"filled"}
                onClick={() => {}}
                onChange={(e) => {
                  setNomeClinica(e.target.value);
                  setUpdateNome(e.target.value);
                  UpdateLocalStorage(updateNome, null, null, null);
                }}
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
                value={nome}
                fontWeight={"bold"}
                textColor={"black"}
                _placeholder={{ fontWeight: "bold", color: "black" }}
                onChange={(e) => setNomeClinica(e.target.value)}
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
                    <InputGroup variant={"unstyled"} width={"210px"}>
                      <InputLeftAddon
                        children="TEL:"
                        paddingEnd={"5px"}
                        fontWeight={"bold"}
                      />
                      <Input
                        textAlign={"center"}
                        value={telefone}
                        isDisabled={disable}
                        variant={focusEdit}
                        borderStartRadius={"md"}
                        borderEndRadius={"md"}
                        maxLength={13}
                        fontWeight={"bold"}
                        textColor={"black"}
                        onChange={(e) =>
                          UpdateLocalStorage(null, e.target.value, null, null)
                        }
                      />
                    </InputGroup>
                  </Center>

                  <Center paddingTop={"5px"}>
                    <InputGroup variant={"unstyled"} width={"215px"}>
                      <InputLeftAddon
                        children="CEP:"
                        paddingEnd={"5px"}
                        fontWeight={"bold"}
                      />
                      <Input
                        textAlign={"center"}
                        justifySelf={"center"}
                        value={cep}
                        isDisabled={disable}
                        variant={focusEdit}
                        borderStartRadius={"md"}
                        borderEndRadius={"md"}
                        fontWeight={"bold"}
                        textColor={"black"}
                        maxLength={9}
                        onChange={(e) =>
                          UpdateLocalStorage(null, null, e.target.value, null)
                        }
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
              value={endereco}
              isDisabled={disable}
              onChange={(e) =>
                UpdateLocalStorage(null, null, null, e.target.value)
              }
            />
          </ModalFooter>
          <Button
            textColor="white"
            backgroundColor="#0e63fe"
            marginEnd="20px"
            marginStart="23px"
            marginBottom="10px"
            onClick={() => {
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
          onClick={() => {
            return onClickModal ? onOpen() : null;
          }}
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
