import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  Icon,
  Image,
  Input,
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
  Stack,
  Text, useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";
import { BiCamera } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa";
import { VscFilePdf } from "react-icons/vsc";
import SignatureCanvas from "react-signature-canvas";
import BoxTitleBackground from "../component/box_title_background";
import RectangularCard from "../component/card_observations";
import ItemObservation from "../component/item_obeservation";
import MainCard from "../component/main_card";
import Avatar from "../images/Avatar.png";
import BG from "../images/bg_img.png";
import ImageHome from "../images/icon_home.png";
import SecondIconPlus from "../images/plus 2.png";

const Configuracoes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [enable, setEnable] = useState(true);

  const [focus, setFocus] = useState("unstyled");

  const [nome, setDoutor] = useState("Nome do Doutor(a)");

  const [endereco, setEndereco] = useState("");




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

      <Flex h="100%" direction="row" justify="space-between" margin="60px">
        <MainCard titulo="Clínicas" icon={true} />
        <MainCard titulo="Doutor(a)" icon={false} />
        <MainCard titulo="Doutor(a)" icon={false} />
        <MainCard titulo="Doutor(a)" icon={false} />
        <Button position="absolute" right="1" variant="ghost" onClick={onOpen}>
          <Image
            srcSet={SecondIconPlus}
            alt="Second Icon Plus"
            h="20px"
            w="20px"
          />
        </Button>
      </Flex>

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

      <>
        <Modal isOpen={isOpen} onClose={onClose}>
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
                  placeholder={nome}
                  isDisabled={enable}
                  variant={focus}
                  value={nome}
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

            <Container centerContent h="100%" w="100%" marginTop="5px">
              <ModalBody>
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  srcSet={Avatar}
                  alt="Dan Abramov"
                />
                <Center>
                  <Icon as={BiCamera} marginTop="2px" color="#4658fc" />
                </Center>
                <Center>
                  <Grid templateColumns="repeat(1, 1fr)" justifyItems="center">
                    <Text size="16">CRM/UF</Text>

                    <Stack direction="row" justify="center">
                      <Text fontWeight="bold" size="20px">
                        00000000-0/BR
                      </Text>
                    </Stack>

                    <Center>
                      <Text textColor="#4759FC" size="16px">
                        Salvar
                      </Text>
                    </Center>
                  </Grid>
                </Center>
              </ModalBody>
            </Container>

            <ModalFooter>
              <SignatureCanvas
                backgroundColor="#F7FAFC"
                penColor="black"
                canvasProps={{
                  width: 400,
                  height: 200,
                  className: "sigCanvas",
                }}
              />

            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
};

export default Configuracoes;
