import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
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
import axios from "axios";
import GetClinicaFree from "../Helpers/UserFree/GetClinicas";

const FieldDefaultIconCardClinicas = ({
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

  const [FotoUpdate, setFotoUpdate] = useState(false);

  const [endereco, setEndereco] = useState(clinica.endereco);

  const [cep, setCep] = useState(clinica.cep);
  const [NumeroEndereco, setNumeroEndereco] = useState(clinica.NumeroEndereco);
  const [DisableButton, setDisableButton] = useState(true);

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

  const buscarEndereco = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;
      const enderecoCompleto = `${data.logradouro}, ${NumeroEndereco} - ${data.bairro}, ${data.localidade} - ${data.uf}, ${data.cep}`

      setEndereco(enderecoCompleto);
    } catch (error) {
      console.log(error);
      setEndereco('Endereço não encontrado.');
    }
  };

  useEffect(() => {
    if (cep !== '' && NumeroEndereco !== '') {
      setDisableButton(false)
    } else {
      setDisableButton(true)
    }
  }, [NumeroEndereco, cep])

  const openFiles = () => {
    inputFile.current?.click();
  };

  const onChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const result = event.target?.result;
      if (typeof result === "string") {
        setDefaultUserImage(result);
        setFotoUpdate(true);
      }
    };

    reader.readAsDataURL(file);
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
      const TodasClinicas = JSON.parse(localStorage.getItem("minhasClinicas")!);
      const clinicas = GetClinicaFree();
      const item = clinicas[id];
      const novasClinicas = TodasClinicas.filter(objeto => objeto.id !== item.id);
      console.log('novas clinicas', novasClinicas)
      console.log('item.id', item.id)
      // minhasClinicas[id].nomeClinica = nomeUpdate;
      item.nomeClinica = nomeUpdate;
      novasClinicas.push(item)
      localStorage.setItem("minhasClinicas", JSON.stringify(novasClinicas));
      setNomeClinica(nomeUpdate);
      setUpdateNome(null);
    }

    if (cepUpdate != null) {

      const TodasClinicas = JSON.parse(localStorage.getItem("minhasClinicas")!);
      const clinicas = GetClinicaFree();
      const item = clinicas[id];
      // const novasClinicas = TodasClinicas.filter(objeto => objeto.id !== item.id);
      let novasClinicas;
      TodasClinicas.map((clinica) => {
        if (clinica.id !== item.id) {
          novasClinicas.push(clinica);
        }
      })
      item.cep = cepUpdate;
      novasClinicas.push(item)
      localStorage.setItem("minhasClinicas", JSON.stringify(novasClinicas));
      setCep(cepUpdate);
      setUpdateCEP(null);

      // const array = JSON.parse(localStorage.getItem("minhasClinicas")!);
      // const item = array[id];
      // minhasClinicas[id].cep = cepUpdate;

      // item.cep = cepUpdate;
      // localStorage.setItem("minhasClinicas", JSON.stringify(array));
      // setCep(cepUpdate);
      // setUpdateCEP(null);
    }
    if (telefoneUpdate != null) {
      const TodasClinicas = JSON.parse(localStorage.getItem("minhasClinicas")!);
      const clinicas = GetClinicaFree();
      const item = clinicas[id];
      const novasClinicas = TodasClinicas.filter(objeto => objeto.id !== item.id);
      item.teleFone = telefoneUpdate;
      novasClinicas.push(item)
      localStorage.setItem("minhasClinicas", JSON.stringify(novasClinicas));
      setTelefone(telefoneUpdate);
      setUpdateTelefone(null);
    }
    if (enderecoUpdate != null) {
      const TodasClinicas = JSON.parse(localStorage.getItem("minhasClinicas")!);
      const clinicas = GetClinicaFree();
      const item = clinicas[id];
      const novasClinicas = TodasClinicas.filter(objeto => objeto.id !== item.id);
      item.endereco = enderecoUpdate;
      novasClinicas.push(item)
      localStorage.setItem("minhasClinicas", JSON.stringify(novasClinicas));
      setEndereco(enderecoUpdate);
      setUpdateEndereco(null);
    }
    if (FotoUpdate) {
      const TodasClinicas = JSON.parse(localStorage.getItem("minhasClinicas")!);
      const clinicas = GetClinicaFree();
      const item = clinicas[id];
      const novasClinicas = TodasClinicas.filter(objeto => objeto.id !== item.id);
      item.foto = defaultUserImage;
      novasClinicas.push(item)
      localStorage.setItem("minhasClinicas", JSON.stringify(novasClinicas));
      setFotoUpdate(false);
    }
    window.dispatchEvent(new Event("update_clinicas"));
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
    const TodasClinicas = JSON.parse(localStorage.getItem("minhasClinicas")!);
    const clinicas = GetClinicaFree();
    const item = clinicas[id];
    const novasClinicas = TodasClinicas.filter(objeto => objeto.id !== item.id);

    localStorage.setItem("minhasClinicas", JSON.stringify(novasClinicas));
    window.location.reload();
  };

  const handlePhone = (event) => {
    const input = event.target;
    input.value = phoneMask(input.value);
  };

  const phoneMask = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

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
              <span style={{ marginBottom: "20px" }}>
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
                          as={BsTrash}
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

                        onChange={(e) => {
                          setUpdateCEP(e.target.value);
                          setCep(e.target.value);
                        }}
                      />
                    </InputGroup>
                  </Center>
                  <Center paddingTop={"5px"}>
                    <InputGroup variant={"unstyled"} width={"100px"}>
                      <InputLeftAddon
                        children="Nº:"
                        paddingEnd={"5px"}
                        marginEnd={"5px"}
                        fontWeight={"bold"}
                      />

                      <InputGroup>
                        <Input
                          textAlign={"center"}
                          justifySelf={"center"}
                          borderStartRadius={"md"}
                          borderEndRadius={"md"}
                          fontWeight={"bold"}
                          textColor={"black"}
                          defaultValue={NumeroEndereco}
                          placeholder="Nº"
                          isDisabled={disable}
                          variant={focusEdit}
                          onChange={(e) => {
                            setNumeroEndereco(e.target.value);
                          }}
                          borderRadius="md"
                        />
                      </InputGroup>

                    </InputGroup>
                    <Button isDisabled={DisableButton} ml='5px' size="sm" backgroundColor={'#3d82ff'} color='white' onClick={buscarEndereco}>
                      Buscar
                    </Button>
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
          marginBottom="8px"
          marginEnd="10px"
          marginStart="16px"
          bg="white"
          borderStyle="solid"
          borderWidth="2px"
          borderColor="#e2e8f0"
          padding="5px"
          borderRadius="10.85px"
          boxShadow="2xl"

        >
          <Stack justifyContent={'center'} direction="row" alignItems="center">
            <IconContext.Provider value={{ color: "#4A5568" }}>
              <Image
                borderRadius="full"
                boxSize="75px"
                srcSet={defaultUserImage}
                alt="Image Clinica"
                onClick={openFiles}
              />
            </IconContext.Provider>
            <Stack>
              <Text
                alignSelf="center"
                textColor={textColor}
                textStyle="solid"
                fontSize="18px"

                fontWeight="bold"
                paddingTop="4.5"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {isMedic == true ? text : nome}
              </Text>
              <Button
                background='white'
                color='blue'
                border='2px'
                borderColor='blue'
                onClick={() => {
                  return onClickModal ? onOpen() : null;
                }}
              >
                Visualizar cadastro
              </Button>
            </Stack>
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

FieldDefaultIconCardClinicas.protoTypes = {
  text: PropsTypes.string,
  textColor: PropsTypes.string,
  icon: PropsTypes.any,
};

FieldDefaultIconCardClinicas.defaultProps = {
  text: "Título",
  textColor: "FFFFFF",
  icon: null,
};

export default FieldDefaultIconCardClinicas;
