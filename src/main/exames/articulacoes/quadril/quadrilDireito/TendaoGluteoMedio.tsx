/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoGluteoMedioDireito() {
    const altura = "100%";
    const largura = "95%";

    const [value, setValue] = useState("1");
    const [PequenaCalcificacaoCheckbox, setPequenaCalcificacaoCheckbox] = useState(false);
    const [frasesQuadrilTendaoGluteoMedioDireito, setFrasesQuadrilTendaoGluteoMedioDireito] = useState<any>([]);

    const subExame = "Tendão do glúteo médio Direito";
    const titulo_exame = "Articulações";

    useEffect(() => {
        if (value == "1") {
            setFrasesQuadrilTendaoGluteoMedioDireito([]);
        } else {
            setFrasesQuadrilTendaoGluteoMedioDireito([]);
            setFrasesQuadrilTendaoGluteoMedioDireito((arr) => [...arr, value]);
        }
    }, [value]);

    useEffect(() => {
        if (Object.keys(frasesQuadrilTendaoGluteoMedioDireito).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                frasesQuadrilTendaoGluteoMedioDireito
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                frasesQuadrilTendaoGluteoMedioDireito
            ).Format_Laudo_Create_Storage();
        }
    }, [frasesQuadrilTendaoGluteoMedioDireito]);


    const criaStringPequenaCalcificacao = () => {
        var string = `FALTA `;
        PequenaCalcificacaoCheckbox ? setFrasesQuadrilTendaoGluteoMedioDireito((arr) => [...arr, string]) : removeItemString(string)

    }

    useEffect(() => {
        criaStringPequenaCalcificacao()
    }, [PequenaCalcificacaoCheckbox])

    const removeItemString = (value) => {
        var index = frasesQuadrilTendaoGluteoMedioDireito.indexOf(value);

        if (index > -1) {
            frasesQuadrilTendaoGluteoMedioDireito.splice(index, 1);
            setFrasesQuadrilTendaoGluteoMedioDireito((arr) => [...arr]);
        }
    };


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
            <TituloNomeExame titulo="Tendão do glúteo médio" />

            <RadioGroup onChange={setValue} value={value} padding="10px">
                <Stack direction="column">
                    <Radio value="1">Não citar</Radio>
                    <Radio value="Aspecto Normal">Aspecto Normal</Radio>
                    <Radio value="Tendinopatia">Tendinopatia</Radio>
                </Stack>
            </RadioGroup>

            <Checkbox
                onChange={() => setPequenaCalcificacaoCheckbox(!PequenaCalcificacaoCheckbox)}>
                pequena calcificação junto à inserção
            </Checkbox>
        </Box>
    );
}

export default TendaoGluteoMedioDireito;
