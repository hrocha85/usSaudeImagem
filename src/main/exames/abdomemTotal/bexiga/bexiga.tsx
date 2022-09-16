import { Box, Checkbox, Stack, Text, Select, Grid, GridItem, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Bexiga() {
    const altura = '100%'
    const largura = '890px'

    return (

        <Box
            bg="#FAFAFA"
            w={largura}
            h={altura}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="10.85px"
            boxShadow="md"
            padding='24px 15px 48px 15px'
            mt='15px'
        >
            <Box
                borderBottom='1px'>

                <TituloNomeExame titulo='Bexiga' />

                <Box
                    mb='20px'>
                    <Checkbox mr='25px'>Normal</Checkbox>
                    <Checkbox mr='25px'>De Esforço</Checkbox>
                    <Checkbox mr='25px'>Vazia</Checkbox>
                    <Checkbox>Omitir Bexiga</Checkbox>
                </Box>

            </Box>
            {/* ------------------------------------------------------------------------------------------------------------ */}
            <Box
                mt='20px'
            >
                <Grid
                    templateColumns='repeat(3, 1fr)'
                    templateRows='repeat(2, 1fr)'
                    gap={3}
                >
                    <GridItem w='100%' h='28px'>
                        <Checkbox>Cálculo mede:</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-80px'>
                        <Checkbox>Cálculo mede:</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-160px'>
                        <Checkbox>Cálculo mede:</Checkbox>
                    </GridItem>


                    <GridItem w='100%' h='28px' mt='-8px'>
                        <Input w='160px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px' ml='-80px'>
                        <Input w='160px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px' ml='-160px'>
                        <Input w='160px' placeholder='mm' />
                    </GridItem>

                </Grid>
            </Box>
        </Box>
    );
}

export default Bexiga;