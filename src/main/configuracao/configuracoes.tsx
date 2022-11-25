import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Link,
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
  Progress,
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
import { AiOutlineClear } from "react-icons/ai";
import { BiCamera } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa";
import { VscFilePdf } from "react-icons/vsc";
import SignatureCanvas from "react-signature-canvas";
import MedicosJSON from "../../Data/Medicos.json";
import BoxTitleBackground from "../component/box_title_background";
import RectangularCard from "../component/card_observations";
import ItemObservation from "../component/item_obeservation";
import MainCard from "../component/main_card";
import BG from "../images/bg_img.png";
import PlusButton from "../images/button_plus.png";
import DefaultImageClinica from "../images/clinica_default.png";
import ImageHome from "../images/icon_home.png";
import Medicos from "./medicos";

export const lista_medicos = MedicosJSON.medicos;

const Configuracoes = () => {
  const getMedicos = () => {
    var medicos;
    var item;
    if (localStorage.getItem("medicos") != null) {
      item = localStorage.getItem("medicos");

      medicos = JSON.parse(item);
    } else medicos = [];
    return medicos;
  };
  const getUser = () => {
    if (localStorage.getItem("user") != null) {
      var user = JSON.parse(localStorage.getItem("user")!);
    }

    if (user != null) return user.isLogged;
  };

  const [userLogged, setuserLogged] = useState(getUser());

  let padRef = React.useRef<SignatureCanvas>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [enable, setEnable] = useState(true);

  const [focus, setFocus] = useState("unstyled");

  const [nome, setNome] = useState("");

  const [crm, setCrm] = useState("");

  const [clinicas, setClinica] = useState<string[] | any[]>([]);

  const [medicos, setMedicos] = useState<any[]>(getMedicos);

  const [defaultUserImage, setDefaultUserImage] = useState(DefaultImageClinica);

  const inputFile = useRef<HTMLInputElement | null>(null);

  const [selectedFile, setSelectedFile] = useState();

  const [listaClinicas, setListaClinicas] = useState<any[]>([]);

  const [stateClickAddMedico, setStateClickAddMedico] = useState(false);

  const [InputNomeDoutor, setInputNomeDoutor] = useState(false);

  const [updateTAGS, setUpdateTAGS] = useState(false);

  const [propsBoxAssinatura, setpropsBoxAssinatura] = useState(false);

  const [placeHolderAddDoutor, setplaceHolderDoutor] = useState("Nome");

  const [imageAssinatura, setImageAssinatura] = useState(true);

  const refNomeDoutor = useRef<HTMLInputElement | null>(null);

  //TODO COLOCAR BORDA NOS CAMPOS TELEFONE E CEP NO ADD CLINICA

  // TODO COLOCAR UM TEXTO NA ASSINATURA PARA DEMOSTRAR QUE ALI É A ASSINATURA

  // TODO COLOCAR APENAS UM EDITAR NOS CAMPOS

  

  useEffect(() => {
    setMedicos(getMedicos);
  }, [localStorage.getItem("medicos")!]);

  const AddMedico = () => {
    const obj = {
      nome: nome,
      crm: crm,
      uf: "sp",
      assinatura: padRef.current?.getTrimmedCanvas().toDataURL("image/png")!,
      foto: defaultUserImage,
      clinica: clinicas,
      laudos: [{}],
    };
    lista_medicos.push(obj);

    lista_medicos.map((e) => {
      if (e.nome == "NOME") {
        lista_medicos.shift();
      }
    });
    localStorage.setItem("medicos", JSON.stringify(lista_medicos));
    setMedicos(lista_medicos);
  };

  const showImageAssinatura = () => {
    return (
      <>
        {imageAssinatura == true ? (
          <Box
            boxShadow="lg"
            width="400px"
            height="200px"
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundClip="padding-box"
            backgroundRepeat="no-repeat"
            onClickCapture={() => setImageAssinatura(false)}
          ></Box>
        ) : (
          <Box boxShadow="lg">
            <SignatureCanvas
              ref={padRef}
              backgroundColor="#F7FAFC"
              penColor="black"
              canvasProps={{
                width: 400,
                height: 200,
                className: "sigCanvas",
              }}
            />
            <Flex justify="end">
              <Icon
                as={AiOutlineClear}
                color="#4658fc"
                margin="5px"
                alignItems="end"
                onClick={clearAssinatura}
              />
            </Flex>
          </Box>
        )}
      </>
    );
  };

  const Laudos = () => {
    return (
      <List spacing={2} size="15px">
        <ListItem>
          <ListIcon as={VscFilePdf} color="blue.400" />
          LAUDO PACIÊNTE 1
        </ListItem>
        <ListItem>
          <ListIcon as={VscFilePdf} color="blue.400" />
          LAUDO PACIÊNTE 1
        </ListItem>
        <ListItem>
          <ListIcon as={VscFilePdf} color="blue.400" />
          LAUDO PACIÊNTE 1
        </ListItem>
        <ListItem>
          <ListIcon as={VscFilePdf} color="blue.400" />
          LAUDO PACIÊNTE 1
        </ListItem>
        <ListItem>
          <ListIcon as={VscFilePdf} color="blue.400" />
          LAUDO PACIÊNTE 1
        </ListItem>
      </List>
    );
  };

  const clearAssinatura = () => {
    padRef.current?.clear();
  };

  const ResetDados = () => {
    setNome("");
    setCrm("");
    setDefaultUserImage(DefaultImageClinica);
    setFocus("unstyled");
    setStateClickAddMedico(false);
    setImageAssinatura(true);
    setpropsBoxAssinatura(false);
    setClinica([]);
  };

  const openFiles = () => {
    inputFile.current?.click();
  };

  const onChangeFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    var file = event.target.files[0];
    setSelectedFile(file);
  };

  const TAGS = () => {
    return (
      <Center margin="25px">
        <Flex direction="row" justify="center" flexWrap="wrap" gap="5px">
          {clinicas.map((clinica, key) => {
            var clinicaParse = JSON.parse(clinica);

            return (
              <Tooltip
                key={key}
                label={clinicaParse.nomeClinica}
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
                  <TagLabel key={key}>{clinicaParse.nomeClinica}</TagLabel>
                  <TagCloseButton
                    onClick={() => {
                      clinicas.splice(key, 1);
                      setUpdateTAGS(true);
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

  useEffect(() => {
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      setDefaultUserImage(objectURL);
    }
  }, [selectedFile]);

  useEffect(() => {
    var item;
    var item_parse;
    if (localStorage.getItem("minhasClinicas") != null) {
      item = localStorage.getItem("minhasClinicas");
      item_parse = JSON.parse(item);
      setListaClinicas(item_parse);
    }
  }, [stateClickAddMedico]);

  useEffect(() => {
    setMedicos(getMedicos);
  }, [localStorage.getItem("medicos")]);

  useEffect(() => {
    showImageAssinatura();
  }, [imageAssinatura]);

  useOutsideClick({
    ref: refNomeDoutor,
    handler: () => {
      setInputNomeDoutor(false);
      if (nome.length != 0) {
        setplaceHolderDoutor(nome);
      } else {
        setplaceHolderDoutor("Nome");
      }
    },
  });

  useEffect(() => {
    TAGS();
    setUpdateTAGS(false);
  }, [updateTAGS == true]);

  return (
    <Box
      w="100%"
      h="100vh"
      backgroundImage={BG}
      verticalAlign="center"
      alignSelf="center"
      alignItems="center"
      backgroundPosition="fixed"
      backgroundSize="cover"
      backgroundClip="padding-box"
      backgroundRepeat="no-repeat"
      paddingBottom="10px"
      paddingTop="5px"
    >
      <Box>
        <Flex
          direction="row"
          justify="space-between"
          margin="20px 80px 100px 20px"
          align="center"
        >
          <BoxTitleBackground
            PadLeft="20px"
            fontsize="19px"
            tamanho="180px"
            titulo="Configurações"
          />

          <Popover>
            <PopoverTrigger>
              <Button borderRadius="50%" backgroundColor="white" w="42" h="42">
                <Icon as={FaRegFolderOpen} />
              </Button>
            </PopoverTrigger>
            <PopoverContent borderRadius="20px" w="225px">
              <PopoverArrow />

              <PopoverBody>{Laudos()}</PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
        <Box alignSelf="center" marginTop="200px" backgroundColor="transparent">
          <Flex
            h="100%"
            direction="row"
            justify="space-evenly"
            margin="60px"
            flexWrap="wrap"
            gap="10px"
          >
            <>
              <MainCard
                titulo="Clínicas"
                icon={true}
                clinica={null}
                medicos={null}
              />

              {medicos.map((medico, key) => {
                return <Medicos key={key} medico={medico} id={key} />;
              })}

              <Tooltip
                label="Adicionar Médico"
                backgroundColor="white"
                placement="top"
                defaultIsOpen={false}
                hasArrow
                arrowSize={15}
                textColor="black"
              >
                <Button
                  position="absolute"
                  right="1"
                  variant="ghost"
                  onClick={() => {
                    onOpen();
                    setStateClickAddMedico(true);
                  }}
                >
                  <Image
                    srcSet={PlusButton}
                    alt="Second Icon Plus"
                    h="30px"
                    w="30px"
                  />
                </Button>
              </Tooltip>
            </>
          </Flex>

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
                    ResetDados();
                    setClinica([]);
                  }}
                />
                {InputNomeDoutor ? (
                  <Input
                    w="435px"
                    alignSelf="center"
                    textAlign="center"
                    fontWeight="bold"
                    fontSize="20px"
                    margin="10px"
                    placeholder={placeHolderAddDoutor}
                    isDisabled={false}
                    variant={"filled"}
                    onChange={(e) => setNome(e.target.value)}
                    _placeholder={{ fontWeight: "bold", color: "black" }}
                  ></Input>
                ) : (
                  <Input
                    w="435px"
                    alignSelf="center"
                    textAlign="center"
                    fontWeight="bold"
                    fontSize="20px"
                    margin="10px"
                    paddingEnd="10px"
                    placeholder={placeHolderAddDoutor}
                    isDisabled={false}
                    variant={"unstyled"}
                    onChange={(e) => setNome(e.target.value)}
                    _placeholder={{ fontWeight: "bold", color: "black" }}
                    onClick={() => {
                      setInputNomeDoutor(true);
                      setplaceHolderDoutor("");
                    }}
                  ></Input>
                )}

                <Divider orientation="horizontal" />

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
                      margin="10px"
                      onClick={openFiles}
                    />
                  </Center>
                  <TAGS />
                  <Center>
                    <HStack>
                      <Text marginEnd="5px" fontWeight="bold">
                        Clínicas:
                      </Text>
                      <Select
                        placeholder="Clínicas Cadastradas"
                        variant="filled"
                        textAlign="center"
                        onChange={(e) => {
                          setClinica((prevClin) => [
                            ...prevClin,
                            e.target.value,
                          ]);
                          TAGS();
                        }}
                      >
                        {listaClinicas.map((e, key) => {
                          return (
                            <option key={key} value={JSON.stringify(e)}>
                              {e.nomeClinica}
                            </option>
                          );
                        })}
                      </Select>
                    </HStack>
                  </Center>

                  <Center paddingTop={"30px"}>
                    <InputGroup
                      variant={"unstyled"}
                      width={"250px"}
                      marginEnd="50px"
                    >
                      <InputLeftAddon
                        children="CRM/UF:"
                        paddingEnd={"5px"}
                        fontWeight="bold"
                      />
                      <Input
                        placeholder="00000000-0/BR"
                        fontSize="18px"
                        textAlign={"center"}
                        maxLength={9}
                        onChange={(event) => setCrm(event.target.value)}
                      />
                    </InputGroup>
                  </Center>
                </ModalBody>

                <ModalFooter>
                  <Box
                    w="100%"
                    h="100%"
                    backgroundColor={"#F7FAFC"}
                    borderColor={
                      propsBoxAssinatura == true ? "#3183cf" : "white"
                    }
                    borderWidth={propsBoxAssinatura == true ? "2px" : "0px"}
                    boxShadow="md"
                    borderRadius={"md"}
                    onClick={() => setpropsBoxAssinatura(true)}
                  >
                    <SignatureCanvas
                      ref={padRef}
                      backgroundColor="transparent"
                      onBegin={() => setpropsBoxAssinatura(true)}
                      penColor="black"
                      canvasProps={{
                        width: 390,
                        height: 230,
                        className: "sigCanvas",
                      }}
                    />

                    <Flex justify="end">
                      <Icon
                        as={AiOutlineClear}
                        color="#4658fc"
                        margin="5px"
                        alignItems="end"
                        onClick={clearAssinatura}
                      />
                    </Flex>
                  </Box>
                </ModalFooter>
                <Button
                  alignSelf="center"
                  width="400px"
                  textColor="white"
                  backgroundColor="#0e63fe"
                  margin="10px"
                  onClick={() => {
                    AddMedico();
                    ResetDados();
                    onClose();
                  }}
                >
                  Salvar
                </Button>
              </ModalContent>
            </Modal>
          </>
          <Stack h="100%" direction="row" justify="center">
            <RectangularCard
              titulo="Observações"
              altura="282px"
              item={<ItemObservation />}
            />
          </Stack>
          <Box margin="120px 0px 0px 30px">
            {userLogged ? (
              <Link href={`#/Home/`}>
                <Image src={ImageHome} />
              </Link>
            ) : (
              <Link href={`#/Login`}>
                <Image src={ImageHome} />
              </Link>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Configuracoes;
