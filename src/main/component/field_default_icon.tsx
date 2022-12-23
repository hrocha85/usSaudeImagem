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
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  Textarea,
  Tooltip,
  useDisclosure,
  useOutsideClick,
} from "@chakra-ui/react";
import PropsTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { BiCamera } from "react-icons/bi";
import { BsThreeDotsVertical, BsTrash } from "react-icons/bs";
import { minhasClinicas } from "./icon_button_plus";

const FieldDefaultIcon = ({
  text,
  textColor,
  icon,
  clinica,
  clinicas,
  onClickModal,
  id,
  isMedic,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [focus, setFocus] = useState("unstyled");

  const [focusEdit, setFocusEdit] = useState("unstyled");

  const [selectedFile, setSelectedFile] = useState();

  const [defaultUserImage, setDefaultUserImage] = useState(clinica.foto);

  const inputFile = useRef<HTMLInputElement | null>(null);

  const [nome, setNomeClinica] = useState(clinica.nomeClinica);

  const [updateNome, setUpdateNome] = useState<string | null>(null);

  const [updateTelefone, setUpdateTelefone] = useState<string | null>(null);

  const [updateCEP, setUpdateCEP] = useState<string | null>(null);

  const [updateEndereco, setUpdateEndereco] = useState<string | null>(null);

  const [endereco, setEndereco] = useState(clinica.enderecoRuaNumero);

  const [cep, setCep] = useState(clinica.cep);

  const [telefone, setTelefone] = useState(clinica.teleFone);

  const [InputNomeClinica, setInputNomeClinica] = useState(false);

  const [InputTelefone, setInputTelefone] = useState(false);

  const [InputCEP, setInputCEP] = useState(false);

  const [closeTooltip, setcloseTooltip] = useState(true);

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
    setcloseTooltip(true);
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
      setUpdateNome(null);
    }

    if (cepUpdate != null) {
      var array = JSON.parse(localStorage.getItem("minhasClinicas")!);
      var item = array[id];
      minhasClinicas[id].cep = cepUpdate;

      item.cep = cepUpdate;
      localStorage.setItem("minhasClinicas", JSON.stringify(array));
      setCep(cepUpdate);
      setUpdateCEP(null);
    }
    if (telefoneUpdate != null) {
      var array = JSON.parse(localStorage.getItem("minhasClinicas")!);
      var item = array[id];
      minhasClinicas[id].teleFone = telefoneUpdate;

      item.teleFone = telefoneUpdate;
      localStorage.setItem("minhasClinicas", JSON.stringify(array));
      setTelefone(telefoneUpdate);
      setUpdateTelefone(null);
    }
    if (enderecoUpdate != null) {
      var array = JSON.parse(localStorage.getItem("minhasClinicas")!);
      var item = array[id];
      minhasClinicas[id].enderecoRuaNumero = enderecoUpdate;

      item.enderecoRuaNumero = enderecoUpdate;
      localStorage.setItem("minhasClinicas", JSON.stringify(array));
      setEndereco(enderecoUpdate);
      setUpdateEndereco(null);
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
  const {
    isOpen: isOpenLongModal,
    onOpen: onOpenLongModal,
    onClose: onCloseLongModal,
  } = useDisclosure();

  const ExcluirClinica = () => {
    return (
      <List>
        <ListItem textColor="black">
          <ListIcon as={BsTrash} />
          Excluir Clínica
        </ListItem>
      </List>
    );
  };

  const RemoveItem = () => {
    var array = JSON.parse(localStorage.getItem("minhasClinicas")!);
    array.splice(id, 1);
    localStorage.setItem("minhasClinicas", JSON.stringify(array));
    window.location.reload();
  };


  const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }

  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Tooltip
              isDisabled={closeTooltip}
              label="Opções"
              backgroundColor="white"
              placement="top"
              hasArrow
              arrowSize={15}
              textColor="black"
            >
              <span style={{ position: "fixed", marginBottom: "20px" }}>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      onClick={() => setcloseTooltip(true)}
                      size="auto"
                      backgroundColor="transparent"
                      variant="ghost"
                      _hover={{ bg: "transparent" }}
                    >
                      <IconContext.Provider value={{ color: "#4A5568" }}>
                        <Icon
                          onMouseOver={() => setcloseTooltip(false)}
                          as={BsThreeDotsVertical}
                          w={5}
                          h={4}
                          marginStart="5px"
                          marginBottom="25px"
                        />
                      </IconContext.Provider>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent borderRadius="20px" w="auto">
                    <PopoverArrow />
                    <Button
                      onClick={() => onOpenLongModal()}
                      size="auto"
                      fontWeight="normal"
                      backgroundColor="transparent"
                      variant="ghost"
                      _hover={{ bg: "transparent" }}
                    >
                      <PopoverBody>{ExcluirClinica()}</PopoverBody>
                    </Button>
                  </PopoverContent>
                </Popover>
              </span>
            </Tooltip>
          </ModalHeader>
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
                onClick={() => { }}
                onChange={(e) => {
                  setNomeClinica(e.target.value);
                  setUpdateNome(e.target.value);
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
                variant={"unstyled"}
                onClick={() => { }}
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
                  onClick={openFiles}
                />
              </Center>
              <Center>
                <input
                  type="file"
                  id="file"
                  ref={inputFile}
                  style={{ display: "none" }}
                  onChange={onChangeFile.bind(this)}
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
                        defaultValue={telefone}
                        isDisabled={disable}
                        variant={focusEdit}
                        borderStartRadius={"md"}
                        borderEndRadius={"md"}
                        maxLength={15}
                        fontWeight={"bold"}
                        textColor={"black"}
                        onChange={(e) => {
                          handlePhone(e);
                          setUpdateTelefone(e.target.value);
                          setTelefone(e.target.value);
                        }}
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
                        defaultValue={cep}
                        isDisabled={disable}
                        variant={focusEdit}
                        borderStartRadius={"md"}
                        borderEndRadius={"md"}
                        fontWeight={"bold"}
                        textColor={"black"}
                        maxLength={9}
                        onChange={(e) => {
                          setUpdateCEP(e.target.value);
                          setCep(e.target.value);
                        }}
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
              defaultValue={endereco}
              isDisabled={disable}
              onChange={(e) => {
                setUpdateEndereco(e.target.value);
                setEndereco(e.target.value);
              }}
            />
          </ModalFooter>
          <Button
            textColor="white"
            backgroundColor="#0e63fe"
            marginEnd="20px"
            marginStart="23px"
            marginBottom="10px"
            onClick={() => {
              UpdateLocalStorage(
                updateNome,
                updateTelefone,
                updateCEP,
                updateEndereco
              );
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
          marginEnd="10px"
          marginStart="16px"
          bg="#FEFFFE"
          borderStyle="solid"
          borderWidth="2px"
          borderColor="#e2e8f0"
          padding="5px"
          onClick={() => {
            return onClickModal ? onOpen() : null;
          }}
        >
          <Stack direction="row" alignItems="center">
            <IconContext.Provider value={{ color: "#4A5568" }}>
              <Icon
                as={icon}
                w={6}
                h={6}
                alignSelf="center"
                marginStart="15px"
                marginEnd="10px"
              />
            </IconContext.Provider>

            <Text
              alignSelf="center"
              textColor={textColor}
              textStyle="solid"
              fontSize="18px"
              fontWeight="medium"
              paddingTop="4.5"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {isMedic == true ? text : nome}
            </Text>
          </Stack>
        </GridItem>
      </Flex>

      <Box>
        <Modal isOpen={isOpenLongModal} onClose={onCloseLongModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Excluir Clínica {nome} ?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text> Deseja excluir Clínica {nome} ?</Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onCloseLongModal}>
                Cancelar
              </Button>
              <Button variant="ghost" onClick={() => RemoveItem()}>
                Excluir
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
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
