import { Box, Checkbox, Stack, Text, Select, Grid, Input, Center } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";


function Dilatacao() {
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
            padding='24px 15px 24px 15px'
            mt='20px'
        >
            <Box>
                <TituloNomeExame titulo='Dilatação' />

                <Box
                    gap='30px'
                    display='flex'
                    flexWrap='wrap'
                    mt='20px'
                    mb='10px'
                >

                    <Box w='200px' >
                        <Checkbox>Dilatação no rim direito</Checkbox>
                        <Select>
                            <option value='' disabled selected>Selecione</option>
                            <option value='leve'>Leve</option>
                            <option value='moderada'>Moderada</option>
                            <option value='acentuada'>Acentuada</option>
                        </Select>
                    </Box>

                    <Box w='200px'>
                        <Checkbox >Dilatação no rim direito</Checkbox>
                        <Select>
                            <option value='' disabled selected>Selecione</option>
                            <option value='leve'>Leve</option>
                            <option value='moderada'>Moderada</option>
                            <option value='acentuada'>Acentuada</option>
                        </Select>
                    </Box>
                </Box>
            </Box >

            {/* ------------------------------------------------------------------------------------------------------------ */}

            < Box
                //mt='20px'
                h='100%' >
                <TituloNomeExame titulo='Cálculos' />

                <Box
                    gap='30px'
                    display='flex'
                    flexWrap='wrap'
                    mt='20px'
                    mb='10px'>

                    <Box w='200px' >
                        <Checkbox>Nódulo 01</Checkbox>
                        <Input w='160px' placeholder='0 x 0 mm' />
                        <Select
                            mt='5px'
                            w='160px' >
                            <option value='' disabled selected>Localizado no</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço medio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                        </Select>
                        <Input mt='5px' w='160px' placeholder='Do' />
                        <Select
                            mt='5px'
                            w='160px'>
                            <option value='' disabled selected>Contornos</option>
                            <option value='regulares'>Regulares</option>
                            <option value='irregulares'>Irregulares</option>
                        </Select>
                        <Select
                            mt='5px'
                            w='160px'>
                            <option value='' disabled selected>Ecogenicidade</option>
                            <option value='hipoecogenico'>Hipoecogênico</option>
                            <option value='hiperecogenico'>Hiperecogênico</option>
                            <option value='isoecogenico'>Isoecogênico</option>
                        </Select>
                    </Box>

                    <Box w='200px' >
                        <Checkbox>Nódulo 02</Checkbox>
                        <Input w='160px' placeholder='0 x 0 mm' />
                        <Select
                            mt='5px'
                            w='160px' >
                            <option value='' disabled selected>Localizado no</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço medio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                        </Select>
                        <Input mt='5px' w='160px' placeholder='Do' />
                        <Select
                            mt='5px'
                            w='160px'>
                            <option value='' disabled selected>Contornos</option>
                            <option value='regulares'>Regulares</option>
                            <option value='irregulares'>Irregulares</option>
                        </Select>
                        <Select
                            mt='5px'
                            w='160px'>
                            <option value='' disabled selected>Ecogenicidade</option>
                            <option value='hipoecogenico'>Hipoecogênico</option>
                            <option value='hiperecogenico'>Hiperecogênico</option>
                            <option value='isoecogenico'>Isoecogênico</option>
                        </Select>
                    </Box>
                </Box>
            </Box >
        </Box >
    );
}

export default Dilatacao;