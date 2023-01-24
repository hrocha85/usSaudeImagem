/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Radio, RadioGroup, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { CotoveloDireitoNormalContext } from "../../../../../context/CotoveloDireitoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";
import { Format_Laudo } from "../../../../component/function_format_laudo";

function DerrameArticularDireito() {
    const altura = "100%";
    const largura = "95%";

    let { CotoveloDireitoLaudoNormal } = useContext(CotoveloDireitoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)

    const [fraseDerrameArticularDireito, setFraseDerrameArticularDireito] = useState<any>([]);

    const subExame = 'Derrame articular direito'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseDerrameArticularDireito).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseDerrameArticularDireito
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseDerrameArticularDireito
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseDerrameArticularDireito]);

    const [disableAusente, setdisableAusente] = useState(false);
    const [disablePresente, setdisablePresente] = useState(false);

    const [AusenteCheckbox, setAusenteCheckbox] = useState(false);
    const [PresenteCheckbox, setPresenteCheckbox] = useState(false);

    const criaStringAusente = () => {
        var string = "FALTA";
        if (AusenteCheckbox) {
            setFraseDerrameArticularDireito((arr) => [...arr, string]);
        } else {
            removeItemString(string);
        }
    };

    useEffect(() => {
        criaStringAusente()
    }, [AusenteCheckbox])

    const criaStringPresente = () => {
        var string = "FALTA";
        if (PresenteCheckbox) {
            setFraseDerrameArticularDireito((arr) => [...arr, string]);
        } else {
            removeItemString(string);
        }
    };

    useEffect(() => {
        criaStringPresente()
    }, [PresenteCheckbox])

    const removeItemString = (value) => {
        var index = fraseDerrameArticularDireito.indexOf(value);
        if (index > -1) {
            fraseDerrameArticularDireito.splice(index, 1);
            setFraseDerrameArticularDireito((arr) => [...arr]);
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



    useEffect(() => {
        CotoveloDireitoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

    }, [CotoveloDireitoLaudoNormal])

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
                    isDisabled={disableTudo || disableAusente}
                    onChange={() => {
                        setAusenteCheckbox(!AusenteCheckbox);
                    }}
                >
                    Ausente
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo || disablePresente}
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
