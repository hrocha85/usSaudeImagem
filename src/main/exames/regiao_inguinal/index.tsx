import { Box } from "@chakra-ui/react";
import HerniaDireito from "./direito/HerniaDireito";
import HerniaEsquerdo from "./esquerdo/HerniaEsquerdo";

function Regiao_Inguinal() {

    return (
        <>
            <Box
                display='flex'
                flexWrap='wrap'
                w='66%'
                ml="10px">

                <Box w='400px'>
                    <HerniaDireito />
                </Box>
                <Box w='400px'>
                    <HerniaEsquerdo />
                </Box>
            </Box>
        </>
    );
}

export default Regiao_Inguinal;