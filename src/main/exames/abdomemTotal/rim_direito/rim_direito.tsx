import { Box, Checkbox, Stack, Text, Select, Grid, GridItem, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";


function RimDireito() {
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
                <TituloNomeExame titulo='Rim Direito' />

                <Box
                    mt='10px'
                    mb='20px'
                    display='flex'
                >
                    <Grid
                        templateColumns='repeat(4, 1fr)'
                        templateRows='repeat(3, 1fr)'
                        gap={3}
                    >
                        <GridItem w='100%' h='28px'>
                            <Checkbox>Presente</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px' ml='-80px'>
                            <Checkbox >Ausente</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px' >
                            <Checkbox ml='-80px'>Medidas</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px' >
                            <Checkbox>Dimensões	Reduzidas</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px' />


                        <GridItem w='100%' h='28px' mt='-8px' ml='-80px'>
                            <Select
                                w='150px'>
                                <option value='' disabled selected>Selecione</option>
                                <option value='ausenciaCirurgica'>Ausência cirúrgica</option>
                                <option value='interposicaoGasosa'>Interposição gasosa</option>
                            </Select>
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px' ml='-80px'>
                            <Input w='165px' placeholder='00 x 00' />
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px' />
                        <GridItem w='100%' h='28px' mt='-8px' />
                        <GridItem w='100%' h='28px' mt='-8px' />

                        <GridItem w='100%' h='28px' ml='-80px'>
                            <Input w='165px' placeholder='Parênquima (mm)' />
                        </GridItem>



                    </Grid>
                </Box>
            </Box >

            {/* ------------------------------------------------------------------------------------------------------------ */}
            <Box
                mt='20px'
                h='220px'
                borderBottom='1px'>
                <TituloNomeExame titulo='Cálculos' />
                <Grid
                    templateColumns='repeat(4, 1fr)'
                    templateRows='repeat(3, 1fr)'
                    gap={3}
                >
                    <GridItem w='100%' h='28px'>
                        <Checkbox>Cálculo 01</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-5px'>
                        <Checkbox>Cálculo 02</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-10px'>
                        <Checkbox>Cálculo 03</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-15px'>
                        <Checkbox>Cálculo 04</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px'>
                        <Input w='160px' placeholder='00 x 00' />
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px' ml='-5px'>
                        <Input w='160px' placeholder='00 x 00' />
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px' ml='-10px'>
                        <Input w='160px' placeholder='00 x 00' />
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px' ml='-15px'>
                        <Input w='160px' placeholder='00 x 00' />
                    </GridItem>

                    <GridItem w='100%' h='28px' >
                        <Select
                            w='160px' >
                            <option value='' disabled selected>Localizado no</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                        </Select>

                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-5px' >
                        <Select
                            w='160px' >
                            <option value='' disabled selected>Localizado no</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                        </Select>

                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-10px'>
                        <Select
                            w='160px' >
                            <option value='' disabled selected>Localizado no</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-15px'>
                        <Select
                            w='160px' >
                            <option value='' disabled selected>Localizado no</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='8px'>
                        <Select
                            w='160px' >
                            <option value='' disabled selected>Do</option>
                            <option value='rimDireito'>Rim direito</option>
                            <option value='rimEsquerdo'>Rim esquerdo</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='8px' ml='-5px'>
                        <Select
                            w='160px' >
                            <option value='' disabled selected>Do</option>
                            <option value='rimDireito'>Rim direito</option>
                            <option value='rimEsquerdo'>Rim esquerdo</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='8px' ml='-10px'>
                        <Select
                            w='160px' >
                            <option value='' disabled selected>Do</option>
                            <option value='rimDireito'>Rim direito</option>
                            <option value='rimEsquerdo'>Rim esquerdo</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='8px' ml='-15px'>
                        <Select
                            w='160px' >
                            <option value='' disabled selected>Do</option>
                            <option value='rimDireito'>Rim direito</option>
                            <option value='rimEsquerdo'>Rim esquerdo</option>
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
                    templateColumns='repeat(3, 1fr)'
                    templateRows='repeat(4, 1fr)'
                    gap={3}
                >
                    <GridItem w='100%' h='45px'>
                        <Checkbox>Mútiplos Cáculos no rim direito, o maior mede</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='45px' ml='-5px'>
                        <Checkbox>Mútiplos Cáculos no rim esquerdo, o maior mede</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='45px' ml='-10px'>
                        <Checkbox>Cálculo Ureteral mede</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='45px' mt='-8px'>
                        <Input w='160px' placeholder='00 x 00' />
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px' ml='-5px'>
                        <Input w='160px' placeholder='00 x 00' />
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px' ml='-10px'>
                        <Input w='160px' placeholder='00 x 00' />
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-15px'>
                        <Select
                            w='160px' >
                            <option value='' disabled selected>Localizado no</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-15px' ml='-5px'>

                        <Select
                            w='160px' >
                            <option value='' disabled selected>Localizado no</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-15px' ml='-10px' >
                        <Select
                            w='160px' >
                            <option value='' disabled selected>Localizado no</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-20px'>
                        {/* <Select placeholder='mm'
                            w='160px' >
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select> */}
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-20px' ml='-5px'>
                        {/* <Select placeholder='mm'
                            w='160px' >
                            <option value='option1'>Aumentadas</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select> */}
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-20px' ml='-10px'>
                        <Select
                            w='160px' >
                            <option value='' disabled selected>Do ureter</option>
                            <option value='direito'>Direito</option>
                            <option value='esquerdo'>Esquerdo</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </GridItem>

                </Grid>
            </Box>
        </Box>
    );
}

export default RimDireito;