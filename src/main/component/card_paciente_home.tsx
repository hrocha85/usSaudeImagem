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
import { useContext, useEffect, useState } from "react";
import { EnableExamesContext } from "../../context/ExamesEnableContext";

const CardPaciente = ({ altura }) => {
  let { enableExames, setEnableExames } = useContext(EnableExamesContext);

  const toast = useToast();

  const [nomePaciente, setNomePaciente] = useState<string>("");
  const [idadePaciente, setIdadePaciente] = useState<string>("");
  const [sexoPaciente, setSexoPaciente] = useState<string>("m");
  const [medico_solicitante, setMedicoSolicitante] = useState<string>("");

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

  const getPaciente = () => {
    var paciente = JSON.parse(localStorage.getItem("paciente")!);
    if (paciente != null) {
      setNomePaciente(paciente.nome);
      setIdadePaciente(paciente.idadePaciente);
      setSexoPaciente(paciente.sexo);
    }
  };

  const handleNomePacienteInput = (event) => {
    setNomePaciente(event.target.value);
  };
  const handleMedicoSolicitanteInput = (event) => {
    setMedicoSolicitante(event.target.value);
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
      medico_solicitante: medico_solicitante,
    };

    localStorage.setItem("paciente", JSON.stringify(pacienteProps));
  };

  const resetDados = () => {
    setNomePaciente("");
    setIdadePaciente("");
    setSexoPaciente("");
    setMedicoSolicitante("");
    setEnableExames(false);
    localStorage.removeItem("paciente");
  };

  const checkDisable = () => {
    console.log(isDisable);
    if (
      nomePaciente != "" &&
      idadePaciente != "" &&
      sexoPaciente != "" &&
      medico_solicitante != ""
    ) {
      setisDisable(false);
    } else {
      setisDisable(true);
    }
  };

  useEffect(() => {
    getPaciente();
  }, []);

  useEffect(() => {
    lista_medico = getMedicos();
  }, [localStorage.getItem("medicos")]);

  useEffect(() => {
    checkDisable();
  }, [nomePaciente, idadePaciente, sexoPaciente, medico_solicitante]);

  return (
    <Center>
      <Box w="100%" display="flex">
        <Box
          display="flex"
          bg="#FAFAFA"
          w="597px"
          h="100%"
          color="white"
          borderRadius="10.85px"
          boxShadow="dark-lg"
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
            </HStack>

            <HStack display="flex" margin="20px" justify="center">
              <Input
                textAlign="center"
                borderColor="black"
                placeholder="Médico Solicitante"
                value={medico_solicitante}
                size="sm"
                h="40px"
                w="250px"
                borderRadius="md"
                onChange={handleMedicoSolicitanteInput}
              />

              <Wrap>
                <WrapItem>
                  <Button
                    isDisabled={isDisable}
                    colorScheme="blue"
                    padding="20px"
                    onClick={() => {
                      addPaciente();

                      setTimeout(() => {
                        toast({
                          duration: 3000,
                          title: `Paciente adicionado com sucesso`,
                          position: "bottom",
                          isClosable: true,
                        });
                        setEnableExames(true);
                      }, 500);
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

export default CardPaciente;
