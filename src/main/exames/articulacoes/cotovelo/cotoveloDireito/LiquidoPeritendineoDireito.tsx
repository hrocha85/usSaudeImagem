/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function LiquidoPeritendineoDireito(Disable) {
    const altura = "100%";
    const largura = "100%";


    const [fraseLiquidoPeritendineoDireito, setFraseLiquidoPeritendineoDireito] = useState<any>([]);

    const subExame = 'Cotovelo- Líquido Perintendineo direito'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseLiquidoPeritendineoDireito).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseLiquidoPeritendineoDireito
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseLiquidoPeritendineoDireito
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseLiquidoPeritendineoDireito]);

    const [disableAusente, setdisableAusente] = useState(false);
    const [disablePresente, setdisablePresente] = useState(false);

    const [AusenteCheckbox, setAusenteCheckbox] = useState(false);
    const [PresenteCheckbox, setPresenteCheckbox] = useState(false);



    const criaStringAusente = () => {
        var string = "Ausência de líquido peritendíneo.";
        AusenteCheckbox ? setFraseLiquidoPeritendineoDireito((arr) => [...arr, string]) : removeItemString(string);
    };


    useEffect(() => {
        criaStringAusente()
    }, [AusenteCheckbox])

    const criaStringPresente = () => {
        var string = "Presença de líquido peritendíneo.";
        PresenteCheckbox ? setFraseLiquidoPeritendineoDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringPresente()
    }, [PresenteCheckbox])

    const removeItemString = (value) => {
        var index = fraseLiquidoPeritendineoDireito.indexOf(value);
        if (index > -1) {
            fraseLiquidoPeritendineoDireito.splice(index, 1);
            setFraseLiquidoPeritendineoDireito((arr) => [...arr]);
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
            <TituloNomeExame titulo="Líquido peritendíneo direito" />

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
export default LiquidoPeritendineoDireito;
