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
import { useContext, useEffect, useRef, useState } from "react";
import { EnableExamesContext } from "../../context/ExamesEnableContext";
import React from "react";

import CreatableSelect from "react-select/creatable";
import Medicos_Solicitantes from "../../Data/Medicos_Solicitantes.json";

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

  const handleIdadePacienteInput = (event) => {
    setIdadePaciente(event.target.value);
  };

  const handleSexoPacienteInput = (event) => {
    setSexoPaciente(event.target.value);
  };

  const handleSelectChange = (selectedOption) => {
    if (!selectedOption.value) return;

    setMedicoSolicitante(
      selectedOption.value != "" && selectedOption.value != null
        ? selectedOption.value
        : null
    );
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

  const addMedicosSolicitantes = () => {
    let medicos_solicitantes =
      JSON.parse(localStorage.getItem("medicos_solicitantes")!) || [];

    const index = medicos_solicitantes.findIndex((medico) => {
      return medico === medico_solicitante;
    });

    if (index === -1) {
      medicos_solicitantes.push(medico_solicitante);
      localStorage.setItem(
        "medicos_solicitantes",
        JSON.stringify(medicos_solicitantes)
      );
    }
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

  let options: Array<{ value: string; label: string }> = [];

  const storedMedicos = localStorage.getItem("medicos_solicitantes");

  if (storedMedicos) {
    const parsedMedicos = JSON.parse(storedMedicos);

    options = parsedMedicos.map((medico) => ({
      value: medico,
      label: medico,
    }));
  } else {
    options = [{ value: "", label: "Insira um médico solicitante" }];
  }

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
              <CreatableSelect
                isClearable={true}
                onChange={handleSelectChange}
                onCreateOption={(inputValue: string) => {
                  setMedicoSolicitante(inputValue);
                }}
                options={options}
                value={{
                  value:
                    medico_solicitante != null && medico_solicitante != ""
                      ? medico_solicitante
                      : null,
                  label:
                    medico_solicitante != null && medico_solicitante != ""
                      ? medico_solicitante
                      : "Insira Médico Solicitante",
                }}
              />
              <Wrap>
                <WrapItem>
                  <Button
                    isDisabled={isDisable}
                    colorScheme="blue"
                    padding="20px"
                    onClick={() => {
                      addPaciente();
                      addMedicosSolicitantes();

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
