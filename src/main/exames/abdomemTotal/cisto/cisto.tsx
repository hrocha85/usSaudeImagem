import { Box, Checkbox, Select, Grid, GridItem, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Cisto() {
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
                <TituloNomeExame titulo='Cisto' />
                <Box
                    mt='10px'
                    mb='30px'
                    display='flex'
                >
                    <Grid
                        templateColumns='repeat(5, 1fr)'
                        templateRows='repeat(4, 1fr)'
                        gap={3}
                    >
                        <GridItem w='100%' h='28px'>
                            <Checkbox>Cisto 01</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px'>
                            <Checkbox>Cisto 02</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px'>
                            <Checkbox>Cisto 03</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px' >
                            <Checkbox>Cisto 04</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px'>
                            <Checkbox>Rim Policístico</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px'>
                            <Input w='162px' placeholder='mm' />
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px'>
                            <Input w='162px' placeholder='mm' />
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px'>
                            <Input w='162px' placeholder='mm' />
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px'>
                            <Input w='162px' placeholder='mm' />
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px'  >
                            <Select placeholder='Rim Direito'
                                w='160px'>
                                <option value='option1'>Aumentadas</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </GridItem>
                        <GridItem w='100%' h='28px'  >
                            <Select placeholder='Rim Direito'
                                w='160px'>
                                <option value='option1'>Aumentadas</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </GridItem>
                        <GridItem w='100%' h='28px'  >
                            <Select placeholder='Rim Direito'
                                w='160px'>
                                <option value='option1'>Aumentadas</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </GridItem>
                        <GridItem w='100%' h='28px' >
                            <Select placeholder='Rim Direito'
                                w='160px'>
                                <option value='option1'>Aumentadas</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </GridItem>

                        <GridItem w='100%' h='28px'>
                            <Select placeholder='Rim Direito'
                                w='160px'>
                                <option value='option1'>Aumentadas</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </GridItem>

                        <GridItem w='100%' h='28px' />

                        <GridItem w='100%' h='28px'  >
                            <Select placeholder='Rim Direito'
                                w='160px' mt='8px'>
                                <option value='option1'>Aumentadas</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </GridItem>
                        <GridItem w='100%' h='28px'  >
                            <Select placeholder='Rim Direito'
                                w='160px' mt='8px'>
                                <option value='option1'>Aumentadas</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </GridItem>
                        <GridItem w='100%' h='28px'  >
                            <Select placeholder='Rim Direito'
                                w='160px' mt='8px'>
                                <option value='option1'>Aumentadas</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </GridItem>
                        <GridItem w='100%' h='28px'>
                            <Select placeholder='Rim Direito'
                                w='160px' mt='8px'>
                                <option value='option1'>Aumentadas</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </GridItem>


                    </Grid>
                </Box>
            </Box >

            <Box
                mt='20px'
                h='150px'
            >
                <Grid
                    templateColumns='repeat(2, 1fr)'
                    templateRows='repeat(3, 1fr)'
                    gap={3}
                    w='100%'
                >
                    <GridItem w='100%' h='28px'>
                        <Checkbox>Múltiplos cistos no rim direito, o maior mede</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px'>
                        <Checkbox>Múltiplos cistos no rim esquerdo, o maior mede</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px'>
                        <Input w='162px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px'>
                        <Input w='162px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px' >
                        <Select placeholder='Localizado no'
                            w='160px'>
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px'>
                        <Select placeholder='Localizado no'
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

export default Cisto;