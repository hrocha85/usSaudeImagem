import {
  Button,
  Center,
  Container,
  Divider,
  Grid,
  Icon,
  IconButton,
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
  Textarea,
  Tooltip,
  useDisclosure,
  useOutsideClick,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { BiCamera } from "react-icons/bi";
import infoClinicas from "../../Data/Clinicas.json";
import PlusButton from "../images/button_plus.png";
import DefaultImageClinica from "../images/clinica_default.png";
import { AiOutlineClear, AiOutlinePlusCircle } from "react-icons/ai";

const button = React.createElement("img", { src: PlusButton });

var dados;
export let minhasClinicas = infoClinicas.clinicas;

if (localStorage.getItem("minhasClinicas") != null) {
  dados = localStorage.getItem("minhasClinicas");

  minhasClinicas = JSON.parse(dados);
} else minhasClinicas = [];

const IconButtonPlus = (props) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [nome, setClinica] = useState("");

  const [endereco, setEndereco] = useState("");

  const [cep, setCep] = useState("");

  const [telefone, setTelefone] = useState("");

  const [placeHolderAddClinica, setplaceHolderAddClinica] = useState("Nome");

  const [selectedFile, setSelectedFile] = useState();

  const [defaultUserImage, setDefaultUserImage] = useState(DefaultImageClinica);

  const inputFile = useRef<HTMLInputElement | null>(null);

  const [InputNomeClinica, setInputNomeClinica] = useState(false);

  const [InputTelefone, setInputTelefone] = useState(false);

  const [InputCEP, setInputCEP] = useState(false);

  const refTelefone = useRef<HTMLInputElement | null>(null);

  const refCEP = useRef<HTMLInputElement | null>(null);

  const refNomeClinica = useRef<HTMLInputElement | null>(null);

  const AddClinica = () => {
    const obj = {
      nomeClinica: nome,
      endereco: endereco,
      cep: cep,
      foto: defaultUserImage,
      teleFone: telefone,
    };
    minhasClinicas.push(obj);
    minhasClinicas.map((e) => {
      if (e.nomeClinica == "clinica") {
        minhasClinicas.shift();
      }
    });
    localStorage.setItem("minhasClinicas", JSON.stringify(minhasClinicas));
    props.setAtualizar(!props.atualizar);
    onClose();
  };

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
      }
    };

    reader.readAsDataURL(file);
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
        setplaceHolderAddClinica("Nome");
      }
    },
  });

 

  const handlePhone = (event) => {
    let input = event.target;
    input.value = phoneMask(input.value);
  };

  const phoneMask = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

  const handleCep = (event) => {
    let input = event.target;
    input.value = cepMask(input.value);
  };

  const cepMask = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    value = value.replace(/(-\d{3})\d+?$/, "$1");
    return value;
  };

  return (
    <>
      <Tooltip
        label="Adicionar Clínica"
        backgroundColor="white"
        placement="top"
        defaultIsOpen={false}
        hasArrow
        arrowSize={15}
        textColor="black"
        fontSize="20px"
      >
        <Button
          borderRadius="xl"
          boxShadow="md"
          textColor="#4CBFF0"
          fontSize="19px"
          fontWeight="semibold"
          onClick={onOpen}
          variant="ghost"
        >
          <Icon as={AiOutlinePlusCircle} w="30px" h="30px" />
        </Button>
      </Tooltip>

      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
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
                _placeholder={{ fontWeight: "bold", color: "black" }}
                onChange={(e) => setClinica(e.target.value)}
                variant={"unstyled"}
                onClick={() => {
                  setInputNomeClinica(true);
                  setplaceHolderAddClinica("");
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

                        {InputTelefone ? (
                          <Input
                            ref={refTelefone}
                            placeholder="(11) 0000-0000"
                            textAlign={"center"}
                            onChange={(e) => {
                              handlePhone(e);
                              setTelefone(e.target.value);
                            }}
                            variant="filled"
                            borderStartRadius={"md"}
                            borderEndRadius={"md"}
                            maxLength={15}
                            onClick={() => {}}
                          />
                        ) : (
                          <Input
                            ref={refTelefone}
                            placeholder="(11) 0000-0000"
                            textAlign={"center"}
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
                      <InputGroup variant={"unstyled"} width={"210px"}>
                        <InputLeftAddon
                          children="CEP:"
                          paddingEnd={"5px"}
                          marginEnd={"5px"}
                          fontWeight={"bold"}
                        />

                        {InputCEP ? (
                          <Input
                            ref={refCEP}
                            placeholder="13000-000"
                            textAlign={"center"}
                            onChange={(e) => {
                              handleCep(e);
                              setCep(e.target.value);
                            }}
                            variant="filled"
                            borderStartRadius={"md"}
                            borderEndRadius={"md"}
                            maxLength={9}
                            onClick={() => {}}
                          />
                        ) : (
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
                        )}
                      </InputGroup>
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
                if (nome !== "" && telefone !== "") {
                  AddClinica();
                  ResetDados();
                  toast({
                    duration: 3000,
                    title: `Clínica cadastrado com sucesso!`,
                    position: "bottom",
                    isClosable: true,
                  });
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
