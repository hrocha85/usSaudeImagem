
import { Box, Checkbox, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoGluteoMinimoEsquerdo({ Disable }) {
    const altura = "100%";
    const largura = "100%";

    const [value, setValue] = useState("1");
    const [PequenaCalcificacaoCheckbox, setPequenaCalcificacaoCheckbox] = useState(false);
    const [frasesQuadrilTendaoGluteoMinimoEsquerdo, setFrasesQuadrilTendaoGluteoMinimoEsquerdo] = useState<any>([]);
    const [ConclusaoQuadrilTendaoGluteoMinimoEsquerdo, setConclusaoQuadrilTendaoGluteoMinimoEsquerdo] = useState<any>([]);

    const subExame = "Quadril- Tendão do glúteo mínimo Esquerdo";
    const titulo_exame = "Articulações";

    useEffect(() => {
        const conclusao = 'Tendinopatia do glúteo mínimo.'
        if (value == "1") {
            setFrasesQuadrilTendaoGluteoMinimoEsquerdo([]);
            removeItemStringConclusao(conclusao)
        } else if (value == 'com espessura aumentada e ecogenicidade diminuída.') {
            setFrasesQuadrilTendaoGluteoMinimoEsquerdo([]);
            setConclusaoQuadrilTendaoGluteoMinimoEsquerdo((arr) => [...arr, conclusao])
            setFrasesQuadrilTendaoGluteoMinimoEsquerdo((arr) => [...arr, value]);
        } else {
            removeItemStringConclusao(conclusao)
            setFrasesQuadrilTendaoGluteoMinimoEsquerdo([]);
            setFrasesQuadrilTendaoGluteoMinimoEsquerdo((arr) => [...arr, value]);
        }
    }, [value]);
    useEffect(() => {
        if (Object.keys(frasesQuadrilTendaoGluteoMinimoEsquerdo).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                frasesQuadrilTendaoGluteoMinimoEsquerdo,
                ConclusaoQuadrilTendaoGluteoMinimoEsquerdo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                frasesQuadrilTendaoGluteoMinimoEsquerdo,
                ConclusaoQuadrilTendaoGluteoMinimoEsquerdo
            ).Format_Laudo_Create_Storage();
        }
    }, [frasesQuadrilTendaoGluteoMinimoEsquerdo]);

    useEffect(() => {
        Disable ? setValue('de espessura e contornos preservados e ecotextura característica.') : setValue('1');
    }, [Disable])
    const criaStringPequenaCalcificacao = () => {
        const string = `Pequena calcificação junto à inserção do glúteo mínimo.`;
        const conclusao = 'Pequenas calcificações junto às inserções do glúteo mínimo.'
        if (PequenaCalcificacaoCheckbox) {
            setFrasesQuadrilTendaoGluteoMinimoEsquerdo((arr) => [...arr, string])
            setConclusaoQuadrilTendaoGluteoMinimoEsquerdo((arr) => [...arr, conclusao])
        } else {
            removeItemString(string)
            removeItemStringConclusao(conclusao)
        }

    }

    useEffect(() => {
        criaStringPequenaCalcificacao()
    }, [PequenaCalcificacaoCheckbox])

    const removeItemString = (value) => {
        const index = frasesQuadrilTendaoGluteoMinimoEsquerdo.indexOf(value);

        if (index > -1) {
            frasesQuadrilTendaoGluteoMinimoEsquerdo.splice(index, 1);
            setFrasesQuadrilTendaoGluteoMinimoEsquerdo((arr) => [...arr]);
        }
    };
    const removeItemStringConclusao = (value) => {
        const index = ConclusaoQuadrilTendaoGluteoMinimoEsquerdo.indexOf(value);
        if (index > -1) {
            ConclusaoQuadrilTendaoGluteoMinimoEsquerdo.splice(index, 1);
            setConclusaoQuadrilTendaoGluteoMinimoEsquerdo((arr) => [...arr]);
            new Format_Laudo(titulo_exame).Remove_Conclusao(value)
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

            <RadioGroup onChange={setValue} value={value} padding="10px">
                <Stack direction="column">
                    <Radio value="1">Não citar</Radio>
                    <Radio value="de espessura e contornos preservados e ecotextura característica.">Aspecto Normal</Radio>
                    <Radio value="com espessura aumentada e ecogenicidade diminuída.">Tendinopatia</Radio>
                </Stack>
            </RadioGroup>

            <Checkbox
                onChange={() => setPequenaCalcificacaoCheckbox(!PequenaCalcificacaoCheckbox)}>
                pequena calcificação junto à inserção
            </Checkbox>
        </Box>
    );
}

export default TendaoGluteoMinimoEsquerdo;
