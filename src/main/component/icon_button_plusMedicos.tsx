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
import GetClinicaFree from "../Helpers/UserFree/GetClinicasFree";
import GetMedicosFree from "../Helpers/UserFree/GetMedicosFree";
import getClinicaAdmin from "../Helpers/UserAdmin/GetClinicasAdmin";
import api from "../../api";
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

  const [errorMsg, setErrorMsg] = useState<any>(false);
  const [nome, setNome] = useState("");

  const [crm, setCrm] = useState("");

  const [clinicas, setClinica] = useState<string[] | any[]>([]);

  const [medicos, setMedicos] = useState<any[]>(GetMedicosFree());

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
    setClinica([])

    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role == 'admin' ? isAdmin = true : isAdmin = false
    }
    if (!isAdmin) {
      const clinicas = GetClinicaFree()
      setListaClinicas(clinicas);

    } else {
      getClinicaAdmin()
        .then(clinicas => {
          setListaClinicas(clinicas);
        })
        .catch(error => {
          console.error('Erro ao obter clínicas:', error);
        });
    }
    const clinicas = GetClinicaFree()
    setListaClinicas(clinicas);
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
    const MAX_FILE_SIZE = 5120 // 5MB
    const file = e.target.files![0];
    const reader = new FileReader();
    if (file) {
      const fileSizeKiloBytes = file.size / 1024
      if (fileSizeKiloBytes > MAX_FILE_SIZE) {
        setErrorMsg("Imagem acima do tamanho permitido");
        return
      }

      reader.onload = (event) => {
        const result = event.target?.result;
        if (typeof result === "string") {
          setErrorMsg(false)
          setDefaultUserImage(result);
        }
      };
      reader.readAsDataURL(file);
    }

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
            <Link href="#/Splash" _hover={{ textDecoration: "underline" }}>
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

  const AddMedico = async () => {
    const userString = Cookies.get('USGImage_user')
    const user = JSON.parse(userString)
    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role == 'admin' ? isAdmin = true : isAdmin = false
    }
    if (!isAdmin) {
      const TodosMedicosString = localStorage.getItem("medicos")
      const TodosMedicos = TodosMedicosString ? JSON.parse(TodosMedicosString) : []
      let idProv = TodosMedicos.length + 1
      TodosMedicos.map((medico) => {
        if (idProv === medico.id) {
          console.log(medico)
          console.log(idProv)
          idProv = idProv + 1
        }
      })
      const obj = {
        id: idProv,
        userID: user.id,
        nome: nome,
        CRMUF: crm,
        assinatura:
          padRef.current?.getTrimmedCanvas().toDataURL("image/png") != null
            ? padRef.current?.getTrimmedCanvas().toDataURL("image/png")
            : pngAssinatura!,
        foto: defaultUserImage,
        clinicas: clinicas,
        laudos: [{}],
      };
      TodosMedicos.push(obj);

      TodosMedicos.map((e) => {
        if (e.nome == "NOME") {
          TodosMedicos.shift();
        }
      });

      localStorage.setItem("medicos", JSON.stringify(TodosMedicos));
      props.setAtualizar(!props.atualizar);
      setMedicos(TodosMedicos);

      let isAdmin;
      const roleString = Cookies.get('USGImage_role');
      if (roleString) {
        const role = JSON.parse(roleString);
        role == 'admin' ? isAdmin = true : isAdmin = false
      }
      const MedicosUser: any = []
      TodosMedicos.map((medico) => {
        if (medico.userID === user.id) {
          MedicosUser.push(medico)
        }
      })
      if (!isAdmin && MedicosUser.length >= 2) {
        setLimiteMedicos(true)
      }
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
      try {
        const idClinicas: any = []
        let clinicaParse
        clinicas.map((clinica) => {
          clinicaParse = JSON.parse(clinica)
          idClinicas.push(clinicaParse.id)
        })

        const obj = {

          id: user.id,
          nome: nome,
          CRMUF: crm,
          assinatura:
            padRef.current?.getTrimmedCanvas().toDataURL("image/png") != null
              ? padRef.current?.getTrimmedCanvas().toDataURL("image/png")
              : pngAssinatura!,
          foto: defaultUserImage,
          clinica_id: idClinicas,
          laudos: [{}],
        };
        const response = await api.post(`/medico/${user.id}`, obj)
        if (response.status === 201) {
          toast({
            duration: 3000,
            title: `Clínica cadastrado com sucesso!`,
            position: "bottom",
            isClosable: true,
          });
          ResetDados();
          props.setAtualizar(!props.atualizar);
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
            title: `Preencha todos os campos corretamente para cadastrar.`,
            status: "error",
            position: "bottom",
            isClosable: true,
          });
        }


      } catch (error) {
        console.log('error', error)
      }
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
  }

  useEffect(() => {
    CheckClinicasGratuito()
  }, [])


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
          <ModalContent m='1vw'>
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

            <ModalBody >
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
                  margin="5px"
                  onClick={openFiles}
                />
              </Center>
              <Center>
                <HStack h='15px' gap='5px'>
                  <Text color={'#808080'} as={'sub'} fontWeight={'bold'}>Tam. Máx.: 5mb</Text>
                  <Text color={'#FF7F50'} as={'sub'} fontWeight={'bold'}>{errorMsg}</Text>
                </HStack>
              </Center>
              <Center margin="5px">
                <Flex direction="row" justify="center" flexWrap="wrap" gap="5px">
                  {clinicas.map((clinica, key) => {
                    const clinicaParse = JSON.parse(clinica);
                    return (
                      <Tooltip
                        key={key}
                        label={clinicaParse.nome}
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
                          <TagLabel key={key}>{clinicaParse.nome}</TagLabel>
                          <TagCloseButton
                            onClick={(e) => {
                              // removeItemTag(key)
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
              {/* <TAGS /> */}
              <Center>
                <HStack>
                  <Text marginEnd="5px" fontWeight="bold">
                    Clínicas:
                  </Text>
                  <Select
                    variant="filled"
                    textAlign="center"
                    onChange={(e) => {
                      setClinica((prevClin) => [...prevClin, e.target.value]);
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
                          {e.nome}
                        </option>
                      );
                    })}
                  </Select>
                </HStack>
              </Center>

              <Center paddingTop={"10px"}>
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
              marginTop={'-5px'}
              fontSize="19px"
              fontWeight="semibold"
              marginBottom="-20px"
            >
              Assinatura:
            </Text>
            <ModalFooter>
              <>
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
                        height: 120,
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
                {/* {pngAssinatura == null || pngAssinatura == undefined ? (
                  <Box
                    w="100%"
                    h="100%"

                    boxShadow="md"
                    borderRadius={"md"}
                    onClick={() => setpropsBoxAssinatura(true)}
                  >
                    <Center gap='15px'>
                      <Button>Desenhar</Button>
                      <Button>Upload</Button>
                    </Center>
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
                )} */}
              </>
            </ModalFooter>


            <Button
              alignSelf="center"
              width="400px"
              textColor="white"
              backgroundColor="#0e63fe"
              margin="5px"
              onClick={() => {
                if (nome !== "" && crm !== "" && clinicas.length >= 1) {
                  AddMedico();

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
