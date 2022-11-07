import {
    Box,
    Center, Divider, Grid,
    HStack,
    Image, Text
} from "@chakra-ui/react";
import { useContext } from "react";
import { LaudosContext } from "../../context/LuadosContext";
import "./Laudos.css";

function Exames() {
  const { laudoPrin } = useContext(LaudosContext);

  return (
    <Box className="zoom" boxShadow="xl">
      <Grid w="100%" gridTemplateRows={"15px 1fr 15px"}>
        <Box margin="15px">
          <Image
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            boxSize="100px"
          />
        </Box>

        <Grid
          templateColumns="repeat(1, 1fr)"
          marginStart="50px"
          justifyItems="center"
          justifySelf="center"
        >
          <Text fontWeight="bold">IMEDI SANTOS</Text>
          <Text>Nome</Text>
          <Text>Data</Text>
          <Text>Médico Solicitante</Text>
        </Grid>
      </Grid>
      <Center>
        <Divider inlineSize="95%" margin="5px" borderColor="black" />
      </Center>
      <Box margin="20px">
        <Text>{laudoPrin}</Text>
      </Box>
      <Box position="absolute" bottom="5px" w="100%">
        <HStack w="100%" justify="space-between">
          <Grid templateColumns="repeat(1, 1fr)" justifyItems="center">
            <Image
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              boxSize="100px"
              verticalAlign="top"
              align="flex-start"
            />
            <Divider inlineSize="30vh" margin="5px" borderColor="black" />

            <Text>Médico Solicitante</Text>
            <Text>CRM</Text>
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
          "A impressão diagnóstica eme exames de imagem não é absoluta, devendo
          ser correlacionada com dados clínicos, laboratorias e outros métodos
          de imagem complementares"
        </Text>
      </Box>
    </Box>
  );
}

export default Exames;
