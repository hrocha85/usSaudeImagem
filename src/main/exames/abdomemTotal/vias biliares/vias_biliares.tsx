import { Box, Checkbox, RadioGroup, Radio } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function ViasBiliares() {
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
            mt='15px'
        >
            <TituloNomeExame titulo='Vias Biliares' />

            <RadioGroup>
                <Box
                    gap='25px'
                    display='flex'
                    flexWrap='wrap'
                    mb='10px'
                >
                    <Radio value='1'>Colédoco Normal</Radio>
                    <Radio value='2'>Colédoco Ectasiado</Radio>
                    <Checkbox >Vias Biliares Intra-Hepáticas Dilatadas</Checkbox>

                </Box>
            </RadioGroup>
        </Box >
    );
}

export default ViasBiliares;