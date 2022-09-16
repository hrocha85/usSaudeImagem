import { Box, Checkbox, Select, Grid, GridItem, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function RimEsquerdo() {
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

                <TituloNomeExame titulo='Rim Esquerdo' />

                <Box
                    mt='10px'
                    mb='20px'
                    display='flex'
                >
                    <Grid
                        templateColumns='repeat(5, 1fr)'
                        templateRows='repeat(3, 1fr)'
                        gap={3}
                    >
                        <GridItem w='100%' h='28px'>
                            <Checkbox>Normal</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px' ml='-10'>
                            <Checkbox>Ausente</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px' ml='-10'>
                            <Checkbox>Medidas</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px' >
                            <Checkbox ml='-30px'>Dimensões Reduzidas</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px'>
                            <Checkbox>Rim Pélvico</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px' />

                        <GridItem w='100%' h='28px' mt='-8px' ml='-40px'>
                            <Select placeholder='Homogênea'
                                w='160px'>
                                <option value='option1'>Aumentadas</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px' ml='-40px'>
                            <Input w='162px' placeholder='mm' />
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px' ml='-40px' />
                        <GridItem w='100%' h='28px' mt='-8px' ml='-40px' />
                        <GridItem w='50px' h='28px' mt='-8px' />
                        <GridItem w='50px' h='28px' mt='-8px' />

                        <GridItem w='100%' h='28px' ml='-40px'>
                            <Input w='162px' placeholder='Parênquima (mm)' />
                        </GridItem>

                    </Grid>
                </Box>
            </Box >

            <Box
                mt='20px'
                h='100px'
            >
                <Grid
                    templateColumns='repeat(2, 1fr)'
                    templateRows='repeat(2, 1fr)'
                    gap={3}
                    w='400px'
                >
                    <GridItem w='100%' h='28px'>
                        <Checkbox>Rim em Ferradura</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px'>
                        <Checkbox>Nefropatia Crônica</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px'>
                        <Select placeholder='Homogênea'
                            w='160px'>
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px'>
                        <Select placeholder='Homogênea'
                            w='160px'>
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>
                </Grid>
            </Box>
        </Box >
    );
}

export default RimEsquerdo;