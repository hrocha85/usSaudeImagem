import { Box } from "@chakra-ui/react";
import CalcificacoesPatologicas from "./CalcificacoesPatologicas/CalcificacoesPatologicas";
import HerniaDireito from "./direito/HerniaDireito";
import HerniaEsquerdo from "./esquerdo/HerniaEsquerdo";
import FeixesMusculares from "./FeixesMusculares/FeixesMusculares";
import HerniacaoDireito from "./HerniacaoDireito/HerniacaoDireito";
import HerniacaoEsquerdo from "./HerniacaoEsquerdo/HerniacaoEsquerdo";
import Impressoes from "./Impressoes/ImpressaoDiagnostica";
import Massas from "./Massa/Massas";

function Regiao_Inguinal() {

    return (
        <>
            <Box
                gap='15px'
                display='flex'
                flexWrap='wrap'
                w='66%'
                ml="10px">
                <HerniaDireito />

                <HerniaEsquerdo />

                <FeixesMusculares />
                <CalcificacoesPatologicas />
                <Massas />
            </Box>
            <Box
                mt='15px'
                gap='15px'
                display='flex'
                flexWrap='wrap'
                w='66%'
                ml="10px">
                <HerniacaoDireito />
                <HerniacaoEsquerdo />
            </Box>
            <Impressoes />
        </>
    );
}

export default Regiao_Inguinal;