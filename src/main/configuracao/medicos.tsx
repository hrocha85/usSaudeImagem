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
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  Tooltip,
  useDisclosure,
  useOutsideClick,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineClear, AiOutlineEdit } from "react-icons/ai";
import { BiCamera } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { FaRegEdit, FaRegFolderOpen } from "react-icons/fa";
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

  const [updateTAGS, setUpdateTAGS] = useState(false);

  const [InputNomeMedico, setInputNomeMedico] = useState(false);

  const [InputAssinatura, setInputAssinatura] = useState(false);

  const [closeTooltip, setcloseTooltip] = useState(false);

  const [newAssinaturaEdit, setnewAssinaturaEdit] = useState(false);

  const [AssinaturaUpdate, setAssinaturaUpdate] = useState(false);

  const [FotoUpdate, setFotoUpdate] = useState(false);

  const [assinatura, setAssinatura] = useState(medico.assinatura);

  const refNomeMedico = useRef<HTMLInputElement | null>(null);

  const refCRM = useRef<HTMLInputElement | null>(null);

  const [selectedFile, setSelectedFile] = useState<any>();

  const [defaultUserImage, setDefaultUserImage] = useState(medico.foto);

  const inputFile = useRef<HTMLInputElement | null>(null);

  let padRef = React.useRef<SignatureCanvas>(null);

  const [listaClinicas, setListaClinicas] = useState(
    JSON.parse(localStorage.getItem("minhasClinicas")!)
  );

  const [ClinicasMedico, setClinicaMedico] = useState<any[]>(medico.clinica);

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

  const UpdateLocalStorage = (nomeUpdate, CRMupdate, clinicaUpdate) => {
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
      lista_medicos[id].clinica = ClinicasMedico;

      item.clinica = ClinicasMedico;
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
    if (FotoUpdate) {
      var array = JSON.parse(localStorage.getItem("medicos")!);
      var item = array[id];
      lista_medicos[id].foto = defaultUserImage;
      item.foto = defaultUserImage;
      localStorage.setItem("medicos", JSON.stringify(array));
      setFotoUpdate(false);
    }
  };

  const POPExcluirMedico = () => {
    return (
      <List>
        <ListItem textColor="black" fontSize="xl">
          <ListIcon as={BsTrash} w={6} h={6} />
          Excluir Médico
        </ListItem>
      </List>
    );
  };

  const POPEditarMedico = () => {
    return (
      <List>
        <ListItem textColor="black" fontSize="xl">
          <ListIcon as={AiOutlineEdit} w={7} h={7} />
          Editar Médico
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

  const RemoveTAG = () => {
    var array = JSON.parse(localStorage.getItem("medicos")!);
    var item = array[id];
    lista_medicos[id].clinica = ClinicasMedico;

    item.clinica = ClinicasMedico;
    localStorage.setItem("medicos", JSON.stringify(array));
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

  const TAGS = () => {
    return (
      <Center margin="25px">
        <Flex direction="row" justify="center" flexWrap="wrap" gap="5px">
          {ClinicasMedico.map((clinica, key) => {
            var parseClinica = JSON.parse(clinica);
            return (
              <Tooltip
                key={key}
                label={parseClinica.nomeClinica}
                size="md"
                backgroundColor="white"
                placement="top"
                hasArrow
                arrowSize={15}
                textColor="black"
              >
                <Tag
                  key={key}
                  size="md"
                  borderRadius="full"
                  variant="solid"
                  colorScheme="twitter"
                >
                  <TagLabel key={key}>{parseClinica.nomeClinica}</TagLabel>
                  <TagCloseButton
                    onClick={() => {
                      ClinicasMedico.splice(key, 1);
                      setUpdateTAGS(true);
                      RemoveTAG();
                    }}
                  />
                </Tag>
              </Tooltip>
            );
          })}
        </Flex>
      </Center>
    );
  };

  const RenderFieldDefault = () => {
    return (
      <>
        {ClinicasMedico.map((clinica, key) => {
          var parseClinica = JSON.parse(clinica);
          return (
            <FieldDefaultIcon
              key={key}
              text={parseClinica.nomeClinica}
              textColor="#4A5568"
              icon={FaRegFolderOpen}
              clinica={medicos}
              clinicas={null}
              onClickModal={false}
              id={key}
              isMedic={true}
            />
          );
        })}
      </>
    );
  };

  useEffect(() => {
    setListaClinicas(JSON.parse(localStorage.getItem("minhasClinicas")!));
  }, [localStorage.getItem("minhasClinicas")!]);

  useEffect(() => {
    RenderFieldDefault();
  }, [ClinicasMedico]);

  useEffect(() => {
    TAGS();
    setUpdateTAGS(false);
  }, [updateTAGS == true]);

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

  const handleCRM = (event) => {
    let input = event.target;
    input.value = CrmMask(input.value);
  };

  const CrmMask = (value) => {
    if (!value) return "";
    value = value.replace(/(\d{8})(\d)/, "$1-$2");
    value = value.replace(/(-\d{1})(\B)/, "$1/$2");
    return value;
  };

  return (
    <Box
      bg="#FAFAFA"
      w="358px"
      h="62vh"
      color="white"
      borderRadius="10.85px"
      boxShadow="2xl"
      dropShadow="dark-lg"
      display="inline-block"
    >
      <HStack margin="10px" direction="row" spacing={4} justify="space-between">
        <Image
          borderRadius="full"
          boxSize="80px"
          src={defaultUserImage}
          alt="Foto médico"
          justifySelf="flex-start"
          marginEnd="10px"
          marginTop="5px"
          marginStart="10px"
        />
        <Text
          color="#1A202C"
          fontSize="20px"
          align="center"
          //onClick={onOpen}
          //_hover={{ cursor: "pointer" }}
          fontWeight="semibold"
          overflowWrap="break-word"
          display="inline-block"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
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
          fontSize="xl"
        >
          <Box>
            <Popover>
              <PopoverTrigger>
                <Button
                  display="flex"
                  justifySelf="flex-end"
                  onClick={() => setcloseTooltip(true)}
                  size="auto"
                  backgroundColor="transparent"
                  variant="ghost"
                  _hover={{ bg: "transparent" }}
                >
                  <IconContext.Provider value={{ color: "#0dc7e2" }}>
                    <Icon
                      onMouseOver={() => setcloseTooltip(false)}
                      margin="5px"
                      as={FaRegEdit}
                      w={8}
                      h={6}
                      marginStart="15px"
                    />
                  </IconContext.Provider>
                </Button>
              </PopoverTrigger>
              <PopoverContent borderRadius="20px" w="auto">
                <PopoverArrow />
                <Button
                  onClick={() => onOpen()}
                  size="auto"
                  fontWeight="normal"
                  backgroundColor="transparent"
                  variant="ghost"
                  cursor="pointer"
                  _hover={{
                    bg: "blue.100",
                    fontWeight: "semibold",
                    borderRadius: "10px",
                  }}
                >
                  <PopoverBody>{POPEditarMedico()}</PopoverBody>
                </Button>
                <Divider orientation="horizontal" margin="5px" />

                <Button
                  onClick={() => onOpenLongModal()}
                  size="auto"
                  fontWeight="normal"
                  backgroundColor="transparent"
                  variant="ghost"
                  cursor="pointer"
                  _hover={{
                    bg: "blue.100",
                    fontWeight: "semibold",
                    borderRadius: "10px",
                  }}
                >
                  <PopoverBody>{POPExcluirMedico()}</PopoverBody>
                </Button>
              </PopoverContent>
            </Popover>
          </Box>
        </Tooltip>
      </HStack>
      <Center>
        <Box marginTop="5%" marginBottom="5%">
          <Center>
            <Stack align="center">
              <Text textColor="black" fontSize="23px">
                CRM/UF
              </Text>
              <Text textColor="black" fontSize="19px" fontWeight="semibold">
                {crm}
              </Text>
            </Stack>
          </Center>
        </Box>
      </Center>
      <Box onClick={onOpen}>
        <Box overflow="auto" maxH="240px">
          <RenderFieldDefault />
        </Box>
        <Box>
          {assinatura != "" ? (
            <Box
              flexGrow={1}
              margin="10% 3% 3% 3%"
              justifyContent="center"
              boxShadow="xl"
              h="100px"
              backgroundColor={"#F7FAFC"}
              borderRadius="10px"
            >
              <Image
                w="100%"
                h="100%"
                src={assinatura}
                alt="Assinatura Médico"
                backgroundImage="none"
                fit="scale-down"
              />
            </Box>
          ) : null}
        </Box>

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
                <TAGS />
                {listaClinicas ? (
                  <Center>
                    <HStack margin="10px">
                      <Text marginEnd="5px" fontWeight="bold" fontSize="17px">
                        Clínicas:
                      </Text>
                      <Select
                        placeholder={
                          listaClinicas.length > 0
                            ? "Clínicas Cadastradas"
                            : "Nenhuma Clínica Cadastrada"
                        }
                        width="220px"
                        variant="filled"
                        isDisabled={enableSelectedClinica}
                        textAlign="center"
                        onChange={(e) => {
                          setUpdateClinica(e.target.value);
                          setClinicaMedico((prevClinicas) => [
                            ...prevClinicas,
                            e.target.value,
                          ]);
                        }}
                      >
                        {listaClinicas.map((clinica, key) => {
                          return (
                            <option key={key} value={JSON.stringify(clinica)}>
                              {clinica.nomeClinica}
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
                              maxLength={13}
                              ref={refCRM}
                              defaultValue={crm}
                              fontSize="18px"
                              textAlign={"center"}
                              onChange={(e) => {
                                handleCRM(e);
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
