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
  useToast,
  Link
} from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BiCamera } from "react-icons/bi";
import {
  AiOutlineClear,
  AiOutlinePlusCircle,
  AiOutlineCloudUpload,
} from "react-icons/ai";
import infoClinicas from "../../Data/Clinicas.json";
import PlusButton from "../images/button_plus.png";
import DefaultImageClinica from "../images/clinica_default.png";
import SignatureCanvas from "react-signature-canvas";
import MedicosJSON from "../../Data/Medicos.json";
import { AuthContext } from "../../context/AuthContext";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
const button = React.createElement("img", { src: PlusButton });

let dados;
export const minhasClinicas = infoClinicas.clinicas;
export const lista_medicos = MedicosJSON.medicos;


const IconButtonPlusMedicos = (props, clinica) => {
  const toast = useToast();

  const padRef = React.useRef<SignatureCanvas>(null);

  const getMedicos = () => {
    let medicos;
    let item;
    if (localStorage.getItem("medicos") != null) {
      item = localStorage.getItem("medicos");

      medicos = JSON.parse(item);
    } else medicos = [];
    return medicos;
  };


  const [nome, setNome] = useState("");

  const [crm, setCrm] = useState("");

  const [clinicas, setClinica] = useState<string[] | any[]>([]);

  const [medicos, setMedicos] = useState<any[]>(getMedicos);

  const [defaultUserImage, setDefaultUserImage] = useState(DefaultImageClinica);

  const [pngAssinatura, setpngAssinatura] = useState<string | null>();

  const inputFile = useRef<HTMLInputElement | null>(null);
  const inputFileAssinatura = useRef<HTMLInputElement | null>(null);

  const [listaClinicas, setListaClinicas] = useState<any[]>([]);

  const [stateClickAddMedico, setStateClickAddMedico] = useState(false);

  const [InputNomeDoutor, setInputNomeDoutor] = useState(false);

  const [updateTAGS, setUpdateTAGS] = useState(false);

  const [propsBoxAssinatura, setpropsBoxAssinatura] = useState(false);

  const [placeHolderAddDoutor, setplaceHolderDoutor] = useState("Insira o nome do Médico");

  const [imageAssinatura, setImageAssinatura] = useState(true);

  const usenavigate = useNavigate()


  const refNomeDoutor = useRef<HTMLInputElement | null>(null);
  const {
    isOpen: isOpenModalAddMedico,
    onOpen: onOpenModalAddMedico,
    onClose: onCloseModalAddMedico,
  } = useDisclosure();

  const getUser = () => {
    let user
    if (localStorage.getItem("user") != null) {
      user = JSON.parse(localStorage.getItem("user")!);
    }

    if (user != null) return user.isLogged;
  };
  const [userLogged, setuserLogged] = useState(getUser());

  const PegaClinicas = () => {

    let item;
    let item_parse;
    if (localStorage.getItem("minhasClinicas") != null) {
      item = localStorage.getItem("minhasClinicas");
      item_parse = JSON.parse(item);
      setListaClinicas(item_parse);
    }

    onOpenModalAddMedico()
  }

  const ResetDados = () => {
    setNome("");
    setCrm("");
    setDefaultUserImage(DefaultImageClinica);
    setStateClickAddMedico(false);
    setImageAssinatura(true);
    setpropsBoxAssinatura(false);
    setClinica([]);
    setpngAssinatura(null);
  };


  const openFiles = () => {
    inputFile.current?.click();
  };
  const openFilesAssinatura = () => {
    inputFileAssinatura.current?.click();
  };

  const onChangeFile = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files![0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const result = event.target?.result;
      if (typeof result === "string") {
        setDefaultUserImage(result);
      }
    };

    reader.readAsDataURL(file);
  };

  const onChangeFilePNGAssinatura = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files![0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const result = event.target?.result;
      if (typeof result === "string") {
        setpngAssinatura(result);
      }
    };

    reader.readAsDataURL(file);
  };

  const authParaLogar = () => {
    if (!userLogged && lista_medicos.length > 0 && clinicas.length > 0) {
      const loginCriado = toast({
        duration: 300000,
        status: "success",
        position: "top",
        render: () => (
          <Flex flexWrap={"wrap"} bg={"green.500"} p={4} alignItems="center" rounded={5}>
            <Text color="white" mr={4}>
              Cadastro concluido! clique no botão para iniciar a sessão
            </Text>
            <Link href="#/LoginFree" _hover={{ textDecoration: "underline" }}>
              <Button
                colorScheme="whiteAlpha"
                _focus={{ boxShadow: "none" }}
                _active={{ bgColor: "transparent" }}
                onClick={() => {
                  toast.close(loginCriado); // Fechar o Toast ao clicar no botão
                  usenavigate('/Splash');
                }}
              >
                Login
              </Button>
            </Link>
          </Flex>
        )
      });
      return loginCriado;
    }
  };
  const [LimiteMedicos, setLimiteMedicos] = useState<boolean>(false)

  const AddMedico = () => {
    const obj = {
      nome: nome,
      crm: crm,
      assinatura:
        padRef.current?.getTrimmedCanvas().toDataURL("image/png") != null
          ? padRef.current?.getTrimmedCanvas().toDataURL("image/png")
          : pngAssinatura!,
      foto: defaultUserImage,
      clinica: clinicas,
      laudos: [{}],
    };

    medicos.push(obj)

    medicos.map((e) => {
      if (e.nome == "NOME") {
        medicos.shift();
      }
    });

    localStorage.setItem("medicos", JSON.stringify(medicos));
    props.setAtualizar(!props.atualizar);
    setMedicos(medicos);

    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role == 'admin' ? isAdmin = true : isAdmin = false
    }

    if (!isAdmin && medicos.length >= 2) {
      setLimiteMedicos(true)
    }

  };


  const CheckClinicasGratuito = () => {
    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role == 'admin' ? isAdmin = true : isAdmin = false
    }
    if (!isAdmin && medicos.length >= 2) {
      setLimiteMedicos(true)
    }
    console.log(medicos)
  }

  useEffect(() => {
    CheckClinicasGratuito()
  }, [])

  const TAGS = () => {
    return (
      <Center margin="25px">
        <Flex direction="row" justify="center" flexWrap="wrap" gap="5px">
          {clinicas.map((clinica, key) => {
            const clinicaParse = JSON.parse(clinica);
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

  const handleCRM = (event) => {
    const input = event.target;
    input.value = CrmMask(input.value);
  };

  const CrmMask = (value) => {
    if (!value) return "";
    value = value.replace(/(\d{8})(\d)/, "$1-$2");
    value = value.replace(/(-\d{1})(\B)/, "$1/$2");
    return value;
  };



  const add_png_assinatura = () => {
    openFilesAssinatura();
  };

  const clearAssinatura = () => {
    padRef.current?.clear();
  };


  return (
    <>
      <Tooltip
        label={!LimiteMedicos ? "Adicionar Médico" : "Limite de médicos do plano gratuito atingido"}
        backgroundColor="white"
        // placement="top"
        defaultIsOpen={false}
        hasArrow
        arrowSize={15}
        textColor="black"
        fontSize="20px"
        borderRadius={8}
        textAlign={'center'}
      >
        <Button
          isDisabled={LimiteMedicos}
          borderRadius="xl"
          backgroundColor="white"
          w="10rem"
          h="2.4rem"
          top={1}
          boxShadow="md"
          textColor="#4CBFF0"
          fontSize="19px"
          fontWeight="semibold"
          onClick={() => {
            PegaClinicas()
          }}
        >
          <Icon as={AiOutlinePlusCircle} w="30px" h="30px" />
          Adicionar
        </Button>
      </Tooltip >
      <>
        <Modal
          isOpen={isOpenModalAddMedico}
          onClose={onCloseModalAddMedico}
          colorScheme="blackAlpha"
        >
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
                _placeholder={{ fontWeight: "bold", color: "#b8bfca", opacity: 0.7 }}
                onClick={() => {
                  setInputNomeDoutor(true);
                  setplaceHolderDoutor("Insira o nome do Médico");
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
                    variant="filled"
                    textAlign="center"
                    onChange={(e) => {
                      console.log("eVALUE", e.target.value);
                      setClinica((prevClin) => [...prevClin, e.target.value]);
                      TAGS();
                    }}
                  >
                    <option value="" disabled selected>
                      {listaClinicas.length > 0
                        ? "Clínicas Cadastradas"
                        : "Nenhuma Clínica Cadastrada"}
                    </option>
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
                    maxLength={13}
                    onChange={(event) => {
                      handleCRM(event);
                      setCrm(event.target.value);
                    }}
                  />
                </InputGroup>
              </Center>
            </ModalBody>
            <Text
              marginStart="25px"
              marginTop="20px"
              fontSize="19px"
              fontWeight="semibold"
              marginBottom="-20px"
            >
              Assinatura:
            </Text>
            <ModalFooter>
              {pngAssinatura == null || pngAssinatura == undefined ? (
                <Box
                  w="100%"
                  h="100%"
                  backgroundColor={"#F7FAFC"}
                  borderColor={propsBoxAssinatura === true ? "#3183cf" : "white"}
                  borderWidth={propsBoxAssinatura === true ? "2px" : "0px"}
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
                    <input
                      accept="image/png, image/jpeg"
                      type="file"
                      id="file"
                      ref={inputFileAssinatura}
                      style={{ display: "none" }}
                      onChange={onChangeFilePNGAssinatura.bind(this)}
                    />
                    <Icon
                      as={AiOutlineCloudUpload}
                      color="#4658fc"
                      margin="5px"
                      alignItems="end"
                      onClick={add_png_assinatura}
                    />
                    <Icon
                      as={AiOutlineClear}
                      color="#4658fc"
                      margin="5px"
                      alignItems="end"
                      onClick={clearAssinatura}
                    />
                  </Flex>
                </Box>
              ) : (
                <Box
                  w="100%"
                  h="100%"
                  backgroundColor={"#F7FAFC"}
                  boxShadow="md"
                  borderRadius={"md"}
                >
                  <Image
                    w="100%"
                    h="100%"
                    srcSet={pngAssinatura}
                    alt="Image DR"
                  />
                </Box>
              )}
            </ModalFooter>


            <Button
              alignSelf="center"
              width="400px"
              textColor="white"
              backgroundColor="#0e63fe"
              margin="10px"
              onClick={() => {
                if (nome !== "" && crm !== "" && clinicas.length >= 1) {
                  AddMedico();
                  ResetDados();
                  onCloseModalAddMedico();
                  authParaLogar();
                  toast({
                    duration: 3000,
                    title: `Médico cadastrado com sucesso!`,
                    position: "bottom",
                    isClosable: true,
                  });
                } else {
                  toast({
                    duration: 3000,
                    title: `Preencha Nome, CRM e escolha uma clínica para cadastrar.`,
                    status: "error",
                    position: "bottom",
                    isClosable: true,
                  });
                }
              }}
            >
              Salvar
            </Button>
          </ModalContent>
        </Modal>
      </>
    </>
  );
};

export default IconButtonPlusMedicos;
