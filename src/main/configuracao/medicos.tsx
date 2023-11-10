/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
import {
  AiOutlineClear,
  AiOutlineEdit,
  AiOutlineCloudUpload,
} from "react-icons/ai";
import { BiCamera } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { FaRegEdit, FaRegFolderOpen } from "react-icons/fa";
import SignatureCanvas from "react-signature-canvas";
import FieldDefaultIcon from "../component/field_default_icon";
import { lista_medicos } from "./configuracoes";
import Cookies from 'js-cookie';
import api from "../../api";
import GetClinicaFree from "../Helpers/UserFree/GetClinicasFree";
import getClinicaAdmin from "../Helpers/UserAdmin/GetClinicasAdmin";
const Medicos = ({ medico, id }) => {
  const medicos: any[] = [];
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

  const [crm, setCRM] = useState(medico.CRMUF);

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

  const [defaultUserImage, setDefaultUserImage] = useState(medico.foto);

  const inputFile = useRef<HTMLInputElement | null>(null);

  const [pngAssinatura, setpngAssinatura] = useState<string | null>();

  const [pngAssinaturaCheck, setpngAssinaturaCheck] = useState(false);

  const padRef = React.useRef<SignatureCanvas>(null);

  const [listaClinicas, setListaClinicas] = useState<any[]>([]);

  const [ClinicasMedico, setClinicaMedico] = useState<any[]>([]);
  const [errorMsg, setErrorMsg] = useState<any>(false);

  useEffect(() => {
    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role == 'admin' ? isAdmin = true : isAdmin = false
    }
    if (!isAdmin) {
      const ParseClinicas: any = []
      const clinicas = medico.clinicas
      setListaClinicas(GetClinicaFree())
      clinicas.map((clinica) => {
        ParseClinicas.push(JSON.parse(clinica))
      })
      setClinicaMedico(ParseClinicas)
    } else {
      getClinicaAdmin()
        .then(clinicas => {
          setListaClinicas(clinicas);
        })
        .catch(error => {
          console.error('Erro ao obter clínicas:', error);
        });
      setClinicaMedico(medico.clinicas);
    }

  }, [])
  const openFiles = () => {
    inputFile.current?.click();
  };

  const onChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const MAX_FILE_SIZE = 800 // 5MB
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
          setFotoUpdate(true);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const UpdateMedico = async (updateNome, updateCRM, updateClinica) => {
    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role == 'admin' ? isAdmin = true : isAdmin = false
    }
    if (!isAdmin) {
      UpdateLocalStorage(updateNome, updateCRM, updateClinica);
    } else {
      try {
        const idClinicas: any = []
        ClinicasMedico.map((clinica) => {
          idClinicas.push(clinica.id)
        })
        // const response = await api.put(`/medico/${medico.id}`, {
        //   nome: updateNome ? updateNome : medico.nome,
        //   CRMUF: updateCRM ? updateCRM : medico.CRMUF,
        //        });
        const responseMedicoClinca = await api.put(`/MedicoClinica/${medico.id}`, {

          clinicas_id: idClinicas
        });
        console.log(responseMedicoClinca)
        if (responseMedicoClinca.status === 201 || responseMedicoClinca.status === 204) {
          window.location.reload();
        }
      } catch (erro) {
        console.log(ClinicasMedico)
        console.log(erro)
      }
    }

  }

  const UpdateLocalStorage = (nomeUpdate, CRMupdate, clinicaUpdate) => {
    if (nomeUpdate != null) {
      const array = JSON.parse(localStorage.getItem("medicos")!);
      const item = array.filter((obj) => obj.id === medico.id);
      const itemPosicao = array.indexOf(item[0])
      lista_medicos[0].nome = nomeUpdate;
      item[0].nome = nomeUpdate;
      array.splice(itemPosicao, 1, item[0])
      localStorage.setItem("medicos", JSON.stringify(array));
      setNomeMedico(nomeUpdate);
      setUpdateNome(null);
    }
    if (CRMupdate != null) {
      const array = JSON.parse(localStorage.getItem("medicos")!);
      const item = array.filter((obj) => obj.id === medico.id);
      const itemPosicao = array.indexOf(item[0])
      lista_medicos[0].CRMUF = CRMupdate;
      item[0].CRMUF = CRMupdate;
      array.splice(itemPosicao, 1, item[0])
      localStorage.setItem("medicos", JSON.stringify(array));

      setCRM(CRMupdate);
      setUpdateCRM(null);
    }
    if (clinicaUpdate != null) {
      const array = JSON.parse(localStorage.getItem("medicos")!);
      const item = array.filter((obj) => obj.id === medico.id);
      const itemPosicao = array.indexOf(item[0])
      lista_medicos[0].clinicas = clinicaUpdate;
      item[0].clinicas.push(clinicaUpdate);
      array.splice(itemPosicao, 1, item[0])
      localStorage.setItem("medicos", JSON.stringify(array));

      setClinica(updateClinica);
      setUpdateClinica(null);
    }
    if (AssinaturaUpdate) {
      const array = JSON.parse(localStorage.getItem("medicos")!);
      const item = array.filter((obj) => obj.id === medico.id);
      const itemPosicao = array.indexOf(item[0])
      lista_medicos[0].assinatura = padRef.current
        ?.getTrimmedCanvas()
        .toDataURL("image/png")!;

      item[0].assinatura = padRef.current
        ?.getTrimmedCanvas()
        .toDataURL("image/png")!;
      array.splice(itemPosicao, 1, item[0])
      localStorage.setItem("medicos", JSON.stringify(array));
      setAssinatura(padRef.current?.getTrimmedCanvas().toDataURL("image/png")!);
      setAssinaturaUpdate(false);
    }
    if (FotoUpdate) {
      const array = JSON.parse(localStorage.getItem("medicos")!);
      const item = array.filter((obj) => obj.id === medico.id);
      const itemPosicao = array.indexOf(item[0])
      lista_medicos[0].foto = defaultUserImage;
      item[0].foto = defaultUserImage;
      array.splice(itemPosicao, 1, item[0])
      localStorage.setItem("medicos", JSON.stringify(array));
      setFotoUpdate(false);
    }
    if (pngAssinaturaCheck) {
      const array = JSON.parse(localStorage.getItem("medicos")!);
      const item = array.filter((obj) => obj.id === medico.id);
      const itemPosicao = array.indexOf(item[0])
      lista_medicos[0].assinatura = pngAssinatura!;
      item[0].assinatura = pngAssinatura!;
      array.splice(itemPosicao, 1, item[0])
      localStorage.setItem("medicos", JSON.stringify(array));
      setpngAssinaturaCheck(false);
      setpngAssinatura(null);
      window.location.reload();
    }
    window.dispatchEvent(new Event("update_medicos"));
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

  const RemoveItem = async () => {
    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role == 'admin' ? isAdmin = true : isAdmin = false
    }
    if (!isAdmin) {
      const array = JSON.parse(localStorage.getItem("medicos")!);
      console.log(array)
      console.log(id)
      array.splice(id, 1);
      console.log(array)

      localStorage.setItem("medicos", JSON.stringify(array));
      window.location.reload();
    } else {
      const response = await api.delete(`/medico/${medico.id}`)
      if (response.status === 200) window.location.reload();
    }
    // const array = JSON.parse(localStorage.getItem("medicos")!);
    // array.splice(id, 1);

    // localStorage.setItem("medicos", JSON.stringify(array));
    // window.location.reload();


  };

  const RemoveTAG = () => {
    const array = JSON.parse(localStorage.getItem("medicos")!);
    const item = array[id];
    lista_medicos[id].clinicas = ClinicasMedico;

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
    //setpngAssinatura(null);
    setpngAssinaturaCheck(false);
  };

  const TAGS = () => {
    return (
      <Center margin="25px">
        <Flex direction="row" justify="center" flexWrap="wrap" gap="5px">
          {ClinicasMedico.map((clinica, key) => {
            // const parseClinica = JSON.parse(clinica);
            return (
              <Tooltip
                key={key}
                label={clinica.nome}
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
                  <TagLabel key={key}>{clinica.nome}</TagLabel>
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
      <div style={{ textAlign: 'center', borderRadius: '50rem' }}>
        {ClinicasMedico.map((clinica, key) => {
          // const parseClinica = JSON.parse(clinica);
          // const parseClinica = (clinica);
          return (
            <FieldDefaultIcon
              key={key}
              text={clinica.nome}
              textColor="#4A5568"
              //icon={FaRegFolderOpen}
              clinica={medicos}
              clinicas={null}
              onClickModal={false}
              id={key}
              isMedic={true}
            />
          );
        })}
      </div>
    );
  };

  window.addEventListener("update_clinicas", () => {
    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role == 'admin' ? isAdmin = true : isAdmin = false
    }
    if (!isAdmin) {
      setListaClinicas(GetClinicaFree())
    } else {
      getClinicaAdmin()
        .then(clinicas => {
          setListaClinicas(clinicas);
        })
        .catch(error => {
          console.error('Erro ao obter clínicas:', error);
        });
    }
  });

  useEffect(() => {
    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role == 'admin' ? isAdmin = true : isAdmin = false
    }
    if (!isAdmin) {
      setListaClinicas(GetClinicaFree())
    } else {
      getClinicaAdmin()
        .then(clinicas => {
          setListaClinicas(clinicas);
        })
        .catch(error => {
          console.error('Erro ao obter clínicas:', error);
        });
    }
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
    const input = event.target;
    input.value = CrmMask(input.value);
  };

  const CrmMask = (value) => {
    if (!value) return "";
    value = value.replace(/(\d{8})(\d)/, "$1-$2");
    value = value.replace(/(-\d{1})(\B)/, "$1/$2");
    return value;
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
    setpngAssinaturaCheck(true);
  };

  const add_png_assinatura = () => {
    openFiles();
  };

  return (
    <Box
      justifyContent={'center'}
      bg="#FAFAFA"
      w="19rem"
      h="12rem"
      marginBottom={'0.4rem'}
      color="white"
      borderRadius="10.85px"
      boxShadow="2xl"
      dropShadow="dark-lg"
      display="flex"
      //marginTop={'4rem'}
      alignItems={'center'}
    >
      <HStack margin="10px" direction="row" spacing={4} justify="space-between">
        <Image
          borderRadius="full"
          boxSize="60px"
          src={defaultUserImage}
          alt="Foto médico"
          justifySelf="flex-start"
          marginEnd="10px"
          marginTop="5px"
          marginStart="10px"
        />
        <Stack>
          <Text
            color="#1A202C"
            fontSize="16px"
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

          <Box overflow="auto" maxHeight={'6.4rem'} css={{ '&::-webkit-scrollbar': { width: '0.4em' }, '&::-webkit-scrollbar-thumb': { backgroundColor: 'transparent' } }}>
            <RenderFieldDefault />
          </Box>
          <Tooltip
            isDisabled={closeTooltip}
            label="Opções"
            backgroundColor="white"
            placement="top"
            hasArrow
            arrowSize={15}
            textColor="black"
            fontSize="md"
          >
            <Box>
              <Popover>
                <PopoverTrigger>
                  <Button
                    display="flex"
                    justifySelf="flex-end"
                    onClick={() => setcloseTooltip(true)}
                    size="auto"
                    variant="ghost"
                    color='blue'
                    border='1px'
                    padding={1}
                    _hover={{ bg: "transparent" }}
                  >Visualizar cadastro
                    {/* <IconContext.Provider value={{ color: "#0dc7e2" }}>
                      <Icon
                        onMouseOver={() => setcloseTooltip(false)}
                        margin="5px"
                        as={FaRegEdit}
                        w={4}
                        h={6}
                        marginStart="15px"
                      />
                    </IconContext.Provider> */}
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
        </Stack>
      </HStack>
      {/* <Center>
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
      </Center> */}
      <Box onClick={onOpen}>

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
                <Center>
                  <HStack h='15px' gap='5px'>
                    <Text color={'#808080'} as={'sub'} fontWeight={'bold'}>Tam. Máx.: 800 Kb</Text>
                    <Text color={'#FF7F50'} as={'sub'} fontWeight={'bold'}>{errorMsg}</Text>
                  </HStack>
                </Center>
                <Center margin="25px">
                  <Flex direction="row" justify="center" flexWrap="wrap" gap="5px">
                    {ClinicasMedico.map((clinica, key) => {
                      // console.log('clinca', clinica)
                      // const parseClinica = JSON.parse(clinica);
                      return (
                        <Tooltip
                          key={key}
                          label={clinica.nome}
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
                            <TagLabel key={key}>{clinica.nome}</TagLabel>
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
                              {clinica.nome}
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
                              maxLength={13}
                              ref={refCRM}
                              defaultValue={crm}
                              fontSize="18px"
                              variant={"unstyled"}
                              isDisabled={CRMenable}
                              textAlign={"center"}

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
                  {newAssinaturaEdit && pngAssinaturaCheck == false ? (
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
                      srcSet={
                        pngAssinatura == null ? assinatura : pngAssinatura
                      }
                      alt="Assinatura"
                    />
                  )}

                  <Flex justify="end">
                    <input
                      disabled={newAssinaturaEdit ? false : true}
                      accept="image/png, image/jpeg"
                      type="file"
                      id="file"
                      ref={inputFile}
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
                  srcSet={pngAssinatura == null ? assinatura : pngAssinatura}
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
                console.log('medico', medico)
                UpdateMedico(updateNome, updateCRM, updateClinica);
                // ResetStates();
                // onClose();
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
