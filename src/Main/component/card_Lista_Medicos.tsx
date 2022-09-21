import { Button, Text, Input, Center, Select, Box, HStack } from "@chakra-ui/react";

const CardListaMedicos = ({ altura }) => {
  return (
    <Center>
      <Box
        w='100%'
        display='flex'
      //alignItems='center'
      >
        <Box
          display='flex'
          //paddingBottom="16px"
          bg="#FAFAFA"
          w="597px"
          h='100%'
          color="white"
          borderRadius="10.85px"
          boxShadow="dark-lg"
        //alignItems="center"
        >
          <Box
            color='blackAlpha.700'
            fontWeight='bold'
            w='100%'
          >
            <Text
              textAlign="center"
              mt='10px'
              mb='10px'>
              Insira os dados do paciente:
            </Text>
            <HStack
              display='flex'
              ml='15px'
            >
              <Input borderColor="black" placeholder='Nome' size='sm' h="40px" w="250px" />
              <Input borderColor="black" placeholder='Idade' size='sm' h="40px" w="150px" />
              <Select placeholder='Sexo'
                borderColor="black"
                w='150px'>
                <option value='option1'>Masculino</option>
                <option value='option2'>Feminino</option>
              </Select>
            </HStack>
            <HStack
              display='flex'
              ml='60px'
              mt='10px'
              mb='20px'
              spacing='15px'
            >
              <Select placeholder='Lista de Médicos'
                w='200px'
                borderColor="black">
                <option value='option1'>Médico 1</option>
                <option value='option2'>Médico 2</option>
                <option value='option3'>Médico 3</option>
              </Select>
              <Button colorScheme='blue'>Confirmar</Button>
              <Button colorScheme='black' variant='outline'>
                Limpar
              </Button>
            </HStack>

          </Box>
        </Box>
      </Box >
    </Center>
  );
};

export default CardListaMedicos;