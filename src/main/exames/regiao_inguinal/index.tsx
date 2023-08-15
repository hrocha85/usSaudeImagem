import { Box, Checkbox } from "@chakra-ui/react";
import CalcificacoesPatologicas from "./CalcificacoesPatologicas/CalcificacoesPatologicas";
import HerniaDireito from "./direito/HerniaDireito";
import HerniaEsquerdo from "./esquerdo/HerniaEsquerdo";
import FeixesMusculares from "./FeixesMusculares/FeixesMusculares";
import HerniacaoDireito from "./HerniacaoDireito/HerniacaoDireito";
import HerniacaoEsquerdo from "./HerniacaoEsquerdo/HerniacaoEsquerdo";
import Impressoes from "./Impressoes/ImpressaoDiagnostica";
import Massas from "./Massa/Massas";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../component/function_format_laudo";
import Hernia from "./hernia";

function Regiao_Inguinal() {
    const altura = '100%'
    const largura = '220px'
    const [Disable, SetDisable] = useState(false)

    const [FraseRegInguinal, setFraseRegInguinal] = useState<any>([]);

    useEffect(() => {
        const string = 'Pele e tecido subcultaneos bem configurados com espessura, contornos e ecotexturas normais. \nFeixes Musculares em situação tópica com morfologia e demais características ecográficas normais.'
        Disable ? setFraseRegInguinal((arr) => [...arr, string]) : removeItemString(string)
    }, [Disable])

    const removeItemString = (value) => {
        const index = FraseRegInguinal.indexOf(value);

        if (index > -1) {
            FraseRegInguinal.splice(index, 1);
            setFraseRegInguinal((arr) => [...arr]);
        }
    };

    const subExame = "Região inguinal";
    const titulo_exame = 'Região Inguinal'

    useEffect(() => {
        if (Object.keys(FraseRegInguinal).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FraseRegInguinal
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FraseRegInguinal
            ).Format_Laudo_Create_Storage();
        }
    }, [FraseRegInguinal]);

    return (
        <>
            <Box
                bg="#FAFAFA"
                w={largura}
                h={altura}
                bgPosition="center"
                bgRepeat="no-repeat"
                borderRadius="10.85px"
                boxShadow="md"
                padding='10px 15px 10px 15px'
                mt='2px'
                mb='5px'>
                <Checkbox
                    onChange={(e) => { SetDisable(!Disable) }}
                >Região inguinal normal</Checkbox>
            </Box >
            <Box
                gap='10px'
                display='flex'
                flexWrap='wrap'
                w='66%'
                ml="10px">
                <HerniaDireito Disable={Disable} />

                <HerniaEsquerdo Disable={Disable} />

                <FeixesMusculares Disable={Disable} />
                <CalcificacoesPatologicas Disable={Disable} />
                <Massas Disable={Disable} />
            </Box>
            <Box
                mt='15px'
                gap='15px'
                display='flex'
                flexWrap='wrap'
                w='66%'
                ml="10px">
                <HerniacaoDireito Disable={Disable} />
                <HerniacaoEsquerdo Disable={Disable} />
            </Box>
            <Hernia Disable={Disable} />
            <Impressoes Disable={Disable} />
        </>
    );
}

export default Regiao_Inguinal;