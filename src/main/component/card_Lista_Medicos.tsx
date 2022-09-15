import { Button, Flex, Grid, GridItem, Input, Center } from "@chakra-ui/react";

const CardListaMedicos = ({ altura }) => {
  return (
    <Center>
      <Flex w='100%'
        display='flex'
      //alignItems='center'
      >
        <Center
          display='flex'
          //paddingBottom="16px"
          bg="#FAFAFA"
          w="597px"
          h={altura}
          color="white"
          borderRadius="10.85px"
          boxShadow="dark-lg"
        >
          <Grid
            templateRows='repeat(6, 1fr)'
            templateColumns='repeat(2, 1fr)'
            h='100%'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
          >
            <GridItem pl='24px' pt="10px" colSpan={2}>
              <Input borderColor="black" bg="#E2E8F0" placeholder='Lista de Médicos' size='sm' h="40px" w="311px" />
              <Button ml="16px" mr="16px" colorScheme='blue'>Confirmar</Button>
              <Button colorScheme='black' variant='outline'>
                Limpar
              </Button>
            </GridItem>
            <GridItem pl='50px' h="40px" mt="10px" colSpan={2}>
              Se não estiver na lista, entre com os dados:
            </GridItem>
            <GridItem pl='2' mt="-10px" colSpan={1} >
              <Input borderColor="black" bg="#E2E8F0" placeholder='DR/DRA' size='sm' h="40px" w="268px" />
            </GridItem>
            <GridItem pl='2' mt="-10px">
              <Input borderColor="black" bg="#E2E8F0" placeholder='Cartão do SUS' size='sm' h="40px" w="268px" />
            </GridItem>
            <GridItem pl='2' mt="-10px" >
              <Input borderColor="black" bg="#E2E8F0" placeholder='Nome' size='sm' h="40px" w="268px" />
            </GridItem>
            <GridItem pl='2' mt="-10px" h='50px' colSpan={1}>
              <Input borderColor="black" bg="#E2E8F0" placeholder='Incluir' size='sm' h="40px" w="268px" />
            </GridItem>
            <GridItem pl='2' mt="-10px" h="50">
              <Input borderColor="black" bg="#E2E8F0" placeholder='CRM' size='sm' h="40px" w="268px" />
            </GridItem>
          </Grid>
        </Center>
      </Flex >
    </Center>
  );
};

export default CardListaMedicos;
