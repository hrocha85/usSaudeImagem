import { Box, Checkbox, Text, Select, Grid, GridItem, Input } from "@chakra-ui/react";
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
                <Checkbox mr='25px'>Colédoco Normal</Checkbox>
                <Checkbox mr='25px'>Colédoco Ectasiado</Checkbox>
                <Checkbox >Vias Biliares Intra-Hepáticas Dilatadas</Checkbox>
            </Box>
        </Box >
    );
}

export default ViasBiliares;