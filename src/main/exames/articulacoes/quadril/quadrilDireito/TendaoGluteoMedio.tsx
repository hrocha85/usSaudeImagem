/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoGluteoMedioDireito({ Disable }) {
    const altura = "100%";
    const largura = "100%";

    const [value, setValue] = useState("1");
    const [PequenaCalcificacaoCheckbox, setPequenaCalcificacaoCheckbox] = useState(false);
    const [frasesQuadrilTendaoGluteoMedioDireito, setFrasesQuadrilTendaoGluteoMedioDireito] = useState<any>([]);
    const [ConclusaoQuadrilTendaoGluteoMedioDireito, setConclusaoQuadrilTendaoGluteoMedioDireito] = useState<any>([]);

    const subExame = "Tendão do glúteo médio Direito";
    const titulo_exame = "Articulações";

    useEffect(() => {
        if (value == "1") {
            setFrasesQuadrilTendaoGluteoMedioDireito([]);
            setConclusaoQuadrilTendaoGluteoMedioDireito([]);
        } else if (value == 'com espessura aumentada e ecogenicidade diminuída.') {
            setFrasesQuadrilTendaoGluteoMedioDireito([]);
            setConclusaoQuadrilTendaoGluteoMedioDireito([]);
            setConclusaoQuadrilTendaoGluteoMedioDireito((arr) => [...arr, 'Tendinopatia do glúteo médio.'])
            setFrasesQuadrilTendaoGluteoMedioDireito((arr) => [...arr, value]);
        } else {
            setConclusaoQuadrilTendaoGluteoMedioDireito([]);
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
                frasesQuadrilTendaoGluteoMedioDireito,
                ConclusaoQuadrilTendaoGluteoMedioDireito
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                frasesQuadrilTendaoGluteoMedioDireito,
                ConclusaoQuadrilTendaoGluteoMedioDireito
            ).Format_Laudo_Create_Storage();
        }
    }, [frasesQuadrilTendaoGluteoMedioDireito]);


    const criaStringPequenaCalcificacao = () => {
        var string = `Pequena calcificação junto à inserção do glúteo médio.`;
        const conclusao = 'Pequenas calcificações junto às inserções do glúteo médio.'
        if (PequenaCalcificacaoCheckbox) {
            setFrasesQuadrilTendaoGluteoMedioDireito((arr) => [...arr, string])
            setConclusaoQuadrilTendaoGluteoMedioDireito((arr) => [...arr, conclusao])
        } else {
            removeItemString(string)
            removeItemStringConclusao(conclusao)
        }

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
    const removeItemStringConclusao = (value) => {
        var index = ConclusaoQuadrilTendaoGluteoMedioDireito.indexOf(value);
        if (index > -1) {
            ConclusaoQuadrilTendaoGluteoMedioDireito.splice(index, 1);
            setConclusaoQuadrilTendaoGluteoMedioDireito((arr) => [...arr]);
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

export default TendaoGluteoMedioDireito;
