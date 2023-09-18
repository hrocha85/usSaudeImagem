/* eslint-disable array-callback-return */

import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function DerrameArticularDireito({ Disable }) {
    const altura = "100%";
    const largura = "100%";

    const [fraseDerrameArticularDireito, setFraseDerrameArticularDireito] = useState<any>([]);
    const [ConclusaoDerrameArticularDireito, setConclusaoDerrameArticularDireito] = useState<any>([]);

    const subExame = 'Cotovelo- Derrame articular direito'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseDerrameArticularDireito).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseDerrameArticularDireito,
                ConclusaoDerrameArticularDireito
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseDerrameArticularDireito,
                ConclusaoDerrameArticularDireito
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseDerrameArticularDireito]);

    const [disableAusente, setdisableAusente] = useState(false);
    const [disablePresente, setdisablePresente] = useState(false);

    const [AusenteCheckbox, setAusenteCheckbox] = useState(false);
    const [PresenteCheckbox, setPresenteCheckbox] = useState(false);

    const criaStringPresente = () => {
        const string = "Presença de líquido intra-articular.";
        const conclusao = 'Derrame articular.'
        if (PresenteCheckbox) {
            setFraseDerrameArticularDireito((arr) => [...arr, string])
            setConclusaoDerrameArticularDireito((arr) => [...arr, conclusao])
        } else {
            removeItemString(string);
            removeItemConclusao(conclusao)
        }
    };

    useEffect(() => {
        criaStringPresente()
    }, [PresenteCheckbox])

    const removeItemString = (value) => {
        const index = fraseDerrameArticularDireito.indexOf(value);
        if (index > -1) {
            fraseDerrameArticularDireito.splice(index, 1);
            setFraseDerrameArticularDireito((arr) => [...arr]);
        }
    };
    const removeItemConclusao = (value) => {
        const index = ConclusaoDerrameArticularDireito.indexOf(value);
        if (index > -1) {
            ConclusaoDerrameArticularDireito.splice(index, 1);
            setConclusaoDerrameArticularDireito((arr) => [...arr]);
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
            <TituloNomeExame titulo="Derrame articular direito" />

            <Box display="flex" flexWrap="wrap">

            </Box>

            <Stack>
                <Checkbox
                    isDisabled={disableAusente}
                    onChange={() => {
                        setAusenteCheckbox(!AusenteCheckbox);
                    }}
                >
                    Ausente
                </Checkbox>
                <Checkbox
                    isDisabled={disablePresente}
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
export default DerrameArticularDireito;
