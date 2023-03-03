/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function DerrameArticularEsquerdo({ Disable }) {
    const altura = "100%";
    const largura = "100%";

    const [fraseDerrameArticularEsquerdo, setFraseDerrameArticularEsquerdo] = useState<any>([]);
    const [ConclusaoDerrameArticularEsquerdo, setConclusaoDerrameArticularEsquerdo] = useState<any>([]);

    const subExame = 'Derrame articular Esquerdo'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseDerrameArticularEsquerdo).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseDerrameArticularEsquerdo,
                ConclusaoDerrameArticularEsquerdo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseDerrameArticularEsquerdo,
                ConclusaoDerrameArticularEsquerdo
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseDerrameArticularEsquerdo]);

    const [disableAusente, setdisableAusente] = useState(false);
    const [disablePresente, setdisablePresente] = useState(false);

    const [AusenteCheckbox, setAusenteCheckbox] = useState(false);
    const [PresenteCheckbox, setPresenteCheckbox] = useState(false);

    const criaStringPresente = () => {
        var string = "Presença de líquido intra-articular.";
        const conclusao = 'Derrame articular.'
        if (PresenteCheckbox) {
            setFraseDerrameArticularEsquerdo((arr) => [...arr, string])
            setConclusaoDerrameArticularEsquerdo((arr) => [...arr, conclusao])
        } else {
            removeItemString(string);
            removeItemConclusao(conclusao)
        }
    };

    useEffect(() => {
        criaStringPresente()
    }, [PresenteCheckbox])

    const removeItemString = (value) => {
        var index = fraseDerrameArticularEsquerdo.indexOf(value);
        if (index > -1) {
            fraseDerrameArticularEsquerdo.splice(index, 1);
            setFraseDerrameArticularEsquerdo((arr) => [...arr]);
        }
    };
    const removeItemConclusao = (value) => {
        var index = ConclusaoDerrameArticularEsquerdo.indexOf(value);
        if (index > -1) {
            ConclusaoDerrameArticularEsquerdo.splice(index, 1);
            setConclusaoDerrameArticularEsquerdo((arr) => [...arr]);
            new Format_Laudo(titulo_exame).Remove_Conclusao(value)
        }
    };

    useEffect(() => {
        if (AusenteCheckbox) {
            setdisablePresente(true)

        } else {
            setdisablePresente(false)

        }
    }, [AusenteCheckbox])
    useEffect(() => {
        if (PresenteCheckbox) {
            setdisableAusente(true)
        } else {
            setdisableAusente(false)
        }
    }, [PresenteCheckbox])

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
            <TituloNomeExame titulo="Derrame articular Esquerdo" />

            <Box display="flex" flexWrap="wrap">

            </Box>

            <Stack>
                <Checkbox
                    isDisabled={Disable || disableAusente}
                    onChange={() => {
                        setAusenteCheckbox(!AusenteCheckbox);
                    }}
                >
                    Ausente
                </Checkbox>
                <Checkbox
                    isDisabled={Disable || disablePresente}
                    onChange={() => {
                        setPresenteCheckbox(!PresenteCheckbox);
                    }}
                >
                    Presente
                </Checkbox>

            </Stack >
        </Box >

    );
}
export default DerrameArticularEsquerdo;
