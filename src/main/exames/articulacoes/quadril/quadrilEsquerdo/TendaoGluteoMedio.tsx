/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoGluteoMedioEsquerdo() {
    const altura = "100%";
    const largura = "95%";

    const [value, setValue] = useState("1");
    const [PequenaCalcificacaoCheckbox, setPequenaCalcificacaoCheckbox] = useState(false);
    const [frasesQuadrilTendaoGluteoMedioEsquerdo, setFrasesQuadrilTendaoGluteoMedioEsquerdo] = useState<any>([]);

    const subExame = "Tendão do glúteo médio Esquerdo";
    const titulo_exame = "Articulações";

    useEffect(() => {
        if (value == "1") {
            setFrasesQuadrilTendaoGluteoMedioEsquerdo([]);
        } else {
            setFrasesQuadrilTendaoGluteoMedioEsquerdo([]);
            setFrasesQuadrilTendaoGluteoMedioEsquerdo((arr) => [...arr, value]);
        }
    }, [value]);

    useEffect(() => {
        if (Object.keys(frasesQuadrilTendaoGluteoMedioEsquerdo).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                frasesQuadrilTendaoGluteoMedioEsquerdo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                frasesQuadrilTendaoGluteoMedioEsquerdo
            ).Format_Laudo_Create_Storage();
        }
    }, [frasesQuadrilTendaoGluteoMedioEsquerdo]);


    const criaStringPequenaCalcificacao = () => {
        var string = `FALTA `;
        PequenaCalcificacaoCheckbox ? setFrasesQuadrilTendaoGluteoMedioEsquerdo((arr) => [...arr, string]) : removeItemString(string)

    }

    useEffect(() => {
        criaStringPequenaCalcificacao()
    }, [PequenaCalcificacaoCheckbox])

    const removeItemString = (value) => {
        var index = frasesQuadrilTendaoGluteoMedioEsquerdo.indexOf(value);

        if (index > -1) {
            frasesQuadrilTendaoGluteoMedioEsquerdo.splice(index, 1);
            setFrasesQuadrilTendaoGluteoMedioEsquerdo((arr) => [...arr]);
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

export default TendaoGluteoMedioEsquerdo;