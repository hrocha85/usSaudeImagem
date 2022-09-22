import { Box, Checkbox, Stack, Text, Select, Grid, GridItem, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";


function RimDireito() {
    const altura = '100%'
    const largura = '66%'

    return (

        <Box
            bg="#FAFAFA"
            w={largura}
            h={altura}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="10.85px"
            boxShadow="md"
            padding='24px 15px 10px 15px'
            mt='20px'
        >
            <Box>
                <TituloNomeExame titulo='Rim Direito' />

                <Box
                    gap='25px'
                    display='flex'
                    flexWrap='wrap'
                    mb='10px'
                >

                    <Box w='100px' >
                        <Checkbox>Presente</Checkbox>
                    </Box>

                    <Box w='150px' >
                        <Checkbox >Ausente
                        </Checkbox>
                        <Select
                            w='100%'>
                            <option value='' disabled selected>Selecione</option>
                            <option value='ausenciaCirurgica'>Ausência cirúrgica</option>
                            <option value='interposicaoGasosa'>Interposição gasosa</option>
                        </Select>
                    </Box>

                    <Box w='165px'  >
                        <Checkbox >Medidas</Checkbox>
                        <Input w='100%' placeholder='00 x 00' />

                        <Input mt='5px' w='100%' placeholder='Parênquima(mm)' />
                    </Box>

                    <Box w='200px'  >
                        <Checkbox>Dimensões	Reduzidas</Checkbox>
                    </Box>
                </Box>
            </Box >

            {/* ------------------------------------------------------------------------------------------------------------ */}

            <Box
                mt='20px'
                h='100%'
                borderBottom='1px'
                mb='20px'>
                <TituloNomeExame titulo='Cálculos' />
                <Box
                    gap='25px'
                    display='flex'
                    flexWrap='wrap'
                    mb='10px'>


                    <Box w='150px'>
                        <Checkbox>Cálculo 01</Checkbox>
                        <Input placeholder='mm' />
                        <Select
                            mt='5px'
                        >
                            <option value='' disabled selected>Localizado no</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                        </Select>
                        <Select
                            mt='5px'>
                            <option value='' disabled selected>Do</option>
                            <option value='rimDireito'>Rim direito</option>
                            <option value='rimEsquerdo'>Rim esquerdo</option>
                        </Select>
                    </Box>

                    <Box w='150px' >
                        <Checkbox>Cálculo 02</Checkbox>
                        <Input placeholder='mm' />
                        <Select
                            mt='5px'
                        >
                            <option value='' disabled selected>Localizado no</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                        </Select>
                        <Select
                            mt='5px'
                        >
                            <option value='' disabled selected>Do</option>
                            <option value='rimDireito'>Rim direito</option>
                            <option value='rimEsquerdo'>Rim esquerdo</option>
                        </Select>
                    </Box>

                    <Box w='150px' >
                        <Checkbox>Cálculo 03</Checkbox>
                        <Input placeholder='mm' />
                        <Select
                            mt='5px'
                        >
                            <option value='' disabled selected>Localizado no</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                        </Select>
                        <Select
                            mt='5px'
                        >
                            <option value='' disabled selected>Do</option>
                            <option value='rimDireito'>Rim direito</option>
                            <option value='rimEsquerdo'>Rim esquerdo</option>
                        </Select>
                    </Box>

                    <Box w='150px' >
                        <Checkbox>Cálculo 04</Checkbox>
                        <Input placeholder='mm' />
                        <Select
                            mt='5px'
                        >
                            <option value='' disabled selected>Localizado no</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                        </Select>
                        <Select
                            mt='5px'
                        >
                            <option value='' disabled selected>Do</option>
                            <option value='rimDireito'>Rim direito</option>
                            <option value='rimEsquerdo'>Rim esquerdo</option>
                        </Select>
                    </Box>
                </Box>

            </Box>

            {/* ------------------------------------------------------------------------------------------------------------ */}

            <Box
                gap='25px'
                display='flex'
                flexWrap='wrap'
                mb='10px'
            >

                <Box w='250px'>
                    <Checkbox>Mútiplos Cáculos no rim direito, o maior mede</Checkbox>
                    <Input placeholder='00 x 00' />
                    <Select
                        mt='5px'
                    >
                        <option value='' disabled selected>Localizado no</option>
                        <option value='tercoSuperior'>Terço superior</option>
                        <option value='tercoMedio'>Terço médio</option>
                        <option value='tercoInferior'>Terço inferior</option>
                    </Select>
                    <Select
                        mt='5px'
                    >
                        <option value='' disabled selected>Do ureter</option>
                        <option value='direito'>Direito</option>
                        <option value='esquerdo'>Esquerdo</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Box>

                <Box w='250px' >
                    <Checkbox>Mútiplos Cáculos no rim esquerdo, o maior mede</Checkbox>
                    <Input placeholder='00 x 00' />
                    <Select
                        mt='5px'
                    >
                        <option value='' disabled selected>Localizado no</option>
                        <option value='tercoSuperior'>Terço superior</option>
                        <option value='tercoMedio'>Terço médio</option>
                        <option value='tercoInferior'>Terço inferior</option>
                    </Select>
                    <Select
                        mt='5px'
                    >
                        <option value='' disabled selected>Do ureter</option>
                        <option value='direito'>Direito</option>
                        <option value='esquerdo'>Esquerdo</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Box>

                <Box w='250px' >
                    <Checkbox>Cálculo Ureteral mede</Checkbox>
                    <Input
                        mt='10px'
                        placeholder='00 x 00' />
                    <Select
                        mt='5px'
                    >
                        <option value='' disabled selected>Localizado no</option>
                        <option value='tercoSuperior'>Terço superior</option>
                        <option value='tercoMedio'>Terço médio</option>
                        <option value='tercoInferior'>Terço inferior</option>
                    </Select>
                    <Select
                        mt='5px'
                    >
                        <option value='' disabled selected>Do ureter</option>
                        <option value='direito'>Direito</option>
                        <option value='esquerdo'>Esquerdo</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Box>
            </Box>
        </Box >
    );
}

export default RimDireito;