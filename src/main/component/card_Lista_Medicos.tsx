import {
  Button,
  Text,
  Input,
  Center,
  Select,
  Box,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const CardListaMedicos = ({ altura }) => {
  const [medicoSelecionado, setmedicoSelecionado] = useState<object>();

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

  console.log('meds',medicoSelecionado)

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
            <HStack display="flex" ml="15px">
              <Input
                borderColor="black"
                placeholder="Nome"
                size="sm"
                h="40px"
                w="250px"
              />
              <Input
                borderColor="black"
                placeholder="Idade"
                size="sm"
                h="40px"
                w="150px"
              />
              <Select placeholder="Sexo" borderColor="black" w="150px">
                <option value="option1">Masculino</option>
                <option value="option2">Feminino</option>
              </Select>
            </HStack>
            <HStack display="flex" ml="60px" mt="10px" mb="20px" spacing="15px">
              <Select w="200px" borderColor="black" onChange={(e)=>setmedicoSelecionado(e.target)}>
                <option value="" disabled selected>
                  Lista de médicos
                </option>
                {lista_medico.map((med, key) => {
                  return (
                    <option key={key} value={med}>
                      {med.nome}
                    </option>
                  );
                })}
              </Select>
             
              <Button colorScheme="blue">Confirmar</Button>
              <Button colorScheme="black" variant="outline">
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
