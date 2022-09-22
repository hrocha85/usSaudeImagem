import { Box, Checkbox, Text, Select, Grid, GridItem, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Pancreas() {
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
            >

                <TituloNomeExame titulo='Pâncreas' />

                <Box
                    gap='25px'
                    display='flex'
                    flexWrap='wrap'
                    mb='10px'
                >
                    <Box >
                        <Checkbox>Normal</Checkbox>
                    </Box>

                    <Box w='100px' >
                        <Checkbox>Cisto</Checkbox>
                        <Input w='100%' placeholder='mm' />
                    </Box>

                    <Box >
                        <Checkbox >Não visibilizado</Checkbox>
                    </Box>

                    <Box  >
                        <Checkbox >Pancreatite Aguda</Checkbox>
                    </Box>

                    <Box >
                        <Checkbox >Pancreatite Crônica</Checkbox>
                    </Box>

                </Box>
            </Box >

        </Box >
    );
}

export default Pancreas;