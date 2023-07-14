/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function FasciaLataEsquerdo({ Disable }) {
    const altura = "100%";
    const largura = "100%";

    const [value, setValue] = useState("1");
    const [frasesQuadrilFasciaLataEsquerdo, setFrasesQuadrilFasciaLataEsquerdo] = useState<any>([]);

    const subExame = "Quadril- Fáscia lata esquerdo";
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


    useEffect(() => {
        Disable ? setValue('Fáscia lata com espessura preservada e ecotextura homogênea.') : setValue('1');
    }, [Disable])

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
            <TituloNomeExame titulo="Fáscia lata" />

            <RadioGroup onChange={setValue} value={value} padding="10px">
                <Stack direction="column">
                    <Radio value="1">Não citar</Radio>
                    <Radio value="Fáscia lata com espessura preservada e ecotextura homogênea.">Aspecto Normal</Radio>
                    <Radio value="Observa-se espessamento da fáscia lata.">Tendinopatia</Radio>
                </Stack>
            </RadioGroup>
        </Box>
    );
}

export default FasciaLataEsquerdo;
