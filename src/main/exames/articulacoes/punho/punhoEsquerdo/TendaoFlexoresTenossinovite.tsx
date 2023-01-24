import { Box, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoFlexoresTenossinoviteEsquerdo() {
    const altura = "100%";
    const largura = "95%";

    const [value, setValue] = useState("1");
    const [frasesTorax, setFrasesTorax] = useState<any>([]);

    const subExame = "Tendões flexores com tenossinovite Esquerdo";
    const titulo_exame = "Articulações";

    useEffect(() => {
        if (value == "1") {
            setFrasesTorax([]);
        } else {
            setFrasesTorax([]);
            setFrasesTorax((arr) => [...arr, value]);
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
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                frasesTorax
            ).Format_Laudo_Create_Storage();
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
            <TituloNomeExame titulo="Tendão flexores com tenossinovite" />

            <Stack marginBottom='10px'>
                <Box >
                    <RadioGroup onChange={setValue} value={value} padding="10px">
                        <Stack direction="column">
                            <Radio value="1">Não citar</Radio>
                            <Radio value="Flexor longo do polegar">Flexor longo do polegar</Radio>
                            <Radio value="Flexor radial do carpo">Flexor radial do carpo</Radio>
                            <Radio value="Flexores superficiais dos dedos">Flexores superficiais dos dedos</Radio>
                            <Radio value="Flexores profundos dos dedos">Flexores profundos dos dedos</Radio>
                            <Radio value="Flexor palmar longo">Flexor palmar longo</Radio>
                        </Stack>
                    </RadioGroup>
                </Box>
            </Stack>
        </Box>
    );
}

export default TendaoFlexoresTenossinoviteEsquerdo;