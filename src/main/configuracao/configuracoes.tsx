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
import { AiOutlineClear, AiOutlinePlusCircle } from "react-icons/ai";
import { BiCamera } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa";
import { VscFilePdf } from "react-icons/vsc";
import SignatureCanvas from "react-signature-canvas";
import MedicosJSON from "../../Data/Medicos.json";
import Box_Default_With_Sidebar from "../component/box_default_sidebar";
import BoxTitleBackground from "../component/box_title_background";
import RectangularCard from "../component/card_observations";
import ItemObservation from "../component/item_obeservation";
import MainCard from "../component/main_card";
import DefaultImageClinica from "../images/clinica_default.png";
import ImageHome from "../images/icon_home.png";
import Medicos from "./medicos";
import BGImage from "../images/bg_img.png";
import Sidebar from "../menu/sideBar";

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

  const getUserMedico = () => {
    if (localStorage.getItem("user") != null) {
      var medico = JSON.parse(localStorage.getItem("user")!);
      return medico.medico;
    } else return null;
  };

  const Laudos = () => {
    //TODO CASO O CAMINHO DO LAUDO NAO EXISTA MOSTRAR UM ERRO
    return (
      <>
        {getUserMedico() != null
          ? getMedicos().map((medi) => {
              if (medi.nome == getUserMedico().nome) {
                return medi.laudos.map((laudos, key) => {
                  return (
                    <Center>
                      <List spacing={3} size="20px" key={key}>
                        <ListItem
                          padding="10px"
                          onClick={() => {
                            showSavedLaudo(laudos.laudo);
                          }}
                          cursor="pointer"
                          _hover={{
                            bg: "blue.100",
                            fontWeight: "semibold",
                            borderRadius: "10px",
                          }}
                        >
                          <ListIcon
                            as={VscFilePdf}
                            color="blue.600"
                            h="25px"
                            w="25px"
                            fontSize="xxx-large"
                          />
                          {`Laudo Paciente ${laudos.paciente} - ${laudos.data}`}
                        </ListItem>
                        <Divider orientation="horizontal" marginBottom="10px" />
                      </List>
                    </Center>
                  );
                });
              }
            })
          : null}
      </>
    );
  };

  const showSavedLaudo = (laudo) => {
    return window.open(laudo);
  };

  const clearAssinatura = () => {
    padRef.current?.clear();
  };

  const ResetDados = () => {
    setNome("");
    setCrm("");
    setDefaultUserImage(DefaultImageClinica);
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
      h="100% auto"
      minH="100vh"
      backgroundImage={BGImage}
      backgroundSize="cover"
      backgroundClip="padding-box"
      backgroundRepeat="no-repeat"
      paddingBottom="10px"
      alignItems="center"
    >
      <Sidebar />
      <Stack
        direction="row"
        justify="space-between"
        align="center"
        padding="20px"
      >
        <BoxTitleBackground
          PadLeft="20px"
          fontsize="19px"
          tamanho="180px"
          titulo="Configurações"
        />

        <Popover>
          <PopoverTrigger>
            <Button
              borderRadius="xl"
              backgroundColor="white"
              w="42"
              h="42"
              boxShadow="md"
            >
              <Icon as={FaRegFolderOpen} margin="5px" />
              Laudos
            </Button>
          </PopoverTrigger>
          <PopoverContent borderRadius="20px" w="225px">
            <PopoverArrow />

            <PopoverBody>{Laudos()}</PopoverBody>
          </PopoverContent>
        </Popover>
      </Stack>
      <Stack direction="row" justify="space-evenly" flexWrap="wrap" gap="10px">
        <MainCard titulo="Clínicas" icon={true} clinica={null} medicos={null} />

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
            borderRadius="xl"
            backgroundColor="white"
            w="42"
            h="42"
            boxShadow="md"
            textColor="#4CBFF0"
            fontSize="19px"
            fontWeight="semibold"
            onClick={() => {
              onOpen();
              setStateClickAddMedico(true);
            }}
          >
            <Icon
              as={AiOutlinePlusCircle}
              marginRight="8px"
              w="30px"
              h="30px"
            />
            Adicionar
          </Button>
        </Tooltip>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose} colorScheme="blackAlpha">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <Divider orientation="horizontal" marginTop="10px" />
          <ModalCloseButton
            onClick={() => {
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
                    setClinica((prevClin) => [...prevClin, e.target.value]);
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
              <InputGroup variant={"unstyled"} width={"250px"} marginEnd="50px">
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
              borderColor={propsBoxAssinatura == true ? "#3183cf" : "white"}
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

      {userLogged ? (
        <Stack direction="row" justify="center">
          <RectangularCard
            titulo="Observações"
            altura="282px"
            item={<ItemObservation />}
          />
        </Stack>
      ) : null}
      {userLogged ? (
        <Link href={`#/Home/`}>
            <Image
              src={ImageHome}
              marginTop="50px"
              marginLeft="20px"
              paddingBottom="50px"
            />
        </Link>
      ) : (
        <Link href={`#/Login`}>
          <Image
            src={ImageHome}
            marginTop="50px"
            marginLeft="20px"
            paddingBottom="50px"
          />
        </Link>
      )}
    </Box>
  );
};

export default Configuracoes;
