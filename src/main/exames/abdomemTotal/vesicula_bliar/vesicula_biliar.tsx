import { Box, Checkbox, Select, Grid, GridItem, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function VesiculaBiliar() {
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

                <TituloNomeExame titulo='Vesícula Biliar' />

                <Box
                    mt='10px'
                    mb='20px'
                    display='flex'
                >
                    <Grid
                        templateColumns='repeat(4, 1fr)'
                        templateRows='repeat(2, 1fr)'
                        gap={3}
                    >
                        <GridItem w='100%' h='28px'>
                            <Checkbox>Normal</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px' ml='-80px'>
                            <Checkbox >Cálculo Único</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px' >
                            <Checkbox ml='-80px'>Múltiplos cálculos, o maior mede:</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px' ml='10px'>
                            <Checkbox>Pólipo único</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px'>
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px' ml='-80px'>
                            <Input w='160px' placeholder='mm' />
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px' ml='-80px'>
                            <Input w='160px' placeholder='mm' />
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px' ml='10px'>
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
                    templateColumns='repeat(6, 1fr)'
                    templateRows='repeat(2, 1fr)'
                    gap={3}
                >
                    <GridItem w='258px' h='28px'>
                        <Checkbox>Múltiplos Pólipos, o maior mede:</Checkbox>
                    </GridItem>
                    <GridItem w='100%' h='28px'>
                        <Checkbox ml='10px'>Colesterol</Checkbox>
                    </GridItem>
                    <GridItem w='100%' h='28px'>
                        <Checkbox>Não visibilizado</Checkbox>
                    </GridItem>
                    <GridItem w='100%' h='28px'>
                        <Checkbox>Em Porcelana</Checkbox>
                    </GridItem>
                    <GridItem w='100%' h='28px'>
                        <Checkbox>Bile Espezza</Checkbox>
                    </GridItem>
                    <GridItem w='75px' h='28px'>
                        <Checkbox>Vazia</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px' ml='80px'>
                        <Input w='100px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px'>

                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px'>
                        <Select
                            w='150px'>
                            <option value='' disabled selected>Selecione</option>
                            <option value='ausenciaCirurgica'>Ausência cirúrgica</option>
                            <option value='interposicaoGasosa'>Interposição gasosa</option>
                        </Select>
                    </GridItem>
                </Grid>
            </Box>
        </Box >
    );
}

export default VesiculaBiliar;