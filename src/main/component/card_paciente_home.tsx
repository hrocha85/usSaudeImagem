import {
  Box,
  Button,
  Center,
  HStack,
  Input,
  Select,
  Text,
  useToast,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";

const CardListaMedicos = ({ altura }) => {
  const toast = useToast();
  const id = "test-toast";

  const [nomePaciente, setNomePaciente] = useState<string>();
  const [idadePaciente, setIdadePaciente] = useState<string>();
  const [sexoPaciente, setSexoPaciente] = useState<string>();

  const [isDisable, setisDisable] = useState(true);

  const getMedicos = () => {
    var medicos;
    var item;
    if (localStorage.getItem("medicos") != null) {
      item = localStorage.getItem("medicos");
      medicos = JSON.parse(item);
    } else medicos = [];
    return medicos;
  };
  var lista_medico = getMedicos();

  const handleNomePacienteInput = (event) => {
    setNomePaciente(event.target.value);
  };
  const handleIdadePacienteInput = (event) => {
    setIdadePaciente(event.target.value);
  };
  const handleSexoPacienteInput = (event) => {
    setSexoPaciente(event.target.value);
  };

  const addPaciente = () => {
    const pacienteProps = {
      nome: nomePaciente,
      idadePaciente: idadePaciente,
      sexo: sexoPaciente,
    };

    localStorage.setItem("paciente", JSON.stringify(pacienteProps));
  };

  const resetDados = () => {
    setNomePaciente("");
    setIdadePaciente("");
    setSexoPaciente("");
    localStorage.removeItem("paciente");
  };

  const checkDisable = () => {
    if (nomePaciente != null && idadePaciente != null && sexoPaciente != null) {
      setisDisable(false);
    } else {
      setisDisable(true);
    }
  };

  useEffect(() => {
    lista_medico = getMedicos();
  }, [localStorage.getItem("medicos")]);

  useEffect(() => {
    checkDisable();
  }, [nomePaciente, idadePaciente, sexoPaciente]);

  return (
    <Center>
      <Box
        w="100%"
        display="flex"
        //alignItems='center'
      >
        <Box
          display="flex"
          //paddingBottom="16px"
          bg="#FAFAFA"
          w="597px"
          h="100%"
          color="white"
          borderRadius="10.85px"
          boxShadow="dark-lg"
          //alignItems="center"
        >
          <Box color="blackAlpha.700" fontWeight="bold" w="100%">
            <Text textAlign="center" mt="10px" mb="10px">
              Insira os dados do paciente:
            </Text>
            <HStack display="flex" margin="20px" spacing="10px">
              <Input
                borderColor="black"
                placeholder="Nome"
                value={nomePaciente}
                size="sm"
                h="40px"
                w="250px"
                borderRadius="md"
                onChange={handleNomePacienteInput}
              />
              <Input
                borderColor="black"
                placeholder="Idade"
                value={idadePaciente}
                size="sm"
                h="40px"
                w="150px"
                borderRadius="md"
                maxLength={3}
                onChange={handleIdadePacienteInput}
              />
              <Select
                placeholder="Sexo"
                value={sexoPaciente}
                borderColor="black"
                w="200px"
                onChange={handleSexoPacienteInput}
              >
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </Select>
              <Wrap>
                <WrapItem w="245px">
                  <Button
                    isDisabled={isDisable}
                    colorScheme="blue"
                    padding="20px"
                    onClick={() => {
                      addPaciente();
                      toast({
                        duration: 3000,
                        title: `Paciente adicionado com sucesso`,
                        position: "bottom",
                        isClosable: true,
                      });
                    }}
                  >
                    Confirmar
                  </Button>
                </WrapItem>
              </Wrap>
              <Button
                colorScheme="black"
                variant="outline"
                onClick={() => resetDados()}
              >
                Limpar
              </Button>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default CardListaMedicos;
