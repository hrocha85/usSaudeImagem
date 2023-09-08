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
  useMediaQuery,
  useOutsideClick,
  useToast
} from "@chakra-ui/react";
import Cookies from 'js-cookie';
import React, { memo, useEffect, useRef, useState } from "react";
import {
  AiOutlineClear,
  AiOutlineCloudUpload
} from "react-icons/ai";
import { BiCamera } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa";
import { VscFilePdf } from "react-icons/vsc";
import SignatureCanvas from "react-signature-canvas";
import MedicosJSON from "../../Data/Medicos.json";
import RectangularCard from "../component/card_observations";
import ItemObservation from "../component/item_obeservation";
import MainCard from "../component/main_card";
import MainCardClinica from "../component/main_cardClinica";
import DefaultImageClinica from "../images/clinica_default.png";
import Sidebar from "../menu/sideBar";
import GetMedicosFree from "../Helpers/UserFree/GetMedicos";
import GetClinicaFree from "../Helpers/UserFree/GetClinicas";


let dados;
export const lista_medicos = MedicosJSON.medicos;

const Configuracoes = () => {


  const CheckRoleUser = () => {
    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role == 'admin' ? isAdmin = true : isAdmin = false
    }
    if (!isAdmin) {
      console.log('Não admin')
      console.log('medicos', GetMedicosFree())
    } else {
      console.log('É admin')
    }
  }

  useEffect(() => {
    CheckRoleUser()
  }, [])


  const toast = useToast();

  const getMedicos = () => {
    let medicos;
    let item;
    if (localStorage.getItem("medicos") != null) {
      item = localStorage.getItem("medicos");

      medicos = JSON.parse(item);
    } else medicos = [];
    return medicos;
  };

  const getUser = () => {
    let user;
    if (localStorage.getItem("user") != null) {
      user = JSON.parse(localStorage.getItem("user")!);
    }

    if (user != null) return user.isLogged;
  };

  const [userLogged, setuserLogged] = useState(getUser());

  const padRef = React.useRef<SignatureCanvas>(null);

  const {
    isOpen: isOpenModalAddMedico,
    onOpen: onOpenModalAddMedico,
    onClose: onCloseModalAddMedico,
  } = useDisclosure();

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

  const [placeHolderAddDoutor, setplaceHolderDoutor] = useState("Nome");

  const [imageAssinatura, setImageAssinatura] = useState(true);

  const refNomeDoutor = useRef<HTMLInputElement | null>(null);



  useEffect(() => {
    setMedicos(GetMedicosFree());
  }, [localStorage.getItem("medicos")!]);

  const [LimiteMedicos, setLimiteMedicos] = useState<boolean>(false)
  const AddMedico = () => {
    const TodosMedicosString = localStorage.getItem("medicos")
    const TodosMedicos = TodosMedicosString ? JSON.parse(TodosMedicosString) : []
    const id = TodosMedicos.length + 1
    const userString = Cookies.get('USGImage_user')
    const user = JSON.parse(userString)
    const obj = {
      id: id,
      userID: user.id,
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
    TodosMedicos.push(obj);

    TodosMedicos.map((e) => {
      if (e.nome == "NOME") {
        TodosMedicos.shift();
      }
    });

    localStorage.setItem("medicos", JSON.stringify(TodosMedicos));
    setMedicos(TodosMedicos);
    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role == 'admin' ? isAdmin = true : isAdmin = false
    }
    const MedicosUser: any = []
    TodosMedicos.map((clinica) => {
      if (clinica.userID === user.id) {
        MedicosUser.push(clinica)
      }
    })
    if (!isAdmin && MedicosUser.length >= 2) {
      setLimiteMedicos(true)
    }

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
      const medico = JSON.parse(localStorage.getItem("user")!);
      return medico.medico;
    } else return null;
  };

  const listaLaudosVazia = () => {
    return (
      <Center>
        <List size="20px">
          <ListItem fontSize="17px" textAlign="center" fontWeight="semibold">
            Nenhum laudo encontrado
          </ListItem>
          <Divider orientation="horizontal" marginBottom="10px" />
        </List>
      </Center>
    );
  };

  const Laudos = () => {
    return (
      <>
        {getUserMedico() != null
          ? getMedicos().map((medi) => {
            if (medi.nome == getUserMedico().nome) {
              return medi.laudos.map((laudos, key) => {
                if (
                  laudos.laudo != null &&
                  laudos.laudo != "" &&
                  laudos != undefined
                ) {
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
                        <Divider
                          orientation="horizontal"
                          marginBottom="10px"
                        />
                      </List>
                    </Center>
                  );
                } else {
                  return (
                    <Center>
                      <List size="20px">
                        <ListItem
                          fontSize="17px"
                          textAlign="center"
                          fontWeight="semibold"
                        >
                          Nenhum laudo encontrado
                        </ListItem>
                        <Divider
                          orientation="horizontal"
                          marginBottom="10px"
                        />
                      </List>
                    </Center>
                  );
                }
              });
            }
          })
          : listaLaudosVazia()}
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

  const authParaLogar = () => {
    if (!userLogged && lista_medicos.length > 0 && clinicas.length > 0) {
      const loginCriado = toast({
        duration: 3000,
        title: `Retorne para Página inicial para logar.`,
        status: "success",
        position: "bottom",
        isClosable: true,
      });
      return loginCriado;
    }
  };

  const returnObservacoes = () => {
    return userLogged ? (
      <Stack display={'flex'} flexDirection="row" justifyContent="center" w={'99%'}>
        <RectangularCard
          titulo="Observações"
          item={<ItemObservation />}
        />
      </Stack>
    ) : null;
  };

  const add_png_assinatura = () => {
    openFilesAssinatura();
  };

  const [isLargerThan500] = useMediaQuery('(min-width: 500px)')
  const width = "100%"

  const ModalAddMedico = () => {
    return (
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
                  variant="filled"
                  textAlign="center"
                  onChange={(e) => {
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
    );
  };

  const returnPOPoverLaudos = () => {
    return (
      <Popover>
        <PopoverTrigger>
          <Button
            borderRadius="xl"
            backgroundColor="white"
            w="42"
            h="42"
            boxShadow="md"
            fontSize="20px"
            mt={5}
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
    );
  };

  const checkMedicosLocalStorage = () => {
    GetMedicosFree()
    // if (localStorage.getItem("medicos") != null) {
    //   dados = localStorage.getItem("medicos");

    //   lista_medicos = JSON.parse(dados);
    // } else lista_medicos = [];
  };

  useEffect(() => {
    // let item;
    // let item_parse;
    // if (localStorage.getItem("minhasClinicas") != null) {
    //   item = localStorage.getItem("minhasClinicas");
    //   item_parse = JSON.parse(item);
    //   setListaClinicas(item_parse);
    // }
    setListaClinicas(GetClinicaFree());
  }, [stateClickAddMedico]);

  useEffect(() => {
    setMedicos(getMedicos);
    Laudos();
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

  useEffect(() => {
    checkMedicosLocalStorage();
  }, []);



  return (
    <>
      <Box
        w="100%"
        h={'100%'}
        bgGradient='linear(to-b, blue.100, #fff)'
        // paddingBottom="10px"
        alignItems="center"
      >
        <Sidebar />
        <Stack>
          <Box display={'flex'} flexWrap={'wrap'} gap={5} justifyContent={'space-around'}>

            {isLargerThan500 ?
              <Box w={'100%'} display={'flex'} justifyContent={'flex-end'} pr={'3rem'}>{returnPOPoverLaudos()}</Box>
              :
              <Box width={width}>{returnPOPoverLaudos()}</Box>
            }
            <Box>
              <MainCardClinica titulo="Clínicas" icon={true} clinica={null} medicos={null} />
            </Box>


            <Box pl={3}>
              <MainCard titulo="Médicos" icon={true} clinica={listaClinicas} medicos={null} />
            </Box>

          </Box>

          {returnObservacoes()}
        </Stack>
        {ModalAddMedico()}
        {/* {returnObservacoes()} */}

      </Box>
      {/* <Box bottom={0}><FooterUpbase /></Box> */}
    </>
  );
};

export default memo(Configuracoes);
