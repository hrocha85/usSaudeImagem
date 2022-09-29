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
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { BiCamera } from "react-icons/bi";
import infoClinicas from "../../Data/Clinicas.json";
import PlusButton from "../images/button_plus.png";
import DefaultImageClinica from "../images/clinica_default.png";

const button = React.createElement("img", { src: PlusButton });

export const minhasClinicas = infoClinicas.clinicas;

const IconButtonPlus = (props) => {
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
      enderecoRuaNumero: endereco,
      cidade: "santos",
      uf: "sp",
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

  const onChangeFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    var file = event.target.files[0];
    setSelectedFile(file);
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

  useEffect(() => {
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      setDefaultUserImage(objectURL);
      return () => URL.revokeObjectURL(objectURL);
    }
  }, [selectedFile]);

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
      >
        <IconButton
          aria-label="sdfs"
          icon={button}
          variant="link"
          h="22"
          w="22"
          size="xs"
          textColor="blue"
          onClick={onOpen}
        />
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
                    borderRadius="full"
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
                      <InputGroup variant={"unstyled"} width={"160px"}>
                        <InputLeftAddon
                          children="TEL:"
                          paddingEnd={"px"}
                          fontWeight={"bold"}
                        />

                        {InputTelefone ? (
                          <Input
                            ref={refTelefone}
                            placeholder="(11) 0000-0000"
                            textAlign={"center"}
                            onChange={(e) => setTelefone(e.target.value)}
                            variant="flushed"
                            onClick={() => {}}
                          />
                        ) : (
                          <Input
                            ref={refTelefone}
                            placeholder="(11) 0000-0000"
                            textAlign={"center"}
                            onChange={(e) => setTelefone(e.target.value)}
                            variant={"unstyled"}
                            onClick={() => {
                              setInputTelefone(true);
                            }}
                          />
                        )}
                      </InputGroup>
                    </Center>

                    <Center paddingTop={"5px"}>
                      <InputGroup variant={"unstyled"} width={"165px"}>
                        <InputLeftAddon
                          children="CEP:"
                          paddingEnd={"5px"}
                          fontWeight={"bold"}
                        />

                        {InputCEP ? (
                          <Input
                            ref={refCEP}
                            placeholder="13000-000"
                            textAlign={"center"}
                            onChange={(e) => setCep(e.target.value)}
                            variant="flushed"
                            onClick={() => {}}
                          />
                        ) : (
                          <Input
                            ref={refCEP}
                            placeholder="13000-000"
                            textAlign={"center"}
                            onChange={(e) => setCep(e.target.value)}
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
                AddClinica();
                ResetDados();
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
