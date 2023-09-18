/* eslint-disable array-callback-return */

import { Box, Checkbox, Stack, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Calcificacao({ Disable }) {
    const altura = "100%";
    let largura = "60%";
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    isLargerThan600 ? largura = "60%": largura = "100%"
    const [FraseCalcificacao, setFraseCalcificacao] = useState<any>([]);

    const [CalcificacaoPatologica, setCalcificacaoPatologica] = useState(false)
    const [PresencaCalcificacaoPatologica, setPresencaCalcificacaoPatologica] = useState(false)
    const [NormalCheckbox, setNormalCheckbox] = useState(false)

    useEffect(() => {
        Disable ? setNormalCheckbox(true) : setNormalCheckbox(false)
    }, [Disable])

    useEffect(() => {
        if (NormalCheckbox) {
            setCalcificacaoPatologica(true)
        } else {
            setCalcificacaoPatologica(false)
            removeFraseString('Ausência de calcificações patológicas, bem como de adenopatia cervical não habitual.')
        }
    }, [NormalCheckbox])

    useEffect(() => {
        const string = 'Ausência de calcificações patológicas, bem como de adenopatia cervical não habitual.'
        CalcificacaoPatologica ? setFraseCalcificacao((arr) => [...arr, string]) : removeFraseString(string)
    }, [CalcificacaoPatologica])


    useEffect(() => {
        const string = 'Presença de calcificações patológicas, bem como de adenopatia cervical não habitual.'
        PresencaCalcificacaoPatologica ? setFraseCalcificacao((arr) => [...arr, string]) : removeFraseString(string)
    }, [PresencaCalcificacaoPatologica])

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
    const titulo_exame = "Próstata";


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

            <Box display='flex' flexWrap='wrap' gap="5px" mb="10px">
                <Checkbox
                    isChecked={NormalCheckbox}
                    isDisabled={PresencaCalcificacaoPatologica}
                    onChange={() => {
                        setNormalCheckbox(!NormalCheckbox)
                        setCalcificacaoPatologica(!CalcificacaoPatologica)
                    }}>

                    Ausência de Calcificação patológica
                </Checkbox>
                <Checkbox
                    isDisabled={CalcificacaoPatologica}
                    onChange={() => setPresencaCalcificacaoPatologica(!PresencaCalcificacaoPatologica)}>
                    Presença de Calcificação patológica
                </Checkbox>
            </Box>
        </Box>
    )
}
export default Calcificacao