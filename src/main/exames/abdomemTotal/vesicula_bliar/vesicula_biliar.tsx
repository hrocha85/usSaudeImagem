import { Box, Checkbox, Select, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function VesiculaBiliar() {
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
            >

                <TituloNomeExame titulo='Vesícula Biliar' />

                <Box
                    gap='30px'
                    display='flex'
                    flexWrap='wrap'
                    mt='20px'
                >
                    <Box >
                        <Checkbox>Normal</Checkbox>
                    </Box>

                    <Box w='150px'>
                        <Checkbox >Cálculo Único</Checkbox>
                        <Input placeholder='mm' />
                    </Box>

                    <Box w='270px'>
                        <Checkbox >Múltiplos cálculos, o maior mede:</Checkbox>
                        <Input placeholder='mm' />
                    </Box>

                    <Box w='150px'>
                        <Checkbox>Pólipo único</Checkbox>
                        <Input
                            mb='10px' placeholder='mm' />
                    </Box>
                </Box>
            </Box >

            <Box
                gap='15px'
                display='flex'
                flexWrap='wrap'
                mt='20px'

            >

                <Box w='256px'>
                    <Checkbox>Múltiplos Pólipos, o maior mede:</Checkbox>
                    <Input w='150px' placeholder='mm' />
                </Box>
                <Box w='100px'>
                    <Checkbox>Colesterol</Checkbox>
                </Box>
                <Box w='150px'>
                    <Checkbox>Não visibilizado</Checkbox>
                    <Select
                        mb='10px'
                        w='150px'>
                        <option value='' disabled selected>Selecione</option>
                        <option value='ausenciaCirurgica'>Ausência cirúrgica</option>
                        <option value='interposicaoGasosa'>Interposição gasosa</option>
                    </Select>
                </Box>
                <Box w='100px'>
                    <Checkbox>Em Porcelana</Checkbox>
                </Box>
                <Box w='100px'>
                    <Checkbox>Bile Espezza</Checkbox>
                </Box>
                <Box >
                    <Checkbox>Vazia</Checkbox>
                </Box>

            </Box>
        </Box >
    );
}

export default VesiculaBiliar;