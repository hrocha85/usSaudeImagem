import { Box, Checkbox, Select, Grid, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Cisto() {
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
            padding='24px 15px 20px 15px'
            mt='15px'
        >
            <Box
                borderBottom='1px'
                mb='20px'>
                <TituloNomeExame titulo='Cisto' />
                <Box
                    mt='10px'
                    mb='30px'
                    gap='25px'
                    display='flex'
                    flexWrap='wrap'
                >
                    <Box w='125px' >
                        <Checkbox>Cisto 01</Checkbox>
                        <Input placeholder='mm' />
                        <Select
                            mt='5px'
                            w='125px'>
                            <option value='' disabled selected>No</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                            <option value='parapielico'>Parapiélico</option>
                        </Select>
                        <Select
                            mt='5px'
                            w='125px' >
                            <option value='' disabled selected>Do</option>
                            <option value='rimDireito'>Rim direito</option>
                            <option value='rimEsquerdo'>Rim esquerdo</option>
                        </Select>
                    </Box>

                    <Box w='125px' >
                        <Checkbox>Cisto 02</Checkbox>
                        <Input placeholder='mm' />
                        <Select
                            mt='5px'
                            w='125px'>
                            <option value='' disabled selected>No</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                            <option value='parapielico'>Parapiélico</option>
                        </Select>
                        <Select
                            mt='5px'
                            w='125px' >
                            <option value='' disabled selected>Do</option>
                            <option value='rimDireito'>Rim direito</option>
                            <option value='rimEsquerdo'>Rim esquerdo</option>
                        </Select>
                    </Box>

                    <Box w='125px' >
                        <Checkbox>Cisto 03</Checkbox>
                        <Input placeholder='mm' />
                        <Select
                            mt='5px'
                        >
                            <option value='' disabled selected>No</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                            <option value='parapielico'>Parapiélico</option>
                        </Select>
                        <Select
                            mt='5px'
                        >
                            <option value='' disabled selected>Do</option>
                            <option value='rimDireito'>Rim direito</option>
                            <option value='rimEsquerdo'>Rim esquerdo</option>
                        </Select>
                    </Box>

                    <Box w='125px'  >
                        <Checkbox>Cisto 04</Checkbox>
                        <Input placeholder='mm' />
                        <Select
                            mt='5px'
                        >
                            <option value='' disabled selected>No</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                            <option value='parapielico'>Parapiélico</option>
                        </Select>
                        <Select
                            mt='5px'
                        >
                            <option value='' disabled selected>Do</option>
                            <option value='rimDireito'>Rim direito</option>
                            <option value='rimEsquerdo'>Rim esquerdo</option>
                        </Select>
                    </Box>

                    <Box w='200px' >
                        <Checkbox>Rim Policístico</Checkbox>
                        <Select
                            w='160px'>
                            <option value='' disabled selected>Selecione</option>
                            <option value='rimDireito'>Rim direito</option>
                            <option value='rimEsquerdo'>Rim esquerdo</option>
                            <option value='bilateral'>Bilateral</option>
                        </Select>
                    </Box>
                </Box>
            </Box >

            <Box
                gap='25px'
                display='flex'
                flexWrap='wrap'
                mb='10px'
            >
                <Box w='400px' >
                    <Checkbox>Múltiplos cistos no rim direito, o maior mede</Checkbox>
                    <Input placeholder='mm'
                        w='200px' />
                    <Select
                        mt='5px'
                        w='200px'
                    >
                        <option value='' disabled selected>Localizado no</option>
                        <option value='tercoSuperior'>Terço superior</option>
                        <option value='tercoMedio'>Terço médio</option>
                        <option value='tercoInferior'>Terço inferior</option>
                        <option value='parapielico'>Parapiélico</option>
                    </Select>
                </Box>

                <Box w='400px' >
                    <Checkbox>Múltiplos cistos no rim esquerdo, o maior mede</Checkbox>
                    <Input placeholder='mm'
                        w='200px' />
                    <Select
                        mt='5px'
                        w='200px'
                    >
                        <option value='' disabled selected>Localizado no</option>
                        <option value='tercoSuperior'>Terço superior</option>
                        <option value='tercoMedio'>Terço médio</option>
                        <option value='tercoInferior'>Terço inferior</option>
                        <option value='parapielico'>Parapiélico</option>
                    </Select>
                </Box>


            </Box>
        </Box >
    );
}

export default Cisto;