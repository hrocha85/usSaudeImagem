import { Box, Checkbox, Select, Grid, GridItem, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Baco() {
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
            padding='24px 15px 0px 15px'
            mt='15px'
        >
            <Box
                borderBottom='1px'>

                <TituloNomeExame titulo='Baço' />

                <Box
                    mt='10px'
                    mb='20px'
                    display='flex'
                >
                    <Grid
                        templateColumns='repeat(5, 1fr)'
                        templateRows='repeat(2, 1fr)'
                        gap={3}
                    >
                        <GridItem w='100%' h='28px'>
                            <Checkbox>Normal</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px' >
                            <Checkbox ml='-65px'>Aumentado com ecotextura</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px'>
                            <Checkbox>Não visibilizado</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px' ml='10px'>
                            <Checkbox>Baço Acessório</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px'>
                            <Checkbox>Calcificalções</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px'>

                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px' ml='-65px'>
                            <Select
                                w='160px'>
                                <option value='' disabled selected>Homogênea</option>
                                <option value='Homogênea'>Homogênea</option>
                                <option value='Heterogênea'>Heterogênea</option>
                            </Select>
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px'>
                            <Select
                                w='160px'>
                                <option value='ausenciaCirurgica'>ausência cirúrgica</option>
                                <option value='interposicaoGasosa'>interposição gasosa</option>
                            </Select>
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px' ml='10px'>
                            <Input w='160px' placeholder='mm' />
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px'>
                            <Input w='160px' placeholder='mm' />
                        </GridItem>

                    </Grid>
                </Box>
            </Box >

            <Box
                mt='20px'
                h='100px'
            >
                <Grid
                    templateColumns='repeat(1, 1fr)'
                    templateRows='repeat(2, 1fr)'
                    gap={3}
                >
                    <GridItem w='100%' h='28px'>
                        <Checkbox>Cisto</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px'>
                        <Input w='200px' placeholder='mm' />
                    </GridItem>
                </Grid>
            </Box>
        </Box >
    );
}

export default Baco;