import {
  background,
  Box,
  Button,
  Center,
  HStack,
  Input,
  Select,
  styled,
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
          borderRadius="10.85px"
          mr={60}
        >
          <Box 
          fontWeight="bold" w="100vw" 
          bg="#0050ff" 
          borderRadius={10}
          
          >
            <Text textAlign="start" mt="5px"
             mb="5px" pl={3}
              fontSize={20}
              textColor={'white'}>
              Insira os dados do paciente
            </Text>

            <HStack display="flex" margin="20px" spacing="10px">
              <Input
                placeholder="Nome do Paciente"
                border={1}
                value={nomePaciente}
                textColor={'black'}
                bg={'white'}
                size="lg"
                h="50px"
                w="400px"
                onChange={handleNomePacienteInput}
              />
              <Input
                placeholder="Idade"
                border={1}
                value={idadePaciente}
                textColor={'black'}
                bg={'white'}
                size="lg"
                h="50px"
                w="150px"
                borderBottomColor={'whiteAlpha.900'}
                
                onChange={handleIdadePacienteInput}
              />
              <Select
                placeholder="Gênero"
                value={sexoPaciente}
                textColor={'black'}
                bg={'white'}
                border={1}               
                size="lg"
                h="50px"
                w="200px"
                onChange={handleSexoPacienteInput}
                
              >
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </Select>
            </HStack>

            <HStack  display="flex" margin="20px" justify="start">
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
                    color={'#2e4ad4'}
                    bg={'white'}
                    padding="20px"
                    w={"12rem"}
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
                borderColor={'gray'}
                bg={'#ccc'}
                textColor={'#2e4ad4'}
                variant="outline"
                w={"12rem"}
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
