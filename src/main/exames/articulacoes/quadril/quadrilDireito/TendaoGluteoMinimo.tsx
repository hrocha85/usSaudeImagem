/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoGluteoMinimoDireito({ Disable }) {
    const altura = "100%";
    const largura = "100%";

    const [value, setValue] = useState("1");
    const [PequenaCalcificacaoCheckbox, setPequenaCalcificacaoCheckbox] = useState(false);
    const [frasesQuadrilTendaoGluteoMinimoDireito, setFrasesQuadrilTendaoGluteoMinimoDireito] = useState<any>([]);
    const [ConclusaoQuadrilTendaoGluteoMinimoDireito, setConclusaoQuadrilTendaoGluteoMinimoDireito] = useState<any>([]);

    const subExame = "Tendão do glúteo mínimo Direito";
    const titulo_exame = "Articulações";

    useEffect(() => {
        const conclusao = 'Tendinopatia do glúteo mínimo.'
        if (value == "1") {
            setFrasesQuadrilTendaoGluteoMinimoDireito([]);
            removeItemStringConclusao(conclusao)
        } else if (value == 'com espessura aumentada e ecogenicidade diminuída.') {
            setFrasesQuadrilTendaoGluteoMinimoDireito([]);
            setConclusaoQuadrilTendaoGluteoMinimoDireito((arr) => [...arr, conclusao])
            setFrasesQuadrilTendaoGluteoMinimoDireito((arr) => [...arr, value]);
        } else {
            removeItemStringConclusao(conclusao)
            setFrasesQuadrilTendaoGluteoMinimoDireito([]);
            setFrasesQuadrilTendaoGluteoMinimoDireito((arr) => [...arr, value]);
        }
    }, [value]);

    useEffect(() => {
        if (Object.keys(frasesQuadrilTendaoGluteoMinimoDireito).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                frasesQuadrilTendaoGluteoMinimoDireito,
                ConclusaoQuadrilTendaoGluteoMinimoDireito
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                frasesQuadrilTendaoGluteoMinimoDireito,
                ConclusaoQuadrilTendaoGluteoMinimoDireito
            ).Format_Laudo_Create_Storage();
        }
    }, [frasesQuadrilTendaoGluteoMinimoDireito]);


    const criaStringPequenaCalcificacao = () => {
        var string = `Pequena calcificação junto à inserção do glúteo mínimo.`;
        const conclusao = 'Pequenas calcificações junto às inserções do glúteo mínimo.'
        if (PequenaCalcificacaoCheckbox) {
            setFrasesQuadrilTendaoGluteoMinimoDireito((arr) => [...arr, string])
            setConclusaoQuadrilTendaoGluteoMinimoDireito((arr) => [...arr, conclusao])
        } else {
            removeItemString(string)
            removeItemStringConclusao(conclusao)
        }

    }

    useEffect(() => {
        criaStringPequenaCalcificacao()
    }, [PequenaCalcificacaoCheckbox])

    const removeItemString = (value) => {
        var index = frasesQuadrilTendaoGluteoMinimoDireito.indexOf(value);

        if (index > -1) {
            frasesQuadrilTendaoGluteoMinimoDireito.splice(index, 1);
            setFrasesQuadrilTendaoGluteoMinimoDireito((arr) => [...arr]);
        }
    };
    const removeItemStringConclusao = (value) => {
        var index = ConclusaoQuadrilTendaoGluteoMinimoDireito.indexOf(value);
        if (index > -1) {
            ConclusaoQuadrilTendaoGluteoMinimoDireito.splice(index, 1);
            setConclusaoQuadrilTendaoGluteoMinimoDireito((arr) => [...arr]);
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
            <TituloNomeExame titulo="Tendão do glúteo mínimo" />

            <RadioGroup isDisabled={Disable} onChange={setValue} value={value} padding="10px">
                <Stack direction="column">
                    <Radio value="1">Não citar</Radio>
                    <Radio value="de espessura e contornos preservados e ecotextura característica.">Aspecto Normal</Radio>
                    <Radio value="com espessura aumentada e ecogenicidade diminuída.">Tendinopatia</Radio>
                </Stack>
            </RadioGroup>

            <Checkbox isDisabled={Disable}
                onChange={() => setPequenaCalcificacaoCheckbox(!PequenaCalcificacaoCheckbox)}>
                pequena calcificação junto à inserção
            </Checkbox>
        </Box>
    );
}

export default TendaoGluteoMinimoDireito;
