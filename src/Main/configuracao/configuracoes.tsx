import {
  Box,
  Button, Flex, Icon,
  Image, List,
  ListIcon,
  ListItem, Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Progress,
  Stack, Tooltip,
  useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";
import { FaRegFolderOpen } from "react-icons/fa";
import { VscFilePdf } from "react-icons/vsc";
import BoxTitleBackground from "../component/box_title_background";
import RectangularCard from "../component/card_observations";
import ItemObservation from "../component/item_obeservation";
import MainCard from "../component/main_card";
import ModalDrs from "../component/modal_dr";
import BG from "../images/bg_img.png";
import PlusButton from "../images/button_plus.png";
import ImageHome from "../images/icon_home.png";

const Configuracoes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [enable, setEnable] = useState(true);

  const [focus, setFocus] = useState("unstyled");

  const [nome, setDoutor] = useState("Nome do Doutor(a)");

  const [endereco, setEndereco] = useState("");

  const [modalDrs, setModalDrs] = useState(false);

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
      <Flex
        h="100%"
        direction="row"
        justify="space-between"
        margin="60px"
        flexWrap="wrap"
        gap="10px"
      >
        <MainCard titulo="Clínicas" icon={true} />
        <MainCard titulo="Doutor(a)" icon={false} />
        <MainCard titulo="Doutor(a)" icon={false} />
        <MainCard titulo="Doutor(a)" icon={false} />
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
            onClick={() => setModalDrs(true)}
          >
            <Image
              srcSet={PlusButton}
              alt="Second Icon Plus"
              h="20px"
              w="20px"
            />
          </Button>
        </Tooltip>
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
    </Box>
  );
};

export default Configuracoes;
