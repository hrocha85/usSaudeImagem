/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function LiquidoPeritendineoEsquerdo({ Disable }) {
    const altura = "100%";
    const largura = "100%";

    const [fraseLiquidoPeritendineoEsquerdo, setFraseLiquidoPeritendineoEsquerdo] = useState<any>([]);

    const subExame = 'Líquido Perintendineo Esquerdo'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseLiquidoPeritendineoEsquerdo).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseLiquidoPeritendineoEsquerdo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseLiquidoPeritendineoEsquerdo
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseLiquidoPeritendineoEsquerdo]);

    const [disableAusente, setdisableAusente] = useState(false);
    const [disablePresente, setdisablePresente] = useState(false);

    const [AusenteCheckbox, setAusenteCheckbox] = useState(false);
    const [PresenteCheckbox, setPresenteCheckbox] = useState(false);



    const criaStringAusente = () => {
        var string = "Ausência de líquido peritendíneo.";
        AusenteCheckbox ? setFraseLiquidoPeritendineoEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringAusente()
    }, [AusenteCheckbox])

    const criaStringPresente = () => {
        var string = "Presença de líquido peritendíneo.";
        PresenteCheckbox ? setFraseLiquidoPeritendineoEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringPresente()
    }, [PresenteCheckbox])

    const removeItemString = (value) => {
        var index = fraseLiquidoPeritendineoEsquerdo.indexOf(value);
        if (index > -1) {
            fraseLiquidoPeritendineoEsquerdo.splice(index, 1);
            setFraseLiquidoPeritendineoEsquerdo((arr) => [...arr]);
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
            <TituloNomeExame titulo="Líquido peritendíneo Esquerdo" />

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
export default LiquidoPeritendineoEsquerdo;
