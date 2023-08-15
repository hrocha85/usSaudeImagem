import {
  //background,
  Box,
  Button,
  Center,
  HStack,
  Input,
  Select,
  Stack,
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

const CardPaciente = () => {
  const { enableExames, setEnableExames } = useContext(EnableExamesContext);

  const toast = useToast();

  const [nomePaciente, setNomePaciente] = useState<string>("");
  const [idadePaciente, setIdadePaciente] = useState<string>("");
  const [sexoPaciente, setSexoPaciente] = useState<string>("m");
  const [medico_solicitante, setMedicoSolicitante] = useState<string>("");

  const [isDisable, setisDisable] = useState(true);

  const getMedicos = () => {
    let medicos;
    let item;
    if (localStorage.getItem("medicos") != null) {
      item = localStorage.getItem("medicos");
      medicos = JSON.parse(item);
    } else medicos = [];
    return medicos;
  };

  let lista_medico = getMedicos();

  const getPaciente = () => {
    const paciente = JSON.parse(localStorage.getItem("paciente")!);
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
    const medicos_solicitantes =
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
    <Box borderRadius="1rem" border={'2px'} w="60vw" display="flex" flexWrap='wrap' justifyContent={'center'} marginTop={5}>
      <Stack>
        <Text
          textAlign="center" mt="5px"
          mb="5px" pl={3}
          fontSize={22}
          textColor={'black'}>
          Insira os dados do paciente
        </Text>
        <Box justifyContent={'center'} display="flex" flexWrap='wrap' gap='10px' padding='10px' >


          <Input
            placeholder="Nome do Paciente"
            value={nomePaciente}
            size="lg"
            h="3.1rem"
            w="30vw"
            borderColor="#444"
            onChange={handleNomePacienteInput}
          />
          <Input
            placeholder="Idade"
            value={idadePaciente}
            bgGradient='linear(to-b, blue.100, #fff)'
            size="lg"
            h="3.1rem"
            w="6rem"
            borderColor="#444"
            onChange={handleIdadePacienteInput}
          />
          <Select
            placeholder="Gênero"
            value={sexoPaciente}
            bgGradient='linear(to-b, blue.100, #fff)'
            size="lg"
            h="3.1rem"
            w="8.7rem"
            borderColor="#444"
            onChange={handleSexoPacienteInput}

          >

            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </Select>

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
                color={'white'}
                padding="1.3rem"
                border={'2px'}
                borderColor="#444"
                textColor={'black'}
                w='10rem'
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
            w={"8rem"}
            h={'2.7rem'}
            onClick={() => resetDados()}
          >
            Limpar
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default CardPaciente;
