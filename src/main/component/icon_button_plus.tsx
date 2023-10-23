/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Button,
  Center,
  Container,
  Divider,
  Grid,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  Tooltip,
  useDisclosure,
  useOutsideClick,
  useToast
} from "@chakra-ui/react";
import axios from "axios";
import Cookies from 'js-cookie';
import React, { useEffect, useRef, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiCamera } from "react-icons/bi";
import infoClinicas from "../../Data/Clinicas.json";
import PlusButton from "../images/button_plus.png";
import DefaultImageClinica from "../images/clinica_default.png";
import GetClinicaFree from "../Helpers/UserFree/GetClinicasFree";
import api from "../../api";

const button = React.createElement("img", { src: PlusButton });

let dados;
export let minhasClinicas = infoClinicas.clinicas;

const IconButtonPlus = (props) => {
  // useEffect(() => {
  //   const clinicas = GetClinicaFree()
  //   minhasClinicas.push(clinicas)
  // }, [])

  const toast = useToast();
  const [errorMsg, setErrorMsg] = useState<any>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [nome, setClinica] = useState("");

  const [endereco, setEndereco] = useState("");

  const [CEP, setCep] = useState("");
  const [NumeroEndereco, setNumeroEndereco] = useState("");

  const [telefone, setTelefone] = useState("");
  const [CNPJ, setCNPJ] = useState("");

  const [placeHolderAddClinica, setplaceHolderAddClinica] = useState("Insira o nome da Clínica");

  const [selectedFile, setSelectedFile] = useState();

  const [defaultUserImage, setDefaultUserImage] = useState(DefaultImageClinica);

  const inputFile = useRef<HTMLInputElement | null>(null);

  const [InputNomeClinica, setInputNomeClinica] = useState(false);

  const [InputTelefone, setInputTelefone] = useState(false);
  const [InputCNPJ, setInputCNPJ] = useState(false);

  const [InputCEP, setInputCEP] = useState(false);
  const [DisableButton, setDisableButton] = useState(true);

  const refCNPJ = useRef<HTMLInputElement | null>(null);
  const refTelefone = useRef<HTMLInputElement | null>(null);

  const refCEP = useRef<HTMLInputElement | null>(null);

  const refNomeClinica = useRef<HTMLInputElement | null>(null);


  useEffect(() => {
    if (CEP !== '' && NumeroEndereco !== '') {
      setDisableButton(false)
    } else {
      setDisableButton(true)
    }
  }, [NumeroEndereco, CEP])


  const AddClinica = async () => {

    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role == 'admin' ? isAdmin = true : isAdmin = false
    }
    const userString = Cookies.get('USGImage_user')
    const user = JSON.parse(userString)
    if (!isAdmin) {
      const TodasClinicasString = localStorage.getItem("minhasClinicas")
      const TodasClinicas = TodasClinicasString ? JSON.parse(TodasClinicasString) : []
      const id = TodasClinicas.length + 1
      const obj = {
        id: id,
        userID: user.id,
        nome: nome,
        endereco: endereco,
        CEP: CEP,
        NumeroEndereco: NumeroEndereco,
        foto: defaultUserImage,
        telefone: telefone,
      };
      TodasClinicas.push(obj);
      TodasClinicas.map((e) => {
        if (e.nome == "clinica") {
          minhasClinicas.shift();
        }
      });
      localStorage.setItem("minhasClinicas", JSON.stringify(TodasClinicas));
      props.setAtualizar(!props.atualizar);

      const clinicasUser: any = []
      TodasClinicas.map((clinica) => {
        if (clinica.userID === user.id) {
          clinicasUser.push(clinica)
        }
      })
      if (!isAdmin && clinicasUser.length >= 2) {
        setLimiteClinicas(true)
      }
    } else {
      try {
        const obj = {
          userID: user.id,
          CNPJ: CNPJ,
          nome: nome,
          endereco: endereco,
          CEP: CEP,
          NumeroEndereco: NumeroEndereco,
          foto: defaultUserImage,
          telefone: telefone,
        };

        const response = await api.post(`/clinica/${user.id}`, obj)
        if (response.status === 201) {
          toast({
            duration: 3000,
            title: `Clínica cadastrado com sucesso!`,
            position: "bottom",
            isClosable: true,
          });
          ResetDados();
          props.setAtualizar(!props.atualizar);

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


    onClose();
  };

  const openFiles = () => {
    inputFile.current?.click();
  };

  const onChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
          setDefaultUserImage(result);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const ResetDados = () => {
    setClinica("");
    setEndereco("");
    setDefaultUserImage(DefaultImageClinica);
  };

  useOutsideClick({
    ref: refTelefone,
    handler: () => setInputTelefone(false),
  });

  useOutsideClick({
    ref: refCEP,
    handler: () => setInputCEP(false),
  });

  useOutsideClick({
    ref: refNomeClinica,
    handler: () => {
      setInputNomeClinica(false);
      if (nome.length != 0) {
        setplaceHolderAddClinica(nome);
      } else {
        setplaceHolderAddClinica("Insira o nome da Clínica");
      }
    },
  });

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
  const handleCnpj = (event) => {
    const input = event.target;
    input.value = cnpjMask(input.value);
  };

  const cnpjMask = (value) => {
    if (!value) return "";
    // Remove qualquer caractere não numérico
    value = value.replace(/\D/g, "");
    // Adicione a máscara: 00.000.000/0000-00
    if (value.length <= 2) {
      value = value.replace(/^(\d{0,2})/, "$1");
    } else if (value.length <= 5) {
      value = value.replace(/^(\d{2})(\d{0,3})/, "$1.$2");
    } else if (value.length <= 8) {
      value = value.replace(/^(\d{2})(\d{3})(\d{0,3})/, "$1.$2.$3");
    } else if (value.length <= 12) {
      value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{0,4})/, "$1.$2.$3/$4");
    } else {
      value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/, "$1.$2.$3/$4-$5");
    }

    return value;
  };


  const handleCep = (event) => {
    const input = event.target;
    input.value = cepMask(input.value);
  };

  const cepMask = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    value = value.replace(/(-\d{3})\d+?$/, "$1");
    return value;
  };

  useEffect(() => {
    const clinicas = GetClinicaFree()
    if (clinicas) {
      minhasClinicas = clinicas
    } else {
      minhasClinicas = []
    }

  }, []);

  const buscarEndereco = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${CEP}/json/`);
      const data = response.data;
      const enderecoCompleto = `${data.logradouro}, ${NumeroEndereco} - ${data.bairro}, ${data.localidade} - ${data.uf}, ${data.cep}`

      setEndereco(enderecoCompleto);
    } catch (error) {
      console.log(error);
      setEndereco('Endereço não encontrado.');
    }
  };

  const [LimiteClinicas, setLimiteClinicas] = useState<boolean>(false)

  const CheckClinicasGratuito = () => {
    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role == 'admin' ? isAdmin = true : isAdmin = false
    }
    if (!isAdmin && minhasClinicas.length >= 2) {
      setLimiteClinicas(true)
    }
  }

  useEffect(() => {
    CheckClinicasGratuito()
  }, [])

  return (
    <>
      <Tooltip
        label={!LimiteClinicas ? "Adicionar Clínica" : "Limite de clinicas do plano gratuito atingido"}
        backgroundColor="white"
        placement="top"
        defaultIsOpen={false}
        hasArrow
        arrowSize={15}
        textColor="black"
        fontSize="20px"
        borderRadius={8}
        textAlign={'center'}
      >
        <Button
          isDisabled={LimiteClinicas}
          borderRadius="xl"
          backgroundColor="white"
          w="10rem"
          h="2.4rem"
          top={1}
          boxShadow="md"
          textColor="#4CBFF0"
          fontSize="19px"
          fontWeight="semibold"
          onClick={onOpen}
        >
          <Icon as={AiOutlinePlusCircle} w="30px" h="30px" />
          Adicionar
        </Button>
      </Tooltip>

      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent m='2vw'>
            <ModalHeader></ModalHeader>
            <Divider orientation="horizontal" marginTop="10px" />
            <ModalCloseButton
              onClick={() => {
                ResetDados();
              }}
            />

            {InputNomeClinica ? (
              <Input
                ref={refNomeClinica}
                w="435px"
                margin="5px"
                textAlign="center"
                fontSize="20px"
                placeholder={placeHolderAddClinica}
                _placeholder={{ fontWeight: "bold", color: "black" }}
                fontWeight="bold"
                onChange={(e) => setClinica(e.target.value)}
                variant={"filled"}
              ></Input>
            ) : (
              <Input
                ref={refNomeClinica}
                w="435px"
                margin="5px"
                textAlign="center"
                fontSize="20px"
                placeholder={placeHolderAddClinica}
                fontWeight="bold"
                _placeholder={{ fontWeight: "bold", color: "#b8bfca", opacity: 0.7 }}
                onChange={(e) => setClinica(e.target.value)}
                variant={"unstyled"}
                onClick={() => {
                  setInputNomeClinica(true);
                  setplaceHolderAddClinica("Insira o nome da Clínica");
                }}
              ></Input>
            )}

            <Divider orientation="horizontal" />

            <Container centerContent h="100%" w="100%" marginTop="5px">
              <ModalBody>
                <Center>
                  <Image
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
                    margin="5px"
                    color="#4658fc"
                    onClick={openFiles}
                  />
                </Center>
                <Center>
                  <HStack h='15px' gap='5px'>
                    <Text color={'#808080'} as={'sub'} fontWeight={'bold'}>Tam. Máx.: 5mb</Text>
                    <Text color={'#FF7F50'} as={'sub'} fontWeight={'bold'}>{errorMsg}</Text>
                  </HStack>
                </Center>
                <Center>
                  <Grid templateColumns="repeat(1, 1fr)" justifyItems="center">
                    <Center paddingTop={"5px"}>
                      <InputGroup variant={"unstyled"} width={"220px"}>
                        <InputLeftAddon
                          children="CNPJ:"
                          paddingEnd={"5px"}
                          fontWeight={"bold"}
                        />

                        {InputCNPJ ? (
                          <Input
                            p='0'
                            ref={refCNPJ}
                            placeholder="00.000.000/0000-00"
                            textAlign={"center"}
                            maxLength={18}
                            onChange={(e) => {
                              handleCnpj(e);
                              setCNPJ(e.target.value);
                            }}
                            variant="filled"
                            borderStartRadius={"md"}
                            borderEndRadius={"md"}

                            onClick={() => { }}
                          />
                        ) : (
                          <Input
                            p='0'
                            ref={refCNPJ}
                            placeholder="00.000.000/0000-00"
                            textAlign={"center"}
                            maxLength={18}
                            onChange={(e) => {
                              handleCnpj(e);
                              setCNPJ(e.target.value);
                            }}
                            variant={"unstyled"}
                            onClick={() => {
                              setInputCNPJ(true);
                            }}
                          />
                        )}
                      </InputGroup>
                    </Center>
                    <Center paddingTop={"5px"}>
                      <InputGroup variant={"unstyled"} width={"200px"}>
                        <InputLeftAddon
                          children="TEL:"
                          paddingEnd={"5px"}
                          fontWeight={"bold"}
                        />

                        {InputTelefone ? (
                          <Input
                            ref={refTelefone}
                            placeholder="(11) 0000-0000"
                            textAlign={"center"}
                            maxLength={15}
                            onChange={(e) => {
                              handlePhone(e);
                              setTelefone(e.target.value);
                            }}
                            variant="filled"
                            borderStartRadius={"md"}
                            borderEndRadius={"md"}

                            onClick={() => { }}
                          />
                        ) : (
                          <Input
                            ref={refTelefone}
                            placeholder="(11) 0000-0000"
                            textAlign={"center"}
                            maxLength={15}
                            onChange={(e) => {
                              handlePhone(e);
                              setTelefone(e.target.value);
                            }}
                            variant={"unstyled"}
                            onClick={() => {
                              setInputTelefone(true);
                            }}
                          />
                        )}
                      </InputGroup>
                    </Center>

                    <Center paddingTop={"5px"}>
                      <InputGroup variant={"unstyled"} width={"200px"}>
                        <InputLeftAddon
                          children="  CEP:"
                          paddingEnd={"5px"}
                          marginEnd={"5px"}
                          fontWeight={"bold"}
                        />

                        {InputCEP ? (
                          <InputGroup>
                            <Input
                              ref={refCEP}
                              placeholder="13000-000"
                              textAlign="center"
                              onChange={(e) => {
                                handleCep(e);
                                setCep(e.target.value);
                              }}
                              variant="filled"
                              borderRadius="md"// Remove o raio de borda na extremidade direita
                            />
                          </InputGroup>
                        ) : (
                          <InputGroup>
                            <Input
                              ref={refCEP}
                              placeholder="13000-000"
                              textAlign={"center"}
                              onChange={(e) => {
                                handleCep(e);
                                setCep(e.target.value);
                              }}
                              variant={"unstyled"}
                              onClick={() => {
                                setInputCEP(true);
                              }}
                            />
                          </InputGroup>
                        )}
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

                        {NumeroEndereco ? (
                          <InputGroup>
                            <Input
                              placeholder="Nº"
                              textAlign="center"
                              onChange={(e) => {
                                setNumeroEndereco(e.target.value);
                              }}
                              borderRadius="md"
                            />
                          </InputGroup>
                        ) : (
                          <InputGroup>
                            <Input
                              placeholder="Nº"
                              textAlign={"center"}
                              onChange={(e) => {
                                setNumeroEndereco(e.target.value);
                              }}

                            />
                          </InputGroup>
                        )}
                      </InputGroup>
                      <Button isDisabled={DisableButton} ml='5px' size="sm" backgroundColor={'#3d82ff'} color='white' onClick={buscarEndereco}>
                        Buscar
                      </Button>
                    </Center>
                  </Grid>
                </Center>
              </ModalBody>
            </Container>

            <ModalFooter>
              <Textarea
                placeholder="Endereço"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </ModalFooter>
            <Button
              textColor="white"
              backgroundColor="#0e63fe"
              marginEnd="20px"
              marginStart="23px"
              marginBottom="10px"
              onClick={() => {
                if (nome !== "" && telefone !== "" && CNPJ !== "") {
                  AddClinica();
                  ResetDados();

                } else {
                  toast({
                    duration: 3000,
                    title: `Preencha Nome e Telefone para cadastrar.`,
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
        <form></form>
      </>
    </>
  );
};

export default IconButtonPlus;
