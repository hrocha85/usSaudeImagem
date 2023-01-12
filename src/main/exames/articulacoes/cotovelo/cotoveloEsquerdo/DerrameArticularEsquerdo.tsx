/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Radio, RadioGroup, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { CotoveloEsquerdoNormalContext } from "../../../../../context/CotoveloEsquerdoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function DerrameArticularEsquerdo() {
    const altura = "100%";
    const largura = "95%";

    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
    let { CotoveloEsquerdoLaudoNormal } = useContext(CotoveloEsquerdoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)



    const [disableAusente, setdisableAusente] = useState(false);
    const [disablePresente, setdisablePresente] = useState(false);

    const [AusenteCheckbox, setAusenteCheckbox] = useState(false);
    const [PresenteCheckbox, setPresenteCheckbox] = useState(false);



    const criaStringAusente = () => {
        var string = "FALTA";
        if (AusenteCheckbox) {
            setLaudoPrin((arr) => [...arr, string]);
            setAusenteCheckbox(false);
        } else {
            removeItemString(string);
        }
    };

    const criaStringPresente = () => {
        var string = "FALTA";
        if (PresenteCheckbox) {
            setLaudoPrin((arr) => [...arr, string]);
            setPresenteCheckbox(false);
        } else {
            removeItemString(string);
        }
    };

    const removeItemString = (value) => {
        var index = laudoPrin.indexOf(value);
        if (index > -1) {
            laudoPrin.splice(index, 1);
            setLaudoPrin((arr) => [...arr]);
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
        CotoveloEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

    }, [CotoveloEsquerdoLaudoNormal])

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
            <TituloNomeExame titulo="Derrame articular esquerdo" />

            <Box display="flex" flexWrap="wrap">

            </Box>

            <Stack>
                <Checkbox
                    isDisabled={disableTudo || disableAusente}
                    onChange={() => {
                        setAusenteCheckbox(!AusenteCheckbox);
                        criaStringAusente();
                    }}
                >
                    Ausente
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo || disablePresente}
                    onChange={() => {
                        setPresenteCheckbox(!PresenteCheckbox);
                        criaStringPresente();
                    }}
                >
                    Presente
                </Checkbox>

            </Stack >
        </Box >

    );
}
export default DerrameArticularEsquerdo;
