import { Box, Checkbox, Stack, Text, Select, Grid, GridItem } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";


function Figado() {
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
        >
            <Box
                borderBottom='1px'>

                <TituloNomeExame titulo='Figado' />

                <Box>
                    <Checkbox mr='25px'>Normal</Checkbox>
                    <Checkbox mr='25px'>Hepatite Aguda</Checkbox>
                    <Checkbox mr='25px'>Hepatopatia Crônica</Checkbox>
                    <Checkbox mr='53px'>Dimensões</Checkbox>
                    <Checkbox >Esteatose</Checkbox>
                </Box>

                <Box
                    mt='10px'
                    mb='20px'
                    display='flex'
                >
                    <Select placeholder='Select option'
                        ml='450px'
                        w='150px'>
                        <option value='option1'>Aumentadas</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Select placeholder='Select option'
                        ml='10px'
                        w='150px'>
                        <option value='option1'>Leves</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Box>
            </Box>
            {/* ------------------------------------------------------------------------------------------------------------ */}
            <Box
                borderBottom='1px'
                mt='20px'
                h='130px'
            >
                <Grid
                    templateColumns='repeat(5, 1fr)'
                    templateRows='repeat(3, 1fr)'
                    gap={3}
                >
                    <GridItem w='100%' h='28px'>
                        <Checkbox>Calcificação</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-5px'>
                        <Checkbox>Cisto 01</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-10px'>
                        <Checkbox>Cisto 02</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-15px'>
                        <Checkbox>Cisto 03</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px'>
                        <Checkbox ml='-40px'>Múltiplos cistos, o maior:</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px'>
                        <Select placeholder='select'
                            w='150px'>
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px' ml='-5px'>
                        <Select placeholder='Select option'
                            w='150px'>
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>

                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px' ml='-10px'>
                        <Select placeholder='aqui'
                            w='150px'>
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px' ml='-15px'>
                        <Select placeholder='Select option'
                            w='130px' >
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px' ml='-40px'>
                        <Select placeholder='aqui option'
                            w='160px' >
                            <option value='option1'>Ecogenicidade</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>

                    </GridItem>

                    <GridItem w='100%' h='28px' >
                        <Select placeholder='Select option'
                            w='150px' >
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>

                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-5px'>
                        <Select placeholder='Select option'
                            w='150px' >
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-10px'>
                        <Select placeholder='Select option'
                            w='150px' >
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-15px'>
                        <Select placeholder='Select option'
                            w='130px' >
                            <option value='option1'>option 2</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-40px'>
                        <Select placeholder='Select option'
                            w='160px' >
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                </Grid>

            </Box>

            {/* ------------------------------------------------------------------------------------------------------------ */}

            <Box
                mt='20px'
                h='130px'
            >
                <Grid
                    templateColumns='repeat(5, 1fr)'
                    templateRows='repeat(5, 1fr)'
                    gap={3}
                >
                    <GridItem w='100%' h='28px'>
                        <Checkbox>Nódulo 01</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-5px'>
                        <Checkbox>Nódulo 02</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-10px'>
                        <Checkbox>Nódulo 03</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-15px'>
                        <Checkbox>Nódulo 01</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px'>
                        <Checkbox ml='-55px'>Múltiplos Nódulos, o maior:</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px'>
                        <Select placeholder='Localizado'
                            w='150px'>
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>
                    <GridItem w='100%' h='28px' mt='-8px' ml='-5px'>

                        <Select placeholder='Localizado'
                            w='150px'>
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>

                    </GridItem>
                    <GridItem w='100%' h='28px' mt='-8px' ml='-10px'>

                        <Select placeholder='Localizado'
                            w='150px'>
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px' ml='-15px'>
                        <Select placeholder='Localizado'
                            w='130px' >
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px' ml='-40px'>

                        <Select placeholder='Localizado'
                            w='160px' >
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>

                    </GridItem>

                    <GridItem w='100%' h='28px' >
                        <Select placeholder='mm'
                            w='150px' >
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-5px'>
                        <Select placeholder='mm'
                            w='150px' >
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-10px'>
                        <Select placeholder='mm'
                            w='150px' >
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-15px'>
                        <Select placeholder='mm'
                            w='130px' >
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-40px'>
                        <Select placeholder='mm'
                            w='160px' >
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px'>
                        <Select placeholder='Localizado'
                            w='150px' mt='10px'>
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-5px'>
                        <Select placeholder='Localizado'
                            w='150px' mt='10px'>
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-10px'>
                        <Select placeholder='Localizado'
                            w='150px' mt='10px'>
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-15px'>
                        <Select placeholder='Localizado'
                            w='130px' mt='10px'>
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-40px'>
                        <Select placeholder='Localizado'
                            w='160px' mt='10px'>
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px'>
                        <Select placeholder='Ecogenicidade'
                            w='150px' mt='20px'>
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-5px'>
                        <Select placeholder='Ecogenicidade'
                            w='150px' mt='20px'>
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-10px'>
                        <Select placeholder='Ecogenicidade'
                            w='150px' mt='20px'>
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-15px'>
                        <Select placeholder='Ecogenicidade'
                            w='130px' mt='20px'>
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-40px'>
                        <Select placeholder='Ecogenicidade'
                            w='160px' mt='20px'>
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

export default Figado;