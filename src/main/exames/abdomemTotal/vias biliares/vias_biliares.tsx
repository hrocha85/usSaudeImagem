import { Box, Checkbox, Text, Select, Grid, GridItem, Input, RadioGroup, Stack, Radio } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function ViasBiliares() {
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
            padding='24px 15px 30px 15px'
            mt='15px'
        >
            <TituloNomeExame titulo='Vias Biliares' />

            <Box>
                <RadioGroup >
                    <Stack direction='row'>
                        <Radio value='1'>Colédoco Normal</Radio>
                        <Radio value='2'>Colédoco Ectasiado</Radio>
                        <Checkbox >Vias Biliares Intra-Hepáticas Dilatadas</Checkbox>
                    </Stack>
                </RadioGroup>
            </Box>
        </Box >
    );
}

export default ViasBiliares;