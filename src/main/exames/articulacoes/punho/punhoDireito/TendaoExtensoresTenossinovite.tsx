import { Box, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoExtensoresTenossinoviteDireito() {
    const altura = "100%";
    const largura = "95%";

    const [value, setValue] = useState("1");
    const [frasesTorax, setFrasesTorax] = useState<any>([]);

    const subExame = "Tendões Extensores com tenossinovite Direito";
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
            <TituloNomeExame titulo="Tendão Extensores com tenossinovite" />

            <Stack marginBottom='10px'>
                <Box >
                    <RadioGroup onChange={setValue} value={value} padding="10px">
                        <Stack direction="column">
                            <Radio value="1">Não citar</Radio>
                            <Radio value="I = Abdoturo longo do polegar + extensor curto do polegar">I = Abdoturo longo do polegar + extensor curto do polegar</Radio>
                            <Radio value="II = Extensor longo radial do carpo + extensor curto radial do carpo">Flexor</Radio>
                            <Radio value="III = Extensor longo do polegar">III = Extensor longo do polegar</Radio>
                            <Radio value="IV = Extensor comum dos dedos e extensor do indicador">IV = Extensor comum dos dedos e extensor do indicador</Radio>
                            <Radio value="V = extensor do V dedo">V = extensor do V dedo</Radio>
                            <Radio value="VI = extensor ulnar ">VI = extenros ulnar </Radio>

                        </Stack>
                    </RadioGroup>
                </Box>
            </Stack>
        </Box>
    );
}

export default TendaoExtensoresTenossinoviteDireito;