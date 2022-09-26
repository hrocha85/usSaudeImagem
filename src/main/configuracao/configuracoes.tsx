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
  Progress,
  Select,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { BiCamera } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa";
import { VscFilePdf } from "react-icons/vsc";
import SignatureCanvas from "react-signature-canvas";
import Medicos from "../../Data/Medicos.json";
import BoxTitleBackground from "../component/box_title_background";
import RectangularCard from "../component/card_observations";
import ItemObservation from "../component/item_obeservation";
import MainCard from "../component/main_card";
import BG from "../images/bg_img.png";
import PlusButton from "../images/button_plus.png";
import DefaultImageClinica from "../images/clinica_default.png";
import ImageHome from "../images/icon_home.png";

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

  let lista_medicos = Medicos.medicos;

  let padRef = React.useRef<SignatureCanvas>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [enable, setEnable] = useState(true);

  const [focus, setFocus] = useState("unstyled");

  const [nome, setNome] = useState("");

  const [crm, setCrm] = useState("");

  const [clinica, setClinica] = useState("");

  const [medicos, setMedicos] = useState<any[]>(getMedicos);

  const [defaultUserImage, setDefaultUserImage] = useState(DefaultImageClinica);

  const inputFile = useRef<HTMLInputElement | null>(null);

  const [selectedFile, setSelectedFile] = useState();

  const [listaClinicas, setListaClinicas] = useState<any[]>([]);

  const [stateClickAddMedico, setStateClickAddMedico] = useState(false);

  const [URLSignature, setURLSignature] = useState<string | undefined>();

  const AddMedico = () => {
    const obj = {
      nome: nome,
      crm: crm,
      uf: "sp",
      assinatura: URLSignature!,
      foto: defaultUserImage,
      clinica: clinica,
    };
    lista_medicos.push(obj);
    localStorage.setItem("medicos", JSON.stringify(lista_medicos));
    setMedicos(lista_medicos);
  };
  const SaveSignature = () => {
    const url = padRef.current?.getTrimmedCanvas().toDataURL("image/png");
    if (url) setURLSignature(url);
  };

  const clearAssinatura = () => {
    padRef.current?.clear();
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

  const ResetDados = () => {
    setNome("");
    setCrm("");
    setDefaultUserImage(DefaultImageClinica);
    setFocus("unstyled");
    setStateClickAddMedico(false);
  };

  useEffect(() => {
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      setDefaultUserImage(objectURL);
      return () => URL.revokeObjectURL(objectURL);
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

  return (
    <Box
      w="100%"
      h="100%"
      verticalAlign="center"
      alignSelf="center"
      alignItems="center"
      backgroundImage={BG}
      backgroundPosition="fixed"
      backgroundSize="cover"
      backgroundClip="padding-box"
      backgroundRepeat="no-repeat"
      paddingBottom="10px"
      paddingTop="5px"
    >
      <Flex
        direction="row"
        justify="space-between"
        margin="20px 80px 100px 20px"
        align="center"
      >
        <BoxTitleBackground titulo="Configurações" />

        <Progress
          value={50}
          size="sm"
          w="259px"
          minW="259px"
          colorScheme="blue"
          backgroundColor="#C8C8C8"
          borderRadius="0.5rem"
        />

        <Popover>
          <PopoverTrigger>
            <Button borderRadius="50%" backgroundColor="#E2E8F0" w="42" h="42">
              <Icon as={FaRegFolderOpen} />
            </Button>
          </PopoverTrigger>
          <PopoverContent borderRadius="20px" w="225px">
            <PopoverArrow />

            <PopoverBody>{Laudos()}</PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
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

          {medicos.map((med) => {
            return (
              <MainCard
                titulo="Doutor(a)"
                icon={false}
                clinica={clinica}
                medicos={med}
              />
            );
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
              }}
            />

            <Stack direction="row" justify="center" margin="10px">
              <Box sx={{ flexGrow: 1 }}>
                <Input
                  textAlign="center"
                  paddingStart="60px"
                  fontWeight="bold"
                  fontSize="20px"
                  placeholder="Nome Doutor"
                  isDisabled={enable}
                  variant={focus}
                  onChange={(e) => setNome(e.target.value)}
                  _placeholder={{ fontWeight: "bold", color: "black" }}
                ></Input>
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
                    setFocus("filled");
                  }}
                >
                  Editar
                </Button>
              </Box>
            </Stack>

            <Divider orientation="horizontal" />

            <ModalBody>
              <Center>
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  srcSet={defaultUserImage}
                  alt="Image DR"
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
              <Center>
                <HStack>
                  <Text marginEnd="5px" fontWeight="bold">
                    Clínicas:
                  </Text>
                  <Select
                    placeholder="Clínicas Cadastradas"
                    variant="filled"
                    onChange={(e) => setClinica(e.target.value)}
                  >
                    {listaClinicas.map((e) => {
                      return (
                        <option value={e.nomeClinica}>{e.nomeClinica}</option>
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
                    onChange={(event) => setCrm(event.target.value)}
                  />
                </InputGroup>
              </Center>
            </ModalBody>

            <ModalFooter>
              <Box>
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
            </ModalFooter>
            <Button
              textColor="white"
              backgroundColor="#0e63fe"
              margin="10px"
              onClick={() => {
                AddMedico();
                ResetDados();
                SaveSignature();
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
      <Box margin="50px 0px 0px 30px">
        <Image src={ImageHome} />
      </Box>
    </Box>
  );
};

export default Configuracoes;
