/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoGluteoMedioEsquerdo({ Disable }) {
    const altura = "100%";
    const largura = "100%";

    const [value, setValue] = useState("1");
    const [PequenaCalcificacaoCheckbox, setPequenaCalcificacaoCheckbox] = useState(false);
    const [frasesQuadrilTendaoGluteoMedioEsquerdo, setFrasesQuadrilTendaoGluteoMedioEsquerdo] = useState<any>([]);
    const [ConclusaoQuadrilTendaoGluteoMedioEsquerdo, setConclusaoQuadrilTendaoGluteoMedioEsquerdo] = useState<any>([]);

    const subExame = "Tendão do glúteo médio esquerdo";
    const titulo_exame = "Articulações";

    useEffect(() => {
        if (value == "1") {
            setFrasesQuadrilTendaoGluteoMedioEsquerdo([]);
            setConclusaoQuadrilTendaoGluteoMedioEsquerdo([]);
        } else if (value == 'com espessura aumentada e ecogenicidade diminuída.') {
            setFrasesQuadrilTendaoGluteoMedioEsquerdo([]);
            setConclusaoQuadrilTendaoGluteoMedioEsquerdo([]);
            setConclusaoQuadrilTendaoGluteoMedioEsquerdo((arr) => [...arr, 'Tendinopatia do glúteo médio.'])
            setFrasesQuadrilTendaoGluteoMedioEsquerdo((arr) => [...arr, value]);
        } else {
            setConclusaoQuadrilTendaoGluteoMedioEsquerdo([]);
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
                frasesQuadrilTendaoGluteoMedioEsquerdo,
                ConclusaoQuadrilTendaoGluteoMedioEsquerdo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                frasesQuadrilTendaoGluteoMedioEsquerdo,
                ConclusaoQuadrilTendaoGluteoMedioEsquerdo
            ).Format_Laudo_Create_Storage();
        }
    }, [frasesQuadrilTendaoGluteoMedioEsquerdo]);


    const criaStringPequenaCalcificacao = () => {
        var string = `Pequena calcificação junto à inserção do glúteo médio.`;
        const conclusao = 'Pequenas calcificações junto às inserções do glúteo médio.'
        if (PequenaCalcificacaoCheckbox) {
            setFrasesQuadrilTendaoGluteoMedioEsquerdo((arr) => [...arr, string])
            setConclusaoQuadrilTendaoGluteoMedioEsquerdo((arr) => [...arr, conclusao])
        } else {
            removeItemString(string)
            removeItemStringConclusao(conclusao)
        }
    }
    const removeItemStringConclusao = (value) => {
        var index = ConclusaoQuadrilTendaoGluteoMedioEsquerdo.indexOf(value);
        if (index > -1) {
            ConclusaoQuadrilTendaoGluteoMedioEsquerdo.splice(index, 1);
            setConclusaoQuadrilTendaoGluteoMedioEsquerdo((arr) => [...arr]);
            new Format_Laudo(titulo_exame).Remove_Conclusao(value)
        }
    };

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

export default TendaoGluteoMedioEsquerdo;
