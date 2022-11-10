import {
  Box,
  Button,
  Center,
  HStack,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const CardListaMedicos = ({ altura }) => {
  const [nomePaciente, setNomePaciente] = useState<string>();
  const [idadePaciente, setIdadePaciente] = useState<string>();
  const [sexoPaciente, setSexoPaciente] = useState<string>();

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

  useEffect(() => {
    lista_medico = getMedicos();
  }, [localStorage.getItem("medicos")]);

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
                w="150px"
                onChange={handleSexoPacienteInput}
              >
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </Select>
              <Button
                colorScheme="blue"
                padding="20px"
                onClick={() => addPaciente()}
              >
                Confirmar
              </Button>
              <Button
                colorScheme="black"
                variant="outline"
                onClick={() => resetDados()}
              >
                Limpar
              </Button>
            </HStack>
            <HStack></HStack>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default CardListaMedicos;
