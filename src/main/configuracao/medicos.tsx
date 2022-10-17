import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
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
  Select,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
  useOutsideClick,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineClear } from "react-icons/ai";
import { BiCamera } from "react-icons/bi";
import { BsThreeDotsVertical, BsTrash } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import SignatureCanvas from "react-signature-canvas";
import FieldDefaultIcon from "../component/field_default_icon";
import { lista_medicos } from "./configuracoes";

const Medicos = ({ medico, id }) => {
  let medicos: any[] = [];

  medicos.push(medico);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isOpenLongModal,
    onOpen: onOpenLongModal,
    onClose: onCloseLongModal,
  } = useDisclosure();
  const {
    isOpen: isOpenPopover,
    onOpen: onOpenPopover,
    onClose: onClosePopover,
  } = useDisclosure();

  const [enable, setEnable] = useState(true);

  const [enableSelectedClinica, setSelectedClinica] = useState(true);

  const [crm, setCRM] = useState(medico.crm);

  const [CRMenable, setCRMEnable] = useState(true);

  const [updateCRM, setUpdateCRM] = useState<string | null>(null);

  const [InputCRM, setInputCRM] = useState(false);

  const [updateNome, setUpdateNome] = useState<string | null>(null);

  const [nomeMedico, setNomeMedico] = useState(medico.nome);

  const [clinica, setClinica] = useState(medico.clinica);

  const [updateClinica, setUpdateClinica] = useState<string | null>(null);

  const [InputNomeMedico, setInputNomeMedico] = useState(false);

  const [InputAssinatura, setInputAssinatura] = useState(false);

  const [closeTooltip, setcloseTooltip] = useState(false);

  const [newAssinaturaEdit, setnewAssinaturaEdit] = useState(false);

  const [AssinaturaUpdate, setAssinaturaUpdate] = useState(false);

  const [assinatura, setAssinatura] = useState(medico.assinatura);

  const refNomeMedico = useRef<HTMLInputElement | null>(null);

  const refCRM = useRef<HTMLInputElement | null>(null);

  const [selectedFile, setSelectedFile] = useState();

  const [defaultUserImage, setDefaultUserImage] = useState(medico.foto);

  const inputFile = useRef<HTMLInputElement | null>(null);

  const [listaClinicas, setListaClinicas] = useState(
    JSON.parse(localStorage.getItem("minhasClinicas")!)
  );

  let padRef = React.useRef<SignatureCanvas>(null);

  const openFiles = () => {
    inputFile.current?.click();
  };

  const onChangeFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    var file = event.target.files[0];
    setSelectedFile(file);
  };

  useEffect(() => {
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      setDefaultUserImage(objectURL);
    }
  }, [selectedFile]);

  const UpdateLocalStorage = (nomeUpdate, CRMupdate, clinicaUpdate) => {
    setTimeout(() => {
      if (nomeUpdate != null) {
        var array = JSON.parse(localStorage.getItem("medicos")!);
        var item = array[id];
        lista_medicos[id].nome = nomeUpdate;

        item.nome = nomeUpdate;
        localStorage.setItem("medicos", JSON.stringify(array));
        setNomeMedico(nomeUpdate);
        setUpdateNome(null);
      }
      if (CRMupdate != null) {
        var array = JSON.parse(localStorage.getItem("medicos")!);
        var item = array[id];
        lista_medicos[id].crm = CRMupdate;

        item.crm = CRMupdate;
        localStorage.setItem("medicos", JSON.stringify(array));
        setCRM(CRMupdate);
        setUpdateCRM(null);
      }
      if (clinicaUpdate != null) {
        var array = JSON.parse(localStorage.getItem("medicos")!);
        var item = array[id];
        lista_medicos[id].clinica = clinicaUpdate;

        item.clinica = clinicaUpdate;
        localStorage.setItem("medicos", JSON.stringify(array));
        setClinica(updateClinica);
        setUpdateClinica(null);
      }
      if (AssinaturaUpdate) {
        var array = JSON.parse(localStorage.getItem("medicos")!);
        var item = array[id];
        lista_medicos[id].assinatura = padRef.current
          ?.getCanvas()
          .toDataURL("image/png")!;

        item.assinatura = padRef.current?.getCanvas().toDataURL("image/png")!;
        localStorage.setItem("medicos", JSON.stringify(array));
        setAssinatura(padRef.current?.getCanvas().toDataURL("image/png")!);
        setAssinaturaUpdate(false);
      }
    }, 200);
  };

  const ExcluirMedico = () => {
    return (
      <List>
        <ListItem textColor="black">
          <ListIcon as={BsTrash} />
          Excluir Médico
        </ListItem>
      </List>
    );
  };

  const RemoveItem = () => {
    var array = JSON.parse(localStorage.getItem("medicos")!);
    array.splice(id, 1);
    localStorage.setItem("medicos", JSON.stringify(array));
    window.location.reload();
  };

  const clearAssinatura = () => {
    padRef.current?.clear();
    setAssinaturaUpdate(true);
  };

  const ResetStates = () => {
    setCRMEnable(true);
    setEnable(true);
    setInputAssinatura(false);
    setnewAssinaturaEdit(false);
    setAssinaturaUpdate(false);
    setSelectedClinica(true);
    setcloseTooltip(false);
  };
  useOutsideClick({
    ref: refNomeMedico,
    handler: () => setInputNomeMedico(false),
  });
  useOutsideClick({
    ref: refCRM,
    handler: () => {
      setInputCRM(false);
    },
  });

  return (
    <Box
      bg="#FAFAFA"
      w="218px"
      h="100%"
      color="white"
      borderRadius="10.85px"
      boxShadow="md"
    >
      <Stack margin="10px" direction="row" justifyContent="space-between">
        <Text
          color="#1A202C"
          fontSize="16px"
          paddingStart="8px"
          align="center"
          onClick={onOpen}
        >
          {nomeMedico}
        </Text>
        <Tooltip
          isDisabled={closeTooltip}
          label="Opções"
          backgroundColor="white"
          placement="top"
          hasArrow
          arrowSize={15}
          textColor="black"
        >
          <Flex justify="end">
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
                      margin="5px"
                      as={BsThreeDotsVertical}
                      w={5}
                      h={4}
                      marginStart="15px"
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
                  <PopoverBody>{ExcluirMedico()}</PopoverBody>
                </Button>
              </PopoverContent>
            </Popover>
          </Flex>
        </Tooltip>
      </Stack>
      <Box onClick={onOpen}>
        {medicos.map((key) => (
          <FieldDefaultIcon
            key={key}
            text={medico.clinica}
            textColor="#4A5568"
            icon={HiOutlineUser}
            clinica={medicos}
            clinicas={null}
            onClickModal={false}
            id={key}
            isMedic={true}
          />
        ))}
        <Modal isOpen={isOpen} onClose={onClose} colorScheme="blackAlpha">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <Divider orientation="horizontal" marginTop="10px" />
            <ModalCloseButton
              onClick={() => {
                ResetStates();
              }}
            />

            <Stack direction="row" justify="center" margin="10px">
              <Box sx={{ flexGrow: 1 }}>
                {InputNomeMedico ? (
                  <Input
                    ref={refNomeMedico}
                    textAlign="center"
                    paddingStart="60px"
                    fontWeight="bold"
                    fontSize="20px"
                    defaultValue={nomeMedico}
                    isDisabled={enable}
                    variant={"filled"}
                    onChange={(e) => {
                      setUpdateNome(e.target.value);
                    }}
                  ></Input>
                ) : (
                  <Input
                    ref={refNomeMedico}
                    textAlign="center"
                    paddingStart="60px"
                    fontWeight="bold"
                    fontSize="20px"
                    defaultValue={nomeMedico}
                    isDisabled={enable}
                    variant="unstyled"
                  ></Input>
                )}
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
                    setInputNomeMedico(true);
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
                    alt="Image DR"
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
                    marginTop="2px"
                    color="#4658fc"
                    onClick={openFiles}
                  />
                </Center>
                {listaClinicas ? (
                  <Center>
                    <HStack margin="10px">
                      <Text marginEnd="5px" fontWeight="bold" fontSize="17px">
                        Clínicas:
                      </Text>
                      <Select
                        defaultValue={clinica}
                        width="220px"
                        variant="filled"
                        isDisabled={enableSelectedClinica}
                        textAlign="center"
                        onChange={(e) => setUpdateClinica(e.target.value)}
                      >
                        {listaClinicas.map((e, key) => {
                          return (
                            <option key={key} value={e.nomeClinica}>
                              {e.nomeClinica}
                            </option>
                          );
                        })}
                      </Select>
                    </HStack>
                  </Center>
                ) : null}

                <Center>
                  <Grid templateColumns="repeat(1, 1fr)" justifyItems="center">
                    <Center>
                      {InputCRM ? (
                        <Center paddingTop={"5px"}>
                          <InputGroup
                            width={"250px"}
                            marginEnd="55px"
                            variant={"unstyled"}
                          >
                            <InputLeftAddon
                              children="CRM/UF:"
                              paddingEnd={"5px"}
                              fontWeight="bold"
                            />
                            <Input
                              isDisabled={CRMenable}
                              variant={"filled"}
                              borderStartRadius={"md"}
                              borderEndRadius={"md"}
                              marginStart="5px"
                              maxLength={9}
                              ref={refCRM}
                              defaultValue={crm}
                              fontSize="18px"
                              textAlign={"center"}
                              onChange={(e) => {
                                setUpdateCRM(e.target.value);
                              }}
                            />
                          </InputGroup>
                        </Center>
                      ) : (
                        <Center paddingTop={"5px"}>
                          <InputGroup
                            variant={"unstyled"}
                            width={"250px"}
                            marginEnd="55px"
                          >
                            <InputLeftAddon
                              children="CRM/UF:"
                              paddingEnd={"5px"}
                              fontWeight="bold"
                            />
                            <Input
                              ref={refCRM}
                              defaultValue={crm}
                              fontSize="18px"
                              variant={"unstyled"}
                              isDisabled={CRMenable}
                              textAlign={"center"}
                              maxLength={9}
                            />
                          </InputGroup>
                        </Center>
                      )}
                    </Center>

                    <Center>
                      <Button
                        color="#4759FC"
                        fontSize="16px"
                        fontWeight="bold"
                        backgroundColor="transparent"
                        alignItems="center"
                        onClick={() => {
                          setCRMEnable(false);
                          setInputCRM(true);
                          setInputAssinatura(true);
                          setSelectedClinica(false);
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
              {InputAssinatura ? (
                <Box
                  w="100%"
                  h="100%"
                  backgroundColor={"#F7FAFC"}
                  borderColor="#3183cf"
                  borderWidth="2px"
                  boxShadow="md"
                  borderRadius={"md"}
                >
                  {newAssinaturaEdit ? (
                    <SignatureCanvas
                      ref={padRef}
                      backgroundColor="#F7FAFC"
                      penColor="black"
                      onEnd={() => UpdateLocalStorage(null, null, null)}
                      canvasProps={{
                        width: 390,
                        height: 230,
                        className: "sigCanvas",
                      }}
                    />
                  ) : (
                    <Image
                      backgroundColor={"#F7FAFC"}
                      borderRadius={"md"}
                      width="400px"
                      height="200px"
                      srcSet={assinatura}
                      alt="Assinatura"
                    />
                  )}

                  <Flex justify="end">
                    <Icon
                      as={AiOutlineClear}
                      color="#4658fc"
                      margin="5px"
                      alignItems="end"
                      onClick={() => {
                        clearAssinatura();
                        setnewAssinaturaEdit(true);
                      }}
                    />
                  </Flex>
                </Box>
              ) : (
                <Image
                  boxShadow="lg"
                  backgroundColor={"#F7FAFC"}
                  borderRadius={"md"}
                  width="400px"
                  height="200px"
                  srcSet={assinatura}
                  alt="Assinatura"
                />
              )}
            </ModalFooter>
            <Button
              marginTop="5px"
              textColor="white"
              backgroundColor="#0e63fe"
              marginEnd="20px"
              marginStart="23px"
              marginBottom="10px"
              onClick={() => {
                UpdateLocalStorage(updateNome, updateCRM, updateClinica);
                ResetStates();
                onClose();
              }}
            >
              Salvar
            </Button>
          </ModalContent>
        </Modal>
        <Modal isOpen={isOpenLongModal} onClose={onCloseLongModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Excluir Doutor(a) {nomeMedico} ?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text> Deseja excluir Doutor(a) {nomeMedico} ?</Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onCloseLongModal}>
                Cancelar
              </Button>
              <Button variant="ghost" onClick={() => RemoveItem()}>
                Excluir{" "}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default Medicos;
