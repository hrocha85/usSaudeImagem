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
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  useDisclosure,
  useOutsideClick,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { BiCamera } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi";
import SignatureCanvas from "react-signature-canvas";
import FieldDefaultIcon from "../component/field_default_icon";
import { lista_medicos } from "./configuracoes";

const Medicos = ({ medico, id }) => {
  let medicos: any[] = [];

  medicos.push(medico);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [enable, setEnable] = useState(true);

  const [crm, setCRM] = useState(medico.crm);

  const [CRMenable, setCRMEnable] = useState(true);

  const [updateCRM, setUpdateCRM] = useState<string | null>(null);

  const [InputCRM, setInputCRM] = useState(false);

  const [updateNome, setUpdateNome] = useState<string | null>(null);

  const [nomeMedico, setNomeMedico] = useState(medico.nome);

  const [InputNomeMedico, setInputNomeMedico] = useState(false);

  const [InputAssinatura, setInputAssinatura] = useState(false);

  const [newAssinaturaEdit, setnewAssinaturaEdit] = useState(false);

  const [AssinaturaUpdate, setAssinaturaUpdate] = useState(false);

  const [assinatura, setAssinatura] = useState(medico.assinatura);

  const refNomeMedico = useRef<HTMLInputElement | null>(null);

  const refCRM = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState();
  const [defaultUserImage, setDefaultUserImage] = useState(medico.foto);
  const inputFile = useRef<HTMLInputElement | null>(null);

  const [listaClinicas, setListaClinicas] = useState(
    JSON.parse(localStorage.getItem("minhasClinicas")!)
  );

  let padRef = React.useRef<SignatureCanvas>(null);

  const openFiles = () => {
    inputFile.current?.click();
  };

  const onChangeFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    var file = event.target.files[0];
    setSelectedFile(file);
  };

  useEffect(() => {
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      setDefaultUserImage(objectURL);
    }
  }, [selectedFile]);

  const UpdateLocalStorage = (nomeUpdate, CRMupdate) => {
    setTimeout(() => {
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
    }, 200);
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
  };
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
  return (
    <Box
      bg="#FAFAFA"
      w="218px"
      h="100%"
      color="white"
      borderRadius="10.85px"
      boxShadow="md"
      onClick={onOpen}
    >
      <Box margin="10px">
        <Text
          color="#1A202C"
          fontSize="16px"
          paddingStart="8px"
          alignSelf="center"
        >
          {nomeMedico}
        </Text>
      </Box>

      {medicos.map((key) => (
        <FieldDefaultIcon
          key={key}
          text={medico.clinica}
          textColor="#4A5568"
          icon={HiOutlineUser}
          clinica={medicos}
          clinicas={null}
          onClickModal={false}
          id={key}
          isMedic={true}
        />
      ))}
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
              {listaClinicas ? (
                <Center>
                  <HStack margin="10px">
                    <Text marginEnd="5px" fontWeight="bold" fontSize="17px">
                      Clínicas:
                    </Text>
                    <Select placeholder="Clínicas Cadastradas" variant="filled">
                      {listaClinicas.map((e, key) => {
                        return (
                          <option key={key} value={e.nomeClinica}>
                            {e.nomeClinica}
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
                            maxLength={9}
                            ref={refCRM}
                            defaultValue={crm}
                            fontSize="18px"
                            textAlign={"center"}
                            onChange={(e) => {
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
                    onEnd={() => UpdateLocalStorage(null, null)}
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
              UpdateLocalStorage(updateNome, updateCRM);
              ResetStates();
              onClose();
            }}
          >
            Salvar
          </Button>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Medicos;
