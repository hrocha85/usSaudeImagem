import { Box, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function RetinaculoFlexoresEsquerdo({ Disable }) {
    const altura = "100%";
    const largura = "100%";

    const [value, setValue] = useState("1");
    const [frasesPunhoRetinaculoFlexoresEsquerdo, setFrasesPunhoRetinaculoFlexoresEsquerdo] = useState<any>([]);

    const subExame = "Retináculo dos flexores Esquerdo";
    const titulo_exame = "Articulações";

    useEffect(() => {
        if (value == "1") {
            setFrasesPunhoRetinaculoFlexoresEsquerdo([]);
        } else {
            setFrasesPunhoRetinaculoFlexoresEsquerdo([]);
            setFrasesPunhoRetinaculoFlexoresEsquerdo((arr) => [...arr, value]);
        }
    }, [value]);

    useEffect(() => {
        if (Object.keys(frasesPunhoRetinaculoFlexoresEsquerdo).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                frasesPunhoRetinaculoFlexoresEsquerdo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                frasesPunhoRetinaculoFlexoresEsquerdo
            ).Format_Laudo_Create_Storage();
        }
    }, [frasesPunhoRetinaculoFlexoresEsquerdo]);

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
            <TituloNomeExame titulo="Retináculo dos flexores" />

            <RadioGroup isDisabled={Disable} onChange={setValue} value={value} padding="10px">
                <Stack direction="column">
                    <Radio value="1">Não citar</Radio>
                    <Radio value="Retináculo dos flexores de aspecto preservado.">Aspecto Normal</Radio>
                    <Radio value="Nota-se abaulamento do retináculo dos flexores.">Abaulado</Radio>
                    <Radio value="Nota-se descontinuidade do retináculo dos flexores (status pós cirúrgico).">Descontinuo (pós cirúrgico)</Radio>
                </Stack>
            </RadioGroup>
        </Box>
    );
}

export default RetinaculoFlexoresEsquerdo;
