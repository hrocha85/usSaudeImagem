/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Flex, HStack, Input, Radio, RadioGroup, Select, Spacer, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Retroperineo({ Disable }) {
    const altura = "100%";
    const largura = "66%";

    const [FraseRetroperineo, setFraseRetroperineo] = useState<any>([]);
    const [ConclusoesRetroperineo, setConclusoesRetroperineo] = useState<any>([]);

    const [NormalCheckbox, setNormalCheckbox] = useState(false);
    const [PresenteCheckbox, setPresenteCheckbox] = useState(false);

    const removeItemString = (value) => {
        var index = FraseRetroperineo.indexOf(value);
        if (index > -1) {
            FraseRetroperineo.splice(index, 1);
            setFraseRetroperineo((arr) => [...arr]);
        }
    };

    useEffect(() => {
        const string = 'Não se constata adenopatia para aórtica ou ao redor dos demais grandes vasos abdominais.'
        NormalCheckbox ? setFraseRetroperineo((arr) => [...arr, string]) : removeItemString(string)
    }, [NormalCheckbox])

    useEffect(() => {
        const string = 'Se constata adenopatia para aórtica ou ao redor dos demais grandes vasos abdominais.'
        PresenteCheckbox ? setFraseRetroperineo((arr) => [...arr, string]) : removeItemString(string)
    }, [PresenteCheckbox])


    const removeConclusaoString = (value) => {
        var index;
        ConclusoesRetroperineo.map((e) => {
            if (e.includes(value)) {
                index = ConclusoesRetroperineo.indexOf(e);

                if (index > -1) {
                    ConclusoesRetroperineo.splice(index, 1);
                    setConclusoesRetroperineo((arr) => [...arr]);
                    new Format_Laudo(titulo_exame).Remove_Conclusao(value);
                }
            }
        });
    };


    const [Normal, setNormal] = useState(false)

    useEffect(() => {
        Disable ? setNormal(true) : setNormal(false)
    }, [Disable])

    useEffect(() => {
        Normal ? setNormalCheckbox(true) : setNormalCheckbox(false)
    }, [Normal])


    const subExame = "Retroperitôneo";
    const titulo_exame = "Abdômen total";

    useEffect(() => {
        if (Object.keys(FraseRetroperineo).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FraseRetroperineo,
                ConclusoesRetroperineo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FraseRetroperineo,
                ConclusoesRetroperineo
            ).Format_Laudo_Create_Storage();
        }
    }, [FraseRetroperineo]);

    return (
        <Box
            bg="#FAFAFA"
            w={largura}
            h={altura}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="10.85px"
            boxShadow="md"
            padding="15px"
            mt="15px"
        >
            <TituloNomeExame titulo="Retroperitôneo" />

            <Box display='flex' flexWrap='wrap' gap='10px'>
                <Checkbox
                    isChecked={Normal}
                    onChange={() => {
                        setNormal(!Normal)
                        setNormalCheckbox(!NormalCheckbox)
                    }}>
                    Normal
                </Checkbox>
                <Checkbox
                    onChange={() => setPresenteCheckbox(!PresenteCheckbox)}>
                    Presença de Linfonodomegalia
                </Checkbox>
            </Box >

        </Box >
    );
}

export default Retroperineo