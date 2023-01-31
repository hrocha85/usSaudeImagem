/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function FasciaLataEsquerdo() {
    const altura = "100%";
    const largura = "95%";

    const [value, setValue] = useState("1");
    const [frasesQuadrilFasciaLataEsquerdo, setFrasesQuadrilFasciaLataEsquerdo] = useState<any>([]);

    const subExame = "Fáscia lata Esquerdo";
    const titulo_exame = "Articulações";

    useEffect(() => {
        if (value == "1") {
            setFrasesQuadrilFasciaLataEsquerdo([]);
        } else {
            setFrasesQuadrilFasciaLataEsquerdo([]);
            setFrasesQuadrilFasciaLataEsquerdo((arr) => [...arr, value]);
        }
    }, [value]);

    useEffect(() => {
        if (Object.keys(frasesQuadrilFasciaLataEsquerdo).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                frasesQuadrilFasciaLataEsquerdo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                frasesQuadrilFasciaLataEsquerdo
            ).Format_Laudo_Create_Storage();
        }
    }, [frasesQuadrilFasciaLataEsquerdo]);




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
        >            <TituloNomeExame titulo="Fáscia lata" />
            <RadioGroup onChange={setValue} value={value} padding="10px">
                <Stack direction="column">
                    <Radio value="1">Não citar</Radio>
                    <Radio value="Aspecto Normal">Aspecto Normal</Radio>
                    <Radio value="Espessamento">Espessamento</Radio>
                </Stack>
            </RadioGroup>
        </Box>
    );
}

export default FasciaLataEsquerdo;