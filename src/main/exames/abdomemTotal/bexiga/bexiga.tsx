import { Box, Checkbox, Stack, Text, Select, Grid, GridItem, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Bexiga() {
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
                borderBottom='1px'>

                <TituloNomeExame titulo='Bexiga' />

                <Box
                    mb='20px'
                    gap='30px'
                    display='flex'
                    flexWrap='wrap'
                    mt='20px'>
                    <Checkbox >Normal</Checkbox>
                    <Checkbox >De Esforço</Checkbox>
                    <Checkbox >Vazia</Checkbox>
                    <Checkbox>Omitir Bexiga</Checkbox>
                </Box>

            </Box>
            {/* ------------------------------------------------------------------------------------------------------------ */}
            <Box
                gap='30px'
                display='flex'
                flexWrap='wrap'
                mt='20px'
            >
                <Box w='200px' >
                    <Checkbox>Cálculo mede:</Checkbox>
                    <Input w='150px' placeholder='mm' />
                </Box>

                <Box w='200px'  >
                    <Checkbox>Cálculo mede:</Checkbox>
                    <Input w='150px' placeholder='mm' />
                </Box>

                <Box w='200px'>
                    <Checkbox>Cálculo mede:</Checkbox>
                    <Input w='150px' placeholder='mm' />
                </Box>
            </Box>
        </Box >
    );
}

export default Bexiga;