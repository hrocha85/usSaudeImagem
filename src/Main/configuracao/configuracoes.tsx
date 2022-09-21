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
  Progress,
  Select,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { BiCamera } from "react-icons/bi";
import { AiOutlineClear } from "react-icons/ai";
import { FaRegFolderOpen } from "react-icons/fa";
import { VscFilePdf } from "react-icons/vsc";
import SignatureCanvas from "react-signature-canvas";
import BoxTitleBackground from "../component/box_title_background";
import RectangularCard from "../component/card_observations";
import ItemObservation from "../component/item_obeservation";
import MainCard from "../component/main_card";
import Avatar from "../images/Avatar.png";
import BG from "../images/bg_img.png";
import PlusButton from "../images/button_plus.png";
import ImageHome from "../images/icon_home.png";
import Medicos from "../../Data/Medicos.json";
import { render } from "@testing-library/react";
import ReactSignatureCanvas from "react-signature-canvas";
import React from "react";

const Configuracoes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [enable, setEnable] = useState(true);

  const [focus, setFocus] = useState("unstyled");

  const [nome, setNome] = useState("Nome do Doutor(a)");

  const [crm, setCrm] = useState("");

  const [endereco, setEndereco] = useState("");

  const [medicos, setMedicos] = useState<any[]>([]);

  let lista_medicos = Medicos.medicos;

  let padRef = React.useRef<SignatureCanvas>(null);

  const clear = () => {
    padRef.current?.clear();
  };

  function Laudos() {
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
  }

  function AddMedico() {
    const obj = {
      nome: nome,
      crm: "7777",
      uf: "sp",
      assinatura: " heheh",
      foto: "hehehr",
    };
    lista_medicos.push(obj);
    setMedicos(lista_medicos);
  }

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
        justify='space-evenly'
        margin="60px"
        flexWrap="wrap"
        gap="10px"
      >
        <>
          <MainCard titulo="Clínicas" icon={true} nome={null} />
          {medicos.map((med) => {
            return <MainCard titulo="Doutor(a)" icon={false} nome={med.nome} />;
          })}

          <Tooltip
            label="Adicionar Médico"
            backgroundColor="white"
            placement="top"
            defaultIsOpen={false}
            hasArrow
            arrowSize={15}
          >
            <Button
              position="absolute"
              right="1"
              variant="ghost"
              onClick={onOpen}
            >
              <Image
                srcSet={PlusButton}
                alt="Second Icon Plus"
                h="20px"
                w="20px"
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
              }}
            />

            <Stack direction="row" justify="center" margin="10px">
              <Box sx={{ flexGrow: 1 }}>
                <Input
                  textAlign="center"
                  paddingStart="60px"
                  fontWeight="bold"
                  fontSize="20px"
                  placeholder='Nome Doutor'
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
                  srcSet={Avatar}
                  alt="Image DR"
                />
              </Center>

              <Center>
                <Icon
                  as={BiCamera}
                  marginTop="2px"
                  color="#4658fc"
                  margin="10px"
                />
              </Center>
              <Center>
                <HStack>
                  <Text marginEnd="5px">Clínicas</Text>
                  <Select placeholder="Clínicas Cadastradas" variant="filled">
                    <option value="option1">Clínica 1</option>
                    <option value="option2">Clínica 2</option>
                    <option value="option3">Clínica 3</option>
                  </Select>
                </HStack>
              </Center>
              <Center paddingTop={"30px"}>
                <InputGroup
                  variant={"unstyled"}
                  width={"245px"}
                  marginEnd="50px"
                >
                  <InputLeftAddon children="CRM/UF:" paddingEnd={"5px"} />
                  <Input
                    placeholder="00000000-0/BR"
                    fontSize="18px"
                    textAlign={"center"}
                    _placeholder={{ fontWeight: "bold", color: "black" }}
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
                    onClick={clear}
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
