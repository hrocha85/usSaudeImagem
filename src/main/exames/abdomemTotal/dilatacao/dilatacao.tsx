import { Box, Checkbox, Stack, Text, Select, Grid, GridItem, Input, Center } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";


function Dilatacao() {
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
            padding='24px 15px 130px 15px'
            mt='20px'
        >
            <Box>
                <TituloNomeExame titulo='Dilatação' />

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
                            <Checkbox>Dilatação no rim direito</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px' ml='20px'>
                            <Checkbox >Dilatação no rim direito</Checkbox>
                        </GridItem>


                        <GridItem w='100%' h='28px' mt='-8px' ml=''>
                            <Select placeholder='select'
                                w='160px'>
                                <option value='option1'>Aumentadas</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px' ml='5'>
                            <Select placeholder='select'
                                w='160px'>
                                <option value='option1'>Aumentadas</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </GridItem>

                    </Grid>
                </Box>
            </Box >

            {/* ------------------------------------------------------------------------------------------------------------ */}
            <Box
                //mt='20px'
                h='220px'>
                <TituloNomeExame titulo='Cálculos' />

                <Grid
                    templateColumns='repeat(2, 1fr)'
                    templateRows='repeat(6, 1fr)'
                    gap={2}
                    w='450px'
                >
                    <GridItem w='100%' h='28px'>
                        <Checkbox>Nódulo 01</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px'>
                        <Checkbox>Nódulo 02</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='40px' mt='-10px'>
                        <Input w='160px' placeholder='0 x 0 mm' />
                    </GridItem>

                    <GridItem w='100%' h='40px' mt='-10px'>
                        <Input w='160px' placeholder='0 x 0 mm' />
                    </GridItem>

                    <GridItem w='100%' h='40px' mt='-10px'>
                        <Select placeholder='Localizado no'
                            w='160px' >
                            <option value='option1'>Ecogenicidade</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='40px' mt='-10px' >
                        <Select placeholder='Localizado no'
                            w='160px' >
                            <option value='option1'>Ecogenicidade</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>


                    <GridItem w='100%' h='40px' mt='-10px'>
                        <Input w='160px' placeholder='00 x 00' />
                    </GridItem>

                    <GridItem w='100%' h='40px' mt='-10px'>
                        <Input w='160px' placeholder='00 x 00' />
                    </GridItem>

                    <GridItem w='100%' h='40px' mt='-10px' >
                        <Select placeholder='Contorno'
                            w='160px' >
                            <option value='option1'>Ecogenicidade</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='40px' >
                        <Select placeholder='Contorno'
                            w='160px' mt='-10px'>
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>
                    <GridItem w='100%' h='40px' mt='-10px' >
                        <Select placeholder='Ecogenicidade'
                            w='160px' >
                            <option value='option1'>Ecogenicidade</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='40px' >
                        <Select placeholder='Ecogenicidade'
                            w='160px' mt='-10px'>
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                </Grid>
            </Box>
        </Box>
    );
}

export default Dilatacao;