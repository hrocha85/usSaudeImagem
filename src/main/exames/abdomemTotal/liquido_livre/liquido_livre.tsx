import { Box, Checkbox, Text, Select, Grid, GridItem, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function LiquidoLivre() {
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
            padding='24px 15px 20px 15px'
            mt='15px'
        >
            <Box
            >

                <TituloNomeExame titulo='Líquido Livre' />

                <Box
                    mt='10px'
                    mb='20px'
                    display='flex'
                >
                    <Grid
                        templateColumns='repeat(2, 1fr)'
                        templateRows='repeat(2, 1fr)'
                        gap={3}
                    >
                        <GridItem w='100%' h='28px'>
                            <Checkbox>Normal</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px' >
                            <Checkbox >Cisto</Checkbox>
                        </GridItem>

                        <GridItem w='100%' mt='-8px'>

                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px' >
                            <Select
                                w='150px'>
                                <option value='' disabled selected>Quantidade</option>
                                <option value='Pequena'>Pequena</option>
                                <option value='Moderada'>Moderada</option>
                                <option value='Grande'>Grande</option>
                            </Select>
                        </GridItem>
                    </Grid>
                </Box>
            </Box >
        </Box >
    );
}

export default LiquidoLivre;