import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../context/LuadosContext";
import "./Laudos.css";

function Exames() {
  const getUserClinica = () => {
    if (localStorage.getItem("user") != null) {
      var clinica = JSON.parse(localStorage.getItem("user")!);
    }
    return clinica.clinica;
  };
  const getUserMedico = () => {
    if (localStorage.getItem("user") != null) {
      var medico = JSON.parse(localStorage.getItem("user")!);
    }
    return medico.medico;
  };
  const getPaciente = () => {
    if (localStorage.getItem("paciente") != null) {
      return JSON.parse(localStorage.getItem("paciente")!).nome;
    } else {
      return "Nome paciente";
    }
  };

  const { laudoPrin } = useContext(LaudosContext);
  const [clinicaSet, setClinica] = useState<any>(JSON.parse(getUserClinica()));
  const [medico, setMedico] = useState(getUserMedico());

  const getCurrentDate = () => {
    const timeStamp = new Date();

    return `${timeStamp.getDate()}/${
      timeStamp.getMonth() + 1
    }/${timeStamp.getFullYear()}  ${timeStamp.getHours()}:${timeStamp.getMinutes()}:${timeStamp.getSeconds()}h`;
  };

  return (
    <Box className="zoom" boxShadow="xl">
      <Grid w="100%" gridTemplateRows={"15px 1fr 15px"}>
        <Box margin="5px" display="flex" marginStart="15px">
          <Image
            src={clinicaSet.foto}
            alt="Imagem Clínica"
            boxSize="130px"
            objectFit="scale-down"
          />
        </Box>

        <Grid
          templateColumns="repeat(1, 1fr)"
          marginStart="50px"
          justifyItems="center"
          justifySelf="center"
        >
          <Text fontWeight="bold">{clinicaSet.nomeClinica}</Text>
          <Text>{getPaciente()}</Text>
          <Text>{getCurrentDate()}</Text>
          <Text>{`Dr. ${medico.nome}`}</Text>
        </Grid>
      </Grid>
      <Center>
        <Divider
          inlineSize="95%"
          margin="5px"
          borderColor="black"
          marginTop="15px"
        />
      </Center>
      <Box overflow="auto" h="35%" margin="20px">
        <Text>{laudoPrin}</Text>
      </Box>
      <Box position="absolute" bottom="5px" w="100%">
        <HStack w="100%" justify="space-between">
          <Grid templateColumns="repeat(1, 1fr)" justifyItems="center">
            <Image
              src={medico.assinatura}
              alt="Assinatura Médico"
              boxSize="100px"
              backgroundImage="none"
            />
            <Divider
              inlineSize="30vh"
              margin="5px"
              marginTop="0px"
              borderColor="black"
            />

            <Text fontWeight="bold">{`Dr. ${medico.nome}`}</Text>
            <Text fontWeight="bold">{`CRM ${medico.crm}`}</Text>
          </Grid>

          <Text
            fontSize="11px"
            fontStyle="italic"
            fontWeight="bold"
            overflowWrap="break-word"
            paddingTop="12%"
            paddingEnd="10px"
          >
            Santa Imagem Diagnósticos por imagem
          </Text>
        </HStack>
        <Text fontSize="10" overflowWrap="break-word" margin="10px">
          "A impressão diagnóstica em exames de imagem não é absoluta, devendo
          ser correlacionada com dados clínicos, laboratorias e outros métodos
          de imagem complementares"
        </Text>
      </Box>
    </Box>
  );
}

export default Exames;
