import { Box, Checkbox, Select, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function RimEsquerdo() {
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

                <TituloNomeExame titulo='Rim Esquerdo' />

                <Box
                    gap='25px'
                    display='flex'
                    flexWrap='wrap'
                    mb='10px'
                >

                    <Box w='80px' >
                        <Checkbox>Normal</Checkbox>
                    </Box>

                    <Box w='150px' >
                        <Checkbox>Ausente</Checkbox>
                        <Select
                        >
                            <option value='' disabled selected>Homogênea</option>
                            <option value='ausenciaCirurgica'>Ausência cirúrgica</option>
                            <option value='interposicaoGasosa'>Interposição gasosa</option>
                        </Select>
                    </Box>

                    <Box w='150px' >
                        <Checkbox>Medidas</Checkbox>
                        <Input placeholder='mm' />
                        <Input mt='5px' placeholder='Parênquima (mm)' />
                    </Box>

                    <Box w='200px'  >
                        <Checkbox >Dimensões Reduzidas</Checkbox>
                    </Box>

                    <Box w='150px' >
                        <Checkbox>Rim Pélvico</Checkbox>
                    </Box>

                </Box>
            </Box >

            <Box
                gap='25px'
                display='flex'
                flexWrap='wrap'
                mb='10px'
            >

                <Box w='160px' >
                    <Checkbox>Rim em Ferradura</Checkbox>
                    <Select
                        w='160px'>
                        <option value='' disabled selected>Selecione</option>
                        <option value='rimDireiro'>Rim direito</option>
                        <option value='rimEsquerdo'>Rim esquerdo</option>
                    </Select>
                </Box>

                <Box w='160px' >
                    <Checkbox>Nefropatia Crônica</Checkbox>
                    <Select
                        w='160px'>
                        <option value='' disabled selected>Selecione</option>
                        <option value='rimDireiro'>Rim direito</option>
                        <option value='rimEsquerdo'>Rim esquerdo</option>
                    </Select>
                </Box>

            </Box>
        </Box >
    );
}

export default RimEsquerdo;