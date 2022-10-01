import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Grid,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  useOutsideClick,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BiCamera } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi";
import FieldDefaultIcon from "../component/field_default_icon";

const Medicos = ({ medico }) => {
  let medicos: any[] = [];
  medicos.push(medico);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [enable, setEnable] = useState(true);

  const [focus, setFocus] = useState("unstyled");

  const [InputNomeMedico, setInputNomeMedico] = useState(false);

  const refNomeMedico = useRef<HTMLInputElement | null>(null);

  useOutsideClick({
    ref: refNomeMedico,
    handler: () => setInputNomeMedico(false),
  });

  /* const UpdateLocalStorage = (
    nomeUpdate,
    telefoneUpdate,
    cepUpdate,
    enderecoUpdate
  ) => {
    if (nomeUpdate != null) {
      var array = JSON.parse(localStorage.getItem("minhasClinicas")!);
      var item = array[id];
      minhasClinicas[id].nomeClinica = nomeUpdate;

      item.nomeClinica = nomeUpdate;
      localStorage.setItem("minhasClinicas", JSON.stringify(array));
      setNomeClinica(nomeUpdate);
    }

    if (cepUpdate != null) {
      var array = JSON.parse(localStorage.getItem("minhasClinicas")!);
      var item = array[id];
      minhasClinicas[id].cep = cepUpdate;

      item.cep = cepUpdate;
      localStorage.setItem("minhasClinicas", JSON.stringify(array));
      setCep(cepUpdate);
    }
    if (telefoneUpdate != null) {
      var array = JSON.parse(localStorage.getItem("minhasClinicas")!);
      var item = array[id];
      minhasClinicas[id].teleFone = telefoneUpdate;

      item.teleFone = telefoneUpdate;
      localStorage.setItem("minhasClinicas", JSON.stringify(array));
      setTelefone(telefoneUpdate);
    }
    if (enderecoUpdate != null) {
      var array = JSON.parse(localStorage.getItem("minhasClinicas")!);
      var item = array[id];
      minhasClinicas[id].enderecoRuaNumero = enderecoUpdate;

      item.enderecoRuaNumero = enderecoUpdate;
      localStorage.setItem("minhasClinicas", JSON.stringify(array));
      setEndereco(enderecoUpdate);
    }
  };*/

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
          {medico.nome}
        </Text>
      </Box>

      {medicos.map((dr, key) => (
        <FieldDefaultIcon
          key={key}
          text={dr.clinica}
          textColor="#4A5568"
          icon={HiOutlineUser}
          clinica={medicos}
          clinicas={null}
          onClickModal={false}
          id={key}
        />
      ))}
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
              {InputNomeMedico ? (
                <Input
                  ref={refNomeMedico}
                  textAlign="center"
                  paddingStart="60px"
                  fontWeight="bold"
                  fontSize="20px"
                  value={medico.nome}
                  isDisabled={false}
                  variant={"filled"}
                ></Input>
              ) : (
                <Input
                  ref={refNomeMedico}
                  textAlign="center"
                  paddingStart="60px"
                  fontWeight="bold"
                  fontSize="20px"
                  value={medico.nome}
                  isDisabled={true}
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
                  setFocus("filled");
                  setInputNomeMedico(true)
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
                srcSet={medico.foto}
                alt="Image DR"
              />
              <Center>
                <Icon as={BiCamera} marginTop="2px" color="#4658fc" />
              </Center>
              <Center>
                <Grid templateColumns="repeat(1, 1fr)" justifyItems="center">
                  <Text size="16">CRM/UF</Text>

                  <Stack direction="row" justify="center">
                    <Text fontWeight="bold" size="20px">
                      {medico.crm}
                    </Text>
                  </Stack>

                  <Center></Center>
                </Grid>
              </Center>
            </ModalBody>
          </Container>

          <ModalFooter>
            {medico.assinatura ? (
              <Image
                boxShadow="lg"
                backgroundColor={"#F7FAFC"}
                borderRadius={"md"}
                width="400px"
                height="200px"
                srcSet={medico.assinatura}
                alt="Assinatura"
              />
            ) : null}
          </ModalFooter>
          <Button
            marginTop="5px"
            textColor="white"
            backgroundColor="#0e63fe"
            marginEnd="20px"
            marginStart="23px"
            marginBottom="10px"
            onClick={() => {
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
