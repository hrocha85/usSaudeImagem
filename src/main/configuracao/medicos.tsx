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
import { lista_medicos } from "./configuracoes";

const Medicos = ({ medico, Id }) => {
  let medicos: any[] = [];
  medicos.push(medico);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [enable, setEnable] = useState(true);

  const [CRMenable, setCRMEnable] = useState(true);

  const [InputNomeMedico, setInputNomeMedico] = useState(false);

  const [InputCRM, setInputCRM] = useState(false);

  const refNomeMedico = useRef<HTMLInputElement | null>(null);

  const refCRM = useRef<HTMLInputElement | null>(null);

  const [updateNome, setUpdateNome] = useState<string | null>("");

  const [updateCRM, setUpdateCRM] = useState<string | null>("");

  const [nomeMedico, setNomeMedico] = useState(medico.nome);

  const [crm, setCRM] = useState(medico.crm);

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
  const UpdateLocalStorage = (nomeUpdate, CRMupdate) => {
    if (nomeUpdate != null) {
      var array = JSON.parse(localStorage.getItem("medicos")!);
      var item = array[Id];
      lista_medicos[Id].nome = nomeUpdate;

      item.nome = nomeUpdate;
      localStorage.setItem("medicos", JSON.stringify(array));
      setNomeMedico(nomeUpdate);
    }
    if (CRMupdate != null) {
      var array = JSON.parse(localStorage.getItem("medicos")!);
      var item = array[Id];
      lista_medicos[Id].crm = CRMupdate;

      item.crm = CRMupdate;
      localStorage.setItem("medicos", JSON.stringify(array));
      setCRM(CRMupdate);
    }
  };
  const ResetStates = () => {
    setCRMEnable(true);
    setEnable(true);
  };
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
                    UpdateLocalStorage(updateNome, null);
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
                  srcSet={medico.foto}
                  alt="Image DR"
                />
              </Center>
              <Center>
                <Icon as={BiCamera} marginTop="2px" color="#4658fc" />
              </Center>
              <Center>
                <Grid templateColumns="repeat(1, 1fr)" justifyItems="center">
                  <Text size="16">CRM/UF</Text>
                  <Center>
                    {InputCRM ? (
                      <Input
                        ref={refCRM}
                        justifySelf="center"
                        fontWeight="bold"
                        width="150px"
                        defaultValue={crm}
                        variant={"filled"}
                        textAlign="center"
                        isDisabled={CRMenable}
                        borderStartRadius={"md"}
                        borderEndRadius={"md"}
                        maxLength={9}
                        onChange={(e) => {
                          setUpdateCRM(e.target.value);
                          UpdateLocalStorage(null, updateCRM);
                        }}
                      ></Input>
                    ) : (
                      <Input
                        ref={refCRM}
                        fontWeight="bold"
                        justifySelf="center"
                        width="150px"
                        defaultValue={crm}
                        variant={"unstyled"}
                        isDisabled={CRMenable}
                        textAlign="center"
                      ></Input>
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
