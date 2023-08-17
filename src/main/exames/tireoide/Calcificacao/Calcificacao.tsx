/* eslint-disable array-callback-return */

import { Box, Checkbox, Stack, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Calcificacao() {
    const altura = "100%";
    let largura = "60%";
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    isLargerThan600 ? largura = "60%": largura = "100%"
    const [FraseCalcificacao, setFraseCalcificacao] = useState<any>([]);

    const [CalcificacaoPatologica, setCalcificacaoPatologica] = useState(false)


    useEffect(() => {
        const string = 'Ausência de calcificações patológicas, bem como de adenopatia cervical não habitual.'
        CalcificacaoPatologica ? setFraseCalcificacao((arr) => [...arr, string]) : removeFraseString(string)
    }, [CalcificacaoPatologica])

    const removeFraseString = (value) => {
        FraseCalcificacao.map((e) => {
            if (e.includes(value)) {
                const index = FraseCalcificacao.indexOf(e);
                if (index > -1) {
                    FraseCalcificacao.splice(index, 1);
                    setFraseCalcificacao((arr) => [...arr]);
                }
            }
        });
    };

    const subExame = "Calcificação patológica";
    const titulo_exame = "Tireóide";


    useEffect(() => {
        if (Object.keys(FraseCalcificacao).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FraseCalcificacao
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FraseCalcificacao
            ).Format_Laudo_Create_Storage();
        }
    }, [FraseCalcificacao]);

    return (
        <Box
            bg="#FAFAFA"
            w={largura}
            h={altura}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="10.85px"
            boxShadow="md"
            padding="24px 15px 24px 15px"
            mt="15px"
        >
            <TituloNomeExame titulo="Calcificação diagnósticos" />

            <Stack gap="5px" mb="10px">
                <Checkbox
                    onChange={() => setCalcificacaoPatologica(!CalcificacaoPatologica)}>
                    Ausência de Calcificação patológica
                </Checkbox>
            </Stack>
        </Box>
    )
}
export default Calcificacao