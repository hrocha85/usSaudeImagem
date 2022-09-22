import { Box, Checkbox, Text, Select, Grid, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function LiquidoLivre() {
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

                <TituloNomeExame titulo='Líquido Livre' />

                <Box
                    gap='30px'
                    display='flex'
                    flexWrap='wrap'
                    mb='10px'
                >

                    <Box >
                        <Checkbox>Normal</Checkbox>
                    </Box>

                    <Box  >
                        <Checkbox >Cisto</Checkbox>
                        <Select>
                            <option value='' disabled selected>Quantidade</option>
                            <option value='Pequena'>Pequena</option>
                            <option value='Moderada'>Moderada</option>
                            <option value='Grande'>Grande</option>
                        </Select>
                    </Box>

                </Box>
            </Box >
        </Box >
    );
}

export default LiquidoLivre;