import { Box, Radio, RadioGroup, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoFlexoresTenossinoviteDireito() {
    const altura = "100%";
    const largura = "95%";
    const [value, setValue] = useState("");
    const [frasesTorax, setFrasesTorax] = useState<any>([]);

    const subExame = "Tendão Flexores Tenossinovite Direito";
    const titulo_exame = "Aticulações";


    useEffect(() => {
        if (value === "") {
            setFrasesTorax([]);


        } else {
            setFrasesTorax([]);
            setFrasesTorax((arr) => [...arr, value])
            console.log(value)
        }
    }, [value]);

    useEffect(() => {
        if (Object.keys(frasesTorax).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                frasesTorax
            ).Format_Laudo_Create_Storage();
            console.log('ta caindo')
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                frasesTorax
            ).Format_Laudo_Create_Storage();
            console.log('ta caindo aui')
        }
    }, [frasesTorax]);

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
            <TituloNomeExame titulo="Punho" />


            <Stack marginBottom="10px">
                <Box >
                    <RadioGroup onChange={setValue} value={value} padding="10px">
                        <Stack direction="column">
                            <Radio value="">Não citar</Radio>
                            <Radio value="Normal nos segmentos acessíveis (Linhas A presentes, Linhas B raras/ausentes)">
                                Normal nos segmentos acessíveis (Linhas A presentes, Linhas B
                                raras/ausentes)
                            </Radio>
                            <Radio value="Presença de faixas verticais de reverberação (linhas B) delgadas e não confluentes, sugerindo redução moderada da aeração do parênquima, visíveis">
                                Perda Moderada da aeração (Linhas B delgadas e bem definidas)
                            </Radio>
                            <Radio value="Presença de faixas verticais de reverberação (linhas B) espessas e  confluentes, sugerindo redução significativa da aeração do parênquima, visíveis">
                                Perda Severa da aeração (Linhas B espessas e confluentes)
                            </Radio>
                        </Stack>
                    </RadioGroup>
                </Box>
            </Stack>
        </Box>
    );
}

export default TendaoFlexoresTenossinoviteDireito